let obj ={
    name:"yogeeta",
    age: 25,
    weight: "5ft 2inch",
    greet : function(){
        console.log("hello ji");
        
    }
}
// console.log(obj);
obj.greet();
console.log(typeof(obj));

let obj2 = obj;
//shallow copy

//arrays
// let arr = [1,2,3,4,5]
// console.log(arr[0]);
// console.log(arr);
// console.log(typeof(arr));


//Array constructor
let brr = new Array('yogeeta',1,true);
brr.push('himmu');
// brr.pop();
brr.shift();
brr.unshift('yogeeta chhimwal');
brr.push(20);
brr.push(40);
brr.slice(2,4);
console.log(brr.slice(2,4));


//builtin methods in arrays