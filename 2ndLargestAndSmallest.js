function getRandomNumber(min, max){
    let num = max - min + 1;
   return Math.floor(Math.random() * num) + min;
}

let randomArr = [];
for(let i = 0; i < 10; i++)
 randomArr.push(getRandomNumber(100, 1000));
console.log(randomArr);

let max = Math.max.apply(null, randomArr);
randomArr.splice(randomArr.indexOf(max), 1);
let secondMax = Math.max.apply(null, randomArr);
console.log(secondMax);

let min = Math.min.apply(null, randomArr);
randomArr.splice(randomArr.indexOf(min), 1);
let secondMin = Math.min.apply(null, randomArr);
console.log(secondMin);
