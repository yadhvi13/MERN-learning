// console.log("yogeeta");


let obj={
    age: 12,
    ht: 4.5,
    wt: 180,

};
console.log(obj);

//adding property to object
obj.color = "white";
console.log(obj);


//1.) METHOD One

//object cloning by spread operator

//Agar cloning krni ho toh ye krna pdhta hai
let source={
    age: 19,
    ht: 6.5,
    wt: 198,
};
let dest = {...source};
// clone bnane ke baad source ki value chnage krdi
source.age = 20;

console.log("Source Object: ", source);
// ab destination clone object me age ki value change nhi hui hogi
//That means Object ki cloning ache se hui hai, using SPREAD operator 
console.log("Destination Object-Clone ", dest);


// //2.) Assign operator
// let src = {
//     age: 12,
//     ht: 4.5,
//     wt: 180,

// };

// let src2 = {
//    value: 101,
//    fname: "Yogeeta chhimwal"
// };

// let destination = Object.assign({}, src, src2);
// src.ht = 6;
// console.log("src: ", src);
// console.log("source2: ", src2);

// console.log("dest: ", destination);


//3.) Interation operator - iterate each property of real object to make clone

let src3 = {
    age: 12,
    ht: 4.5,
    wt: 180,

};
let destination1={};
//cloning using iteration
for(let key in src3){
    let newKey = key;
    let newValue = src3[key];

    //insert newKey and value in dest and create a clone
    destination1[newKey] = newValue;
}
src3.age = 90;

console.log("source3, ",src3);
console.log("destination1: ", destination1);

