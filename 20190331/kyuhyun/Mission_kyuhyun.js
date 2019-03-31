open();
read();

function open(){
    var fs = require("fs");

    var inname = "./read.txt";
    fs.open("./read.txt", "a+", function(err, fd){
        if(err) throw err;
    
        var contents = new Array();
        for(var i=0; i<5; i++){
            contents.push(("정규현"+ " " + (i+20) + " " + "010-3768-920"+i).toString());
        }
        var buf = new Buffer.from(contents[0]+"\n");
        fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
            if(err) throw err;
            fs.close(fd, function(){
                console.log("파일 열고 데이터 쓰고 파일 닫기 완료.");
            });
        });
    });
};

function read(){
    var fs = require('fs');
    var readline = require('readline');

    var infile = fs.createReadStream("./read.txt", {flags:"r"});
    var reader = readline.createInterface(infile);

    reader.on("line", function(data){

        var token = data.split(" ");
        console.log(token[0]);
    });

};