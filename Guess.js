let findNo= 19;
let outputDiv= document.getElementById("output");
let inputField = document.getElementById("inputGuess");
console.log(" Start the game !!");

let submitGuess = document.getElementById("submitGuess");
submitGuess.addEventListener("click", ()=>{
    let inputNum= parseInt(document.getElementById("inputGuess").value);
    if(inputNum === findNo){
            outputDiv.innerHTML= "congratulation baby you finally guessed it right";
            
        }else{
            outputDiv.innerHTML= "You are close try again";
            
        }
        inputField.value = "";
    }
)
