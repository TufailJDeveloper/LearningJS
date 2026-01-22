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
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY
// console.log(amplitudeBug);


///CHALLENGE 1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// const printForecast= function(arr){


//     let str='';
//     for(let i=0 ; i<arr.length; i++){
//         str +=  `...${arr[i]}°C in ${i+1} days `;
//     }

//     console.log('...' + str)
// }

// const arr=[17, 21, 23]
// // const arr=[12, 5, -5, 0, 4]

// printForecast(arr)



/*
Build a time tracking application for freelancers. At some point in building this app, you need a function 
that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/



// const calculatedData = function (arr) {
//   let totalHoursWorked = 0;
//   let mostWorkingHourDay = arr[0];
//   let mostWorkingDayIndex = 0;

//   for (let i = 0; i < arr.length; i++) {
//     totalHoursWorked += arr[i];

//     if (arr[i] > mostWorkingHourDay) {
//       mostWorkingHourDay = arr[i];
//       mostWorkingDayIndex = i;
//     }

    
//   }

//   let averageDailyHours = totalHoursWorked / arr.length;

//   console.log("Total hours:", totalHoursWorked);
//   console.log("Average daily hours:", averageDailyHours);
//   console.log("Day with most hours:", mostWorkingDayIndex);
//   console.log(totalHoursWorked>=35? "FullWeek" :"No Full week")
// };

// const arr = [7.5, 8, 6.5, 0, 8.5, 4, 0];
// calculatedData(arr);






///Time Tracking Updated Challenge

const calculatedData = function (arr) {
  let totalHoursWorked = 0;
  let mostWorkingHour = arr[0];
  let mostWorkingDayIndex = 0;
  let numberOfDaysWorked = 0;

  for (let i = 0; i < arr.length; i++) {
    totalHoursWorked += arr[i];

    if (arr[i] > 0) numberOfDaysWorked++;

    if (arr[i] > mostWorkingHour) {
      mostWorkingHour = arr[i];
      mostWorkingDayIndex = i;
    }
  }

  const averageDailyHours = totalHoursWorked / arr.length;
  const isFullTime = totalHoursWorked >= 35;

  let mostWorkingDay;

  switch (mostWorkingDayIndex) {
    case 0:
      mostWorkingDay = "Monday";
      break;
    case 1:
      mostWorkingDay = "Tuesday";
      break;
    case 2:
      mostWorkingDay = "Wednesday";
      break;
    case 3:
      mostWorkingDay = "Thursday";
      break;
    case 4:
      mostWorkingDay = "Friday";
      break;
    case 5:
      mostWorkingDay = "Saturday";
      break;
    case 6:
      mostWorkingDay = "Sunday";
      break;
    default:
      mostWorkingDay = "Invalid day";
  }

  console.log("Total hours worked:", totalHoursWorked);
  console.log("Average daily hours:", averageDailyHours.toFixed(2));
  console.log("Day with most hours:", mostWorkingDay);
  console.log("Days worked:", numberOfDaysWorked);
  console.log("Full-time week:", isFullTime ? "Yes" : "No");
};

const arr = [7.5, 8, 6.5, 0, 8.5, 4, 0];
calculatedData(arr);




