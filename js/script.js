const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav');
const footerList = document.querySelectorAll('.footer-contact-container div')

hamburger.addEventListener('click', function() {
    menu.classList.toggle('active-menu');
    console.log('działa');
})

for (let i=0; i<footerList.length; i++) {
    footerList[i].addEventListener('click',  function() {
    
     this.lastElementChild.classList.toggle('active-list-element');
    console.log('działa' + i);
    } )
}
