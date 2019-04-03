function user(name,age,phoneNum) {
    this.name = name;
    this.age = age;
    this.phoneNum = phoneNum;

};

//var Users = [{user1}, {user2}, {user3}];
var users = [new user('김동현',25,'010-1111-2222'),
             new user('장지훈',27,'010-3333-4444'),
             new user('복다빈',27,'010-9510-0730')];


function getUserInfo(users){
    if (users && users.length <= 0) {
        return '';
    }

    var result = '';
    for (var i = 0 ; i < users.length ; i++) {
        result += users[i].name + ' ' + users[i].age + ' ' + users[i].phoneNum ;
        if( i !== users.length-1 ){
            result += '\n';
        }
    }

    return result;
}

var fs=require('fs');
fs.writeFile('./output.txt', getUserInfo(users), function(err){
    if(err) console.log(err);
});


fs.readFile('./output.txt','utf8',function(err,data){
    if(err) throw err;
    var UsersInfo = []; 
    usersInfo = data.toString().split("\n");
    for(i in usersInfo){
        console.log(usersInfo[i].split(" ",1));
    }
});