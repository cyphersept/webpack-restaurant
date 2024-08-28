import "./styles.css";
import { greeting } from "./greetings.js";
import pmmm from "./pmmm.gif";

const img = document.createElement("img");
img.src = pmmm;
console.log(greeting);
document.body.append(img);
