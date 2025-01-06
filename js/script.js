// General JavaScript Enhancements

// Smooth scrolling for navigation links
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Toggle active class for navigation links
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// CTA Buttons interaction
document.querySelectorAll(".cta-buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    alert(`You clicked on ${button.textContent}!`);
  });
});

// Book Now button interaction
document.querySelectorAll(".package button").forEach((button) => {
  button.addEventListener("click", () => {
    alert(
      "Thank you for your interest! A representative will contact you soon."
    );
  });
});
