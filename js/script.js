console.log("Witam serdecznie wszystkich developerów, którzy tutaj zaglądają! 🤩");

let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let body = document.documentElement;
let nextColorName = document.querySelector(".js-nextColorName")

changeBackgroundButton.addEventListener("click", () => {
  body.classList.toggle("body--grey");
  nextColorName.innerText = body.classList.contains("body--grey") ? "białe" : "szare";
});