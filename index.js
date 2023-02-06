const btnShare = document.querySelector("#btn-Share");
const sharingLinks = document.querySelector("#share-container");

btnShare.addEventListener("click", () => {
    btnShare.classList.toggle("active");
    sharingLinks.classList.toggle("hidden");
})


