const navLinks = document.querySelectorAll(".nav-links li a");

navLinks.forEach((link) => {
  const linkUrl = link.href.replace(/\/+$/, ""); // Remove trailing slashes
  const currentUrl = window.location.href.replace(/\/+$/, ""); // Remove trailing slashes

  if (linkUrl === currentUrl) {
    link.classList.remove("font-medium");
    link.classList.add(
      "font-bold",
      "text-primary",
      "underline-offset-8",
      "underline",
    );
  }
});
