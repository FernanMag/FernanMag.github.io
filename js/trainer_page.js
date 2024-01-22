// Открыть модальное окно
document.getElementById("button-open").addEventListener("click", function (){
  document.getElementById("popup-overlay").classList.add("open")
})
// Закрыть модальное окно
document.getElementById("x-mark-popup-close").addEventListener("click", function() {
  document.getElementById("popup-overlay").classList.remove("open")
})


// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("popup-overlay").classList.remove("open")
  }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#popup-overlay .popup-trainer").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("popup-overlay").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});


// Открыть модальное окно (второе окно)
document.getElementById("popup-review-button").addEventListener("click", function (){
  document.getElementById("popup-overlay-review").classList.add("open")
})
// Закрыть модальное окно
document.getElementById("popup-review-close-button").addEventListener("click", function() {
  document.getElementById("popup-overlay-review").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("popup-overlay-review").classList.remove("open")
  }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#popup-overlay-review .popup-review-window").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("popup-overlay-review").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

var wrapper1 = new Swiper ('.popup-review-slider-line',{
  pagination: {
    el: '.popup-review'
  },
  navigation: {
    nextEl: '.arrows-trainer-1 .swiper-button-next',
    prevEl: '.arrows-trainer-1 .swiper-button-prev'},
  spaceBetween: 10,
  slidesPerView: 4,
  watchOverflow: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    }
  }

}
);
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





