document.querySelectorAll(".ideas__accordion").forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const panel = accordion.querySelector(".accordion__panel");
    panel.classList.toggle("active");
    const plusIcon = accordion.querySelector(".plusIcon");
    const minusIcon = accordion.querySelector(".minusIcon");

    if (panel.classList.contains("active")) {
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    } else {
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    }
  });
});

const toTopArrow = document.querySelector(".toTopArrow");
document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTopArrow.classList.add("active");
  } else {
    toTopArrow.classList.remove("active");
  }
});
toTopArrow.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
document.querySelector(".badges__btn").addEventListener("click", () => {
  window.open("https://heroes.epam.com/?suggestednews=true", "_blank");
});
