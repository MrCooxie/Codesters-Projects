let isBlue = false;
document.getElementById('bgButton').onclick = function() {
  if (isBlue) {
    document.body.style.backgroundColor = "white";
    this.innerHTML = "Switch to Blue";
  } else {
    document.body.style.backgroundColor = "lightblue";
    this.innerHTML = "Switch to White";
  }
  isBlue = !isBlue;
}