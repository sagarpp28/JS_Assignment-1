var readlinesync = require('readline-sync');
let grade = parseInt(readlinesync.question('Enter your mark '));
if(grade>=60){
console.log("you passed");
}
else{
    console.log("Sorry, you failed");
}