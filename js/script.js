{
  const welcome = () => {
    console.log("Witam serdecznie wszystkich developerów, którzy tutaj zaglądają! 🤩");
  }

  const toggleBackground = () => {
    const body = document.documentElement;
    const nextColorName = document.querySelector(".js-nextColorName")

    body.classList.toggle("body--grey");
    nextColorName.innerText = body.classList.contains("body--grey") ? "białe" : "szare";
  };

  const init = () => {
    const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
    changeBackgroundButton.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}