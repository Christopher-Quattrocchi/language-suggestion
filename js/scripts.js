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

  if (langSelect === "frontend") {
    if (appSelect === "mobileapp") {
      if (dogSelect === "canecorso") {
        if (catSelect === "bengal") {
          if (interestSelect === "gaming") {
            suggestion = "1";
          } else if (interestSelect === "automation") {
            suggestion = "2";
          }
        } else if (catSelect === "siberian") {
          if (interestSelect === "gaming") {
            suggestion = "3";
          } else if (interestSelect === "automation") {
            suggestion = "4";
          }
        }
      } else if (dogSelect === "goldenretriever") {
        if (catSelect === "bengal") {
          if (interestSelect === "gaming") {
            suggestion = "5";
          } else if (interestSelect === "automation") {
            suggestion = "6";
          }
        }
      }
    }
  }

  //attempt at branching with nested ifs
  // if (langSelect === "frontend") {
  //   if (appSelect === "mobileapp") {
  //     if (dogSelect === "canecorso") {
  //       if (catSelect === "bengal") {
  //         if (interestSelect === "gaming") {
  //           suggestion = "placeholder";
  //         } else if (interestSelect === "automation") {
  //           suggestion = "placeholder2";
  //         } else if (interestSelect === "bots") {
  //           suggestion = "placeholder3";
  //         } else if (interestSelect === "money") {
  //           suggestion = "placeholder4";
  //         }
  //       } else if (catSelect === "siberian") {
  //         if (interestSelect === "gaming") {
  //           suggestion = "placeholder5";
  //         } else if (interestSelect === "automation") {
  //           suggestion = "placeholder6";
  //         } else if (interestSelect === "bots") {
  //           suggestion = "placeholder7";
  //         } else if (interestSelect === "money") {
  //           suggestion = "placeholder8";
  //         }
  //       }
  //     } else if (dogSelect === "goldenretriever") {
  //       if (catSelect === "bengal") {
  //         if (interestSelect === "gaming") {
  //           suggestion = "placeholder9";
  //         } else if (interestSelect === "automation") {
  //           suggestion = "placeholder10";
  //         } else if (interestSelect === "bots") {
  //           suggestion = "placeholder11";
  //         } else if (interestSelect === "money") {
  //           suggestion = "placeholder12";
  //         }
  //       } else if (catSelect === "siberian") {
  //         if (interestSelect === "gaming") {
  //           suggestion = "placeholder13";
  //         } else if (interestSelect === "automation") {
  //           suggestion = "placeholder14";
  //         } else if (interestSelect === "bots") {
  //           suggestion = "placeholder15";
  //         } else if (interestSelect === "money") {
  //           suggestion = "placeholder16";
  //         }
  //       }
  //     }
  //   } else if (appSelect === "webapp") {
  //     if (dogSelect === "canecorso") {
  //       if (catSelect === "bengal") {
  //         if (interestSelect === "gaming") {
  //           suggestion = "placeholder17";
  //         } else if (interestSelect === "automation") {
  //           suggestion = "placeholder18";
  //         } else if (interestSelect === "bots") {
  //           suggestion = "placeholder19";
  //         } else if (interestSelect === "money") {
  //           suggestion = "placeholder20";
  //         }
  //       } else if (catSelect === "siberian") {
  //         if (interestSelect === "gaming") {
  //           suggestion = "placeholder21";
  //         } else if (interestSelect === "automation") {
  //           suggestion = "placeholder22";
  //         } else if (interestSelect === "bots") {
  //           suggestion = "placeholder23";
  //         } else if (interestSelect === "money") {
  //           suggestion = "placeholder24";
  //         }
  //       }
  //     } else if (dogSelect === "goldenretriever") {
  //       if (catSelect === "bengal") {
  //         if (interestSelect === "gaming") {
  //           suggestion = "placeholder25";
  //         } else if (interestSelect === "automation") {
  //           suggestion = "placeholder26";
  //         } else if (interestSelect === "bots") {
  //           suggestion = "placeholder27";
  //         } else if (interestSelect === "money") {
  //           suggestion = "placeholder28";
  //         }
  //       } else if (catSelect === "siberian") {
  //         if (interestSelect === "gaming") {
  //           suggestion = "placeholder29";
  //         } else if (interestSelect === "automation") {
  //           suggestion = "placeholder30";
  //         } else if (interestSelect === "bots") {
  //           suggestion = "placeholder31";
  //         } else if (interestSelect === "money") {
  //           suggestion = "placeholder32";
  //         }
  //   }
  // }
  let suggestionDiv = document.getElementById("suggestiondiv");
  suggestionDiv.classList.replace("hidden", "hideme");
  let suggestionPara = document.getElementById("suggestion");
  suggestionPara.innerHTML = suggestion.toString();

} //end saveChoice function

