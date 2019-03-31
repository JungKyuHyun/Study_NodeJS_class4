/*
1. 하나의 파일을 만들고 각 줄에는 공백으로 구분된 이름, 나이, 전화번호가 들어가도록 구성합니다.
2. 파일의 내용을 한 줄 씩 읽어 들이면서 각 정보를 공백으로 구분합니다.
3. 구분된 정보 중에서 이름만 화면에 출력합니다.
*/

var fs = require('fs');

var Info = [{name:'정규현', age:20, phoneNum:'010'}, {name:'복다빈', age:21, phoneNum:'011'}];
Info.push({name:'신선하', age:22, phoneNum:'012'});




// var i=0;
// for(i=0; i<Info.length; i++){
//     var pushInfo = (Info[i].name +Info[i].age +Info[i].phoneNum);
// };

//파일에 데이터를 씁니다
fs.open('./output.txt', 'w', function(err, fd)  {
    if(err) throw err;

    var buf = new Buffer(Info);
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer)   {
        if(err) throw err;

        console.log(err, written, buffer);

        fs.close(fd, function() {
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료');
        });
    });
});


