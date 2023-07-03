let shelfHTML = `
<p class="Name"></p>
<p class="Author"></p>
<button type="button">Remove</button>
<hr>
`

let container = document.querySelector('.container')
let form = document.querySelector('form')

function RemoveEl(element) {
  parent = element.parent
  console.log(element)
}

function Add(){
  let shelf = document.createElement('div')
  shelf.innerHTML = shelfHTML
  shelf.classList.add('Shelf')
  let Name = shelf.querySelector('.Name')
  let Author = shelf.querySelector('.Author')
  Name.textContent = form['Name'].value
  Author.textContent = form['Author'].value
 
  let Remove = shelf.querySelector('button')
  Remove.addEventListener('click', (event)=>{
    let parent = event.target.parentNode;
    container.removeChild(parent)
  })
  container.appendChild(shelf)
}

let btn = form.querySelector('button')
btn.addEventListener('click', ()=>{Add()})
