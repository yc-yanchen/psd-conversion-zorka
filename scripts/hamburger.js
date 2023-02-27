const hamburger = {};

// on click function for the hamburger menu
hamburger.onClick = () => {
    // e.classList.toggle('menu-open');
    const hamburgerList = document.querySelector('#hamburger-option');
    console.log(hamburgerList);
    hamburgerList.classList.toggle(
        'menu-open'
    );
};

//

hamburger.openMenu = () => {
    // Targeting the .hamburger-menu DOM element
    hamburger.menu = document.querySelector(".hamburger-menu");
    hamburger.menu.addEventListener('click', hamburger.onClick);
};

export default hamburger;