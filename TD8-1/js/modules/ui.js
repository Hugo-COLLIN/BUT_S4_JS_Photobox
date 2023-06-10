import config from "./config.js";


function displayPicture(img)
{
  document.querySelector("#photo > h1").innerHTML = "Photo: " + img.photo.id;
  document.querySelector("#la_photo > img").src = config.URLbase + "/" + img.photo.url.href;
  document.querySelector("#la_photo > h4").innerHTML = img.photo.titre;
  document.querySelector("#la_photo > h4").innerHTML = img.photo.titre;
  document.querySelector("#la_photo > p:nth-of-type(1)").innerHTML = img.photo.descr;
  document.querySelector("#la_photo > p:nth-of-type(2)").innerHTML = img.photo.type + ", " + img.photo.width + "x" + img.photo.height;
}

function displayCateg(categ)
{
  document.querySelector("#la_categorie").innerHTML = "Catégorie: " + categ.categorie.nom;
}

function displayComments(comments)
{
  const commentsElt = document.querySelector("#les_commentaires");
  comments.comments.forEach(comment => {
    commentsElt.innerHTML += "<li>" + comment.pseudo + " : " + comment.content + "</li><br>";
  });
}

export default {
  displayPicture: displayPicture,
  displayCateg: displayCateg,
  displayComments: displayComments
}