import * as all from "./modules.js";
const showNavBar = document.getElementById("navAndHeader");
let elementPosition = null;
export async function navBar(active, nameLink, scrolling = false) {
  let res = await fetch("./data/data.json");
  let data = await res.json();
  let { header, nav } = data;
  nav[4].nameLink = nameLink ? nameLink : "One Page";
  nameLink ? (nav[4].path = "index.html") : null;
  nav[0].activeation = false;
  nav[active].activeation = true;
  all.displayNavHeader(showNavBar);
  all.showHeaderData(header);
  all.ShowNAv(nav);
  if (scrolling) {
    navScroll();
    checkhight();
  }

  let navbar = document.getElementById("navBar");

  window.addEventListener("scroll", () => {
    if (scrollY >= 400) {
      navbar.classList.add("navScroll");
    } else {
      navbar.classList.remove("navScroll");
    }
  });
}

function navScroll() {
  let navitem = document.querySelectorAll(".nav-link");
  navitem.forEach((item) => {
    item.addEventListener("click", (e) => {
      navitem.forEach((element) => {
        element.classList.remove("active");
      });
      item.classList.add("active");
      if (item.textContent.trim() !== "Multi-Page") {
        e.preventDefault();
      }
      let id = item.dataset.id;
      let elementTarget = document.getElementById(id);
      elementPosition = elementTarget.offsetTop;

      window.scrollTo({
        top: elementPosition - 50,
      });
    });
  });
}
function checkhight() {
  let homeSection = document.getElementById("Home");
  let serviceSection = document.getElementById("service");
  let aboutSection = document.getElementById("AboutUs");
  let contactSection = document.getElementById("contactUS");
  getheight(homeSection);
  getheight(serviceSection);
  getheight(aboutSection);
  getheight(contactSection);
}

function getheight(element) {
  let navitem = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", () => {
    if (scrollY >= element.offsetTop) {
      navitem.forEach((item) => {
        item.classList.remove("active");
        if (item.dataset.id == element.id) {
          item.classList.add("active");
        }
      });
    }
  });
}
