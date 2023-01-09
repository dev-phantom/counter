const addBtn = document.querySelector(".add");
const display = document.querySelector(".display");
const subtractBtn = document.querySelector(".subtract");
let i = 0

//event listener for the elements
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);


// functions for the event listeners
function add() {
  i++;
  display.innerHTML = i;
}
function subtract(){
  i--;
  display.innerHTML = i;
  if (i == 0) {
    i =0
    alert("opps i can't move backwards again")
    return false
  }
}
