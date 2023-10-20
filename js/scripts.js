window.addEventListener("load", function () {
  const form = document.getElementById("lang-select");
  form.addEventListener("submit", saveChoice);
});

function saveChoice(event) {
  event.preventDefault();
  // console.log(event);
  // console.log(event.target);


  const langSelect = document.getElementById("frontOrBack").value;
  // return langSelect;

  const appSelect = document.getElementById("appSelect").value;
  // return appSelect;

  const interestSelect = document.querySelector("input[name='interest']:checked").value;

  console.log(langSelect, appSelect, interestSelect);


  // return interestSelect;
  displayLangStack(langSelect);
}


function displayLangStack(langSelect) {
  if (langSelect === "frontend") {
    let frontend = document.getElementById("front-end");
    frontend.removeAttribute("class");
  } else if (langSelect === "backend") {
    let backend = document.getElementById("back-end");
    backend.removeAttribute("class");
  } else if (langSelect === "fullstack") {
    let fullstack = document.getElementById("full-stack");
    fullstack.removeAttribute("class");
  }
}