

//global scope -- kisi bbi coding syntax ke andar nhi hai
// global scope agr koi variable declaee hoga toh wo khi bhi use ho skta hai.
// const age = 15;
// {
//     console.log(age);
// }
// if(true){
//     console.log(age); 
// }
// for(let i=0;i<2;i++){
//     console.log(age);
    
// }
// function sayHello(){
//     console.log("hello ",age);
// }
// sayHello();


//function scoping - curly braces ke andar hi hum acess kr skte hai only
function sayHello(){
    var Fullname = "kyuuu";
    console.log("hello bhaii log", Fullname);  
}
// console.log(Fullname);  -- ye yaha error dega
sayHello();



//block scope
console.log(height);
//yha krne par ye block se bahar hai isliye bss variable declare hota hai jaisa humepta hai, intiliase nhi hota, isliye iska answer bahar undefined aaya hai

{
    var height = 180;
    //we know that, var doesnt run in block scope, isliye  hum ise khi bi use kr skte hai
}
console.log(height);

//let and const
{
    let age = 10;
    console.log(age);
}
// console.log(age);
//let and const block scope hote hai, isliye agr ye bahar jayega toh error dega



//temporal deadzone

// console.log(marks);
let marks = 400;
console.log(marks);
