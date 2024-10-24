const pc = document.getElementById("computerchoice");
const player = document.getElementById("playerchoice");
const who = document.getElementById("win");

const displayoption = document.querySelectorAll("button")

let computer;
let user;
let result;

displayoption.forEach((paremeter) => paremeter.addEventListener("click", (a) =>{
user = a.target.value
player.innerHTML = user

}))

console.log(displayoption)