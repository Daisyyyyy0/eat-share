const carouselSwiper = new Swiper('#carousel', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // 方塊轉場
    // effect:'cube',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


