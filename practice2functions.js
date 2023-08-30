// let listOfNumbers =[];
// let quit =false;

// while( quit != true){
//    const numberInput = prompt("write numbers please:");

//    if(numberInput ==='quit'){
//       quit =true;
//    }
//    else{
//       listOfNumbers.push(+numberInput);
//    }
// }

let inputNumbers = prompt('enter Numbers until quit:');

function powerNum(inputNum){
   let finalnum=""
   for(let i=0; i<inputNum.length;i++){
      finalnum +=inputNum[i]*inputNum[i]
   }
   return finalnum
}
console.log(powerNum(inputNumbers))