const OurSolutionsHtml = document.querySelector(".Our__solutions");
let heightCounter = OurSolutionsHtml.offsetTop - OurSolutionsHtml.clientHeight;
let counterNumbers = [];
let inSection = false;
import * as all from "./modules.js";
import { navBar } from "./navBar.js";
async function getDataForJson() {
  let res = await fetch("./data/data.json");
  let data = await res.json();
  let { OurSolutions, about, prandes } = data;
  navBar(0);
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
getDataForJson();
