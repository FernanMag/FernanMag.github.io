
swiper2 = new Swiper('.image-mini-slider', {
  slidesPerView: 3,
  breakpoints: {
    561: {
      slidesPerView: 4,
      spaceBetween: 1,
    }
  }
});

wrapper1 = new Swiper('.image-slider', {
  navigation: {
    nextEl: '.arrows-slider-place .swiper-button-next',
    prevEl: '.arrows-slider-place .swiper-button-prev'},
  loop: true,
  thumbs: {
    swiper: swiper2,
  },
});


swiper3 = new Swiper ('.image-mini-slider-2', {
  slidesPerView: 3,
  breakpoints: {
    561: {
      slidesPerView: 4,
      spaceBetween: 1,
    }
  }
});

wrapper2 = new Swiper('.image-slider-2', {
  navigation: {
    nextEl: '.arrows-slider-place-2 .swiper-button-next',
    prevEl: '.arrows-slider-place-2 .swiper-button-prev'},
  loop: true,
  thumbs: {
    swiper: swiper3,
  },
});


swiper4 = new Swiper ('.image-mini-slider-3', {
  slidesPerView: 3,
  breakpoints: {
    561: {
      slidesPerView: 4,
      spaceBetween: 1,
    }
  }
});

wrapper3 = new Swiper('.image-slider-3', {
  navigation: {
    nextEl: '.arrows-slider-place-3 .swiper-button-next',
    prevEl: '.arrows-slider-place-3 .swiper-button-prev'},
  loop: true,
  thumbs: {
    swiper: swiper4,
  },
});




















var map;
DG.then(function() {
  map = DG.map('map', {
    'center': [43.168484, 131.92575],
    'zoom': 16
  });
  myIcon = DG.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25613.png',
    iconSize: [70, 50]
  });
  DG.marker([43.168484, 131.92575], {
    icon: myIcon
  }).addTo(map).bindLabel('СК Восход', {
    static: true
  });})
