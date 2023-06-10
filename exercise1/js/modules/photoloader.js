import config from "./config.js";

async function loadPicture(idPicture) {
  try {
    const response = await fetch(config.URLAPI + "/photos/" + idPicture, { credentials: 'include' });
    if (!response.ok)
      throw new Error("Network response was not OK");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function loadResource(uri) {
  try {
    const response = await fetch(config.URLbase + uri, { credentials: 'include' });
    if (!response.ok)
      throw new Error("Network response was not OK");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export default {
  loadPicture: loadPicture,
  loadResource: loadResource
}