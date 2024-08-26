const loader = document.querySelector('#loader')
const video = document.querySelector('.video')
const btn = document.querySelector('button')
let img = document.querySelector('button img')

btn.addEventListener("click", () => {
  if(btn.classList.contains('pause')){
    btn.classList.remove('pause')
    video.play()
    img.src = './pause.svg'
  }
  else {
    btn.classList.add('pause')
    video.pause()
    img.src = './play.svg'
  }
})


window.addEventListener('load', () => {
  loader.style.zIndex = '-999'
})