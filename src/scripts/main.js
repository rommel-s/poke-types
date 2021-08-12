const pokeTypes = document.querySelectorAll(".type");
const typesIcon = document.querySelectorAll(".icon");

function toggleTypes() {
  pokeTypes.forEach((type) => {
    type.addEventListener("click", (event) => {
      type.classList.toggle("active");
      const resume = type.nextElementSibling;
      const typesIcon = document.querySelectorAll(".icon");
      if (type.classList.contains("active")) {
        resume.style.maxHeight = resume.scrollHeight + "px";
      } else {
        resume.style.maxHeight = 0;
      }
    });
  });
}

window.addEventListener("load", toggleTypes);

var header = document.getElementById("top-header");
var sticky = header.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

//check service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register('sw.js').then(registration => {
      console.log('SW registered!')
      console.log(registration)
    }
  ).catch(error => {
    console.log("SW registration failed")
    console.log(error)
  }) 
}