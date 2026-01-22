'use strict';




///Calculate temperature Amplitude

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


const calcTempAmplitude= function(temp){

    let biggest=temp[0]
    let smallest=temp[0]

    for(let i=1; i<temp.length; i++){

        const curTemp=temp[i];

        if(typeof curTemp !== 'number') continue;

        if(curTemp > biggest){
            biggest=curTemp
        }


         if(curTemp < smallest){
            smallest=curTemp
        }
    
    }

    console.log(biggest, smallest)
    return biggest-smallest;
}

const amplitude= calcTempAmplitude(temperatures)
console.log(amplitude)


