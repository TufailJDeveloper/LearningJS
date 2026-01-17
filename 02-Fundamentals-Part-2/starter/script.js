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
function calculateAge(birthYear){

     const calculatedAge = 2026 -birthYear;

     return calculatedAge;
}



 //Function Expression

     const calculatedAge2=function (birthYear){

     const calculatedAge =2026 -birthYear;

     return calculatedAge;
}




   const returnedAge = calculateAge(1997)

    console.log(returnedAge)
