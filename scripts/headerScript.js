const header = {};

// creates number of carousel indicator according to the asset.length 
header.mountIndicator = (assets) => {
    const indicatorContainer = document.querySelector(".carousel-indicator");
    for (let i = 0; i < assets.length; i++) {
        const indicator = document.createElement("div");
        indicator.classList = "indicator";
        indicatorContainer.append(indicator);
    }
};

// turns indicators on and off depending on which item is being displaying in the carousel
header.changeIndicator = (index) => {
    const indicators = document.querySelectorAll(`.indicator`);
    indicators.forEach((value) => {
        // turn off all indicators
        value.classList.remove('indicator-active');
    });
    // turn on only the indicator which corresponds to the image displayed
    indicators[`${(index + 1) % indicators.length}`].classList.toggle('indicator-active');

};

// function to cycle through the object containing all the carousel assets
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