const mobileMenu = document.querySelector(".menu-mobile");
const navBar = document.querySelector(".nav-bar");
const nav = document.querySelectorAll("nav")[0];
const body = document.querySelector("body");
const emailUser = document.querySelector(".contact-email");
const sectionOurWorks = document.querySelector(".main-our-works");

//Interacion del Menu Mobile
mobileMenu.addEventListener("click", () => {
  navBar.classList.toggle("inactive");

  //Si el menu esta abierto ocultamos elementos html
  if (!navBar.classList.contains("inactive")) {
    nav.classList.add("side");
    body.style.overflow = "hidden";
    mobileMenu.style.marginInlineStart = "25px";
  }
  //si el menu esta cerrado volvemos hacer visible los elementos html
  else {
    nav.classList.remove("side");
    body.style.overflow = "auto";
    mobileMenu.style.marginInlineStart = "0px";
  }
});
// Dibuja nuevas tarjetas en la seccion de .main-our-works
function moreCardsOurWork() {
  event.preventDefault();
  const cardOurWork = ` <div class="our-work-cards-container">
    <div class="our-work-cards">
        <figure>
            <img src="./src/img/smarthome.jpg" alt="diseño de una pagina web">
        </figure>
        <div class="our-works-description">
            <p>Full stack application</p>
            <h3>Smart home dashboard</h3>
        </div>
    </div>
    <div class="our-work-cards">
        <figure>
            <img src="./src/img/onboard.png" alt="diseño de una pagina web">
        </figure>
        <div class="our-works-description">
            <p>UX/UI design</p>
            <h3>Onboard application</h3>
        </div>
    </div>
    <div class="our-work-cards">
        <figure>
            <img src="./src/img/booking.png" alt="diseño de una pagina web">
        </figure>
        <div class="our-works-description">
            <p>Mobile application</p>
            <h3>Booking system</h3>
        </div>
    </div>

    <div class="our-work-cards">
        <figure>
            <img src="./src/img/juice-product.png" alt="diseño de una pagina web">
        </figure>
        <div class="our-works-description">
            <p>Front End application</p>
            <h3>Juice product homepage</h3>
        </div>
    </div>
    <a href="" onclick="moreCardsOurWork()">see more</a> 
 </div>`;
  sectionOurWorks.innerHTML += cardOurWork;
  console.log(sectionOurWorks.childNodes);

  //logica eliminar el disparador del evento duplicado al dibujar las nuevas tarjetas
  const previousNode = sectionOurWorks.childNodes.length - 3;
  const btnSeeMore =
    sectionOurWorks.childNodes[previousNode].getElementsByTagName("a")[0];
  btnSeeMore.style.display = "none";
  console.log(btnSeeMore);
}
