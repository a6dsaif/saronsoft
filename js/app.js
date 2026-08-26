document.addEventListener("DOMContentLoaded",()=>{const loader=document.querySelector(".loader");if(loader)setTimeout(()=>loader.classList.add("done"),450);
const menu=document.querySelector(".menu-btn"),nav=document.querySelector(".nav");if(menu)menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".reveal").forEach(el=>{new IntersectionObserver(([e],o)=>{if(e.isIntersecting){el.classList.add("show");o.disconnect()}},{threshold:.08}).observe(el)});
});