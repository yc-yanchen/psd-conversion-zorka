const header = {};

header.mountIndicator = (assets) => {
    const indicatorContainer = document.querySelector(".carousel-indicator");
    for (let i = 0; i < assets.length; i++) {
        const indicator = document.createElement("div");
        indicator.classList = "indicator";
        indicatorContainer.append(indicator);
    }
};

header.changeIndicator = (index) => {
    const indicators = document.querySelectorAll(`.indicator`);
    indicators.forEach((value) => {
        value.classList.remove('indicator-active');
    });
    indicators[`${(index + 1) % indicators.length}`].classList.toggle('indicator-active');

};

header.changeSlide = (assets, index) => {
    const slide = document.querySelector("#js-slide");
    slide.src = `${assets[index].src}`;
    slide.alt = `${assets[index].alt}`;
    document.querySelector("#js-slide-overlay").textContent = `${assets[index].overlay}`;
    header.changeIndicator(index);
    // passing a function reference to setTimeout using arrow function
    //     the index will be incremented, and wrap around at the end of the array;
    setTimeout(() => header.changeSlide(assets, (index + 1) % assets.length), 3000);
};


export default header;