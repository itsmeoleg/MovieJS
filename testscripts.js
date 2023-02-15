'use strict';

/* Exercise #1 */

function getMathResult(a, b) {
    if (b <= 0 || typeof(b) !== 'number') {
      return a;
      } 
      
      let str = '';

       for (let i = 1; i <= b; i++) { 
           if (i === b) {
              str += `${a * i}`;
           } else {
                str += `${a * i}---`;
           }
     }  
     return str;

  } 

console.log(getMathResult(3, 3));



/* Exercise #2 */

let a = '10';

if (typeof(a) === 'number') {
  console.log(a);
} else {
  console.log('xyi');
}

/* Exercise #3 */

function sayHello(name) {
    let phrase = 'Привет, ' + name + '!';
    return phrase;
}

sayHello('Oleg');







function returnNeighboringNumbers(a) {
    return [a - 1, a, a + 1];
}

returnNeighboringNumbers(5);


/* Exercise #5 */

function calculateVolumeAndArea(a) {
 let phrase = '';

    if (a < 0 || !Number.isInteger(a) || a == '') {
        return 'При вычислении произошла ошибка';
    } else {
        let cubeVolume = Math.pow(a, 3);
        let cubeArea = 6 * Math.pow(a, 2);
        phrase = `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
        return phrase;
    }
}

console.log(calculateVolumeAndArea(3));


/* Exercise #6 */

function getCoupeNumber(a) {
    let coupeNum;
        if (a === 0 || a > 36) {
            return 'Таких місць в вагоні не існує';
        } else if (!Number.isInteger(a) || a < 0 || a == '') {
            return 'Помилка. Перевірте правильність введеного номера місця';
        } else {           
            let coupeNum = Math.ceil(a / 4);
            return coupeNum;
        }
}

console.log(getCoupeNumber(21));