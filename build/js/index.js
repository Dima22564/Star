"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var mySwiper2 = new Swiper('.feedback__slider', {
    speed: 400,
    spaceBetween: 100,
    scrollbar: {
      el: '.feedback__swiper-scrollbar',
      draggable: true
    },
    navigation: {
      nextEl: '.feedback__next',
      prevEl: '.feedback__prev'
    }
  });
  var mySwiper3 = new Swiper('.top-stars-slider', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 3,
    scrollbar: {
      // el: '.feedback__swiper-scrollbar',
      draggable: true
    },
    navigation: {
      nextEl: '.top-slider-next',
      prevEl: '.top-slider-prev'
    },
    pagination: {
      el: '.top-slider-pagination',
      // type: 'custom',
      // dynamicBullets: true,
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return "<div class=\"bullet-wrapper ".concat(className, "\"><span>").concat(index, "</span><div class=\"circle\"><div class=\"circle-inner\"></div></div></div>");
      },
      renderCustom: function renderCustom(swiper, current, total) {
        return "<div class=\"bullet-wrapper\">\n            <span class=\"current\">".concat(current, "</span>\n            <div class=\"circle\"><div class=\"circle-inner\"></div>\n          </div>");
      }
    },
    breakpoints: {
      1200: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 1
      },
      0: {
        slidesPerView: 1
      }
    }
  });
  mySwiper3.on('paginationUpdate', function (swiper, paginationEl) {
    var attr = $(paginationEl).find('.swiper-pagination-bullet-active').find('span').text();
    $(paginationEl).find('.bullet-wrapper').css({
      transform: "translateX(".concat(244 - +attr * 51, "px)")
    });
    console.log(_typeof(+attr));
  });
  $('.js-celebrate-items').slick({
    mobileFirst: true,
    arrows: false,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
      breakpoint: 768,
      settings: 'unslick'
    }]
  });
  $(window).on('resize', function () {
    $('.js-celebrate-items').slick('resize');
  });
  var mySwiper2 = new Swiper('.js-gallery-slider', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 2,
    scrollbar: {
      el: '.gallery-scrollbar',
      draggable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 1
      },
      0: {
        slidesPerView: 1
      }
    }
  });
});