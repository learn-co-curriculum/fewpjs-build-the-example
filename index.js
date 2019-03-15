const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

testFunc()

function testFunc() {
  let likes = document.getElementsByClassName('like')
  for (let el of likes) {
    el.addEventListener('click', () => {
      let heart = el.getElementsByTagName('span')[0]

      if (heart.textContent === FULL_HEART) {
        heart.textContent = EMPTY_HEART
        heart.style.color = ''
        return
      }

      let forceFailure = Math.random() < .2
      mimicServerCall('fakeurl', {forceFailure})
      .then(() => {
        let heart = el.getElementsByTagName('span')[0]
        heart.style.color = 'red'
        heart.textContent = FULL_HEART
      })
      .catch(() => {
        document.write('sadness')
      })
    })
  }
}
