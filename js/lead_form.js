// Открыть модальное окно
document.getElementById("form-button").addEventListener("click", function (){
  document.getElementById("popup-lead-form").classList.add("open")
})
document.getElementById("form-button-2").addEventListener("click", function (){
  document.getElementById("popup-lead-form").classList.add("open")
})
document.getElementById("form-button-3").addEventListener("click", function (){
  document.getElementById("popup-lead-form").classList.add("open")
})
document.getElementById("form-button-4").addEventListener("click", function (){
  document.getElementById("popup-lead-form").classList.add("open")
})
document.getElementById("form-button-5").addEventListener("click", function (){
  document.getElementById("popup-lead-form").classList.add("open")
})
// Закрыть модальное окно
document.getElementById("close-popup-lead-form").addEventListener("click", function() {
  document.getElementById("popup-lead-form").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("popup-lead-form").classList.remove("open")
  }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#popup-lead-form .lead_form_styles").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("popup-lead-form").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});



