var submitBtn = document.querySelector("#submitBtn");
var initialsObj = document.querySelector("#initials");

function loadInitials() {
  console.log(initialsObj);
  initials = initialsObj.value;

  if (initials) {
    localStorage.setItem("initials", initials);
    localStorage.setItem("initials", initials);
  } else {
    alert("You must enter in your initials to be added");
  }
}

submitBtn.addEventListener("click", loadInitials);
