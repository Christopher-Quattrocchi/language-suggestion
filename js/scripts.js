window.addEventListener("load", function () {
  const form = document.getElementById("lang-select");
  form.addEventListener("submit", saveChoice);
});

function saveChoice(event) {
  event.preventDefault();

  //hide former results
  const suggestionhide = document.getElementById("suggestion");
  suggestion.classList.replace("hideme", "hidden");
  
  //store user input
  const langSelect = document.getElementById("frontOrBack").value;
  const appSelect = document.getElementById("appSelect").value;
  const dogSelect = document.getElementById("dogSelect").value;
  const catSelect = document.getElementById("catSelect").value;
  const interestSelect = document.querySelector("input[name='interest']:checked").value;

  //testing
  console.log(langSelect, appSelect, dogSelect, catSelect, interestSelect);

  // return interestSelect;
  displayLangStack(langSelect);
  displayAppSelect(appSelect);
  displayDogSelect(dogSelect);
  displayCatSelect(catSelect);
  displayInterestSelect(interestSelect);

  //default suggestion placeholder
  let suggestion = "HTML";

  //attempt at branching with nested ifs
  if (langSelect === "frontend") {
    if (appSelect === "mobileapp") {
      if (dogSelect === "canecorso") {
        if (catSelect === "bengal") {
          if (interestSelect === "gaming") {
            suggestion = "placeholder";
          }
        }
      }
    }
  }

let suggestionDiv = document.getElementById("suggestion");
suggestionDiv.innerHTML = suggestion;

} //end saveChoice function

//get rid of this nonsense next
// function displayLangStack(langSelect) {
//   if (langSelect === "frontend") {
//     let frontend = document.getElementById("front-end");
//     frontend.classList.replace("hidden", "hideme");
//   } else if (langSelect === "backend") {
//     let backend = document.getElementById("back-end");
//     backend.classList.replace("hidden", "hideme");
//   } else if (langSelect === "fullstack") {
//     let fullstack = document.getElementById("full-stack");
//     fullstack.classList.replace("hidden", "hideme");
//   }
// }

// function displayAppSelect(appSelect) {
//   if (appSelect === "mobileapp") {
//     let mobileapp = document.getElementById("mobile-app");
//     mobileapp.classList.replace("hidden", "hideme");
//   } else if (appSelect === "webapp") {
//     let webapp = document.getElementById("web-app");
//     webapp.classList.replace("hidden", "hideme");
//   } else if (appSelect === "deskapp") {
//     let desktopapp = document.getElementById("desktop-app");
//     desktopapp.classList.replace("hidden", "hideme");
//   }
// }

// function displayDogSelect(dogSelect) {
//   if (dogSelect === "canecorso") {
//     let corso = document.getElementById("corso");
//     corso.classList.replace("hidden", "hideme");
//   } else if (dogSelect === "goldenretriever") {
//     let golden = document.getElementById("golden");
//     golden.classList.replace("hidden", "hideme");
//   }
// }

// function displayCatSelect(catSelect) {
//   if (catSelect === "bengal") {
//     let bengal = document.getElementById("bengal");
//     bengal.classList.replace("hidden", "hideme");
//   } else if (catSelect === "siberian") {
//     let siberian = document.getElementById("siberian");
//     siberian.classList.replace("hidden", "hideme");
//   }
// }



// function displayInterestSelect(interestSelect) {
//   if (interestSelect === "gaming") {
//     let gaming = document.getElementById("gaming");
//     gaming.classList.replace("hidden", "hideme");
//   } else if (interestSelect === "automation") {
//     let automation = document.getElementById("automation");
//     automation.classList.replace("hidden", "hideme");
//   } else if (interestSelect === "bots") {
//     let bots = document.getElementById("bots");
//     bots.classList.replace("hidden", "hideme");
//   } else if (interestSelect === "money") {
//     let gaming = document.getElementById("money");
//     gaming.classList.replace("hidden", "hideme");
//   }
// }

