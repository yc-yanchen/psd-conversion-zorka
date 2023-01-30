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
    new ProductInfo('Handmade flared jacket', './assets/images/product-img-1.jpg', 'women', 'trending', false, 0, 189.99),
    new ProductInfo('Coat with wool wraparound collar', './assets/images/product-img-2.jpg', 'men', 'trending', true, 100.99, 189.99),
    new ProductInfo('Utility jacket', './assets/images/product-img-3.jpg', 'women', 'trending', false, 0, 189.99),
    new ProductInfo('Animal print coat', './assets/images/product-img-4.jpg', 'men', 'trending', false, 0, 189.99),
    new ProductInfo('Hooded bomber jacket', './assets/images/product-img-5.jpg', 'men', 'sale', true, 100.99, 189.99)
];

export default assets;