//normal way
const num1=2233
console.log(num1);

//another way
const num2=new Number(200)
//functions that can be performed on object number
console.log(num2.toString().length);
//for limite numbers after a decimal 
console.log(num2.toFixed(2));
//to get a precise value in decimal number 
const num3=123.8933
console.log(num3.toPrecision(3));
//to get a well defined long number (by default the function gives us standard way of representation,to change
//it into indian standard number (en-IN))
//example
const num4=10000000
console.log(num4.toLocaleString('en-IN'));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//MATHS________________
console.log(Math);
//if we want to change negative value in positive
console.log(Math.abs(-43));
//want round off value 
console.log(Math.round(4.4));
//if ever decimal occurs,then prefer next upcoming value 
console.log(Math.ceil(4.1))
//if ever decimal occurs,then prefer the current  value 
console.log(Math.floor(4.9));
//to get some random number (the normal range is (0 to 1))
console.log(Math.random());//if we want to get range of 1 t0 10 the multiply it by 10
console.log(Math.round(Math.random()*10)+1);
//to get the random value in desired range ,then there is a formula for that ,
//(max-min +1)+min
//example (range should be 10 to 20)
const min=10
const max=20
console.log(Math.round(Math.random()*(max-min+1)+min));











