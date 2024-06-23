$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 80,
    autoplay: 500,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  });

document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
  faqItem.addEventListener('click', ()=>{
    faqItem.parentNode.classList.toggle('faq-active')
  })
});
