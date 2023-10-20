window.addEventListener("load", function () {
  const form = document.getElementById("lang-select");
  form.addEventListener("submit", saveChoice);
});

function saveChoice(event) {
  event.preventDefault();

  const fronthide = document.getElementById("front-end");
  fronthide.classList.replace("hideme", "hidden");
  const backhide = document.getElementById("back-end");
  backhide.classList.replace("hideme", "hidden");
  const fullhide = document.getElementById("full-stack");
  fullhide.classList.replace("hideme", "hidden");

  const mobilehide = document.getElementById("mobile-app");
  mobilehide.classList.replace("hideme", "hidden");
  const webhide = document.getElementById("web-app");
  webhide.classList.replace("hideme", "hidden");
  const deskhide = document.getElementById("desktop-app");
  deskhide.classList.replace("hideme", "hidden");

  const gaminghide = document.getElementById("gaming");
  gaminghide.classList.replace("hideme", "hidden");
  const autohide = document.getElementById("automation");
  autohide.classList.replace("hideme", "hidden");
  const bothide = document.getElementById("bots");
  bothide.classList.replace("hideme", "hidden");
  const moneyhide = document.getElementById("money");
  moneyhide.classList.replace("hideme", "hidden");
 
  // const div = document.getElementsByTagName("div");
  // div.classList.add("hidden");

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
    frontend.classList.replace("hidden", "hideme");
  } else if (langSelect === "backend") {
    let backend = document.getElementById("back-end");
    backend.classList.replace("hidden", "hideme");
  } else if (langSelect === "fullstack") {
    let fullstack = document.getElementById("full-stack");
    fullstack.classList.replace("hidden", "hideme");
  }
}

function displayAppSelect(appSelect) {
  if (appSelect === "mobileapp") {
    let mobileapp = document.getElementById("mobile-app");
    mobileapp.classList.replace("hidden", "hideme");
  } else if (appSelect === "webapp") {
    let webapp = document.getElementById("web-app");
    webapp.classList.replace("hidden", "hideme");
  } else if (appSelect === "deskapp") {
    let desktopapp = document.getElementById("desktop-app");
    desktopapp.classList.replace("hidden", "hideme");
  }
}

function displayInterestSelect(interestSelect) {
  if (interestSelect === "gaming") {
    let gaming = document.getElementById("gaming");
    gaming.classList.replace("hidden", "hideme");
  } else if (interestSelect === "automation") {
    let automation = document.getElementById("automation");
    automation.classList.replace("hidden", "hideme");
  } else if (interestSelect === "bots") {
    let bots = document.getElementById("bots");
    bots.classList.replace("hidden", "hideme");
  } else if (interestSelect === "money") {
    let gaming = document.getElementById("money");
    gaming.classList.replace("hidden", "hideme");
  }
}

