require('skeleton-css-webpack')
require('./main.css')
require('particles.js')

particlesJS.load('particles', 'assets/particles.json', () => {
  var canvas = document.querySelector('canvas')
  var imageData = canvas.toDataURL('image/png')
  canvas.parentNode.removeChild(canvas)

  var whiteBackgroundStyle = `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${imageData})`
  var blueBackgroundStyle = `linear-gradient(rgba(45, 145, 238, 0.93), rgba(45, 145, 238, 0.93)), url(${imageData})`

  document.querySelector('.endless-block').style.backgroundImage = blueBackgroundStyle
  document.querySelector('.welcome-block').style.backgroundImage = whiteBackgroundStyle
  document.querySelector('.private-block').style.backgroundImage = whiteBackgroundStyle
})
