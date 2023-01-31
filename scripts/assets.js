import ProductInfo from "./productInfo.js";

const assets = {};


assets.slideshowAssets = [
    {
        src: "./assets/images/slideshow1.jpg",
        alt: "Woman in a dress facing away.",
        overlay: "A daisy lady"

    },
    {
        src: "./assets/images/slideshow2.jpg",
        alt: "Two women facing each other and looking down.",
        overlay: "Lorem ipsum"
    },
    {
        src: "./assets/images/slideshow3.jpg",
        alt: "Two men facing away from each other looking into the distance.",
        overlay: "Lorem ipsum"
    },
];



assets.shopProduct = [
    new ProductInfo('Handmade flared jacket', './assets/images/product-img-1.jpg', 'women', 'trending', 0, 0, 189.99),
    new ProductInfo('Coat with wool wraparound collar', './assets/images/product-img-2.jpg', 'men', 'trending', 25, 100.99, 189.99),
    new ProductInfo('Utility jacket', './assets/images/product-img-3.jpg', 'women', 'trending', 0, 0, 189.99),
    new ProductInfo('Animal print coat', './assets/images/product-img-4.jpg', 'men', 'trending', 0, 0, 189.99),
    new ProductInfo('Hooded bomber jacket', './assets/images/product-img-5.jpg', 'men', 'sale', 30, 100.99, 189.99),
    new ProductInfo('Structured collarless coat', './assets/images/product-img-6.jpg', 'women', 'sale', 50, 100.99, 189.99),
    new ProductInfo('Houndstooth wool coat', './assets/images/product-img-7.jpg', 'women', 'sale', 15, 100.99, 189.99),
    new ProductInfo('Coat with wraparound collar', './assets/images/product-img-8.jpg', 'women', 'sale', 25, 100.99, 189.99)
];

export default assets;