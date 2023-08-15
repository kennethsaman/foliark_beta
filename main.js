
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navbarLinks = document.querySelectorAll(".navbar a");

const expandProjects = document.querySelector("#expand-projects");
const hiddenProjects = document.querySelectorAll(".hidden");

// const expandProjects = document.querySelector("#expand-projects");
// const hideProjects = document.querySelector("#hide-projects");
// const hiddenProjects = document.querySelectorAll(".hidden");



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))




//   NAVBAR SCROLLING

document.addEventListener("DOMContentLoaded", function () {
    

    navbarLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    function scrollToSection(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const yOffset = -150;
            const y = targetSection.getBoundingClientRect().top + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }
});


expandProjects.addEventListener("click", () => {
    console.log(hiddenProjects);
    hiddenProjects.forEach(p => p.classList.toggle("hide"));
    
    if (expandProjects.textContent === "SEE MORE PROJECTS") {
        expandProjects.textContent = "SEE LESS";
    } else {
        expandProjects.textContent = "SEE MORE PROJECTS";
    }
})