


function user(name,age,phoneNum) {
    this.name = name;
    this.age = age;
    this.phoneNum = phoneNum;

};

//var Users = [{user1}, {user2}, {user3}];
var Users = [new user('김동현',25,'010-1111-2222'),
             new user('장지훈',27,'010-3333-4444'),
             new user('복다빈',27,'010-9510-0730')];



var fs=require('fs');
fs.writeFile('./output.txt',Users[0].name+" "+Users[0].age+" "+Users[0].phoneNum+"\n"+
                            Users[1].name+" "+Users[1].age+" "+Users[1].phoneNum+"\n"+
                            Users[2].name+" "+Users[2].age+" "+Users[2].phoneNum
                            ,function(err){
    if(err) console.log(err);
});


fs.readFile('./output.txt','utf8',function(err,data){
    if(err) throw err;
    var UsersInfo = []; 
    UsersInfo = data.toString().split("\n");
    for(i in UsersInfo){
        console.log(UsersInfo[i].split(" ",1));
    }
});