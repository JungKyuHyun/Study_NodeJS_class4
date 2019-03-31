/*jslint devel: true */
/*eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/
//파일의 내용을 읽어들여 화면에 출력하는 기능을 만들어보세요.
//하나의 파일을 만들고 각 줄에는 공백으로 구분된 이름, 나이 전화번호가 들어가게 합니다
//파일의 내용을 한 줄씩 읽어 들이면서 각 정보를 공백으로 구분합니다.
//구분된 정보 중에서 이름만 화면에 출력합니다.
var fs = require('fs'); //파일 모듈

var Users = [{name : '소녀시대', age : 22, number : '2222'},{name : '걸스데이', age : 20, number : '2222'}];
console.log(Users.length);

//var str = JSON.stringify(Users) + '\n'

for(var i =0; i<2; i++){
	console.log('이름'+ i+'번'+': %s', Users[i].name);
}

 fs.writeFile('./output.txt', '이름 : ' + Users[i].name+
                                    ' 나이 : ' + Users[i].age+
                                    ' 전화번호 : ' + Users[i].number + '\r\n', function(err) {
    if(err) {
        console.log('Error' + err);
    }
});










    

