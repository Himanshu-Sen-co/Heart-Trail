const body = document.querySelector("body");
// body.innerText = " Event On";
body.addEventListener("mousemove", (evt) => {
  let setx = evt.offsetX;
  let sety = evt.offsetY;
  // console.log(" Event on", setx, sety);
  let span = document.createElement("span");
  span.style.left = setx + "px";
  span.style.top = sety + "px";
  console.log(span);
  const size = Math.random() * 100;
  span.style.height = size + "px";
  span.style.width = size + "px";
  body.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 2000);
});
