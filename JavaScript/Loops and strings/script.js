//LOOPS- set of instructions execute repeatdly
//For-loop
for(let i=0; i<=3; i++){
    console.log("babbar");  
}

//counting
for(let counting=1; counting<=5; counting++){
    console.log(counting);   
}

//reverse counting
for(let count= 5; count>=1; count--){
    console.log(count);   
}

//break -
for(let k=1;k<=6;k++){
    if(k==4)
        break;
    else{
        console.log(k); 
    }
}

//continue - only skip the current iteration
for(let j=1;j<=5;j++){
    if(j==3)
        continue;
    else
    console.log(j);  
}


//WHILE_LOOP
let num=1;
while(num<=5){
    console.log("codingpagluuu");
    num++;  
}

//break
let i=1;
while(i<=5){
    if(i==3)
        break;
    else
    console.log("pagluuu");
    i++;  
}

//continue
let l=1;
while(l<=5){
    if(l==3){
        l++;
        continue;
    }    
    else
    console.log("shagluu");
    l++;  
}

//do-while loop
//ist iteration is guarnteed, means even if the cond is true or false, it will execute atleast one time
let init=1;
do{
  console.log("babbr");
  init++;
  
}while(init<=10);


//STRINGS - sequence of characters
// let name = "love babbar";

// let name = `love 
// babbar this is
// my
// name
// is 
// babbar`;
// let lastname = 'babbar';
// console.log(name);

let name = new String("love babbar");
console.log(name);

//OPERATIONS ON STRING

