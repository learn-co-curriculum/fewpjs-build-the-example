const testVar = {}

testFunc()

function testFunc() {
  let likes = document.getElementsByClassName('like')
  for (let el of likes) {
    el.addEventListener('click', () => {
      let forceFailure = Math.random() < .2
      mimicServerCall('fakeurl', {forceFailure})
      .then(() => {
        let heart = el.getElementsByTagName('span')[0]
        heart.style.color = 'red'
        heart.textContent = '♥'
      })
      .catch(() => {
        document.write('sadness')
      })
    })
  }
}
