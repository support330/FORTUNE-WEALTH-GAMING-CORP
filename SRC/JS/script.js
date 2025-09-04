

  // Slideshow
  let slideIndex = 0;
  function showSlides() {
    const slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return; // safety check

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 5000); // Change every 5 seconds
  }

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

       // Scroll Effect Script 
 document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("magazineNav");
    if (!nav) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        nav.classList.add("bg-[#0a0a0a]/95", "shadow-xl", "py-3");
        nav.classList.remove("py-5", "bg-[#D0D9EE]");
      } else {
        nav.classList.remove("bg-[#0a0a0a]/95", "shadow-xl", "py-3");
        nav.classList.add("py-5", "bg-[#D0D9EE]");
      }
    });
  });



