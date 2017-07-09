

#this simple code formats style.txt into an array that main.js reads
def toArrFormat(file):
	arr = []
	with open(file) as f:
		for line in f:
			if line[0] == ' ':
				fixedLine = '&' + line[1:]
			else:
				fixedLine = line
			arr.append(fixedLine)
	return arr

def main():
	print toArrFormat('style.txt')
main()