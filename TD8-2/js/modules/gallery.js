import photoloader from "./photoloader.js";

async function loadDefault() {
  const uri = "/www/canals5/phox/api/photos";
  return load(uri);
}

async function loadPrev(gallery) {
  const uri = gallery.links.prev.href;
  return load(uri);
}

async function loadNext(gallery) {
  const uri = gallery.links.next.href;
  return load(uri);
}

async function loadFirst(gallery) {
  const uri = gallery.links.first.href;
  return load(uri);
}

async function loadLast(gallery) {
  const uri = gallery.links.last.href;
  return load(uri);
}

async function load(uri)
{
  return await photoloader.loadResource(uri);
}

export default {
  load: loadDefault,
  loadPrev: loadPrev,
  loadNext: loadNext,
  loadFirst: loadFirst,
  loadLast: loadLast
}