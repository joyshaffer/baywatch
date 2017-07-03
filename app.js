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
    listItem.remove()

    //remove from the array
    const i = this.flicks.indexOf(flick)
    this.flicks.splice(i, 1)

    this.save()
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

      this.save()
  },

  moveUp(flick,ev) {
    const listItem = ev.target.closest('.flick')
    const flickArr = this.flicks[flickName.value]

    const index = flickArr.findIndex((currentFlick, i) => {
        return currentFlick.id === flick.id
    })

    if (index > 0) {
      this.list[flickName.value].insertBefore(listItem, listItem.previousElementSibling)

      const previousFlick = flickArr[index - 1]
      flickArr[index - 1] = flick
      flickArr[index] = previousFlick
      this.save()
    }
  },

  moveDown(flick, ev) {
    const listItem = ev.target.closest('.flick')
    const flickArr = this.flicks[flickName.value]

    const index = flickArr.findIndex((currentFlick, i) => {
        return currentFlick.id === flick.id
    })

    if (index < flickArr.length - 1) {
      this.list[flickName.value].insertBefore(listItem.nextElementSibling, listItem)
      
      const nextFlick = flickArr[index + 1]
      flickArr[index + 1] = flick
      flickArr[index] =  nextFlick
      this.save()
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
        .addEventListener(
            'click',
            this.removeFlick.bind(this, flick)
         )

    item
        .querySelector('button.fav')
        .addEventListener(
            'click',
            this.favFlick.bind(this, flick)
        )

    item
        .querySelector('button.up')
        .addEventListener(
            'click',
            this.moveUp.bind(this, flick)
        )

    item
        .querySelector('button.down')
        .addEventListener(
            'click',
            this.moveDown.bind(this, flick)
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

    f.reset()
  }
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
  templateSelector: '.flick.template',
})