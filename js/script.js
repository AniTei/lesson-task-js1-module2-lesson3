// Convert the following following code to use the `addEventListener` method:


const btn = document.querySelector(".btn");

btn.addEventListener("click", functionA)

function functionA() {
    console.log("I'm a button");

}
/////jeg klaret det helt på egenhånd!!! 


/* 
Add a click event using `addEventListener` to the second button.

In the event's function, display the character count from the input in the `b.count` element.

Make sure to remove all trailing and leading spaces (spaces at the beginning and end of the input's value).

 */
const greyButton = document.querySelector("form button");
const countDisplay = document.querySelector("form div b");
const inputArea = document.querySelector("form input");
//for some reason, I cant select the right element, 
//looked in the css file to see how they did it there, added form



function counting () {
    const numOfCharac = inputArea.value.trim().length;

    ////// THIS IS THE LINE THAT WET WRONG
    ////// MAKING A VARIABLE WAS CORRECT
    ////// = inputArea ok, NEVER NEEDED onkeyup, GO RIGHT TO value, trim () REMEMBER PARANTHESIS, .length;


// og trim 
// hvorfor får jeg null, men det kommer hvertfall et tall når jeg trykker på grå knapp
//jeg tror det er noe galt med tellinga, eller event

    countDisplay.innerHTML = numOfCharac;
}

greyButton.addEventListener("click", counting);



//hurra, antall tegn i boksen blir overført til telleren
//problem/mangler: 
//antallet skal vises når man trykker på grå knapp
//ta vekk mellomrom før og etter = trim
/* 
function functionB() {
    console.log("yoyoyo");
}
 */


//////FASIT


/* 
// Question 2
const input = document.querySelector("input"); OK
const countButton = document.querySelector("form button"); OK
const countOutput = document.querySelector("b.count"); OK I THINK




function countCharacters() {
    const characterCount = input.value.trim().length;
    ////// THIS IS WHAT WENT WRONG, I KNEW TO MAKE A VARIABLE, BUT NOT HOW TO GET THE LENGTH
    ////// NEVER NEEDED THE EVENT PTOPERTY
    countOutput.innerHTML = characterCount;
    //////  I HAD THIS ONE, BUT NOT SURE MY REFERING WORKS
}

countButton.addEventListener("click", countCharacters);
////// I HAD THIS ONE, BUT MY FUNCTION DIDNT WORK RIGHT

 */
