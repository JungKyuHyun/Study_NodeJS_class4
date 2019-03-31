//01. 파일의 내용을 한줄씩 읽어들여 화면에 출력하는 기능을 만들어 보세요.
//Hint!
//- 하나의 파일을 만들고 각 줄에는 공백으로 구분된 이름,나이,전화번호가 들어가도록 구성합니다.
//- 파일의 내용을 한줄씩 읽어들이면서 각 정보를 공백으로 구분합니다.
//- 구분된 정보 중에서 이름만 화면에 출력합니다.



var fs = require('fs');
var person = [{name:'강아지',age:'1',phonenumber:'1234'},{name:'고양이',age:'2',phonenumber:'5678'}];
var str = JSON.stringify(person);

//var str = person.toString('utf8');
//console.log(str);


//for(var i =0; i<2; i++){
//    fs.writeFile('./Mission01.txt', person[i].name+' '+person[i].age+' '+person[i].phonenumber, function(err) {
//    if(err) {
//        console.log('Error' + err);
//    }
//});
//};

for(var i =0; i<2; i++){
fs.open('./Mission01.txt','a+',function(err,fd){
    if(err) throw err;

    fs.write(fd,person[i].name+' '+person[i].age+' '+person[i].phonenumber,null,'utf8',function(err,written,buffer){
        if(err) throw err;
        
        fs.close(fd,function(){
            console.log('완료');
        });
    });
    
});
};


/*

fs.open('./Mission01.txt','a+',function(err,fd){
    if(err) throw err;

    fs.write(fd,str,null,'utf8',function(err,written,buffer){
        if(err) throw err;
        
        fs.close(fd,function(){
            console.log('완료');
        });
    });
    
});

var file = './Mission01.txt';
fs.readFile(file,'utf8',function(err,data){
        if(err){
                console.log('에러!');
        }
        var strnanu = data.replace(',',' ');
        var arrayNum = strnanu.length;
        if(strnanu.length >0 ) arrayNum = strnanu.length - 1;

        console.log('Line Num : ' + arrayNum);

        for(var i=0;i<arrayNum; i++){
           var one = JSON.parse(strnanu[i]);
           console.log('print json['+i+']=> '+JSON.stringify(one));}
});

*/
