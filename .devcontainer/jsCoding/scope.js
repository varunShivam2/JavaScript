//first of lets see working of all variable types 
// const a=10
// let b=20
// var c=30//has block scope problem 
// console.log(a);
// console.log(b);
// console.log(c);//normally prints all numbers 
//but what if all these variables will be inside the some block ,like if condition 
//example 
var c=200
if(true){
    const a=10
let b=20
var c=30//has block scope problem 

}
// console.log(a);//will not print ,because it is out of the scope of if block
// console.log(b);//will not print ,because it is out of the scope of if block
console.log(c);//will be printed ,thats why var is not being used in these days ,because of its block scope issue
//the problem occurs when we declare one more var c in the top ,and we get value of c according to if block's c;
//this causes confusion ,thats why we dont use var ,same occurs when we dont use any variable type ,like c=2 or b=1 etc;
//________________________
//nested function
//child function can access the variables of parent function because it will acts 
//as a global variable for child function ,but parent function cannot access the variable of child function
//example........
function one(){
    const name="varun"
    function two(){
        const roll=23
        console.log(`name is ${name}`);
   
    }
    // console.log("roll no is ",roll);//it will give error because it is out of the scope of fun two
    two()
}
// one()//if we dont call the parent function then we cannot call child function too.
one()

// same phenomenon occurs inside the if else block too.

//two ways of function declaration 
console.log("above function",addone(5));//allowed
function addone(num){
    return num+1
}
console.log("Below function",addone(5));
//first way                                           //everything is fine when we call function after its declaration ,but in
                                                        //variable defined function we cannot call function above its declaration,
                                                        //but we can do it in normal function declaration,this phenomenon known 
                                                        //as hoisting.

//storing function in a variable 
// console.log(addTwo(5))//will give error
let addTwo=function(num){
    return num+2
}
console.log(addTwo(5))