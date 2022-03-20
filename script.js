const langButtonEn = document.querySelector(".lang-en");
const langButtonRu = document.querySelector(".lang-ru");
const contentEn = document.querySelector(".en");
const contentRu = document.querySelector(".ru");
let lang = "en";

function changeLang (e) {
  setTimeout (()=>{
  const htmlTag = document.querySelector("html");
  if (htmlTag.lang == "en") {
    htmlTag.lang = "ru";
    lang = "ru";
    langButton = document.querySelector(".lang-ru");
    langButton.checked = true;
  } else if (htmlTag.lang == "ru") {
    htmlTag.lang = "en";
    lang = "en";
    langButton = document.querySelector(".lang-en");
    langButton.checked = false;
  }
  contentEn.classList.toggle("hidden");
  contentRu.classList.toggle("hidden");
  }, 600)
}

langButtonEn.addEventListener("click", changeLang);
langButtonRu.addEventListener("click", changeLang);