let selector = "";

selector += "#age-verification-container";
selector += ", .age-verification-modal";
selector += ", #age-verification-wrapper";

let elements = document.querySelectorAll(selector);

for (let i = 0; i < elements.length; i++) {
  elements[i].remove();
}
