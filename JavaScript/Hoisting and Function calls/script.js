function sayMyName(finalName){
    console.log(finalName);   

sayMyName("yogeeta");

// function sayMyName(finalName){
//     console.log(finalName);   
}

//jaha pe function apne current scopus ke andar top pe shift ho jaye

// var age- ye aise declare ho jayegi

console.log(age);
var age = 25;
// console.log(age);

//using let and const keyword

// console.log(age1); - it will throw an error in case of let,if we try to print it before var dec.
//intialise ke baad hi print ho skta hai uske phle nhi
let age1 = 25;
console.log(age1);

const age2 = 24;
console.log(age2);
//same again in case of const it will throw refernce error


//USING function expression
// sayHello();
// let sayHello = function(){
//     console.log("hello");
    
// }
// in that case also, it will throw ReferenceError


//class hoisting - in that case also it will throw reference error

// const object1 = new Human();
// class Human{
// }

// let greet = function(){
//     console.log("greetings");
    
// }
// greet();



// function greetMe(greet, fullName){
//     console.log("hello ",fullName);
//     greet();
    
// }
// function greet(){
//     console.log("greetings of day");  
// }
// greetMe(greet,"yogeeta");



// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// let ans = solve(5);
// let finalans = ans(10);
// console.log(finalans);


// const arr = [
//     function(a,b){
//         return a +b;
//     },
//     function(a,b){
//         return a -b;
//     },
//     function(a,b){
//         return a *b;
//     },
// ];
// let first = arr[0];
// let answer = first(5,10);
// console.log(answer);

// let second = arr[1];
// let answer1 = second(5,10);
// console.log(answer1);


// let third = arr[2];
// let answer2 = third(5,10);
// console.log(answer2);


// let object1={
//     age:24,
//     wt:78,
//     ht:180,
//     greet:()=>{
//         console.log("hello");        
//     }
// }
// console.log(object1.age);
// object1.greet();

let greet = function(){
    console.log("heyyyyy"); 
}
greet();

