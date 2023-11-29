var readlineSync = require('readline-sync');
let age=parseInt(readlineSync.question('Please enter your age '));
if(age>=18){
    console.log("You are eligible to vote")
}else{
    console.log("you are not eligble to vote")
}