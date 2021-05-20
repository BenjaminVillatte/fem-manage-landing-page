export default class SlideShow {
  
  constructor(options = {}) {
    this.delay = options.delay ?? 5000
    this.itemsContainer = document.querySelector('.slideshow .items')
    this.controlsDots = document.querySelectorAll('.controls .dot')
    this.items = document.querySelectorAll('.slideshow .item')
    this.currentIndex = 0
    this.init()
    
    
    this.interval = setInterval(this.move, this.delay)
    window.addEventListener('resize', this.init)
  }

  move = () => {
    this.itemsContainer.style.left = (-1 * this.currentIndex * this.itemWidth)+'px'
    this.dotDisplay()
    this.currentIndex++
    if (this.currentIndex >= this.items.length) {
      this.currentIndex = 0
    }
  }

  init = () => {
    const itemStyle = getComputedStyle(this.items[0])
    this.itemWidth = this.items[0].offsetWidth + parseInt(itemStyle.marginLeft) + parseInt(itemStyle.marginRight)

    const slideshow = document.querySelector('.slideshow')
    const nbVisible = Math.ceil(slideshow.offsetWidth / this.itemWidth)

    this.itemsContainer.querySelectorAll('item.fake').forEach(function(el) {
      el.remove()
    })

    if (nbVisible > 1) {
      for (var i = 0 ; i < nbVisible ; i++) {
        const node = this.items[i].cloneNode(true)
        node.classList.add('fake')
        this.itemsContainer.appendChild(node)
      }
    }
    this.move()
  }

  dotDisplay = () => {
    this.controlsDots.forEach((dot, index) => {
      if (index === this.currentIndex) {
        dot.classList.add('active')
      } else {
        dot.classList.remove('active')
      }
      
    })
  }
}