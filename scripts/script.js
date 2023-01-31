import assets from "./assets.js";
import header from "./headerScript.js";
import shop from "./shop.js";


const slideshowIndex = 0;
header.mountIndicator(assets.slideshowAssets);
header.changeSlide(assets.slideshowAssets, slideshowIndex);

// console.log(document.querySelector('.product-card'));

shop.mountProduct(shop.productStructure(), assets.shopProduct, 'trending', '.shop-trendy');

shop.mountProduct(shop.productStructure(), assets.shopProduct, 'sale', '.shop-sale');

console.log(assets.shopProduct);