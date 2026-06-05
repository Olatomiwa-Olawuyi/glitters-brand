const menuBtn = document.getElementById("menu-btn");

const closeBtn = document.getElementById("close-btn");

const navMenu = document.getElementById("nav-menu");

const overlay = document.getElementById("overlay");

function openMenu() {
  if (navMenu && overlay) {
    navMenu.classList.add("active");

    overlay.classList.add("active");
  }
}

function closeMenu() {
  if (navMenu && overlay) {
    navMenu.classList.remove("active");

    overlay.classList.remove("active");
  }
}

if (menuBtn) {
  menuBtn.addEventListener("click", openMenu);
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeMenu);
}

if (overlay) {
  overlay.addEventListener("click", closeMenu);
}

/* =========================
   GSAP ANIMATIONS
========================= */

if (typeof gsap !== "undefined") {
  gsap.from(".hero-text", {
    opacity: 0,

    y: 50,

    duration: 1,
  });

  gsap.from(".hero-image", {
    opacity: 0,

    x: 50,

    duration: 1,
  });

  gsap.from(".category-card", {
    opacity: 0,

    y: 40,

    duration: 1,

    stagger: 0.2,
  });

  gsap.from(".product-card", {
    opacity: 0,

    y: 40,

    duration: 1,

    stagger: 0.2,
  });
}
