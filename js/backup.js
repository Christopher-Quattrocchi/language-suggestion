window.addEventListener("load", function () {
  const form = document.getElementById("lang-select");
  form.addEventListener("submit", saveChoice);
});

function saveChoice(event) {
  event.preventDefault();

  //hide former results
  const suggestionhide = document.getElementById("suggestion");
  suggestionhide.classList.replace("hideme", "hidden");

  //store user input
  const langSelect = document.getElementById("frontOrBack").value;
  const appSelect = document.getElementById("appSelect").value;
  const dogSelect = document.getElementById("dogSelect").value;
  const catSelect = document.getElementById("catSelect").value;
  const interestSelect = document.querySelector("input[name='interest']:checked").value;

  //testing
  console.log(langSelect, appSelect, dogSelect, catSelect, interestSelect);

  // return interestSelect;
  // displayLangStack(langSelect);
  // displayAppSelect(appSelect);
  // displayDogSelect(dogSelect);
  // displayCatSelect(catSelect);
  // displayInterestSelect(interestSelect);

  //default suggestion placeholder
  let suggestion = "HTML";

  //attempt at branching with nested ifs
  if (langSelect === "frontend") {
    if (appSelect === "mobileapp") {
      if (dogSelect === "canecorso") {
        if (catSelect === "bengal") {
          if (interestSelect === "gaming") {
            suggestion = "placeholder";
          } else if (interestSelect === "automation") {
            suggestion = "placeholder2";
          } else if (interestSelect === "bots") {
            suggestion = "placeholder3";
          } else if (interestSelect === "money") {
            suggestion = "placeholder4";
          }
        } else if (catSelect === "siberian") {
          if (interestSelect === "gaming") {
            suggestion = "placeholder5";
          } else if (interestSelect === "automation") {
            suggestion = "placeholder6";
          } else if (interestSelect === "bots") {
            suggestion = "placeholder7";
          } else if (interestSelect === "money") {
            suggestion = "placeholder8";
          }
        }
      } else if (dogSelect === "goldenretriever") {
        if (catSelect === "bengal") {
          if (interestSelect === "gaming") {
            suggestion = "placeholder9";
          } else if (interestSelect === "automation") {
            suggestion = "placeholder10";
          } else if (interestSelect === "bots") {
            suggestion = "placeholder11";
          } else if (interestSelect === "money") {
            suggestion = "placeholder12";
          }
        } else if (catSelect === "siberian") {
          if (interestSelect === "gaming") {
            suggestion = "placeholder13";
          } else if (interestSelect === "automation") {
            suggestion = "placeholder14";
          } else if (interestSelect === "bots") {
            suggestion = "placeholder15";
          } else if (interestSelect === "money") {
            suggestion = "placeholder16";
          }
        }
      }
    } else if (appSelect === "webapp") {
      if 
    }
  }
  let suggestionDiv = document.getElementById("suggestiondiv");
  suggestionDiv.classList.replace("hidden", "hideme");
  let suggestionPara = document.getElementById("suggestion");
  suggestionPara.innerHTML = suggestion.toString();

} //end saveChoice function

