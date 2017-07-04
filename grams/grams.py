
import sys
import time
import random

puncts = ['?', '!', '.']

def getFile(filename):
	with open(filename) as f:
		return f.read()

#ideal # of grams for accuracy?

def getGrams(text, nGrams):

	gramsDict = dict()
	textSpl = text.split()

	for i in xrange(nGrams - 1, len(textSpl)):
		#i is end of window, i - (ngrams - 1) is start
		startWin = i - (nGrams - 1)
		currWin = (' ').join(textSpl[startWin:i + 1])

		#if at end then wrap around
		if i == len(textSpl) -1:
			end = textSpl[0]
		else:
			end = textSpl[i + 1]

		#todo: not set, looks better?
		#if we have this window then add to list
		if currWin in gramsDict:
			gramsDict[currWin].add(end)
		else:
			endSet = set()
			endSet.add(end)
			gramsDict[currWin] = endSet

	return gramsDict


#returns capitalized start in list form
def findStart(nGrams, gramsDict):
	for key in gramsDict.keys():
		if key[0].isupper():
			return key.split()
	return gramsDict.keys()[0]


#TODO every couple of sentences indent and shit for readability
def genText(nGrams, length, gramsDict):
	fullTextList = findStart(nGrams, gramsDict)
	numSentences = 0
	i = 0
	while numSentences < length:
		currWin = (' ').join(fullTextList[i:i + nGrams])
		currSet = gramsDict[currWin]
		sLen = len(currSet)
		currList = list(currSet)
		index = int((sLen - 1) * random.random())
		word = currList[index]
		if word[len(word) - 1] in puncts:
			numSentences += 1
		fullTextList.append(word)
		i += 1
	return (' ').join(fullTextList)

def paragraphPrint(text):
	newCharacters = []
	i = 0
	while i < len(text) - 1:
		newCharacters.append(text[i])
		print i
		if text[i] in puncts:
			if random.random() < .15:
				newCharacters.append(' \n\n   ')
		i += 1

	print ('').join(newCharacters)

def main():
	filename = 'x'
	numGrams = 4
	lToGenerate = 30
	if numGrams < 2:
		print "FUCK YOU ASSHOLE"
	fullFile = getFile('twilight.txt')
	if len(fullFile) < 500:
		print 'TOO SHORT DICKWEED'
	#takes full file of text and makes it into numGrams type grams
	gramsDict = getGrams(fullFile, numGrams -1)
	generatedText = genText(numGrams, lToGenerate, gramsDict)
	paragraphPrint(generatedText)
	return 0



main()









