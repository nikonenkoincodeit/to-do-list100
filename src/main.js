import { formEL, listEl } from "./refs";
import { saveData, getData } from "./api";
import { uid } from "uid";
import { createMarkup } from "./markup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEL.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const value = event.target.elements.message.value.trim();
  event.target.reset();
  const data = makeObjectData(value);
  saveData(data);
  const markup = createMarkup([data]);
  addMarkup(markup);
  /*   console.log(event.currentTarget); */
}
function makeObjectData(value) {
  return { value, id: uid(), checked: false };
}

function addMarkup(markup) {
  listEl.insertAdjacentHTML("beforeend", markup);
}

function init() {
  const data = getData();
  if (data.length === 0) {
    return;
  }
  const markup = createMarkup(data);
  addMarkup(markup);
}
init();
