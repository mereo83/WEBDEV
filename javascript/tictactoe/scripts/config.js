/* This file is responsible related to configuring players.*/

function OpenPlayerConfig(event){
    playerConfigOverlayElement.style.display="flex";
    backdropElement.style.display="block";
    inputFormElement.classList.remove("inputerror");
    errorOutputElement.textContent="";
    inputFormElement.value="";
    const selectedPlayerId=+event.target.dataset.playerid;//adding "+" in front of a value will convert it into a number, as here string will be converted to number. 
    editedPlayer=selectedPlayerId;
    
}

function closePlayerConfig(event){
    playerConfigOverlayElement.style.display="none";
    backdropElement.style.display="none";
    inputFormElement.classList.remove("inputerror");
    formElement.firstElementChild.lastElementChild.value="";
}

/* Player data handling from form submissions */

function savePlayerConfig(event){
event.preventDefault();
const formData=new FormData(event.target);
const enteredPlayerName=formData.get("Playername").trim();//Playername is the name of input field     
//trim(): it trims extra whitespaces:"   max schwarz  " --> "max schwarz"

//Adding extra validation to form elements in javascript
//for ex: if user only types whitespaces then the form should not be submitted, 
// adding required attribute to input element will also consider whitespaces as input so
// in order to avoid it, we will add some logic 

if(!enteredPlayerName){//enteredPlayerName===" "(empty string) is taken as falsy value
errorOutputElement.style.color="red";
inputFormElement.classList.add("inputerror");
errorOutputElement.textContent="Please enter a valid name!";
return;//it will not allow execution of code written after return statement.
}
else{//for closing the overlay element when the form is submitted
    playerConfigOverlayElement.style.display="none";
    backdropElement.style.display="none";
    inputFormElement.classList.remove("inputerror");
    
}

//selecting the editedPlayer data and changing the player name.
    
const updatedPlayerDataElement=document.getElementById("player-" +editedPlayer+"-data");
updatedPlayerDataElement.children[1].textContent=enteredPlayerName;

players[editedPlayer-1].name=enteredPlayerName;

//Or you can also use the more concise logic below

// if(editedPlayer===1){
//     players[0].name=enteredPlayerName;
// }
// else{
//     players[1].name=enteredPlayerName;
// }

}


/*It will prevent the default behaviour of the event submit 
which is to send a HTTP request to the server and it will 
reload after the event submit happens*/

// console.log(event)

