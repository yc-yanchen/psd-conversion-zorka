// import assets from "./assets.js";

const shop = {};

shop.productStructure = () => {
    return (
        "\n<div class=\"upper\">\n<div class=\"item-wrapper\">\n<div class=\"overlay\">\n<button><img src=\"./assets/images/white-search-icon.png\" alt=\"Magnifying glass\"></button>\n</div>\n<div class=\"more-info\">\n\n</div>\n</div>\n<img class=\"product-image\">\n</div>\n<div class=\"lower\">\n<a href=\"#\" class=\"product-name\"><h5></h5></a>\n<div class=\"price\">\n<p class=\"sale-price\"></p>\n<p class=\"regular-price\"></p>\n</div>\n<div class=\"action\">\n<button class=\"button-pill to-cart\">\nAdd to cart\n</button>\n<div class=\"flex-container\">\n<button class=\"button-round\"><img src=\"./assets/images/repeat-icon.png\" alt=\"Repeat icon\"></button>\n<button class=\"button-round heart-button\"><img src=\"./assets/images/heart-icon.png\" alt=\"Heart icon\"></button>\n</div>\n</div>\n</div>\n"
    );
};

shop.mountProduct = (html, assets, condition, location) => {
    // filter the assets array based on condition
    const filtered = assets.filter((product) =>
        product.tag.toLowerCase().includes(condition.toLowerCase())
    );
    // console.log(filtered);
    // go through the filtered array and...
    filtered.forEach((product) => {
        //create a new div with class of product-card
        const newProduct = document.createElement('div');
        newProduct.classList = 'product-card';
        // add shop.productStructure as innerHTML
        newProduct.innerHTML = (html);
        // console.log(newProduct);
        // modify the content within the innerHTML
        // modify img link
        newProduct.children[0].children[1].src = product.productImg;
        // modify img alt text
        newProduct.children[0].children[1].alt = product.productName;
        // modify product name
        newProduct.children[1].children[0].children[0].textContent = product.productName;
        if (product.salePercent) {
            newProduct.children[1].children[1].children[0].textContent = product.salePrice;
            newProduct.children[1].children[1].children[1].textContent = product.regularPrice;
        } else {
            newProduct.children[1].children[1].children[0].textContent = product.regularPrice;
            newProduct.children[1].children[1].children[1].remove();
        }

        // amount newProduct in the assigned location
        document.querySelector(location).append(newProduct);
    });





};

export default shop;