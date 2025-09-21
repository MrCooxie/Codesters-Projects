const randomNum = Math.floor(Math.random() * 9) + 1;//Random number between 1-9
console.log(randomNum); //For testing purposes
for(let i = 1; i <= 9; i++){ //Expect that there are 9 boxes
    const msg = document.getElementById("state-message");
    if(randomNum == i){
        document.getElementById("c-" + i).onclick = function(){
            msg.innerHTML = "You found the treasure!";
        };
    } else {
        document.getElementById("c-" + i).onclick = function(){
            msg.innerHTML = "Try again!";
        }
    }
}
document.getElementById("reset-button").onclick = function(){
    location.reload();
}

