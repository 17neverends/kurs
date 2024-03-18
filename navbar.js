document.getElementById('aboutLink').addEventListener('click', function() {
    const infoTitle = document.getElementById('infoTitle1'); 
    const scrollOffset = 60; 
    window.scrollTo({
        top: infoTitle.offsetTop - scrollOffset,
        behavior: 'smooth'
    });
});


document.getElementById('serviceLink').addEventListener('click', function() {
    const service = document.getElementById('service'); 
    const scrollOffset = 60; 
    window.scrollTo({
        top: service.offsetTop - scrollOffset,
        behavior: 'smooth'
    });
});

document.getElementById('personalLink').addEventListener('click', function() {
    const personal = document.getElementById('personal'); 
    const scrollOffset = 60; 
    window.scrollTo({
        top: personal.offsetTop - scrollOffset,
        behavior: 'smooth'
    });
});

document.getElementById('contactLink').addEventListener('click', function() {
    const contact = document.getElementById('contact'); 
    const scrollOffset = 60; 
    window.scrollTo({
        top: contact.offsetTop - scrollOffset,
        behavior: 'smooth'
    });
});



