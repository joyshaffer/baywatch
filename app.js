const app = {
  init(selectors) {
      this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)
    this.template = document.querySelector(selectors.templateSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },

  removeFlick(flick, ev) {
    //remove from the DOM
    const listItem = ev.target.closest('.flick')
    listItem.remove

    //remove from the array
    this.flicks.indexOf(flick)
    this.flicks.splice(i, 1)
  },

  favFlick(flick,ev) {
      const listItem = ev.target.closest('.flick')
      flick.fav = !flick.fav

      //flick.fav = listItem.classList.toggle('fav')
      
      if(flick.fav) {
        listItem.classList.add('fav')
      } else {
        listItem.classList.remove('fav')
      }
  },
  
  renderListItem(flick) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = flick.id
    item
        .querySelector('.flick-name')
        .textContent = flick.name

    item
        .querySelector('button.remove')
        .addEventListener('click',
         this.removeFlick.bind(this, flick))

    item
        .querySelector('button.fav')
        .addEventListener('click',

        )

    return item
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
      fav: false,
    }
    this.flicks.unshift(flick)

    const listItem = this.renderListItem(flick)
    this.list.insertBefore(listItem, this.list.firstElementChild)

    //this.flicks[flick.id - 1] = flick.Name
    this.max ++

    //resets the form--when you hit submit the text in the input goes away
    f.reset()
  }
}




app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
  templateSelector: '.flick.template',
})