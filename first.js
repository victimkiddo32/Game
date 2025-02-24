console.log("Hello MARS");
var number1;
let number2;
const number3=prompt("Enter a Number");

console.log(`${number3}`); 

// if(number3>5){
//     console.log(`${number3}`)
// }

if(typeof number3=="number"){
    for(let i=1;i<=10;i++){
        console.log(`${number3} x ${i} = ${number3 * i}`);
    }
}else{
    console.log("Please type a numvber");
}
