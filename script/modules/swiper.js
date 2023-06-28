const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10,

    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });