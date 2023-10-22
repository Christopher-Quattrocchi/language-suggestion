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
          }
        }
      }
    }
  }
let suggestionDiv = document.getElementById("suggestiondiv");
suggestionDiv.classList.replace("hidden", "hideme");
let suggestionPara = document.getElementById("suggestion");
suggestionPara.innerHTML = suggestion.toString();

} //end saveChoice function

