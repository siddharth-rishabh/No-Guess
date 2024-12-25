let findNo= 5;
let outputDiv= document.getElementById("output");
let inputField = document.getElementById("inputGuess");
console.log(" Start the game !!");

function handleGuess(){
    let inputNum= parseInt(document.getElementById("inputGuess").value);
    if(inputNum === findNo){
            outputDiv.innerHTML= "congratulation 🎉🎉 baby you finally guessed it right";
            
        }
        else if(inputNum > findNo){
            outputDiv.innerHTML= "The number is smaller than your guess.";
        }
        else{
            outputDiv.innerHTML= "The number is greater than your guess.";
        }
        
        inputField.value = "";
        if(inputNum > 10){
            outputDiv.innerHTML="🔴Please enter number less than or equal to 10"
        }
}

let submitGuess = document.getElementById("submitGuess");
submitGuess.addEventListener("click", ()=>{
    handleGuess();
    }
    
);
inputGuess.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        handleGuess();
    }
});

let themeChange= document.getElementById("themeToggle");
themeChange.addEventListener("click", ()=>{
    
})

