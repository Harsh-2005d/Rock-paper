    
    function computerchoice(){
        let num = Math.random();
        if(num < 0.33){
            return 'rock';
        }
        else if (num < 0.66) {
            return 'paper';
        } else {
            return 'scissors';    
        }
    }
    
    function play(choice){
        let result;
        let human = choice;
        let comp = computerchoice();
    
        console.log("Computer chose: " + comp);
        console.log("You chose: " + human);
    
        if(human === comp){
            result= "It's a draw!";
        } else if((comp === 'rock' && human === 'scissors') || 
                  (comp === 'scissors' && human === 'paper') || 
                  (comp === 'paper' && human === 'rock')) {
            result="You lose!";
        } else {
            result= "You win!";
        }
        return `computer chose : ${comp} | you chose : ${human} | Result : ${result}`
    
    }
    const btn=  document.querySelectorAll("button")
    const body= document.querySelector("body")
    const div = document.createElement("div")
    body.appendChild(div) ;
        btn.forEach(button =>{
            button.onclick = () => {
                div.textContent=play(button.getAttribute("data-choice"));
                
            };

        }); 
         
    
    
