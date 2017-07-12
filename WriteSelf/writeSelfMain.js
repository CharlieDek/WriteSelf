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
var styleTextArr = ['/**\n', '&* Oh hello there! My name is Charlie.\n', '&*\n', "&* I'd like to know your name too but I'm not sure how to do that right now.\n", '&*\n', '&* I did make this chill website that codes itself for you. Check it out!\n', '&*/ \n', '\n', 'span {\n', '& color: rgb(33, 238, 89);\n', '}\n', '\n', '&/*\n', "& * Let's slow down these changes.\n", '& */\n', '\n', '* {\n', '& -webkit-transition: all 1s;\n', '}\n', '\n', '&/* \n', '& * What needs changing?\n', '& */\n', '\n', 'html {\n', '& background-color: rgb(42, 48, 44);    \n', '& font-size: 85%;  \n', "& font-family: 'Overpass Mono', monospace;\n", '& color: rgb(239, 239, 239);  \n', '}\n', '\n', 'pre {\n', '& background: black;\t\n', '& overflow: auto;\n', '& max-height: 85%;  \n', '& padding: 15px 15px 25px;  \n', '& border: 1px solid rgb(150, 150, 150);\n', '& width: 47%;\n', '& white-space: pre-wrap;\n', '& outline: 0;\n', '}\n', '\n', '/*\n', "&* Now let's make the text box ~wiggly~ when you scroll \n", '&* over the text.\n', '&*/\n', '\n', 'pre:hover {\n', '\tborder-radius: 15%;\n', '}\n', '\n', '/*\n', '&* More colors! More COLORS! \n', '&*/\n', '\n', '.select {\n', '& color: rgb(71, 23, 246);\n', '}\n', '\n', '.value {\n', '& color: white;\n', '& font-size: 90%;\n', "& font-family: 'Overpass Mono', monospace;\n", '}\n', '\n', '.elem {\n', '& color: red;\n', '}\n', '\n', '.comment {\n', '& color: rgb(186, 186, 186);\n', '& font-style: italic;\n', '}\n', '\n', '\n', '/*\n', "&* That's kinda twilight-y huh.\n", '&*/\n', '\n', 'html {\n', '& background: red;  \n', '}\n', '\n', 'body {\n', '& background-image: url("twilight.jpg");\n', '}\n', '\n', '/*\n', '&* "The right thing isn\'t always real obvious. \n', '&* So good luck figuring that out." \n', '&*\n', '&* - Stephenie Meyer, Twilight \n', '&*\n', '&* Thanks for the design advice Steph.\n', '&* This is definitely not the right thing.\n', '&* \n', '&*/\n', '\n', 'html {\n', '& background: rgb(29, 39, 49);  \n', '}\n', '\n', 'body {\n', '& background-image: none;\n', '}\n', '\n', 'pre {\n', '& background: rgb(29, 39, 49);\n', '& max-height: 45%;\n', '}\n', '\n', '.select {\n', '& color: rgb(218, 117, 16);\n', '}\n', '\n', '.elem {\n', '& color: rgb(50, 156, 193);\n', '}\n', '\n', '.comment {\n', '& color: rgb(156, 156, 153);\n', '}\n', '\n', '.value {\n', '& color: rgb(217, 179, 16);\n', '}\n', '\n', '.pre {\n', '& left: 48%;\n', '}\n', '\n', 'body {\n', '&  -webkit-perspective: 1000px;\n', '}\n', '\n', '/* \n', "&* Charlie's website, produced by Lucasfilm.\n", '&*/\n', '&\n', 'pre {\n', '&  -webkit-transform: translateY(-10%) translateX(10%) rotateX(20deg);\n', '&  max-height: 90%;\n', '&  width: 75%;\n', '}\n', '\n', 'span {\n', '& font-size: 160%;\n', '}\n', '\n', '#speed {\n', '& font-size: 100%;\n', '}\n', '\n', '.comment {\n', '& color: rgb(217, 179, 16);\n', '}\n', '\n', '/*\n', '&* Once upon a time, in a galaxy far far away.\n', '&*\n', '&* It is a period of war. The style purists\n', '&* believe that oversized, slanted text is a\n', '&* design faux-pas.\n', '&*\n', '&* But a bold, opposing camp believes that design \n', '&* principles can be sacrificed in service of a bit\n', '&* as long as that bit is super funny and coherent.\n', '&*\n', '&* The battle rages on... \n', '&*\n', '&*/\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '/* \n', "&* Well that's the gist for today, I hope you\n", '&* enjoyed watching this website.\n', '&*\n', '&* Big thanks to Samuel Reed and Jake Albaugh\n', '&* for the idea to code a website like this.\n', '&* \n', '&* Find more about me at charlie.dektar.com!\n', '&*/\n', '\n', '.comment {\n', '& color: rgb(175, 38, 75);\n', '}\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '_______________________________\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88_____\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\n', '______________________________\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88____\xe2\x96\x88\xe2\x96\x88_\xe2\x96\x88\xe2\x96\x88_____\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\n', '_____________________________\xe2\x96\x88\xe2\x96\x88________\xe2\x96\x88\xe2\x96\x88__________\xe2\x96\x88\xe2\x96\x88\n', '____________________________\xe2\x96\x88\xe2\x96\x88__________\xe2\x96\x88____________\xe2\x96\x88\xe2\x96\x88\n', '________\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88____________\xe2\x96\x88\xe2\x96\x88________________________\xe2\x96\x88\xe2\x96\x88\n', '_____\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88________\xe2\x96\x88\xe2\x96\x88________________________\xe2\x96\x88\xe2\x96\x88\n', '____\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88_______\xe2\x96\x88\xe2\x96\x88_______________________\xe2\x96\x88\xe2\x96\x88\n', '___\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88______\xe2\x96\x88\xe2\x96\x88______________________\xe2\x96\x88\xe2\x96\x88\n', '___\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88______\xe2\x96\x88\xe2\x96\x88___________________\xe2\x96\x88\xe2\x96\x88\n', '___\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88_______\xe2\x96\x88\xe2\x96\x88_________________\xe2\x96\x88\xe2\x96\x88\n', '____\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88_______\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88_______________\xe2\x96\x88\xe2\x96\x88\n', '_______\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88_______\xe2\x96\x88\xe2\x96\x88__\xe2\x96\x88\xe2\x96\x88____________\xe2\x96\x88\xe2\x96\x88\n', '___________\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88______\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88___\xe2\x96\x88\xe2\x96\x88________\xe2\x96\x88\xe2\x96\x88\n', '____\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88__\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88_____\xe2\x96\x88\xe2\x96\x88_____\xe2\x96\x88\xe2\x96\x88\n', '__\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88________\xe2\x96\x88\xe2\x96\x88__\xe2\x96\x88\xe2\x96\x88\n', '_\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88_____________\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\n', '\xe2\x96\x88\xe2\x96\x88_\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88_\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88_______________\xe2\x96\x88\n', '\xe2\x96\x88__\xe2\x96\x88_\xe2\x96\x88\xe2\x96\x88__\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\n', '_____\xe2\x96\x88__\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\n', '_______\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\n', '_______\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\n', '_______\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\n', '________\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\n', '_______\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88__\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\n', '______\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88_____\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\n', '____\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88________\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\xe2\x96\x88\n', '\n'];

//how fast to type
var interval = 30;
//how much longer to wait for periods
var periodStopMultiply = 20;

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

//given the full array of lines to write, writes them out 
//using charbychar helper function
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


function adjustSpeed(newSpeed){
	console.log(newSpeed);
	interval = 15 + ((100 - newSpeed) / 2);
}

//starts the writing
window.addEventListener('load', function(){
	$('head').append('<style id="style-text"></style>');
	$('body').append('<input type="range" min="25" max="100" value="62" step="1" oninput="adjustSpeed(this.value)"/>');	
	$('body').append('<span id="speed">Speed</span>');
	$('body').append('<pre id="full-text"></pre>');	

	writeWords(styleTextArr, 0, interval, '', '');
});



	
