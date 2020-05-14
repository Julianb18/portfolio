// The following import makes sure your styles are included in the project.
import "../styles/main.scss";

import "regenerator-runtime/runtime";
import { clock } from "./clock";

const $ = require("jquery");

clock();

// Navigation onclick highlight

$(".nav-links").click(function () {
  let navItems = $(".nav-links");

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove("active");
  }

  this.classList.add("active");
});

// Navigation svg highlight on scroll

$(document).ready(function () {
  $(document).scroll(function () {
    let Scroll = $(window).scrollTop() + 1;
    let SectionOneOffset = $("#home-page").offset().top;
    // let SectionTwoOffset = $("#about-page").offset().top;
    let SectionTwoOffset = $("#skills-page").offset().top;
    let SectionThreeOffset = $("#projects-page").offset().top;
    let SectionFourOffset = $("#contact-page").offset().top;
    // let SectionFiveOffset = $("#contact-page").offset().top;

    if (Scroll >= SectionOneOffset) {
      $(".icon-home").addClass("active");
    } else {
      $(".icon-home").removeClass("active");
    }

    if (Scroll >= SectionTwoOffset) {
      $(".icon-skills").addClass("active");
      $(".icon-home").removeClass("active");
    } else {
      $(".icon-skills").removeClass("active");
    }

    if (Scroll >= SectionThreeOffset) {
      $(".icon-work").addClass("active");
      $(".icon-skills").removeClass("active");
    } else {
      $(".icon-work").removeClass("active");
    }
    if (Scroll >= SectionFourOffset) {
      $(".icon-contact").addClass("active");
      $(".icon-work").removeClass("active");
    } else {
      $(".icon-contact").removeClass("active");
    }
    // if (Scroll >= SectionFiveOffset) {
    //   $(".icon-contact").addClass("active");
    //   $(".icon-work").removeClass("active");
    // } else {
    //   $(".icon-contact").removeClass("active");
    // }
  });
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
