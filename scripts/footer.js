const footer = {};

// function to display and his mobile footer content to create an accordion effect
footer.displayNav = () => {
    const footerHeader = document.querySelectorAll('.footer-menu');
    footerHeader.forEach(item => {
        item.addEventListener('click', (e) => {
            // toggling the class 'footer-nav-close' to open and close the accordion
            e.currentTarget.parentElement.children[1].children[0].classList.toggle('footer-nav-close');
        });
        // all items in the footer starts off with the class 'footer-nav-close'
        item.parentElement.children[1].children[0].classList = 'footer-nav-close';
    });
};

export default footer;