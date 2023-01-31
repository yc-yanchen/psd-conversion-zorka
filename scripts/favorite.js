const favorite = {};

favorite.onClick = (e) => {
    e.currentTarget.children[0].classList.toggle('heart-active');
    if (e.currentTarget.children[0].className === 'heart-active') {
        e.currentTarget.children[0].src = "./assets/images/heart-icon-pink.png";
    } else {
        e.currentTarget.children[0].src = "./assets/images/heart-icon.png";

    }


    console.log(e.currentTarget);
};

favorite.addToFave = () => {
    const heart = document.querySelectorAll('.heart-button');
    console.log(heart);
    heart.forEach((button) => {
        button.addEventListener('click', favorite.onClick);
    });
};

export default favorite;