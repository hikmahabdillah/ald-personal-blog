const navLinks = document.querySelectorAll(".nav-links li a");

navLinks.forEach((link) => {
  console.log(link.href, window.location.href);
  if (link.href === window.location.href) {
    link.classList.remove("font-medium");
    link.classList.add(
      "font-bold",
      "text-primary",
      "underline-offset-8",
      "underline",
    );
  }
});
