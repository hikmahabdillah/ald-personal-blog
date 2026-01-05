const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.remove("font-medium");
    link.classList.add(
      "font-bold",
      "text-primary",
      "underline-offset-8",
      "underline"
    );
  }
});
