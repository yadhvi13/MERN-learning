// compile time error
// - syntax error
// console.log);

//RUN TIME error
//As x is not defined, so it will take error in run time
// console.log(x);

// try{
//     //jisme error aa ksta hai yha likho
//     console.log("try block start here");   
//     //refernce error ayega yha
//   console.log(x);  
//   console.log("try block ends here");
  
// }
// catch(e){
// //agr error aayega toh use yha catch kr lega ye block
// //error ke sath kya krna hai
// //1.) Retry logic
// //2.) fallback mechanism
// console.log("I am inside console block");
// console.log("YOUR ERROR IS HERE: ", e);

// }
// finally{
//   console.log("i will run everytime as i am finally block");
  
// }


//LETS CREATE CUSTOM ERROR
// try{
//   //refrence error
//   console.log(x);
  
// }
// catch(err){
//   //khudka error throw krna
//    throw new Error("Phle declare kro fr use krna");
// }


let errorCode = 100;
if(errorCode == 100){
   throw new Error("Invalid JSON");
}