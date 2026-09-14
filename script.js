// ==================== Hero Slider ====================
const slides = document.getElementById("heroSlides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicators = document.querySelectorAll(".indicator");
let currentImage = 0;
let autoSlideInterval;

function updateSlide(direction) {
  if (direction === "next") {
    currentImage = (currentImage + 1) % 4;
  } else if (direction === "prev") {
    currentImage = (currentImage - 1 + 4) % 4;
  }
  const translateX = -(currentImage * 25);
  slides.style.transform = "translateX(" + translateX + "%)";
  indicators.forEach((ind, index) => {
    if (index === currentImage) {
      ind.classList.add("active");
    } else {
      ind.classList.remove("active");
    }
  });
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(function () {
    updateSlide("next");
  }, 5000);
}

if (nextBtn) {
  nextBtn.addEventListener("click", function () {
    updateSlide("next");
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", function () {
    updateSlide("prev");
  });
}

indicators.forEach(function (ind, index) {
  ind.addEventListener("click", function () {
    currentImage = index;
    const translateX = -(currentImage * 25);
    slides.style.transform = "translateX(" + translateX + "%)";
    indicators.forEach((i, idx) => {
      if (idx === currentImage) {
        i.classList.add("active");
      } else {
        i.classList.remove("active");
      }
    });
    clearInterval(autoSlideInterval);
    startAutoSlide();
  });
});

startAutoSlide();

// ==================== Login Modal Form ====================
const loginForm = document.querySelector("#loginModal form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login submitted!");
  });
}

// ==================== Destination Accordion ====================
function toggleDestination(element) {
  const content = element.nextElementSibling;
  const icon = element.querySelector(".toggle-icon");

  document.querySelectorAll(".destination-content").forEach((item) => {
    if (item !== content) {
      item.classList.remove("show");
    }
  });

  document.querySelectorAll(".toggle-icon").forEach((icn) => {
    if (icn !== icon) {
      icn.classList.remove("rotated");
    }
  });

  content.classList.toggle("show");
  icon.classList.toggle("rotated");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".destination-content").forEach((content) => {
    content.classList.remove("show");
  });
});

// ==================== Copy to Clipboard Functions ====================
function copyText() {
  const textarea = document.querySelector(
    ".translation-card:first-child .translation-input"
  );
  const notification = document.getElementById("copyNotification");
  if (textarea && notification) {
    textarea.select();
    document.execCommand("copy");
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }
}

function copyText2() {
  const textarea = document.querySelector(
    ".translation-card:nth-child(2) .translation-input"
  );
  const notification = document.getElementById("copyNotification");
  if (textarea && notification) {
    textarea.select();
    document.execCommand("copy");
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }
}

function copyText3() {
  const textarea = document.querySelector(
    ".translation-card:nth-child(3) .translation-input"
  );
  const notification = document.getElementById("copyNotification");
  if (textarea && notification) {
    textarea.select();
    document.execCommand("copy");
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }
}

// Close notification on click
const notificationOkBtn = document.querySelector(".notification-ok");
if (notificationOkBtn) {
  notificationOkBtn.addEventListener("click", function () {
    const notification = document.getElementById("copyNotification");
    if (notification) {
      notification.classList.remove("show");
    }
  });
}