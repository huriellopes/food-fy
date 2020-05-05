const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')
const closeModal = document.querySelector('.close-modal')

for (let card of cards) {
  card.addEventListener('click', () => {
    // Dados do card
    const fotoID = card.querySelector('img').src
    const title = card.querySelector('h5.card-title').textContent
    const author = card.querySelector('p.card-author').textContent

    modalOverlay.querySelector('img').src = `${fotoID}`
    modalOverlay.querySelector('p.modal-title').innerHTML = title
    modalOverlay.querySelector('p.modal-author').innerHTML = author

    modalOverlay.classList.add('active')
  })
}

closeModal.addEventListener('click', () => {
  modalOverlay
    .classList
    .remove('active')
})