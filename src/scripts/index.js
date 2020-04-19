// The following import makes sure your styles are included in the project.
import "../styles/main.scss";

import "regenerator-runtime/runtime";
import { clock } from "./clock";

const $ = require("jquery");

clock();

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

// Navigation onclick highlight

$(".nav-links").click(function () {
  let navItems = $(".nav-links");

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove("active");
  }

  this.classList.add("active");
});

// Contact Form onclick highlight

$(".contact-wrapper .inputBox").click(function () {
  let contactLabel = $(".contact-wrapper .inputBox");

  for (let i = 0; i < contactLabel.length; i++) {
    contactLabel[i].classList.remove("selected");
  }

  this.classList.add("selected");
});

// Smooth scroll

$('a[href*="#"]').on("click", function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    500,
    "linear"
  );
});

// Navigation svg highlight on scroll

$(document).ready(function () {
  $(document).scroll(function () {
    let Scroll = $(window).scrollTop() + 1;
    let SectionOneOffset = $("#home-page").offset().top;
    let SectionTwoOffset = $("#about-page").offset().top;
    let SectionThreeOffset = $("#skills-page").offset().top;
    let SectionFourOffset = $("#projects-page").offset().top;
    let SectionFiveOffset = $("#contact-page").offset().top;

    if (Scroll >= SectionOneOffset) {
      $(".icon-home").addClass("active");
    } else {
      $(".icon-home").removeClass("active");
    }

    if (Scroll >= SectionTwoOffset) {
      $(".icon-about").addClass("active");
      $(".icon-home").removeClass("active");
    } else {
      $(".icon-about").removeClass("active");
    }

    if (Scroll >= SectionThreeOffset) {
      $(".icon-skills").addClass("active");
      $(".icon-about").removeClass("active");
    } else {
      $(".icon-skills").removeClass("active");
    }
    if (Scroll >= SectionFourOffset) {
      $(".icon-work").addClass("active");
      $(".icon-skills").removeClass("active");
    } else {
      $(".icon-work").removeClass("active");
    }
    if (Scroll >= SectionFiveOffset) {
      $(".icon-contact").addClass("active");
      $(".icon-work").removeClass("active");
    } else {
      $(".icon-contact").removeClass("active");
    }
  });
});