function getRandomNumber(min, max){
    let num = max - min + 1;
   return Math.floor(Math.random() * num) + min;
}

let randomArr = [];
for(let i = 0; i < 10; i++)
 randomArr.push(getRandomNumber(100, 1000));
console.log(randomArr);
randomArr.sort();
console.log("Sorted array " + randomArr);
console.log("Second Largest Number " +randomArr[8]);
console.log("Second Smallest Number " +randomArr[1]);


// function secondLargestSmallest(randomArr) {
//     randomArr.sort(function(x,y) {
//         return x - y;
//     });
//     let newArr = [randomArr[0]];
//     let result = [];
//     for(let j = 1; j < randomArr.length; j++)
//     {
//         if(randomArr[j - 1] !== randomArr[j]) {
//             newArr.push(randomArr[j]);
//         }
//     }
//     result.push(newArr[1], newArr[newArr.length - 2])
//     return result.join(',');
// }
// console.log(secondLargestSmallest(randomArr));