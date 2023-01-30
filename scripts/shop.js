// import assets from "./assets.js";

const shop = {};

shop.productStructure = () => {
    return (
        "\n                    <div class=\"upper\">\n                        <div class=\"item-wrapper\">\n                            <div class=\"overlay\">\n                                <button><img src=\"./assets/images/white-search-icon.png\" alt=\"Magnifying glass\"></button>\n                            </div>\n                            <div class=\"more-info\">\n\n                            </div>\n                        </div>\n                        <img class=\"product-image\">\n                    </div>\n                    <div class=\"lower\">\n                        <h5><a class=\"product-name\" href=\"#\"></a></h5>\n                        <div class=\"price\">\n                            <p class=\"sale-price\"></p>\n                            <p class=\"regular-price\"></p>\n                        </div>\n                        <div class=\"action\">\n                            <button class=\"button-pill to-cart\">\n                                Add to cart\n                            </button>\n                            <div class=\"flex-container\">\n                                <button class=\"button-round\"><img src=\"./assets/images/repeat-icon.png\" alt=\"Repeat icon\"></button>\n                                <button class=\"button-round heart-button\"><img src=\"./assets/images/heart-icon.png\" alt=\"Heart icon\"></button>\n                            </div>\n                        </div>\n                    </div>\n                "
    );
};

shop.mountProduct = (html, assets, condition, location) => {


    const filtered = assets.filter((product) =>
        product.tag === condition
    );
    console.log(filtered);
    filtered.forEach((product) => {
        const newProduct = document.createElement('div');
        newProduct.classList = 'product-card';
        newProduct.innerHTML = (html);
        console.log(newProduct);
        newProduct.children[0].children[1].src = product.productImg;
        newProduct.children[1].children[0].children[0].textContent = product.productName;
        document.querySelector(location).append(newProduct);
    });





};

export default shop;