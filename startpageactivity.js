var modal = document.getElementById("myModal");
var btn = document.getElementById("openService1");
var span = document.getElementsByClassName("close")[0];
let qrButton = document.getElementById('QRlogo');
let qrDiv = document.getElementById('hiddenQRs');

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

qrButton.addEventListener('click', function() {
  qrDiv.classList.toggle('show');
  window.scrollTo(0, document.body.scrollHeight);
});

document.getElementById('closeButton').addEventListener('click', function() {
  qrDiv.classList.toggle('show');
  window.scrollTo(0, document.body.scrollHeight);
});

document.getElementById('WAbutton').addEventListener('click', function() {
  window.open('https://www.whatsapp.com', '_blank');
});

document.getElementById('VKbutton').addEventListener('click', function() {
  window.open('https://vk.com', '_blank');
});

document.getElementById('TGbutton').addEventListener('click', function() {
  window.open('https://telegram.org', '_blank');
});
