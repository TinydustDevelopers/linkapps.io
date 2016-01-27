'use strict'

require('skeleton-css-webpack')
require('./main.css')
require('particles.js')

mixpanel.track('Page-Viewed')

particlesJS.load('particles', 'assets/particles.json', () => {
  const canvas = document.querySelector('canvas')
  const imageData = canvas.toDataURL('image/png')
  canvas.parentNode.removeChild(canvas)

  const whiteBackgroundStyle = `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${imageData})`
  const blueBackgroundStyle = `linear-gradient(rgba(45, 145, 238, 0.93), rgba(45, 145, 238, 0.93)), url(${imageData})`

  document.querySelector('.endless-block').style.backgroundImage = blueBackgroundStyle
  document.querySelector('.welcome-block').style.backgroundImage = whiteBackgroundStyle
  document.querySelector('.private-block').style.backgroundImage = whiteBackgroundStyle

  const btns = document.querySelectorAll('.btn-download')
  const downloadPanels = document.querySelectorAll('.download-panel')

  const iosBtns = document.querySelectorAll('.btn-download-ios')
  const androidBtns = document.querySelectorAll('.btn-download-android')

  for (let i = 0; i < iosBtns.length; i++) {
    iosBtns[i].addEventListener('click', event => {
      mixpanel.track('Download-Clicked', {platform: 'ios'})

      event.stopPropagation()
      window.open('https://itunes.apple.com/us/app/link-xiao-lu-shen-qi/id1074867619?l=zh&ls=1&mt=8')
    })
  }

  for (let i = 0; i < androidBtns.length; i++) {
    androidBtns[i].addEventListener('click', event => {
      mixpanel.track('Download-Clicked', {platform: 'android'})

      event.stopPropagation()
      window.open('https://dn-tinydust.qbox.me/builds/link-latest.apk')
    })
  }

  for (let i = 0; i < btns.length; i++) {
    let btn = btns[i]
    btn.addEventListener('click', event => {
      mixpanel.track('Download-Panel-Opened')

      event.stopPropagation()

      const downloadPanel = btn.nextSibling.nextSibling
      downloadPanel.style.display = 'block'
    })
  }

  document.body.addEventListener('click', event => {
    for (let i = 0; i < downloadPanels.length; i++) {
      let downloadPanel = downloadPanels[i]

      if (downloadPanel.style.display !== 'none') {
        downloadPanel.style.display = 'none'
      }
    }
  })
})
