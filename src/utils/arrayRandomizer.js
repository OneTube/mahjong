import uuid from 'react-uuid';

let arr = [];
// const fakeArr = [];

// const randomizer = function(number) {
//   if(fakeArr.indexOf(number) === -1) {
//     fakeArr.push(number);
//     arr.push({number, isActive: true, id: uuid(), freeze: false,});
//   }
// };
//
// while(fakeArr.length !== 15) {
//   const rand = Math.floor(Math.random() * 51);
//   randomizer(rand);
// }

function isPrime(num) {
  for ( let i = 2; i < num; i++ ) {
    if ( num % i === 0 ) {
      return false;
    }
  }
  return true;
}

(function (n) {
  arr[0] = {number: 2, isActive: true, id: uuid(), freeze: false,};
  for ( let i = 3; i < n; i+=2 ) {
    if ( isPrime(i) ) {
      arr.push({number: i, isActive: true, id: uuid(), freeze: false,});
    }
  }
})(50);

const sortedArr = arr.sort(() => Math.random() - 0.5);
const newSortedArr = sortedArr.map(item => ({...item, id: uuid()}));


const finalArray = [...sortedArr, ...newSortedArr].sort(() => Math.random() - 0.5);

export const readyArray = finalArray;
