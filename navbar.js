document.querySelectorAll('.aboutLink').forEach(function(link) {
    link.addEventListener('click', function() {
        burgerMenu.style.display = 'none';
        scroll('infoTitle1');
    });
});

document.querySelectorAll('.serviceLink').forEach(function(link) {
    link.addEventListener('click', function() {
        burgerMenu.style.display = 'none';
        scroll('service');
    });
});

document.querySelectorAll('.personalLink').forEach(function(link) {
    link.addEventListener('click', function() {
        burgerMenu.style.display = 'none';
        scroll('personal');
    });
});


document.querySelectorAll('.contactLink').forEach(function(link) {
    link.addEventListener('click', function() {
        burgerMenu.style.display = 'none';
        scroll('contact');
    });
});



function scroll(toID){
    const obj = document.getElementById(toID); 
    const scrollOffset = 100; 
    window.scrollTo({
        top: obj.offsetTop - scrollOffset,
        behavior: 'smooth'
    });
}

let burgerMenu = document.getElementById('burgerMenu');

document.getElementById('closeBurger').addEventListener('click', function() {
    burgerMenu.style.display = 'none';
});

document.getElementById('openBurger').addEventListener('click', function() {
    burgerMenu.style.display = 'flex';
});
