import assets from "./assets.js";
import header from "./headerScript.js";
import shop from "./shop.js";
import favorite from "./favorite.js";
import hamburger from "./hamburger.js";

// Slideshow
const slideshowIndex = 0;
// Mounting carousel indicator based on the number of images in the slide show
header.mountIndicator(assets.slideshowAssets);
// Changes slides every 4 seconds
header.changeSlide(assets.slideshowAssets, slideshowIndex);

// Mounting the shop items
shop.mountProduct(shop.productStructure(), assets.shopProduct, 'trending', '.shop-trendy');
shop.mountProduct(shop.productStructure(), assets.shopProduct, 'sale', '.shop-sale');
shop.mountSmallProduct(shop.productStructureSmall(), assets.shopProduct, 'new-in', '.new-in-small');
shop.mountSmallProduct(shop.productStructureSmall(), assets.shopProduct, 'featured', '.featured-small');
shop.mountSmallProduct(shop.productStructureSmall(), assets.shopProduct, 'top-rated', '.top-rated-small');

// Adds function to add shop items to favorite
favorite.addToFave();

hamburger.openMenu();

