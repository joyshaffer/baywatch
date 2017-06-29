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
    const upButton = document.createElement('button')
    const downButton = document.createElement('button')
    favButton.textContent = 'Fav'
    delButton.textContent = 'Delete'
    upButton.textContent = 'Up'
    downButton.textContent = 'Down'

    //style fav button
    favButton.style.backgroundColor = 'dodgerblue'
    favButton.style.position = 'absolute'
    favButton.style.right = '400px'
    favButton.style.height = '40px'
    favButton.style.width = '60px'

    //style del button
    delButton.style.backgroundColor = 'red'
    delButton.style.position = 'absolute'    
    delButton.style.right = '340px'
    delButton.style.height = '40px'
    delButton.style.width = '60px'

    //style up button
    upButton.style.backgroundColor = 'Chartreuse'
    upButton.style.position = 'absolute'    
    upButton.style.right = '280px'
    upButton.style.height = '40px'
    upButton.style.width = '60px'

    //style down button
    downButton.style.backgroundColor = 'greenyellow'
    downButton.style.position = 'absolute'    
    downButton.style.right = '220px'
    downButton.style.height = '40px'
    downButton.style.width = '60px'

    favButton.addEventListener('click', ()=>{
        if(item.style.backgroundColor == 'white') {
            item.style.backgroundColor = 'yellow'}
        else{item.style.backgroundColor = 'white'}})    
    delButton.addEventListener('click', ()=>{item.parentNode.removeChild(item)})

    item.appendChild(favButton)
    item.appendChild(delButton)
    item.appendChild(upButton)
    item.appendChild(downButton)

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

    //resets the form--when you hit submit the text in the input goes away
    f.reset()
  }
}




app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})