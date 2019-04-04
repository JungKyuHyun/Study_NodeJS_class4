/*
dir(object) : 자바스크립트 객체의 속성들을 출력 > 객체의 속성을 확인할 때 자주 씀
time(id) : 실행시간을 측정하기위한 시작시간 기록.
timeEnd(id) : 실행시간을 측정하기위한 끝시간 기록.

__filename : 실행한 파일의 이름을 출력. (파일까지의 전체 path)
__dirname : 실행한 파일이 들어있는 폴더를 출력.(폴더의 전체 Path)

argv : 프로세스를 실행할 때 전달되는 파라미터(매개변수) 정보 (ex : 파일패스 or 노드.exe 패스)
env : 환경변수 정보 *(OS환경변수)
exit() : 프로세스를 종료시키는 메서드


*/

var Person = {age : 27 , name : "복다빈"};
console.log(Person);
console.dir(Person);

console.log("현재 실행한 파일의 Path : %s", __filename);
console.log("현재 실행한 파일의 폴더Path : %s", __dirname);

console.log(process.argv[2]);

exports.add = function(a,b){
    return a+b;
}
var path = require('path');
console.log(path);

var Person = {};
Person.age=27;
Person.name="복다빈";

console.log(Person.age);
console.log(Person.name);

var add =function(a,b){
    return a+b;
}
Person.add = add;
console.log(Person.add(10,20));

var Users =[{name:'장지훈', age:27},{name:'김동현',age:25}];
Users.push({name:'정규현', age:28});
Users.pop(Users);
Users.unshift({name:'복다빈',age:27});
console.log(Users.length);
console.log(Users[0].name);
console.log(Users[1].name);
Users.shift(Users);
Users.splice(0, 1);
for(var i = 0 ; i < Users.length ; i++){
    console.log(Users[i],i);
}

function add(a,b,callback){
    var result = a+b;
    callback(result);
}
add(10,20,function(result){
    console.log('콜백함수 호출. %d',result);
});

var fs = require('fs');

var data = fs.writeFile('text.txt', '복다빈스', function(err){
    if(err){
        console.log('에러');
    }
    console.log('쓰기완료.');

})

open('text.txt','w',function(err,fd){
    if(err) throw err;
    var buf = new ArrayBuffer('안녕!\n');
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
        if(err) throw err;
        console.log(err, written, buffer);
    fs.close(fd,function(){
        console.log('닫기');
        });
    });
});