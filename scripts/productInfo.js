class ProductInfo {
    constructor(productName, productImg, style, tag, salePercent, salePrice, regularPrice, limited, newProduct) {
        this.productName = productName;
        this.productImg = productImg;
        this.style = style;
        this.tag = tag;
        this.salePercent = salePercent;
        this.salePrice = salePrice;
        this.regularPrice = regularPrice;
        this.limited = limited;
        this.newProduct = newProduct;
    }
}

export default ProductInfo;