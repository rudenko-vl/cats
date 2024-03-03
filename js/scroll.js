const elementToShow = document.querySelector(".anchor");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    elementToShow.classList.add("anchor-active");
  } else {
    elementToShow.classList.remove("anchor-active");
  }
});

elementToShow.addEventListener("click", smoothScroll);

function smoothScroll(e) {
  e.preventDefault();
  const id = elementToShow.getAttribute("href");

  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
