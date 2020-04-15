// The following import makes sure your styles are included in the project.
import "../styles/main.scss";

import "regenerator-runtime/runtime";

const $ = require("jquery");

// const iconLinks = document.querySelectorAll(".nav-links");

// iconLinks.forEach((element, index) => {
//   element.addEventListener("click", () => {
//     console.log(element);
//     if (!svg[index].classList.contains("active")) {
//       svg[index].classList.add("active");
//     } else {
//       svg[index].classList.remove("active");
//     }
//   });
// });

// iconLinks.forEach((element) => {
//   let svgIcon = document.querySelectorAll(".nav-svg");
//   element.addEventListener("click", (e) => {
//     for (let i = 0; i < svgIcon.length; i++) {
//       svgIcon[i].classList.remove("active");
//     }

//     console.log(svgIcon);
//     svgIcon.classList.add("active");
//   });
// });

// $(document).ready(function () {
//   $("nav a").click(function () {
//     $(".nav-svg.active").removeClass("active");
//     $(this).addClass("active");
//   });
// });

$(".nav-links").click(function () {
  let navItems = $(".nav-links");

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove("active");
  }

  this.classList.add("active");
});
