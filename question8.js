var readlinesync = require('readline-sync');
let age = parseInt(readlinesync.question('Enter your age '));
 if(age>=0 && age<=12){
    console.log("You are a child");
}
else if (age>=13 && age<=19){
    console.log("You are a teenager");
}
else if (age>=20 && age<=59){
    console.log("You are an adult");
}
else if(age>=60 && age<=100) {
    console.log("You are a senior citizen");
}
else{
   console.log("Invalid input");    
}