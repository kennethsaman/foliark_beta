
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const expandProjects = document.querySelector("#expand-projects");
const hiddenProjects = document.querySelectorAll(".hidden");

const navLinks = document.querySelectorAll('a[href^="#"]');


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

expandProjects.addEventListener("click", () => {
    console.log(hiddenProjects);
    hiddenProjects.forEach(p => p.classList.toggle("hide"));
    
    if (expandProjects.textContent === "SEE MORE PROJECTS") {
        expandProjects.textContent = "SEE LESS";
    } else {
        expandProjects.textContent = "SEE MORE PROJECTS";
    }
})



navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });