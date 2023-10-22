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

  //debug
  console.log(langSelect, appSelect, dogSelect, catSelect, interestSelect);

  //create suggestion var with a default value to be updated
  let suggestion = "HTML";

  //branching
  if (langSelect === "frontend") {
    if (appSelect === "mobileapp") {
      if (dogSelect === "canecorso") {
        if (catSelect === "bengal") {
          if (interestSelect === "gaming") {
            suggestion = "HTML 1";
          } else if (interestSelect === "automation") {
            suggestion = "CSS 2";
          }
        } else if (catSelect === "siberian") {
          if (interestSelect === "gaming") {
            suggestion = "JavaScript 3";
          } else if (interestSelect === "automation") {
            suggestion = "C# 4";
          }
        }
      } else if (dogSelect === "goldenretriever") {
        if (catSelect === "bengal") {
          if (interestSelect === "gaming") {
            suggestion = "Scala 5";
          } else if (interestSelect === "automation") {
            suggestion = "Lisp 6";
          } 
        } else if (catSelect === "siberian") {
          if (interestSelect === "gaming") {
            suggestion = "React 7";
          } else if (interestSelect === "automation") {
            suggestion = "Go 8";
          }
        }
      }
    } else if (appSelect === "webapp") {
      if (dogSelect === "canecorso") {
        if (catSelect === "bengal") {
          if (interestSelect === "gaming") {
            suggestion = "C++ 9";
          } else if (interestSelect === "automation") {
            suggestion = "Python 10";
          }
        } else if (catSelect === "siberian") {
          if (interestSelect === "gaming") {
            suggestion = "SQL 11";
          } else if (interestSelect === "automation") {
            suggestion = "jQuery 12";
          }
        }
      } else if (dogSelect === "goldenretriever") {
        if (catSelect === "bengal") {
          if (interestSelect === "gaming") {
            suggestion = "Java 13";
          } else if (interestSelect === "automation") {
            suggestion = "Ruby 14";
          }
        } else if (catSelect === "siberian") {
          if (interestSelect === "gaming") {
            suggestion = "PHP 15";
          } else if (interestSelect === "automation") {
            suggestion = "Rust 16";
          }
        }
      }
    }
  } else if (langSelect === "backend") {
    if (appSelect === "mobileapp") {
      if (dogSelect === "canecorso") {
        if (catSelect === "bengal") {
          if (interestSelect === "gaming") {
            suggestion = "ASP.net 17";
          } else if (interestSelect === "automation") {
            suggestion = "Swift 18";
          }
        } else if (catSelect === "siberian") {
          if (interestSelect === "gaming") {
            suggestion = "Node 19";
          } else if (interestSelect === "automation") {
            suggestion = "Haskell 20";
          }
        }
      } else if (dogSelect === "goldenretriever") {
        if (catSelect === "bengal") {
          if (interestSelect === "gaming") {
            suggestion = "COBOL 21";
          } else if (interestSelect === "automation") {
            suggestion = "R 22";
          }
        } else if (catSelect === "siberian") {
          if (interestSelect === "gaming") {
            suggestion = "TypeScript 23";
          } else if (interestSelect === "automation") {
            suggestion = "Kotlin 24";
          }
        }
      }
    } else if (appSelect === "webapp") {
      if (dogSelect === "canecorso") {
        if (catSelect === "bengal") {
          if (interestSelect === "gaming") {
            suggestion = "Angular 25";
          } else if (interestSelect === "automation") {
            suggestion = "Bootstrap 26";
          }
        } else if (catSelect === "siberian") {
          if (interestSelect === "gaming") {
            suggestion = "C 27";
          } else if (interestSelect === "automation") {
            suggestion = "Django 28";
          }
        }
      } else if (dogSelect === "goldenretriever") {
        if (catSelect === "bengal") {
          if (interestSelect === "gaming") {
            suggestion = "Flask 29";
          } else if (interestSelect === "automation") {
            suggestion = "SASS 30";
          }
        } else if (catSelect === "siberian") {
          if (interestSelect === "gaming") {
            suggestion = "Vue 31";
          } else if (interestSelect === "automation") {
            suggestion = "Ember 32";
          }
        }
      }
    }
  }

  //target and unhide hidden div
  let suggestionDiv = document.getElementById("suggestiondiv");
  suggestionDiv.classList.replace("hidden", "hideme");
  //put suggestion variable in hidden p tag
  let suggestionPara = document.getElementById("suggestion");
  suggestionPara.innerHTML = suggestion.toString();

} //end saveChoice function

