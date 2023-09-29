import * as all from "./modules.js";
import { navBar } from "./navBar.js";

async function getData() {
  const res = await fetch("./data/data.json");
  const data = await res.json();
  let { prandes } = data;

  navBar(1);
  all.ShowSubscribe();
  all.showPrandes();
  all.sliderPrands(prandes);
  all.lastSection();
}

getData();

const tabsBtns = document.querySelectorAll(".tab__btns");
const tabscontainer = document.querySelectorAll(".tabs__content");

tabsBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    tabsBtns.forEach((Element) => {
      Element.classList.remove("active");
    });
    btn.classList.add("active");
    let contentID = btn.dataset.id;
    tabscontainer.forEach((item) => {
      item.classList.remove("active");
      if (item.id == contentID) {
        item.classList.add("active");
      }
    });
  });
});
