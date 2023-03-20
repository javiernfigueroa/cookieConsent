const MODAL = document.getElementById("modal");
const CLOSE_BTN = document.getElementById("modal-close-btn");
const FORM = document.getElementById("info-form");
const MODAL_P = document.getElementById("modal-text");
const MODAL_INNER = document.getElementById("modal-inner");

setTimeout(function () {
  MODAL.style.display = "inline";
}, 5000);

CLOSE_BTN.addEventListener("click", function () {
  MODAL.style.display = "none";
});

FORM.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(FORM)

  MODAL_P.innerHTML = `<div class="modal-inner-loading">
    <img src="img/loading.svg" class="loading">
    <p id="uploadText">
        Rastreando datos personales...
    </p>
</div>`;

  setTimeout(function () {
    document.getElementById("uploadText").innerText =
      "Haciendo copia de los documentos";
  }, 1500);

  setTimeout(function () {
    document.getElementById("uploadText").innerText =
      "Borrando los datos de tu movil y pc";
  }, 3000);

  setTimeout(function () {
    MODAL_INNER.innerHTML = `<h2>Gracias <span class="modal-display-name">${formData.get('fullName')}</span>! </h2>
    <p>Tus datos ahora se encuentran en nuestros servidores.</p>
    <div class="idiot-gif">
        <img src="img/pirate.gif">
    </div>
    `;
  }, 4500);
});
