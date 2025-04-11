document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const closeMenu = document.querySelector(".close-menu");
  const nav = document.querySelector("nav");
  const logReg = document.querySelector(".log-reg");
  const overlay = document.querySelector(".overlay");

  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
    logReg.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = "hidden";
    menuIcon.style.display = "none";
  });

  closeMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
    logReg.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = "auto";
    menuIcon.style.display = "block";
  });

  overlay.addEventListener("click", () => {
    nav.classList.toggle("active");
    logReg.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = "auto";
    menuIcon.style.display = "block";
  });
});
