let listOfNumbers =[];
let quit =false;

while( quit != true){
   const numberInput = prompt("write numbers please:");

   if(numberInput ==='quit'){
      quit =true;
   }
   else{
      listOfNumbers.push(+numberInput);
   }
}
console.log(listOfNumbers)
function sumPosetiveNumbers(arrayNumbers){
    let finallAnsower=0
    for(let i=0; i<arrayNumbers.length;i++){
        if(arrayNumbers[i]>0){
            finallAnsower+=arrayNumbers[i]

        }
    }return finallAnsower
}

console.log(sumPosetiveNumbers(listOfNumbers))