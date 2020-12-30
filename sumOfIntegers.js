let numbers=[3, -1, -7, -4, -5, 9, -4];

for(let i = 0; i < numbers.length; i++){
    let firstNumber = numbers[i];
    for(let j = i + 1; j < numbers.length; j++){
        let secondNumber = numbers[j];
        for(let k = j + 1; k < numbers.length; k++){
            let thirdNumber = numbers[k]
            if(firstNumber + secondNumber + thirdNumber == 0){
                console.log(firstNumber + "," + secondNumber +"," + thirdNumber);
            }
        }
    }
}