class ProductInfo {
    constructor(productName, productImg, style, tag, sale, salePrice, regularPrice, limited) {
        this.productName = productName;
        this.productImg = productImg;
        this.style = style;
        this.tag = tag;
        this.sale = sale;
        this.salePrice = salePrice;
        this.regularPrice = regularPrice;
        this.limited = limited;
    }
}

export default ProductInfo;