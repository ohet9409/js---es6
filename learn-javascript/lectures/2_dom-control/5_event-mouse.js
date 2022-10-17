console.log("5_event-mouse");

let rectangle = document.querySelector("#rectangle");

let body = document.querySelector("body");
console.log(body);

rectangle.addEventListener("mousedown", function (e) {
  console.log(e);
  console.log("clientX: ", e.clientX, "clientY: ", e.clientY);
  console.log("pageX: ", e.pageX, "pageY: ", e.pageY);
});

body.addEventListener("click", function (e) {
  console.log("pageX: ", e.pageX, "pageY: ", e.pageY);

  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.left = e.pageX - 25 + "px";
  div.style.top = e.pageY - 25 + "px";
  // body.appendChild(div);
  // body.classList.add("circle");

  console.log(e.target.getBoundingClientRect());
});

// rectangle.addEventListener('mouseup', function (e) {
//   console.log(e)
// })

// rectangle.addEventListener('mouseenter', function (e) {
//   console.log(e)
// })

// rectangle.addEventListener('mouseleave', function (e) {
//   console.log(e)
// })

// rectangle.addEventListener('mousemove', function (e) {
//   console.log(e)
// })
