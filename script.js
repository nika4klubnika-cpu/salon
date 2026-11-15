const menuButton = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#main-navigation");

function setMenuOpen(isOpen) {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Zamknij menu" : "Otwórz menu",
  );
  navigation.classList.toggle("is-open", isOpen);
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest('a[href^="#"]')) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) setMenuOpen(false);
  });
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
