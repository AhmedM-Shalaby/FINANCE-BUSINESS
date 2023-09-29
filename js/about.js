const OurSolutionsHtml = document.querySelector(".Our__solutions");
let heightCounter = OurSolutionsHtml.offsetTop - OurSolutionsHtml.clientHeight;
let counterNumbers = [];
let inSection = false;
import * as all from "./modules.js";
import { navBar } from "./navBar.js";
async function getData() {
  const res = await fetch("./data/data.json");
  let data = await res.json();
  let { OurSolutions, about } = data;
  navBar(2);
  all.Our__solutions(OurSolutionsHtml);
  all.ShowOurSolution(OurSolutions);
  all.showAboutUS(about);
  all.lastSection();
  for (let index = 0; index < OurSolutions.counter.length; index++) {
    counterNumbers.push(OurSolutions.counter[index].numCount);
  }
  window.addEventListener("scroll", () => {
    if (scrollY > heightCounter) {
      if (!inSection) {
        all.counter(counterNumbers);
      }
      inSection = true;
    }
  });
}
getData();
