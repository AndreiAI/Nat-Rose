import glob

for path in glob.glob('/home/alex/Alex/Projects/Upwork/Nat Rose/*.css_temp'):
	writeFile = open(path.split('_temp')[0], 'w')
	with open(path) as readFile:
		for line in readFile:			
			writeFile.write(line)
	
	

