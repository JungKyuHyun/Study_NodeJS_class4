// 하나의 파일을 만들고 각 줄에는 공백으로 구분된 이름, 나이, 전화번호가 들어가도록 구성합니다.
// 파일의 내용을 한 줄씩 읽어 들이면서 각 정보를 공백으로 구분합니다.
// 구분된 정보 중에서 이름만 화면에 출력합니다.

var fs = require('fs'); // 파일관리 모듈 호출
var mfile = './mission_file.txt';  // 파일 경로
var marr = []; // 한줄씩 전체 담을 배열
var narr = []; // 한줄씩 이름 담을 배열

// var lineReader = require('line-reader');  이거써도 되는듯 나중에 해봐용
// lineReader.eachLine(mfile,function(line))




fs.readFile(mfile, function(err, data){
    
    //에러 나면 던지기!
    if(err) throw err;
    
    //    \n으로 한줄씩 배열에 담아짐
    marr = data.toString().split("\n");
    //console.log(data.toString().split("\n")[1]);  //배열확인용

    // 전체 파일  한줄씩 출력
    for(i in marr){
        console.log(marr[i]);
    }

    // 위아래 for문 조건 같음


    // 이름 한줄씩 출렫
    for(var i = 0 ; i < marr.length ; i++){

        // marr 배열에서 첫번째 공백으로 잘라내 배열에 담아줌
        narr.push(marr[i].split(" ", 1)); 

        console.log(narr[i]);
    }
});
