let findNo= 6;
let outputDiv= document.getElementById("output");
console.log(" Start the game !!");

let submitGuess = document.getElementById("submitGuess");
submitGuess.addEventListener("click", ()=>{
    let inputNum= parseInt(document.getElementById("inputGuess").value);
    if(inputNum === findNo){
            outputDiv.innerHTML= "congratulation baby finally guessed it right";
            
        }else{
            outputDiv.innerHTML= "You are close try again";
            
        }
        outputDiv.value= "";
    }
)
