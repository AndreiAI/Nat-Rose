import glob

print str(float('38.62'))

for path in glob.glob('/mnt/e/Upwork/Backed up Elementary/Alex_back/Alex/Projects/Upwork/Nat Rose/*.css_temp'):
	#print(path)
	#readFile = open(path, 'r')
	writeFile = open(path.split('.')[0] + '.css', 'a')
	#writeBackUp = open(path.split('.')[0] + '.css_back3', 'a')
	with open(path) as readFile:
		for line in readFile:
			newLine = line
			"""
			if 'vh' in line:
				newLine = '' + line.split(line.split('vh')[0].split(' ')[len(line.split('vh')[0].split(' ')) - 1])[0]
				number = float(line.split('vh')[0].split(' ')[len(line.split('vh')[0].split(' ')) - 1]) * 0.5625
				newLine += str(number) + 'vw';
				newLine += line.split(line.split('vh')[0])[1].split('vh')[1];
				print line,
				print newLine
			"""
			writeFile.write(newLine)
			#writeBackUp.write(line)
	
	

