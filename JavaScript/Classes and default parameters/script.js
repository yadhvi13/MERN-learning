


// class Human{
//     //properties
//     age; //public
//    #wt= 70; //to make it private (#)
//     ht = 150;

//     constructor(newAge, newHeight, newWeight){

//      this.age = newAge;
//      this.ht = newHeight;
//      this.#wt = newWeight;
//     }

//     //behaviour
//     #walking(){
//         console.log("I can walk" , this.#wt); 
//     }
//     running(){
//         console.log("I can run");      
//     }
    
// //means we have created encapsulation and absraction layer -- to add protection to data  
//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyWeight(value){
//         this.#wt = value;
//     }

//     get fetchwalking(){
//         return this.#walking;
//     }

// }
// //jaha bhi object bnega wha constructor ke parameter pass krna hoga
// let obj = new Human(50,140,20);
// console.log(obj.ht);
// console.log(obj.age);

// //because wt ek private entity hai
// console.log(obj.fetchWeight);

// console.log(obj.fetchwalking);
 



// //Default parameters
function sayName(myname = "chhimwal"){
    console.log("My name is: ", myname);    
}
sayName();
// agr function me value pass krna bhul gye, toh default parameter me jo value di hai wo print ho jayegi.


//Multiple default parameter
function sayTwoName(fname="pummy" , lname="dixshit"){
     console.log("My name is: ", fname, " ", lname);
     
}
sayTwoName("hemani");

//one parameter is dependant on other
function sayHello(firstname ="Uday" , lastname= firstname.toUpperCase()){
    console.log("My name is: ", firstname, " ", lastname);
    
}
sayHello();

//default parameters as object
function solve(value = {age: 15, wt: 90, ht: 180}){
    console.log("hello duniya ", value);
    
}
// solve("yyyy");
solve();

//default parameters as Array
function heyArray(values = ["love", "babbar", "rahul", "kunal"]) {
    console.log("heyyyyy aadmi: ", values);
}
heyArray();

//If NULL bhejte hai argument me, toh null hi value me store hoga
function myName(value = "rahul"){
    console.log("hello ji  ", value);
    
}
// myName(null);
myName(undefined);
//but undefined agr bhejte hai toh jo value me pass hui value hai, whi print hogi


//function in default parameter
function getAge(){
    return 190;
}
function utility(name = "yogeeta",age= getAge()){
   console.log(name, " ", age);
   
}
utility();