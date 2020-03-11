var answer1Text = document.querySelector("#submitBtn");
var initialsObj = document.querySelector("#initials");

function submitBtn() {
  console.log(initialsObj);
  initials = initialsObj.value;

  if (initials) {
    localStorage.setItem("initials", initials);
  } else {
    alert("You must enter in your initials to be added");
  }
}

submitBtn.addEventListener("click", submitBtn());
