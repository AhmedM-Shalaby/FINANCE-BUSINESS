function displayNavHeader(element) {
  element.innerHTML = `
  <div class="header__top d-none d-md-block">
      <div class="container">
        <div class="row justify-content-space-between">
          <div class="col-md-8 col-xs-12 ">
            <div class="info">
              <ul id="listInfo"></ul>
            </div>
          </div>
          <div class="col">
            <div class="social__media">
              <ul>
                <li class="list__info">
                  <i class="fa-brands fa-facebook"></i>
                </li>
                <li class="list__info">
                  <i class="fa-brands fa-twitter"></i>
                </li>
                <li class="list__info">
                  <i class="fa-brands fa-linkedin"></i>
                </li>
                <li class="list__info">
                  <i class="fa-brands fa-behance"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav id="navBar">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html">FINANCE BUSINESS
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="baricon"></span>
              <span class="baricon"></span>
              <span class="baricon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </nav>`;
}
function showHeaderData(arr) {
  let listInfo = document.getElementById("listInfo");
  let dataNav = arr.map((info) => {
    return `<li class="list__info">
      <a href="#">
        <i class="${info.icon}"></i>
        ${info.text}</a>
    </li>`;
  });
  listInfo.innerHTML = dataNav.join("");
}
function ShowNAv(Array) {
  let navbarList = document.querySelector(".navbar-nav ");
  let liLinkes = "";
  for (let i = 0; i < Array.length; i++) {
    if (Array[i].activeation) {
      liLinkes += `
        <li class="nav-item">
          <a class="nav-link active" data-ID="${Array[i].dataID}" aria-current="page" href="${Array[i].path}">${Array[i].nameLink}</a>
        </li>
        `;
    } else {
      liLinkes += `
        <li class="nav-item">
          <a class="nav-link"data-Id="${Array[i].dataID}" href="${Array[i].path}">${Array[i].nameLink}</a>
        </li>
        `;
    }
  }
  navbarList.innerHTML = liLinkes;
}
function Our__solutions(element) {
  element.innerHTML = `<div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6 ">
        <div class="left-content"></div>
      </div>
      <div class="col-lg-6 col-md-6 mt-5">
        <div class="counter">
          <div class="row" id="DataCount">
          </div>
        </div>
      </div>
    </div>
  </div>`;
}
function ShowOurSolution(obj) {
  const leftConect = document.querySelector(".left-content");
  const DataCount = document.getElementById("DataCount");
  leftConect.innerHTML = `
    <span>${obj.spanText}</span>
    <h2>${obj.HeadH2} <span> ${obj.SpecialHeadH2}</span></h2>
    <p>${obj.descriptionTop}
      <br>
      <br>${obj.descriptionBttom}
    </p>
    <a href="#" class="btnsGlobal">${obj.btnRead}</a>
    `;
  let data = obj.counter.map((item) => {
    return `<div class="col-lg-6 col-md-6">
      <div class="count">
        <p class="numCount">${item.numCount}</p>
        <span class="titleCount">${item.titleCount}</span>
      </div>
    </div>`;
  });
  DataCount.innerHTML = data.join("");
}
function counter(arr) {
  let numCount = document.querySelectorAll(".numCount");
  numCount.forEach((Element, index) => {
    Element.textContent = 0;
    let increasNumber = parseInt((5 / 100) * arr[index]);
    let CounerInceres = setInterval(() => {
      Element.textContent = +Element.textContent + increasNumber;
      if (+Element.textContent >= arr[index]) {
        Element.textContent = arr[index];
        clearInterval(CounerInceres);
      }
    }, 50);
  });
}
function showAboutUS(obj) {
  aboutsection.innerHTML = `<div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section__heading">
              <h2 class="heading"> ${obj.heading}
                <span class="special__word">${obj.headingSpecial}</span>
              </h2>
              <span class="special__Bottom">${obj.spanBottom}</span>
            </div>
          </div>
          <div class="col-md-12 mt-5">
            <div class="owl-carousel owl-theme" id="itemsAbout">
            </div>
          </div>
        </div>
      </div>`;
  ShowItemSliderAbout(obj.items);
}
function ShowItemSliderAbout(arr) {
  let itemsAbout = document.getElementById("itemsAbout");
  let items = arr.map((item) => {
    return `
      <div class="item">
        <div class="about__item">
          <div class="inner__content">
            <h4>${item.heading}</h4>
            <span>${item.span}</span>
            <p>${item.description}</p>
          </div>
        <img src="${item.img}" alt="placehold">
      </div>
    </div>    
      `;
  });
  itemsAbout.innerHTML = items.join("");
  $(".aboutUs .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
}
function ShowSubscribe() {
  const Subscribe = document.querySelector(".subscribe");
  Subscribe.innerHTML = `<div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section__heading">
              <h2 class="heading">Request a
                <span class="special__word">call back</span>
              </h2>
              <span class="special__Bottom">Etiam suscipit ante a odio consequat</span>
            </div>
          </div>
          <div class="col-md-12">
            <div class="contact__form mt-5">
              <form id="contact" action="" method="post">
                <div class="row">
                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <div>
                      <input name="name" type="text" class="form-control" id="name" placeholder="Full Name"="">
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <div>
                      <input name="email" type="text" class="form-control" id="email" pattern="[^ @]*@[^ @]*"
                        placeholder="E-Mail Address">
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <div>
                      <input name="subject" type="text" class="form-control" id="subject" placeholder="Subject">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div>
                      <textarea name="message" rows="6" class="form-control" id="message"
                        placeholder="Your Message"></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div>
                      <button type="submit" id="form-submit" class="btnsGlobal">Send Message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>`;
}
function showPrandes() {
  const prandes = document.querySelector(".prandes");
  prandes.innerHTML = `<div class="container">
        <div class="owl-carousel owl-theme" id="sliderprand">
          
        </div>
      </div>`;
}
function sliderPrands(arr) {
  const sliderPrand = document.getElementById("sliderprand");
  let prand = arr.map((Element) => {
    return ` <div class="item">
      <div class="img__Client">
        <img src="${Element}" alt="client">
      </div>
    </div>`;
  });
  sliderPrand.innerHTML = prand.join("");
  $(".prandes .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      567: {
        items: 2,
      },
      992: {
        items: 4,
      },
    },
  });
}

function lastSection() {
  let lastSectionHtml = document.getElementById("last__Section");
  lastSectionHtml.innerHTML = `<footer>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h4 class="footerHeading">Finance Business</h4>
          <p class="footer__text">Vivamus tellus mi. Nulla ne cursus elit,vulputate. Sed ne cursus augue hasellus
            lacinia sapien vitae.</p>
          <ul class="social-icons">
            <li class="list__info"><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            <li class="list__info"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li class="list__info"><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            <li class="list__info"><a href="#"><i class="fa-brands fa-behance"></i></a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4 class="footerHeading">Useful Links</h4>
          <ul>
            <li class="listFoot"><a href="#">Vivamus ut tellus mi</a></li>
            <li class="listFoot"><a href="#">Nulla nec cursus elit</a></li>
            <li class="listFoot"><a href="#">Vulputate sed nec</a></li>
            <li class="listFoot"><a href="#">Cursus augue hasellus</a></li>
            <li class="listFoot"><a href="#">Lacinia ac sapien</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4 class="footerHeading">Additional Pages</h4>
          <ul class="menu-list">
            <li class="listFoot"><a href="#">About Us</a></li>
            <li class="listFoot"><a href="#">How We Work</a></li>
            <li class="listFoot"><a href="#">Quick Support</a></li>
            <li class="listFoot"><a href="#">Contact Us</a></li>
            <li class="listFoot"><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4 class="footerHeading">Contact Us</h4>
          <div class="contact__info">
            <form action="#">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div>
                    <input name="name" type="text" class="form-control" id="name" placeholder="Full Name">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div>
                    <input name="email" type="text" class="form-control" id="email" placeholder="E-Mail Address">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div>
                    <textarea name="message" rows="6" class="form-control" id="message"
                      placeholder="Your Message"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div>
                    <button type="submit"  class="btnsGlobal">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="last__Section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p>Copyright © 2020 Financial Business Co., Ltd.- Design: <a href="#">TemplateMo</a></p>
        </div>
      </div>
    </div>
  </div>`;
  let btnSubmit = document.querySelectorAll("button[type = submit]");
  btnSubmit.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
}
const aboutsection = document.querySelector(".aboutUs");
export {
  displayNavHeader,
  showHeaderData,
  ShowNAv,
  Our__solutions,
  counter,
  showAboutUS,
  ShowOurSolution,
  ShowSubscribe,
  showPrandes,
  sliderPrands,
  lastSection,
  aboutsection,
};
