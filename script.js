document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const container = document.getElementById('container');
    const menuButton = document.getElementById('menu');
    const links = document.querySelectorAll('a[href^="#"]');

    // Function to handle the scroll
    function handleScroll() {
        container.classList.remove('menuopen');
        header.classList.toggle('sticky', window.scrollY >= 100);
    }

    // Function to handle menu button click
    function handleMenuButtonClick() {
        header.classList.remove('sticky');
        container.classList.toggle('menuopen');
    }

    // Function to handle anchor links click
    function handleLinkClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Function to close the menu when clicking outside and show the sticky menu
    function handleCloseOutside(event) {
        if (!menuButton.contains(event.target)) {
            
            container.classList.remove('menuopen');
            header.classList.add('sticky');
        }
    }

    window.addEventListener('scroll', handleScroll);
    menuButton.addEventListener('click', handleMenuButtonClick);
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    
    document.addEventListener('click', handleCloseOutside);
});
document.addEventListener('DOMContentLoaded', function () {
    const showProjectsButton = document.getElementById('showProjects');

    showProjectsButton.addEventListener('click', function () {
        window.location.href = 'tous-mes-projets.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const downloadCVButton = document.getElementById('downloadCV');

    downloadCVButton.addEventListener('click', function () {
        window.location.href = 'assets/CV Corentin GIL Alternance.pdf'; 
    });
});

