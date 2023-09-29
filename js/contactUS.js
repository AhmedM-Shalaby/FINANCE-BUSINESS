import * as all from "./modules.js";
import { navBar } from "./navBar.js";
async function getData() {
  const res = await fetch("./data/data.json");
  const data = await res.json();
  let { prandes } = data;

  navBar(3);
  all.ShowSubscribe();
  all.showPrandes();
  all.sliderPrands(prandes);
  all.lastSection();
}
getData();
