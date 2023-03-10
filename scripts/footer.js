const footer = {};

footer.displayNav = () => {
    const footerHeader = document.querySelectorAll('.footer-menu');
    footerHeader.forEach(item => {
        item.addEventListener('click', (e) => {
            e.currentTarget.parentElement.children[1].children[0].classList.toggle('footer-nav-close');
        });
        item.parentElement.children[1].children[0].classList = 'footer-nav-close';
    });
};

export default footer;