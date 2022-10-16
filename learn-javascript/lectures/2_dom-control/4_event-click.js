console.log('4_event-click.js')

let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')

console.log(btn1)
console.log(btn2)

btn1.onclick = function () {
  alert('Hello 프로퍼티 리스너')
}

btn2.addEventListener('click', helloEvent1)

function helloEvent1() {
  alert('addEventListener1')
}

btn2.addEventListener('click', function () {
  alert('addEventListener2')
})

btn2.removeEventListener('click', helloEvent1)
