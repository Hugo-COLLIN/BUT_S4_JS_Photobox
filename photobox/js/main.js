import gallery_ui from "./modules/gallery_ui.js";
import gallery from "./modules/gallery.js";
import ui from "./modules/ui.js";

document.querySelector("#close-viewer").addEventListener("click", () => {
  ui.displayGallery();
});

document.querySelector("#load_gallery").addEventListener("click", () => {
  loadGallery();
});

document.addEventListener('DOMContentLoaded', () => {
  loadGallery();
});

function loadGallery() {
  gallery.load().then((galleryInit) => {
    gallery_ui.displayGallery(galleryInit);

    document.querySelector("#previous_page").addEventListener("click", () => {
      gallery.loadPrev(galleryInit).then((galleryPrev) => {
        galleryInit = galleryPrev;
        gallery_ui.displayGallery(galleryPrev);
      });
    });

    document.querySelector("#next_page").addEventListener("click", () => {
      gallery.loadNext(galleryInit).then((galleryNext) => {
        galleryInit = galleryNext;
        gallery_ui.displayGallery(galleryNext);
      });
    });

    document.querySelector("#first_page").addEventListener("click", () => {
      gallery.loadFirst(galleryInit).then((galleryFirst) => {
        galleryInit = galleryFirst;
        gallery_ui.displayGallery(galleryFirst);
      });
    });

    document.querySelector("#last_page").addEventListener("click", () => {
      gallery.loadLast(galleryInit).then((galleryLast) => {
        galleryInit = galleryLast;
        gallery_ui.displayGallery(galleryLast);
      });
    });

  });
}