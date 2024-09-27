//object type with empty parameters 
let myDate=new Date()
console.log(myDate)
//functions on date are:-
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(typeof(myDate));
//{+++++++++++++++++++++++++++++++++++++}__
//date with some parameter ____________
// let myDate2=new Date(2023,0,23)
// console.log(myDate2.toString());
// console.log(myDate2.toDateString());
//to get time along with dd/mm/yyyy
// let myDate2=new Date(2023,0,23,4,30,54)
//if we want to get date in some formate like mm/dd/yyyy or yyyy/dd/mm etc,
let myDate2=new Date("2023-01-23")
console.log(myDate2.toLocaleString());
//time stamps,use to get current time in miliseconds and we can also use .gettime on normal date
//object to get time in milisecond
let timeStamp=Date.now()
console.log(timeStamp);
console.log(myDate2.getTime());
//tp get timeStamp value in second we can just divide it with 1000 and place it inside the 
//math.floor to get a precise value 
console.log(Math.round(timeStamp/1000));
//if we to get date,month or year we have methods for that too,
let myDate3=new Date()
console.log(myDate3.toDateString());
console.log(myDate3.getDate());
console.log(myDate3.getMonth()+1);
//most important method of date is ,
                    //  |here we write internationalisation 
 let frmate=myDate3.toLocaleString('default',{
//we can define any thing inside this object what we want 
weekday:"long"

})
console.log(frmate);


















