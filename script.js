// creating namespace
const zorka = {};

zorka.slideshowAssets = [
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

zorka.slideshowIndex = 0;

zorka.changeSlide = () => {
    const slide = document.querySelector("#js-slide");
    slide.src = `${zorka.slideshowAssets[zorka.slideshowIndex].src}`;
    slide.alt = `${zorka.slideshowAssets[zorka.slideshowIndex].alt}`;
    const slideOverlay = document.querySelector("#js-slide-overlay");
    slideOverlay.textContent = `${zorka.slideshowAssets[zorka.slideshowIndex].overlay}`;

    if (zorka.slideshowIndex < zorka.slideshowAssets.length - 1) {
        zorka.slideshowIndex++;
    } else {
        zorka.slideshowIndex = 0;
    }
    setTimeout(`zorka.changeSlide()`, 4000);
};


zorka.changeSlide();