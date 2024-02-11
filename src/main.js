import { formEL } from "./refs";
import { saveData } from "./api";
import { uid } from "uid";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEL.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const value = event.target.elements.message.value.trim();
  event.target.reset();
  saveData(makeObjectData(value));
  /*   console.log(event.currentTarget); */
}
function makeObjectData(value) {
  return { value, id: uid(), checked: false };
}
