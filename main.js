// Scroll Animation for Sections
const sections = document.querySelectorAll("section");

const checkVisibility = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight * 0.8 && sectionBottom > 0) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);

// Hover Effect for Profile Photo
const profilePhoto = document.querySelector(".cv-photo");
profilePhoto.addEventListener("mouseenter", () => {
    profilePhoto.style.transform = "scale(1.1)";
});
profilePhoto.addEventListener("mouseleave", () => {
    profilePhoto.style.transform = "scale(1)";
});