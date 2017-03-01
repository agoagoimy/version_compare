/**
用途:比较两个版本号的大小
参数:v1,v2
	v1:string
	v2:string
返回:
	 1 	: version1 > version2
	-1	: version1 < version2
	 0	: version1 = version2
用例: versionCompare("v1.1.1.1", "v2.2.21.2")
*/
function versionCompare(v1, v2){

	//判断参数v1和v2的类型，如果不是string类型，抛出一个错误
	if(typeof v1 != 'string' | v1.constructor!=String | typeof v2 != 'string' | v2.constructor!=String){
		throw 'input format is not standrad'
	}

	// 用正则表达式匹配版本号的格式
	var reg = new RegExp("^([a-zA-Z]*[0-9]+)(\\.[0-9]+){0,3}$")

	if ( reg.test(v1)&&reg.test(v2)) {
		var arrayChars1 = v1.split('');
		var arrayChars2 = v2.split('');
		var charsInNeed1  = [];
		var charsInNeed2  = [];
		var need  = ['1','2','3','4','5','6','7','8','9','0','.'];
		for(char of arrayChars1){
			if(isInArray(char, need)){
				charsInNeed1.push(char)
			}
		}
		for(char of arrayChars2){
			if(isInArray(char, need)){
				charsInNeed2.push(char)
			}
		}
		var ver1 = charsInNeed1.join('');
		var ver2 = charsInNeed2.join('');

		var verPart1 = ver1.split('\.');
		var verPart2 = ver2.split('\.');


		for(k = verPart1.length; k<4; k++){
			verPart1.push('0')
		}
		for(k = verPart2.length; k<4; k++){
			verPart2.push('0')
		}

		for (j = 0; j<4; j++){
			if (parseInt(verPart1[j]) > parseInt(verPart2[j])) {
				return 1;
			}else if (parseInt(verPart1[j]) == parseInt(verPart2[j])) {
				continue;
			}else {
				return -1;
			}
		}
		return 0;
	}else {
		throw 'input format is not standrad'
	}
}


function isInArray(char, array){

	for (element of array){
		if (element == char){
			return true;
		}
	}
	return false;
}

// main
var examples = [
	["v1.123.1.123.1", "v1.1"],
	["1", "2"],
	["v1", "v2"],
	["V1", "v2.1"],
	["v12.34.5", "v12.334.5"],
	["v1.123.1.123", "v1.123.2.123"],
	[2,3]
]
//test1
for (example of examples){
	try {
		console.log(example[0] + " compare " + example[1] + " return:" + versionCompare(example[0], example[1]))
	}
	catch(e) {
		console.log(e);
	}
}

//test2
try{
	var a = 1
	console.log( a + " compare " + a + " return : " + versionCompare(a, a))
}
catch(err){
	console.log(err)
}