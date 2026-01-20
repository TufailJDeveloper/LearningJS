'use strict'

// let hasDrivingLiceance = false;
// const hasPassed = true;

// if(hasPassed){
//     hasDrivingLiceance = true; 
// }

// if(hasDrivingLiceance) {
//     console.log("Passed the test");
// }

// const interface = "abcd"

// ------------------- functions--------------------



//  function foods(apples, mangoes){

//     console.log(apples,mangoes)

//     const juice=`i ate ${apples} apples and ${mangoes} mangoes`

//     return juice;
//  }



//  const result=foods()
//  console.log(result)



///function expressions and declarations


///Function Declaration
// function calculateAge(birthYear){

//      const calculatedAge = 2026 -birthYear;

//      return calculatedAge;
// }



//  //Function Expression

//      const calculatedAge2=function (birthYear){

//      const calculatedAge =2026 -birthYear;

//      return calculatedAge;
// }

// console.log(calculatedAge2(2001))
// cookieStore



//    const returnedAge = calculateAge(1997)

//     console.log(returnedAge)



///Arrow Functions

// const calAge3 = birthyear => 2026 - birthyear;
 

// console.log(calAge3(2001));

// const retiresIN = (birthyear, name) => {
//     const age = calAge3(birthyear);
//     const retiresIn = `${name} retires in ${65 - age}`
//     return retiresIn;
// }

// console.log(retiresIN(2001, "tufail"))






////Function calling another function

//   function cutFruits(fruit){

//         return fruit * 3;
//   }


//  function foods(apples, mangoes){

//     const applePieces=cutFruits(apples);
//     const mangoPieces=cutFruits(mangoes);


//     mangoPieces
//     const juice=`i got ${applePieces} pieces apples and ${mangoPieces} pieces mangoes`
//     return juice;
//  }


//  console.log(foods(2,5))


///Introduction to Arrays


// const f1="friend1";
// const f2="friend2";
// const f3="friend3";


// const friends=["friend1", "friend2","friend3"];

// console.log(friends)

// console.log(friends[0])

// console.log(friends[2])


// const fruits=["apple","mango","banana"]

// console.log(fruits)

// friends[2]="new friend"

// console.log(friends)


// // friends=["new2","new3"]



// const userName="batman";

// const userDetails=[userName,'Bengaluru',2025-1997,"scientist",friends];


// console.log(userDetails)



// const calcAge=function(birthYear){

//     return  2025-birthYear;
// }

// const years=[1990, 1991 ,1992, 1993, 1994, 1995]

// // console.log(calcAge(years));

// console.log(calcAge(years[years.length-1]));




// ///Basic Array Operation Methods


// const elements=["ele1","ele2", "ele3"]



// console.log("Original Array")

// console.log(elements)


// elements.push("ele4")

// console.log("Elements after push method")

// console.log(elements)


// elements.unshift("unshift ele")

// console.log("Elements after unshift method")

// console.log(elements)




// elements.pop()

// console.log("pop>>>>>",elements.unshift(4))

// console.log("Elements after pop method")

// console.log(elements)


// elements.shift()

// // console.log("Elements after shift method")

// console.log(elements.includes("ele3"))

// console.log(elements.indexOf("ele3"))




// /// CHALLENGE 2 on Arrays: 



// const calcTip = (billValue)=> billValue>=50 && billValue<=300 ? 0.15 * billValue : 0.20 * billValue;
    
//     //  return billValue>=50 && billValue<=300 ? 0.15 * billValue : 0.20 * billValue;
    
//     // if(billValue>50 && billValue<300){
        
//     //     return 0.15 * billValue;
//     // }
    
//     // else{
        
//     //     return 0.20 * billValue;
//     // }

// const result = calcTip(100)

// console.log(result)

// const bills=[125, 555, 44];

// const tips=[calcTip(bills[0]),  calcTip(bills[1]) , calcTip(bills[2])] ;

// console.log(tips)


// const totals= [bills[0]+tips[0],   bills[1]+tips[1] , bills[2]+tips[2]];

// console.log(totals)



/// Introduction to Objects


// const userArray=[
//     "john",
//     "cena",
//     2025-1995,
//     "wrestler",
//     ['Randy Ortan', 'Undertaker', 'Cane']

// ]


// const  userObject={
//     firstName:"John",
//     lastName:"Cena",
//     age:2025-1995,
//     job:"wrestler",
//     friends:  ['Randy Ortan', 'Undertaker', 'Cane']

// }

// console.log(userObject)





///Dot vs Bracket Notation

// console.log(userObject.firstName)

// console.log(userObject['firstName'])


// const  nameKey='Name'

// console.log(userObject['first' + nameKey])


// const interestedIn=prompt('what do you want to know about the user: firstName, lastName, age, job, friends')



// if(userObject[interestedIn]){
    
//     console.log(userObject[interestedIn])
// }

// else{
//     console.log("Wrong input, Choose Between firstName, lastName, age, job, friends")
// }

// userObject.location="Bengaluru"

// userObject['twitter']="user@twitter.com"

// console.log(userObject)



// ///John has 3 friends , and his best friend is called Randy Ortan.

// console.log(`${userObject.firstName} has ${userObject.friends.length} friends , and his best friends is called ${userObject.friends[0]}`)





///Object methods

// const  userObject={
//     firstName:"John",
//     lastName:"Cena",
//     birthYear:1997,
//     job:"wrestler",
//     friends:  ['Randy Ortan', 'Undertaker', 'Cane'],
//     hasDrivinglicence:true,


    // calcAge : function(birthYear){

    //     return 2025-birthYear;

    // }

   
    // calcAge : function(){

    //     return 2025-this.birthYear;

    // }


//     calcAge : function(){
//         this.age = 2025-this.birthYear;

//         return this.age;
//     },


//     getSummary : function(){

//         console.log(`${this.firstName} is a ${this.calcAge()} old ${this.job} and he has  ${this.hasDrivinglicence?"a":"no"} drivers licence`)
//     }

// }

// console.log(userObject.calcAge())

// console.log(userObject.age)

// console.log(userObject.getSummary())




// ///CHALLENGE 3:

// const mark={
    
//     fullName :'Mark Miller',
//     mass : 78,
//     height: 1.69,
    
//     calcBMI :function(){
//         this.bmi= this.mass / (this.height ** 2)
//         return this.bmi;
//     }
// }

// const john={
    
//     fullName :'John Smith',
//     mass : 92,
//     height: 1.95,
    
//     calcBMI :function(){
//         this.bmi= this.mass / (this.height ** 2)
//         return this.bmi;
//     }
// }

// mark.calcBMI()

// john.calcBMI()

// console.log(mark.bmi , john.bmi)


// if(mark.calcBMI() > john.calcBMI()){
    
//     console.log(`${mark.fullName} BMI (${mark.calcBMI()}) is higher than ${ john.fullName }(${john.calcBMI()})!`)
// }
 
//    else if(john.calcBMI() > mark.calcBMI()){
    
//     console.log(`${john.fullName} BMI (${john.calcBMI()}) is higher than ${ mark.fullName }(${mark.calcBMI()})!`)
// }
    



///Iteation : The For Loop
  


// console.log('Lifting Weights Repitition 1')
// console.log('Lifting Weights Repitition 2')
// console.log('Lifting Weights Repitition 3')
// console.log('Lifting Weights Repitition 4')
// console.log('Lifting Weights Repitition 5')
// console.log('Lifting Weights Repitition 6')
// console.log('Lifting Weights Repitition 7')
// console.log('Lifting Weights Repitition 8')
// console.log('Lifting Weights Repitition 9')
// console.log('Lifting Weights Repitition 10')


// for( let rep =1 ; rep<=10 ;rep++){
//     console.log(`Lifting Weights Repitition ${rep}`)
// }





///Looping Arrays, Breaking and Continuing


const userArray=[
    "john",
    "cena",
    2025-1995,
    "wrestler",
    ['Randy Ortan', 'Undertaker', 'Cane']


]


const typeArray=[]

for(let i=0 ; i<userArray.length; i++){

//Reading for User Array Object
    console.log(userArray[i])


// //Filling Type array
//     typeArray[i] =typeof(userArray[i])


//Another Way
 
typeArray.push(typeof userArray[i])

}

console.log(typeArray)


const years= [1991, 1995, 1996, 1997]

const age=[]

for(let i=0 ; i<years.length ; i++){

     age.push(2025- years[i]);
}

console.log(age)



///CONTINUE AND BREAK

console.log('-- ONLY STRINGS --')

for(let i=0 ; i<userArray.length; i++){

   if(typeof userArray[i] !== 'string') continue;
    console.log(userArray[i] ,typeof userArray[i])

}


console.log('-- BREAK  WITH NUMBER --')

for(let i=0 ; i<userArray.length; i++){

   if(typeof userArray[i] !== 'number') continue;
    console.log(userArray[i] ,typeof userArray[i])

}











































