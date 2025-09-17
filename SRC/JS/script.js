
  
  console.log("✅ JS Loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM Fully Loaded");
});
  
  
  document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitButton = form.querySelector("button[type='submit']");
  const originalButtonText = submitButton.innerHTML;
  const toastContainer = document.getElementById("toastContainer");

  // Create toast function
  function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className =
      `px-4 py-3 rounded-lg shadow-lg text-white transition transform translate-x-0 opacity-100 ` +
      (type === "success" ? "bg-green-600" : "bg-red-600");

    toast.textContent = message;
    toastContainer.appendChild(toast);

    // Auto remove after 5s
    setTimeout(() => {
      toast.classList.add("opacity-0", "translate-x-2");
      setTimeout(() => toast.remove(), 500);
    }, 5000);
  }

    form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = `
      <svg class="animate-spin h-5 w-5 text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      Sending...
    `;

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showToast("✅ Thank you! Your message has been sent.", "success");
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          showToast(data.errors.map((error) => error.message).join(", "), "error");
        } else {
          showToast("❌ Oops! Something went wrong. Please try again.", "error");
        }
      }
    } catch (error) {
      showToast("⚠️ Network error. Please check your connection.", "error");
    }

    // Reset button
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonText;
  });
});

  // JS for Hamburger -->

  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  let isOpen = false;

  menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      mobileMenu.classList.remove("opacity-0", "invisible", "scale-95");
      mobileMenu.classList.add("opacity-100", "visible", "scale-100");

      // stagger animation for links
      mobileLinks.forEach((link, i) => {
        setTimeout(() => {
          link.classList.remove("opacity-0", "translate-y-4");
          link.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-500");
        }, i * 150); // stagger delay
      });
    } else {
      mobileMenu.classList.remove("opacity-100", "visible", "scale-100");
      mobileMenu.classList.add("opacity-0", "invisible", "scale-95");

      // reset links immediately
      mobileLinks.forEach(link => {
        link.classList.add("opacity-0", "translate-y-4");
        link.classList.remove("opacity-100", "translate-y-0");
      });
    }

    // animate hamburger bars
    const bars = menuBtn.querySelectorAll(".bar");
    bars[0].classList.toggle("rotate-45", isOpen);
    bars[0].classList.toggle("translate-y-2", isOpen);
    bars[1].classList.toggle("opacity-0", isOpen);
    bars[2].classList.toggle("-rotate-45", isOpen);
    bars[2].classList.toggle("-translate-y-2", isOpen);
  });

  // Auto close menu when resizing to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && isOpen) {
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
  
 // SBar Func.
 const searchInput = document.getElementById('newsSearch');
 const newsCards = document.querySelectorAll('#newsGrid > div');

 function highlightText(element, query) 
 {
  const regex = new RegExp(`(${query})`, 'gi');
  element.innerHTML = element.textContent.replace(regex, '<mark class="bg-yellow-200 text-yellow-800">$1</mark>');
}

  searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

    newsCards.forEach(card => {
    const titleEl = card.querySelector('h3');
    const descEl = card.querySelector('p:nth-of-type(2)');

    const titleText = titleEl.textContent.toLowerCase();
    const descText = descEl.textContent.toLowerCase();

    if (query === '' || titleText.includes(query) || descText.includes(query)) {
      card.style.display = 'block';

      // Reset previous highlights
      titleEl.innerHTML = titleEl.textContent;
      descEl.innerHTML = descEl.textContent;

      if(query) {
        highlightText(titleEl, query);
        highlightText(descEl, query);
      }

    } else {
      card.style.display = 'none';
    }
  });
});
