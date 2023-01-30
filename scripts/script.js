import assets from "./assets.js";
import header from "./headerScript.js";

const slideshowIndex = 0;
header.mountIndicator(assets.slideshowAssets);
header.changeSlide(assets.slideshowAssets, slideshowIndex);

