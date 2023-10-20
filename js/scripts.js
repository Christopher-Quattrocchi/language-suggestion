window.addEventListener("load", function () {
  const form = document.getElementById("lang-select");
  form.addEventListener("submit", saveChoice);
});

function saveChoice(event) {
  event.preventDefault();
  const div = document.getElementsByTagName("div");
  div.classList.add("hidden");

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
  displayAppSelect(appSelect);
  displayInterestSelect(interestSelect);
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

function displayAppSelect(appSelect) {
  if (appSelect === "mobileapp") {
    let mobileapp = document.getElementById("mobile-app");
    mobileapp.removeAttribute("class");
  } else if (appSelect === "webapp") {
    let webapp = document.getElementById("web-app");
    webapp.removeAttribute("class");
  } else if (appSelect === "deskapp") {
    let desktopapp = document.getElementById("desktop-app");
    desktopapp.removeAttribute("class");
  }
}

function displayInterestSelect(interestSelect) {
  if (interestSelect === "gaming") {
    let gaming = document.getElementById("gaming");
    gaming.removeAttribute("class");
  } else if (interestSelect === "automation") {
    let automation = document.getElementById("automation");
    automation.removeAttribute("class");
  } else if (interestSelect === "bots") {
    let bots = document.getElementById("bots");
    bots.removeAttribute("class");
  } else if (interestSelect === "money") {
    let gaming = document.getElementById("money");
    gaming.removeAttribute("class");
  }
}

