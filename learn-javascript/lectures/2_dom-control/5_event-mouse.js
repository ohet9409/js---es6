console.log('5_event-mouse')

let rectangle = document.querySelector('#rectangle')

rectangle.addEventListener('mousedown', function (e) {
  console.log(e)
})

rectangle.addEventListener('mouseup', function (e) {
  console.log(e)
})

rectangle.addEventListener('mouseenter', function (e) {
  console.log(e)
})

rectangle.addEventListener('mouseleave', function (e) {
  console.log(e)
})

rectangle.addEventListener('mousemove', function (e) {
  console.log(e)
})
