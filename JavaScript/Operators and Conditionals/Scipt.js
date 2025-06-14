// console.log("yogeeta");

// Arithmetic operatos
let a = 4;
let b = 3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
//post-increment
// console.log(++a);
//pre-increment

// console.log(a--);
// console.log(--a);

//assignment Operators
a +=10;
console.log(a);

a= a-2;
console.log(a);

// Comparison Operators
// only true or false answer
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(60<=30);

// Strict equality - value and datatype should be same
console.log(6==7);
console.log('5'=='7');
console.log(6==6);

// and loose equality - even if the datatype is not same, but the value is same
console.log(5==5);
console.log('5'==5);
console.log('5'=='7');

console.log(6===6);

//ternary operator
let age = 25;
let status1 = (age>18) ? 'i can vote' : 'I cannot vote'
console.log(status1);

// Logical Operator- to merge Two or more expression
// and &&- all condition should be tru
// or || - even if one is true answer would be true
// not ! - true ko false, false ko true

let ans = (true && true &&true)
console.log(ans);

let ans1 = (false | false || true)
console.log(ans1);

let ans2 = !(false)
console.log(ans2);

//Working with non-booleans
//falsy - undefined,null,0,false,Nan,''
//truthy - all u=which is not falsy


//short-circuiting
//in OR operator, agr use phle hi true mil gya toh wo aghe condition check hi nhi krega
console.log(false|| 7 || 13 || 18);

//bitwise operator
// AND,OR,NOT,<<,>>,XOR(^)

console.log(10>>1);
//(num/2^a)

console.log(10<<1);
//(num*2^a)


//CONDITIONALS OPERATORS
let Age = 13;
if(Age>=18){
    console.log("vote"); 
}
else{
    console.log("cannot vote");   
}

//If-else-if
let num = 5;
let Age1 = 14
if(num==1){
    console.log("A"); 
}
else if(num==2){
    console.log("B");  
}
else if(num==3){
    console.log("C");   
}
else if(num==4){
    console.log("D");   
}
else if(num==5){
    if(Age1>18){
        console.log("i can vote");
        
    }
    console.log("E");   
}
else{
    console.log("G");   
}

// Switch-Case
let number = 3;
switch(number){
    case 1: console.log("A");
    break;
    //to get out from code
    case 2: console.log("B");
    break;
    case 3: console.log("C");
    break;
    case 4: console.log("D");
    break;
    default: console.log("F");  
}













