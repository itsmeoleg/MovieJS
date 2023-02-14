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





/* Exercise #4 */

function returnNeighboringNumbers(a) {
    return [a - 1, a, a + 1];
}

returnNeighboringNumbers(5);





/* let i = 0;

while (i <= 1) {

    const a = prompt('Останій переглянутий фільм?', ''),
          b = prompt('Ваша оцінка?');

    if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;  
        console.log('done');
    } else {
        console.log('Error');
        i--;
    }   
    i++;  
} */

/* let i = 0;

do  {
    const a = prompt('Останій переглянутий фільм?', ''),
          b = prompt('Ваша оцінка?');

    if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;  
        console.log('done');
    } else {
        console.log('Error');
        i--;
    } 
    i++;  
} while ( i < 2); */