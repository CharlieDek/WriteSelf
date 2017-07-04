//constants to determine what sort of text we're writing
var styleWriting = false;
var figureWriting = false;

var openBrack = '{';
var closeBrack = '}';
var openValue = ':';
var closeValue = ';';
var target = '';
var targetBuff = '';
var selectClass = 'select"';
var elemClass = 'elem"';
var commentClass = 'comment"';
var classStart = ' class="'
var spanEnd = '</span>'

//the array with all the text to type and enter into style
var styleTextArr = ['/**\n', '&* Oh hello there! My name is Charlie.\n', '&*\n', "&* I'd like to know your name too but I'm not sure how to do that right now.\n", '&*\n', '&* I did make this chill website that codes itself for you. Check it out!\n', '&*/ \n', '\n', 'span{\n', '& color: rgb(33, 238, 89);\n', '}\n', '\n', '&/*\n', "& * Let's slow down these changes.\n", '& */\n', '\n', '* {\n', '& -webkit-transition: all 1s;\n', '}\n', '\n', 'html{\n', '& background-color: rgb(42, 48, 44);\n', '}\n', '\n', 'pre {\n', '& background: black;\t\n', '& overflow: auto;\n', '& padding: 15px 15px 25px;  \n', '& border: 1px solid rgb(150, 150, 150);\n', '& max-height: 90%;\n', '& width: 47%;\n', '& white-space: pre-wrap;\n', '& outline: 0;\n', '}\n', '\n', 'pre:hover{\n', '\tborder-radius: 25%;\n', '}\n', '\n', '/*\n', '&* Try putting your mouse over this text!\n', '&*/\n', '\n', '/**\n', '&* How about a new font.\n', '&*/\n', '\n', 'span{\n', '& font-size: 85%;  \n', "& font-family: 'Overpass Mono', monospace;\n", '& color: #EFEFEF;\n', '}\n', '\n', '/*\n', '&* I know what will make this website amazing. More colors!\n', '&*/\n', '\n', '.select{\n', '& color: #4717f6;\n', '}\n', '\n', '.value{\n', '& color: white;\n', '& font-size: 90%;\n', "& font-family: 'Overpass Mono', monospace;\n", '}\n', '\n', '.elem{\n', '& color: red;\n', '}\n', '\n', '.comment{\n', '& color: #bababa;\n', '& font-style: italic;\n', '}\n', '\n', '\n', '/*\n', "&* That's kinda twilight-y huh.\n", '&*/\n', '\n', 'html{\n', '& background: red;  \n', '}\n', '\n', 'body{\n', '& background-image: url("twilight.jpg");\n', '}\n', '\n', '/*\n', '&* "The right thing isn\'t always real obvious. \n', '&* So good luck figuring that out." \n', '&*\n', '&* - Stephenie Meyer, Twilight \n', '&*\n', '&* Thanks for the design advice Steph.\n', '&* This is definitely not the right thing.\n', '&* \n', '&*/\n', '\n', 'html{\n', '& background: #1D2731;  \n', '}\n', '\n', 'body{\n', '& background-image: none;\n', '}\n', '\n', 'pre{\n', '& background: #1D2731;\n', '& max-height: 45%;\n', '}\n', '\n', '.select{\n', '& color: #DA7510;\n', '}\n', '\n', '.elem{\n', '& color: #329CC1;\n', '}\n', '\n', '.comment{\n', '& color: #9c9c99;\n', '}\n', '\n', '.value{\n', '& color: #D9B310;\n', '}\n', '\n', '.pre{\n', '& left: 48%;\n', '}\n', '\n', 'pre {\n', '&  -webkit-transform: translateX(95%);\n', '&  position: absolute;\n', '&}\n', '&\n', '&body {\n', '&  -webkit-perspective: 1000px;\n', '&}\n', '&\n', '&pre {\n', '&  -webkit-transform: translateX(98.5%) rotateY(-50deg);\n', '&  -webkit-transform-origin: right;\n', '&}\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n'];

//how fast to type
var interval = 1;
//how much longer to wait for periods
var periodStopMultiply = 10;

//putting proper tag on values
function colonCase(char, target){
	targetNum = target.substring(1, target.length);
	$(target).append('<span class="value" id="val' + targetNum  +'"></span>')
	newTarg = '#val' + targetNum;
	targetBuff = target;
	return newTarg;
}

//given a string types that string character by character
function charByChar(text, index, target, isComment){	
	var periodAddition = 0;
	if (index < text.length){
		currChar = text[index];
		if (currChar == '&'){
			currChar = '&nbsp;';
		}
		if (currChar == openValue){ 
			target = colonCase(currChar, target);
		}
		$(target).append(currChar);

		if (currChar == closeValue){
			target = targetBuff;
		}
		if (isComment && (currChar == '.' || currChar == '!')){
			periodAddition = interval * periodStopMultiply;
		}
		index++;
	}
		totalInterval = interval + periodAddition;
		setTimeout(function(){charByChar(text, index, target, isComment);}, totalInterval);
		multiplier = 1;
}

//figures out what sort of class a line of text is
function getClass(line){
	if (line.includes(openBrack) || line.includes(closeBrack)){
		return (classStart + selectClass);
	} 
	if (line.includes(closeValue)){
		return (classStart + elemClass);
	} else {
		return (classStart + commentClass);
	}
}

//given the full array of lines to write, writes them out using charbychar helper function
function writeWords(styleTextArr, i, currStyle, fullStyle){
	var $pre = $('pre');
	$pre[0].scrollTop = $pre[0].scrollHeight;

	if (i < styleTextArr.length){
		var curr = styleTextArr[i];

		if (curr.includes(closeBrack)){
			styleWriting = false;
			//changing the actual style 
			$('#style-text').append(fullStyle);			
			currStyle = '';
		}	

		//append to style if we're on a 3rd+ line of style stuff
		if (styleWriting) {
			newCurr = curr.replace('&','');
			if (fullStyle != '' && !(curr.includes(closeBrack))) {
				$('#style-text').append(fullStyle);			
			}
			fullStyle = currStyle + newCurr + closeBrack;
		}		

		if (curr.includes(openBrack)){
			styleWriting = true;
			currStyle = curr;
		}
		target = '#' + i	
		currClass = getClass(curr);
		$('#full-text').append('<span id = ' + i + currClass + ' >&nbsp</span>');
		charByChar(curr, 0, target, currClass.includes(commentClass));
		i++;	

	} else{
		curr = '';
		return (0);
	}
		//interval change here
		totalInterval = calcInterval(curr, currClass);
		setTimeout(function(){writeWords(styleTextArr, i, currStyle, fullStyle);}, totalInterval);
}

//calculates how long it will take to write a certain line
function calcInterval(text, currClass){
	periodAddition = 0;
	if (currClass.includes(commentClass)){
	periodAddition = text.split('.').length - 1 + text.split('!').length - 1;
}
	return ((text.length + periodAddition) * interval + (periodAddition * periodStopMultiply * interval));
}

//starts the writing
window.addEventListener('load', function(){
	$('head').append('<style id="style-text"></style>');
	$('body').append('<pre id="full-text"></pre>');	
	writeWords(styleTextArr, 0, interval, '', '');

});



	
