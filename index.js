document.querySelector(".buy-button").addEventListener("click", function () {
  let name = prompt("What is your name?");
  let email = prompt("whats your email address?");
  if (name.length) {
    alert("Thanks " + name + ",we will be in touch.");
  } else {
    alert("see you next time!");
  }
});
