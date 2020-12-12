let number = document.getElementById("number");
let n = 0970000000;
let submit = document.getElementById("submit");
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

function noClick(){
  n = n + 1;
  number.innerHTML = n;
}

function yesClick(){
  yesBtn.disabled = true;
  noBtn.disabled = true;
  yesBtn.classList.add("not");
  noBtn.classList.add("not");
  submit.classList.add("show");
}