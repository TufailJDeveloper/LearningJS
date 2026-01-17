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

  function cutFruits(fruit){

        return fruit * 3;
  }


 function foods(apples, mangoes){

    const applePieces=cutFruits(apples);
    const mangoPieces=cutFruits(mangoes);


    const juice=`i got ${applePieces} pieces apples and ${mangoPieces} pieces mangoes`

    return juice;
 }


 console.log(foods(2,5))
