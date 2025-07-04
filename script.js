const nav_links = document.querySelectorAll(".nav_link");

nav_links.forEach((link) => {
  link.addEventListener("click", () => {
    removeCurrent();
    link.classList.add("current");
  });
});

function removeCurrent() {
  nav_links.forEach((link) => {
    link.classList.remove("current");
  });
}
