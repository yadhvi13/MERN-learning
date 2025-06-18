// let obj ={
//     name:"yogeeta",
//     age: 25,
//     weight: "5ft 2inch",
//     greet : function(){
//         console.log("hello ji");
        
//     }
// }
// console.log(obj);
// obj.greet();
// console.log(typeof(obj));

// let obj2 = obj;
//shallow copy

//arrays
// let arr = [1,2,3,4,5]
// console.log(arr[0]);
// console.log(arr);
// console.log(typeof(arr));


//Array constructor
// let brr = new Array('yogeeta',1,true);
// brr.push('himmu');
// // brr.pop();
// brr.shift();
// brr.unshift('yogeeta chhimwal');
// brr.push(20);
// brr.push(40);
// brr.slice(2,4);

// brr.splice(1,0,'kunal')
// console.log(brr.splice(1,0,'kunal'));

// console.log(brr.splice);

// console.log(brr.slice(2,4));


//Map
let arr = [10,20,30];

// let ansArray = arr.map((number)=>{
//     return number*number;
// })
// console.log(ansArray);

// arr.map((number)=>{
//     console.log(number+1);   
// })

// arr.map((number,index)=>{
//     console.log(number);
//     console.log(index);
       
// })

//Filter - 
// let arr3 = [1,2,3,4,10,20,30,40];
// let evenArray = arr3.filter((number)=>{
//     return number%2==0;
//     // if(number%2==0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // } 
// });
//  console.log(evenArray);

// let arr3 = [1,2,'love',null,'kunal'];
// let ans = arr3.filter((value)=>{
//     if(typeof(value)== 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans);


//Reduce - acc,curr
// let ARR = [10,20,30,40];
// let sum = ARR.reduce((acc,curr)=>{
//      return acc + curr;
// },10)
// console.log(sum);

//ye 0 value acc ki hai


//sort
//in descending order
// let array1 = [9,6,8,2,4,5,1,3];
// array1.sort((a, b) => b - a);
// console.log(array1);

//in ascending order
// let array2 = [9,6,8,2,4,5,1,3];
// array2.sort();
// console.log(array2);

let array2 = [9,6,8,2,4,5,1,3];
console.log(array2.indexOf(4));

//for-each - to traverse each element of array
let array1 = [10,20,30];
let length = array1.length;
console.log("length: ", array1);


array1.forEach((value,index)=>{
    console.log("number: ",value, "Index: ",index);    
})

//for-in - enumerable properties(OBJECT) par iterate kr skte hai
let obj ={
    name:"yogeeta",
    age: 25,
    weight: "5ft 2inch",
    greet : function(){
        console.log("hello ji");
        
    }
};
for(let key in obj){
    console.log(key,":",obj[key]);  
}

//FOR-OF - iterable objects pe iterates (arrays,string)
let arrayN  = [10,20,30,40]
for(let value of arrayN){
    console.log(value);
    
}

let fullName = "chhimwal";
for(let value of fullName){
    console.log(value);
    
}

//Arrays with functions
let arrY = [10,20,30,40,50];
function getSum(arrY){
    let length = arrY.length;
    let sum = 0;
    for(let index=0; index<length;index++){
        sum = sum + arrY[index];
    }
    return sum;
}
let totalsum = getSum(arrY);
console.log(totalsum);
