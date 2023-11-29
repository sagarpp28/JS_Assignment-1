var readlineSync = require('readline-sync');
let number=parseInt(readlineSync.question('Enter a number '));
if(number>0){
    console.log("The number is positive");
}else if(number<0){
    console.log("The number is negative");
}else{
    console.log("You have entered zero");
}