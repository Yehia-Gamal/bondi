let switcherList = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll(".gallery .all");

switcherList.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add Class Active Only To Current
function removeActive() {
  switcherList.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active", "rounded-pill");
  });
}

// Manage Imgs
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block"
  })
}
