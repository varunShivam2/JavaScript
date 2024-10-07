//for each dont reaturn any value ,but filter returns
//filter operation on array
let array1=[1,2,4,3,22,11]
 const numarr=array1.filter( (num) => num>5 )//it also takes call back function//here implicit return,no need to write return statement
console.log(numarr);
//but if we use curly braces we need to return something
let array2=[1,2,4,3,22,11,32,45,66]
// let numarr2=array2.filter( (num) =>{
//   return num>5
// })
// console.log(numarr2);

//if we want to print nums of array2 >5 with foreach the we can do that by using some logic
//first create an empty array
const emptyarry=[]
let numm=array2.forEach((num) => {
    if (num>5) {
    emptyarry.push(num)
    }
});
console.log(emptyarry);

//more use of filter ,let  us take an example of array of objects with keys and value
const books=[
    {title:'one piece',genre:'shonen',publish:1997,
        edition:2024
      },
      {title:'Naruto',genre:'RandiRonna',publish:2000,
        edition:2020
      },
      {title:'Attack on titan',genre:'Adventure',publish:2013,
        edition:2023
      },
      {title:'Demon slayer',genre:'Demon',publish:2018,
        edition:2024
      },
      {title:'Summer time rendering',genre:'Time travel',publish:2018,
        edition:2022
      },
      {title:'Bleach',genre:'shonen',publish:2003,
        edition:2024
      }
]
let userBooks//=books.filter((bk) =>(bk.genre=="shonen"))//we applied filter ,that we only need those books which belongs to shonen genre
//let call books whic published before 2013,using ()=> with{}
//userBooks=books.filter((bk) =>{return bk.publish<=2013})
//let us call books which belongs to shonen genre and published before 2000
userBooks=books.filter((bk) =>(bk.genre==='shonen'&&bk.publish<=2000))
console.log(userBooks);




