import config from "./config.js";
import ui from "./ui.js";

function displayGallery(gallery) {
  const photosElt = document.querySelector("#gallery_container");
  photosElt.innerHTML = "";

  gallery.photos.forEach(photo => {
    const vignetteDiv = document.createElement("div");
    vignetteDiv.classList.add("thumbnail");

    const imgElement = document.createElement("img");
    imgElement.src = config.URLbase + photo.photo.thumbnail.href;
    imgElement.setAttribute("data-photoId", photo.photo.id);
    imgElement.setAttribute("draggable", "false");

    imgElement.addEventListener("click", () => {
      ui.displayPicture(photo);
    });

    vignetteDiv.appendChild(imgElement);
    photosElt.appendChild(vignetteDiv);
  });
}

export default {
  displayGallery: displayGallery
}