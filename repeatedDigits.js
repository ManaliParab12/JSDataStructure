let arr =new Array();

for(let number = 11; number <= 100; number++){
    let temp = number;
    let reverse = 0;
    while(temp > 0){
        let rem = temp % 10;
        reverse = reverse * 10 + rem;
        temp = parseInt(temp / 10);
    }
    if(reverse == number){
        arr.push(number);
    }
}
console.log(arr);
