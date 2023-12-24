const userChoiceDisplay=document.getElementById("user-choice")
const computerChoiceDisplay=document.getElementById("computer-choice")
const resultDisplay=document.getElementById("result")
const possibleChoices=document.querySelectorAll("button")
let userchoice
let computerchoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userchoice=e.target.id;
    userChoiceDisplay.innerHTML=userchoice
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber=Math.floor(Math.random()*possibleChoices.length + 1);
    if(randomNumber===1)
    {
        computerchoice="rock";
    }
    if(randomNumber===2)
    {
        computerchoice="scissors";
    }
    if(randomNumber===3)
    {
        computerchoice="paper";
    }
    computerChoiceDisplay.innerHTML=computerchoice;
}

function getResult() {
    if(computerchoice===userchoice)
    {
        result="its a draw";
    }
    if(computerchoice==="rock" && userchoice==="paper")
    {
        result="you win";
    }
    if(computerchoice==="rock" && userchoice==="rock")
    {
        result="its a draw";
    }
    if(computerchoice==="rock" && userchoice==="scissors")
    {
        result="you lost";
    }
    if(computerchoice==="paper" && userchoice==="paper")
    {
        result="its a draw";
    }
    if(computerchoice==="paper" && userchoice==="rock")
    {
        result="you lost";
    }
    if(computerchoice==="paper" && userchoice==="scissors")
    {
        result="you win";
    }
    if(computerchoice==="scissors" && userchoice==="paper")
    {
        result="you lost";
    }
    if(computerchoice==="scissors" && userchoice==="rock")
    {
        result="you win";
    }
    if(computerchoice==="scissors" && userchoice==="scissors")
    {
        result="its a draw";
    }

    resultDisplay.innerHTML=result;
}