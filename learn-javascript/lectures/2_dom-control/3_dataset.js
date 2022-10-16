console.log('3_dataset.html')
let h2 = document.querySelector('h2')
h2.dataset.test = 'hello Javascript!!'
console.log(h2.dataset.test)

let liList = document.querySelectorAll('li')
console.log(liList)

let img = document.querySelector('img')
console.log(img)

let selectedItem = document.querySelector('.selected-item')
console.log(selectedItem)

liList[0].addEventListener('click', function (event) {
  // alert('hello')
  console.log(event.target.dataset.img)
  img.setAttribute('src', event.target.dataset.img)
  selectedItem.textContent = event.target.textContent
})

liList[1].addEventListener('click', function (event) {
  // alert('hello')
  console.log(event.target.dataset.img)
  img.setAttribute('src', event.target.dataset.img)
  selectedItem.textContent = event.target.textContent
})

liList[2].addEventListener('click', selectItem)

function selectItem(event) {
  console.log(event.target.dataset.img)
  img.setAttribute('src', event.target.dataset.img)
  selectedItem.textContent = event.target.textContent
}
