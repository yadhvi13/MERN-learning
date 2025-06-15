// console.log("yogeeta");

//function defination
function sayMyName(){
    console.log('yogeeta chhimwal');  
}
//function call
sayMyName();

//function without parameters
function printCounting(){
    for(let i=1; i<10;i++){
        console.log(i);     
    }
}
printCounting();


// functions with parameters
function printNum(num){
    //num is the parameter of the function
    console.log("printing number:", num); 
}
printNum(5);
//value passed inside function is the argument.


//Multiple parameters
function getAvg(num1,num2){
    let avg = (num1 + num2)/2;
    console.log("Average of Two number is:",avg);  
}
getAvg(3,3);


//function return
function getSum(a,b,c){
    let sum = a +b + c;
    return sum;
}
let answer = getSum(1,2,3);
console.log("SUM of the numbers is:",answer);


function getMyName(istName , endName){
    let fullName = istName +" " + endName;
    return fullName;
    //after return , agr main kuch likhti hu toh wo run nhi hogi
}
let fullName = getMyName("Yogeeta","chhimwal");
console.log("Fullname is:",fullName);


//function in varibale
const solve = function(a,b){
    return a*b;
}
console.log(solve(2,3));

//function in expresssion
//square of number
let squareNumber = function(num){
    let ans = num*num;
    return ans;
}
console.log(squareNumber(2));


//Arrow Function
let getExpo = (x,y)=>{
    let ans = x**y;
    return ans;
}
console.log(getExpo(2,10));
