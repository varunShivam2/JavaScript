//this keyword example ,this keyword talks about current context
let obj1={
    user:"VArun",
    printmsgFun:function(){
        console.log(`${this.user},logged in `);//we use this keyword to use current context
        //to know which context this keyword is using which time ,
        console.log(this);
        
        //this only use current context inside the object/
    }
}
obj1.printmsgFun()
//after changing context
obj1.user="TArun"
obj1.printmsgFun()
//this.something cannot work ,inside normal function 
// const new22=function(){
//     let username="varun"
//     console.log(this.username);//give undefined 
    
// }
// new22()
//Arrow function

// const new22= () =>{//just remove function keyword and add ()=>(it is arrow function )
//         let username="varun"
//         console.log(this.username);//give undefined 
         
//     }
//      new22()
//pure arrow function
//normally defined as () =>{},we can also store it in a variable
const addTwo = (num1,num2) =>{
return num1+num2
}//this is explicit return ,we are using return keyword and curly braces
console.log(addTwo(4,5));

//implicit return where we write code in single line and dont use currly braces and return keyword
// let addThree= (n1,n2,n3) => (n1+n2+n3)
// console.log(addThree(2,3,4));
//if we want to return object ,we still need to put curlybraces inside paranthesis
let addThree= () => ({user:"varrrr"})
console.log(addThree());



