import photoloader from "./photoloader.js";

export function getPicture(id) {
  return photoloader.loadPicture(id);
}

export async function getImageCategory(imageData) {
  const uri = imageData.links.categorie.href;
  return await photoloader.loadResource(uri);
}

export async function getImageComments(imageData) {
  const uri = imageData.links.comments.href;
  return await photoloader.loadResource(uri);
}