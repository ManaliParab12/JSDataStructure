let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter your number ",function(number) {    
let arr = new Array();
for(let i = 2; i <= number; i++){
    if(number % i == 0){
        let isPrime = 1;
        for(j = 2; j <= i/2; j++){
            if(i % j == 0){
                isPrime = 0;
                break;
            }
        }
        if(isPrime == 1){
            arr.push(i);
        }
    }
}
console.log("Prime factors of an number");
console.log(arr);
process.exit();
});

  
  
