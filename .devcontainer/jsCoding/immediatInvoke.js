//Immediately Invoked function Expression(IIFE)
//we use it to invoke function Immediately,and protect function to get polluted by global variable.
// function one1(){
//     console.log(`Heyy there `);
    
// }
// one1()//if we want invoke it immediately,
(function one1(){//named (IIFE)
    console.log(`Heyy there `);
    
})();//this is how (IIFE) USED  or declared //if we dont put semicolon in the end of first (IIFE) function then it will throw
//error DURING next (IIFE) function execution
// we can also implement (IIFE) using arrow function
( () =>{
    console.log(`I am inside the arrow function using (IIFE)`);
    
} )();//remember this in such a way that first paranthesis is use to declare function and other one is used to call it.
//parameter based (iife)
//example
((name) =>{//parameter
console.log(`hello ${name}`);

})(`varun`)//argument
