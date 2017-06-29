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

  renderListItem(flick) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = flick.id
    item
        .querySelector('.flick-name')
        .textContent = flick.name

    favButton.addEventListener('click', ()=>{
        if(item.style.backgroundColor == 'white') {
            item.style.backgroundColor = 'yellow'}
        else{item.style.backgroundColor = 'white'}})    
    delButton.addEventListener('click', ()=>{item.parentNode.removeChild(item)})

    return item
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
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