var form = document.querySelector('form');
var button = document.querySelector('.submit-btn')
var spinner = document.querySelector('.spinner')
var inputField = document.querySelector('#input-field');
var hedgie1 = document.querySelector('#ocean1');
var hedgie2 = document.querySelector('#ocean2');
var hedgie3 = document.querySelector('#ocean3');
var hedgie4 = document.querySelector('#ocean4');

button.addEventListener("click", function(event) {
  event.preventDefault();
  var keyword = inputField.value;
  getImages(keyword);
})

function getImages(keyword) {
  button.value = "Looking for photos..."

  fetch(`http://localhost:3000/Ocean/${keyword}`)
    .then(response => response.json())
    .then(images => updateImages(images))
    .then(() => button.value = "Get Hedgie Photos")
    .then(() => clearInput())
    .catch(error => console.error("sorry, please try again."));
}

function clearInput() {
  inputField.value = "";
}

function updateImages(images) {
  hedgie1.src = images[0];
  hedgie2.src = images[1];
  hedgie3.src = images[2];
  hedgie4.src = images[3];
}
