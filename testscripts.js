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



let a = '10';

if (typeof(a) === 'number') {
  console.log(a);
} else {
  console.log('xyi');
}






for (let i = 0; i + 1 < b; i++) { 
  console.log (a * (b - i));
}

console.log()

let a = 2;
let b = 2;

if (typeof(a) === 'number' && typeof(b) === 'number') {


} else if () {
  console.log(a);
}