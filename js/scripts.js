window.addEventListener("load", function() {
  const form = document.getElementById("lang-select");
  form.addEventListener("submit", selectLang);
});

function selectLang(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  

  const langSelect = document.getElementById("frontOrBack").value;
  console.log(langSelect);

  const appSelect = document.getElementById("appSelect").value;
  console.log(appSelect);
  
  const interestSelect = document.querySelector("input[name='interest']:checked").value;
  console.log(interestSelect);
}