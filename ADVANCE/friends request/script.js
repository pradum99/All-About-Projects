let istutes = document.querySelector("h5");
let addfriend = document.querySelector("#add");
let check = 0;

addfriend.addEventListener("click", () => {
  if (check == 0) {
    istutes.innerHTML = "Friends";
    istutes.style.color = "green";
    addfriend.innerHTML = "Remove Friend"
    check = 1;
  } else {
    istutes.innerHTML = "Stranger";
    istutes.style.color = "red";
    addfriend.innerHTML = "Add Friend"
    check = 0;
  }
});
