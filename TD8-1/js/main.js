import {getPicture, getImageCategory, getImageComments} from "./modules/index.js";
import ui from "./modules/ui.js";

document.addEventListener('DOMContentLoaded', () => {
  getPicture(105).then( (picture) => {
    console.log(picture);
    console.log(picture.photo.titre);
    console.log(picture.photo.url.href);
    console.log(picture.type);

    ui.displayPicture(picture);
    getImageCategory(picture).then( (category) => {
      ui.displayCateg(category);
    });
    getImageComments(picture).then( (comments) => {
      ui.displayComments(comments);
    });
  });
});