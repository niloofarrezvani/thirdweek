const userName = prompt("write your name:");
const reapet=prompt('write a number:');
function repeatedText (text , repeat){
    let reaperedText=''
    for(let i=0; i<repeat;i++){
        reaperedText +=text
    }return reaperedText
}

console.log(repeatedText(userName, reapet));