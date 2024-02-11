import { formEL } from "./refs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEL.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const value = event.target.elements.message.value.trim();
  event.target.reset();

  /*   console.log(event.currentTarget); */
}
