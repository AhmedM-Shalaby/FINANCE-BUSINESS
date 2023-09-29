import * as all from "./modules.js";
const OurSolutionsHtml = document.querySelector(".Our__solutions");
let heightCounter = OurSolutionsHtml.offsetTop - OurSolutionsHtml.clientHeight;
let inSection = false;
let counterNumbers = [];
import { navBar } from "./navBar.js";
async function getData() {
  const res = await fetch("./data/data.json");
  const data = await res.json();
  let { OurSolutions, about, prandes } = data;
  navBar(4, "Multi-Page", true);
  all.Our__solutions(OurSolutionsHtml);
  all.ShowOurSolution(OurSolutions);
  all.showAboutUS(about);
  all.ShowSubscribe();
  all.showPrandes();
  all.sliderPrands(prandes);
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
