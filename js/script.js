    /* Card Slider - Swiper */
    var cardSlider = new Swiper('.card-slider', {
      autoplay: {
              delay: 4000,
              disableOnInteraction: false
      },
          loop: true,
          navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 3,
      spaceBetween: 20,
          breakpoints: {
              // when window is <= 992px
              992: {
                  slidesPerView: 2
              },
              // when window is <= 768px
              768: {
                  slidesPerView: 1
              } 
          }
      });
  

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

//   // Gallery
// var gallerySwiper = new Swiper(".gallery", {
//   slidesPerView: 3,
//   spaceBetween: 25,
//   loop: true,
//   centerSlide: true,
//   grabCursor: true,
//   pagination: {
//     el: ".gallery .swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".gallery .swiper-button-next",
//     prevEl: ".gallery .swiper-button-prev",
//   },
//   breakpoints:{
//     0: {
//       slidesPerView: 1,
//     },
//     520: {
//       slidesPerView: 2,
//     },
//     950: {
//       slidesPerView: 3,
//     },
//   },
// });

// // Testimonials
// var testimonialSwiper = new Swiper(".testimonials", {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   loop: true,
//   grabCursor: true,
//   pagination: {
//     el: ".testimonials .swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".testimonials .swiper-button-next",
//     prevEl: ".testimonials .swiper-button-prev",
//   },
// });
