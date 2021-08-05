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

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
