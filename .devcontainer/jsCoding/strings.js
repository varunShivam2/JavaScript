const firstName="varun"
const lastName="shivam"

console.log(`the first name is ${firstName} and last name is ${lastName} ${"wellll"} `);

// object type string


const objString=new String("Varun_shivam")
console.log(objString.charAt(3));
console.log(objString.indexOf('n'));
console.log(objString.substring(0,5));
console.log(objString.toUpperCase());
const newstring1=new String("        varun       ")
console.log(newstring1);

console.log(newstring1.trim());
const url=new String("https://varun-shivam.com//new%20hehyy//")
console.log(url.replace('%20','_'));
//to check if some user given string is inside the objstring
console.log(objString.includes('Varun'));
console.log(objString.includes('Varunnn'));






