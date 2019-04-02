var fs=require('fs');
var infile = fs.createReadStream('ex01.js',{flags:'r'});
var outfile = fs.createWriteStream('./output.js',{flags:'w'});




function user(name, age, phoneNum){
    this.name=name;
    this.age=age;
    this.phoneNum=phoneNum;
}

user.prototype.userInfo = function(name){
    console.log('%s',name);
}
var user1 = new user('복다빈',27,'010-9510-0730');
var user2 = new user('김동현',25,'010-1111-2222');
var user3 = new user('장지훈',27,'010-3333-4444');

var Users = [{user1}, {user2}, {user3}];

for(var i =0 ; i < Users.length ; i++){
    console.log(Users[i]);
}
infile.on('data',function(data){
    console.log('읽어들인 데이터', data);    
})
infile.on('end',function(){
    console.log('파일 읽기 종료');
    outfile.end(function(){
        console.log('파일 쓰기 종료');
    });
});