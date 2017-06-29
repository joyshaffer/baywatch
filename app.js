const app = {
  init(selectors) {
      this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },

  renderListItem(flick) {
    const item = document.createElement('li')
    item.textContent = flick.name
    item.style.backgroundColor = "white"

    //create buttons
    const favButton = document.createElement('button')
    const delButton = document.createElement('button')
    favButton.textContent = 'fav'
    delButton.textContent = 'delete'

    //style fav button
    favButton.style.backgroundColor = 'dodgerblue'
    favButton.style.position = 'absolute'
    favButton.style.right = '230px'
    favButton.style.height = '25px'
    favButton.style.width = '60px'

    //style del button
    delButton.style.backgroundColor = 'red'
    delButton.style.position = 'absolute'    
    delButton.style.right = '290px'
    delButton.style.height = '25px'
    delButton.style.width = '60px'

    favButton.addEventListener('click', ()=>{
        if(item.style.backgroundColor == 'white') {
            item.style.backgroundColor = 'yellow'}
        else{item.style.backgroundColor = 'white'}})    
    delButton.addEventListener('click', ()=>{item.parentNode.removeChild(item)})

    item.appendChild(favButton)
    item.appendChild(delButton)
    return item
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
    }

    const listItem = this.renderListItem(flick)
    this.list.appendChild(listItem)
    this.flicks[flick.id - 1] = flick.Name
    this.max ++
  }
}




app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})