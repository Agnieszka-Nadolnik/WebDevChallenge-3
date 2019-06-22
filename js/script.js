const hamburger = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav');
const footerList = document.querySelectorAll('.footer-contact-container div')

hamburger.addEventListener('click', function() {
    menu.classList.toggle('active-menu');
})

for (let i=0; i<footerList.length; i++) {
    footerList[i].addEventListener('click',  function() {
    
     this.lastElementChild.classList.toggle('active-list-element');
    } )
}


$('button').on('click', function() {
    $(this).toggleClass('is-active');
  });



  $(document).on('click', 'a', function(event){
      event.preventDefault();
   
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - 70
      }, 500);
  });

 