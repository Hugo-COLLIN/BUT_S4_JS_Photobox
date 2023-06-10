import config from "./config.js";

function displayPicture(photo)
{
  document.querySelector("#gallery").style.display = "none";
  document.querySelector("#viewer").style.display = "block";
  document.querySelector("#image-view > img").src = "";
  document.querySelector("#image-view > img").src = config.URLbase + photo.photo.original.href;
  document.querySelector("#viewer-head > h2").innerHTML = photo.photo.titre;
}

function displayGallery()
{
  document.querySelector("#gallery").style.display = "block";
  document.querySelector("#viewer").style.display = "none";
}

export default {
  displayPicture: displayPicture,
  displayGallery: displayGallery
}