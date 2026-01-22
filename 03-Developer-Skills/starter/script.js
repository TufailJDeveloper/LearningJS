'use strict';




///Calculate temperature Amplitude

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


// const calcTempAmplitude= function(temp){

//     let biggest=temp[0]
//     let smallest=temp[0]

//     for(let i=1; i<temp.length; i++){

//         const curTemp=temp[i];

//         if(typeof curTemp !== 'number') continue;

//         if(curTemp > biggest){
//             biggest=curTemp
//         }


//          if(curTemp < smallest){
//             smallest=curTemp
//         }

//     }

//     console.log(biggest, smallest)
//     return biggest-smallest;
// }

// const amplitude= calcTempAmplitude(temperatures)
// console.log(amplitude)




//Debugging with the console and Breakpoints

// const measureKelvin=function(){
//     const measurement ={
//         type :'temp',
//         unit:'celsius',


//         //C) FIX
//         value:Number(prompt('Degree celcius:'))
//     }

//     // B) FIND
//     console.table(measurement)

//     console.log(measurement.value)
//     // console.warn(measurement.value)
//     // console.error(measurement.value)
//     const kelvin=measurement.value + 273;
//     return kelvin;
// }

// //A) IDENTIFY THE BUG

// console.log(measureKelvin())



// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);








