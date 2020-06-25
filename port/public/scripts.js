// const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
// const fullModal = document.querySelector('.full-modal')
// const fullExitMotal = document.querySelector('.full-exit-modal')
// fullExitMotal.classList.add('full-option-off')

for(let card of cards) {
  card.addEventListener("click", () => {
    const videoId = card.getAttribute('id')
    window.location.href = `/videos/${videoId}`
    // modalOverlay.classList.add("active")
    // modalOverlay.querySelector('iframe').src =`https://www.youtube.com/embed/${videoId}`
  })
}

// document.querySelector('.close-modal')
//   .addEventListener("click", () => {
//     modalOverlay.classList.remove("active")
//     modalOverlay.querySelector('iframe').src = ""
// })

// fullModal.addEventListener("click", () => {
//     modalOverlay.querySelector('.modal').classList.add('full-screen')
//     modalOverlay.querySelector('iframe').classList.add('full-screen')
//     fullModal.classList.add('full-option-off')
//     fullExitMotal.classList.remove('full-option-off')
// })

// fullExitMotal.addEventListener("click", () => {
//     modalOverlay.querySelector('.modal').classList.remove('full-screen')
//     modalOverlay.querySelector('iframe').classList.remove('full-screen')
//     fullModal.classList.remove('full-option-off')
//     fullExitMotal.classList.add('full-option-off')
// })
