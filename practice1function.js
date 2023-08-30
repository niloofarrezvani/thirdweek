const strUser= prompt("write:");
function countvowelsounds(text){
    let counter=0;
    for(let i=0; i<text.length;i++){
        if(text[i]=="a"){
            counter++
        }
        if(text[i]=="e"){
            counter++
        }
        if(text[i]=="i"){
            counter++
        }
        if(text[i]=="o"){
            counter++
        }
        if(text[i]=="u"){
            counter++
        }
        else{
            false
        }
        
    }return counter
}
console.log(countvowelsounds(strUser))




