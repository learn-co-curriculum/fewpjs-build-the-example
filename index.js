const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

testFunc()

function testFunc() {
  let likes = document.getElementsByClassName('like')
  for (let el of likes) {
    el.addEventListener('click', () => {
      const heart = el.getElementsByTagName('span')[0]
      const modal = document.getElementById('modal')
      const modalMessage = document.getElementById('modal-message')

      if (heart.textContent === FULL_HEART) {
        heart.textContent = EMPTY_HEART
        heart.style.color = ''
        return
      }

      mimicServerCall()
      .then(() => {
        heart.style.color = 'red'
        heart.textContent = FULL_HEART
      })
      .catch(error => {
        modal.classList.remove('hidden')
        modalMessage.textContent = error 

        setTimeout(() => {
          modal.classList.add('hidden')
        }, 5000)
      })
    })
  }
}
