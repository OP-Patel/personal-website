// When the hamburger is clicked, toggle the mobile menu
document.querySelector(".menu-toggle").addEventListener("click", function() {
    const mobileMenu = document.querySelector(".mobile-menu");
    // Toggle show/hide. No animations or transitions.
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  });
  