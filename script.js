const navLinks = document.querySelectorAll("nav h3");
const sections = document.querySelectorAll("section");

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    sections[index].scrollIntoView({ behavior: "smooth" });
  });
});