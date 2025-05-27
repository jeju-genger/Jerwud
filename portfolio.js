function enlargeImage(imgElement) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";
  modalImg.src = imgElement.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
