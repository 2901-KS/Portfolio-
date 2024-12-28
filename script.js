
document.addEventListener("DOMContentLoaded", () => {
    // Hide the loading spinner once the page has fully loaded
    const loadingSpinner = document.getElementById("loadingSpinner");
    window.addEventListener("load", () => {
        loadingSpinner.style.display = "none";
    });

    // Scroll to Top Button
    const scrollToTopButton = document.getElementById("scrollToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });


    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });

    const skills = document.querySelectorAll(".skills-list li");
    skills.forEach((skill) => {
        skill.addEventListener("mouseenter", () => {
            skill.style.transform = "scale(1.1)";
            skill.style.transition = "transform 0.3s ease-in-out";
        });
        skill.addEventListener("mouseleave", () => {
            skill.style.transform = "scale(1)";
        });
    });
});
