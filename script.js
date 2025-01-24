const menuBtn = document.getElementById("menubtn");
const navLinks = document.getElementById('navlinks');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click',(e)=>{
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute('class',isOpen?'ri-close-line':'ri-menu-line')
});

 navLinks.addEventListener('click',(e)=>{
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class','ri-menu-line');
}) 
const scrollRevealOption = {
    distant: "50px",
    origin: "botton",
    duration: 1000,
};
ScrollReveal().reveal(".aboutcontainer .sectionheader",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".aboutcontainer .sectiondescription",{
    ...scrollRevealOption,
    delay: 500,
    interval:500
});
ScrollReveal().reveal(".aboutcontainer img",{
    ...scrollRevealOption,
    delay: 1500,
    
});
ScrollReveal().reveal(".servicecontainer .sectionheader",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".servicecontainer .sectiondescription",{
    ...scrollRevealOption,
    delay: 500,
    
});
ScrollReveal().reveal(".servicecard",{
    ...scrollRevealOption,
    duration: 1000,
    delay: 1000,
    interval: 500,

    
});

const swiper = new Swiper('.swiper',{
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});
ScrollReveal().reveal(".blogcontent .sectionheader",{
    ...scrollRevealOption,
    
    
});
ScrollReveal().reveal(".blogcontent h4",{
    ...scrollRevealOption,
    delay: 500,
    
});
ScrollReveal().reveal(".blogcontent p",{
    ...scrollRevealOption,
    delay: 1000,
    
});
ScrollReveal().reveal(".blogcontent .blogbtn",{
    ...scrollRevealOption,
    delay: 1500,
    
});
const instagram = document.querySelector(".instagramflex");

Array.from(instagram.children).forEach((item) =>{
    const duplicateNode =item.cloneNode(true);
    duplicateNode.setAttribute('aria-hidden',true);
    instagram.appendChild(duplicateNode);
})

