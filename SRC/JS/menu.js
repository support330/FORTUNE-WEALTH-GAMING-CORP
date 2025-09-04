(() => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    mobileMenu.classList.remove("opacity-0", "invisible", "scale-95");
    mobileMenu.classList.add("opacity-100", "visible", "scale-100");

    // stagger animation for links
    mobileLinks.forEach((link, i) => {
      setTimeout(() => {
        link.classList.remove("opacity-0", "translate-y-4");
        link.classList.add(
          "opacity-100",
          "translate-y-0",
          "transition-all",
          "duration-500"
        );
      }, i * 150);
    });

    // animate hamburger bars
    const bars = menuBtn.querySelectorAll(".bar");
    bars[0].classList.add("rotate-45", "translate-y-2");
    bars[1].classList.add("opacity-0");
    bars[2].classList.add("-rotate-45", "-translate-y-2");
  }

  function closeMenu() {
    isOpen = false;
    mobileMenu.classList.remove("opacity-100", "visible", "scale-100");
    mobileMenu.classList.add("opacity-0", "invisible", "scale-95");

    // reset hamburger
    const bars = menuBtn.querySelectorAll(".bar");
    bars[0].classList.remove("rotate-45", "translate-y-2");
    bars[1].classList.remove("opacity-0");
    bars[2].classList.remove("-rotate-45", "-translate-y-2");

    // reset links
    mobileLinks.forEach(link => {
      link.classList.add("opacity-0", "translate-y-4");
      link.classList.remove("opacity-100", "translate-y-0");
    });
  }

  // Toggle menu
  menuBtn.addEventListener("click", () => {
    isOpen ? closeMenu() : openMenu();
  });

  // Auto close menu when resizing to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && isOpen) {
      closeMenu();
    }
  });

  // Click outside to close
  document.addEventListener("click", (e) => {
    if (isOpen && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => closeMenu());
  });
})();
