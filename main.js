import './css/reset.css'
import './css/style.css'
import SlideShow from './js/SlideShow'
import FormHandler from './js/FormHandler'

document.addEventListener('DOMContentLoaded', function() {

  const slideshow = new SlideShow({
    delay: 10000
  })

  const formHandler = new FormHandler()

  document.querySelector('.toggle-nav').addEventListener('click', function(e) {

    e.preventDefault()
    document.querySelector('body').classList.toggle('menu-opened')

  })

})