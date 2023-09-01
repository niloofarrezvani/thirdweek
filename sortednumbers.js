const inputNumbers = +prompt('write numbers:');

function numbers(num) {
    if(num>=0){
        const makeStr=num.toString();
        const sortedStr = makeStr.split('').sort((a,b)=>b-a).join('')
        return +sortedStr
    }
    else {
        return `your input number is negative.`
    }
  }
  console.log(numbers(inputNumbers));