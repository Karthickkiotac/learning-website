// change navbar on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// Show/hide faq questions 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className =  'fa-solid fa-minus';   
        }else{
            icon.className = 'fa-solid fa-plus';
        }
    })
});


//show/hide navbar

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close navbar

const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

//touch on website sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
document.querySelector('a[href="#about-section"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('about-section');
  });
  
document.querySelector('a[href="#courses-section"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('courses-section');
  });
  
document.querySelector('a[href="#faqs-section"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('faqs-section');
  });
  
document.querySelector('a[href="#contact-section"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('contact-section');
  });