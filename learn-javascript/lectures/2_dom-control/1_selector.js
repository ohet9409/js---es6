console.log('js')
let title = document.getElementById('title')
console.log(title)

title.textContent = '헬스 3대 운동'

let items = document.getElementsByClassName('item')
console.log(items)
console.log(items[0].innerHTML)

let liList = document.getElementsByTagName('li')
console.log(liList)

let h2 = document.querySelector('#title')
console.log(h2)

let item = document.querySelector('.item')
console.log(item)

let itemAll = document.querySelectorAll('.item')
console.log(itemAll)
console.log(itemAll[1])

h2.textContent = '<span>운동!!</span>'
// h2.innerHTML = '<span>운동!!</span>'

// document.querySelector('body').textContent = '지움';

let input = document.querySelector('input')
input.setAttribute('placeholder', '헬스 운동을 입력해주세요')
input.setAttribute('required', '')
// input.removeAttribute('placeholder')

let helloItem = document.querySelector('.hello')
console.log(helloItem)
// helloItem.style.color = 'blue'
// helloItem.style.backgroundColor = 'black'

helloItem.classList.add('dark')
helloItem.classList.remove('dark')
helloItem.classList.add('add', 'light')
