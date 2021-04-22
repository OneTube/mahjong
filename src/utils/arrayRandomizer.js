import uuid from 'react-uuid';

let arr = [];
const fakeArr = [];

const randomizer = function(number) {
  if(fakeArr.indexOf(number) === -1) {
    fakeArr.push(number);
    arr.push({number, isActive: true, id: uuid(), freeze: false,});
  }
};

while(fakeArr.length !== 15) {
  const rand = Math.floor(Math.random() * 51);
  randomizer(rand);
}

const sortedArr = arr.sort(() => Math.random() - 0.5);
const newSortedArr = sortedArr.map(item => ({...item, id: uuid()}));

const finalArray = [...sortedArr, ...newSortedArr].sort(() => Math.random() - 0.5);

export const readyArray = finalArray;
