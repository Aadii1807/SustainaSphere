document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const mainContent = document.getElementById("main-content");

  // Open sidebar
  function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
    if (mainContent) mainContent.classList.add("blurred");
  }

  // Close sidebar
  function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    if (mainContent) mainContent.classList.remove("blurred");
  }

  // Event listeners
  if (menuBtn) menuBtn.addEventListener("click", openSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('fade-in-element');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll('.feature-card, .text-center, .max-w-4xl > div');
  elements.forEach(el => observer.observe(el));

  // CTA form submission
  const form = document.querySelector('#cta form');
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.innerHTML = '<p class="text-white text-lg font-semibold">Thank you! You\'re on the list.</p>';
    });
  }

  
});

const tips = [
  "Use public transport or carpool to reduce CO₂ emissions.",
  "Turn off lights and unplug devices when not in use.",
  "Adopt a plant-based diet 2-3 times a week.",
  "Collect rainwater for gardening and cleaning purposes.",
  "Support local and sustainable businesses.",
  "Recycle and compost household waste to minimize landfill contributions.",
  "Use energy-efficient appliances and LED lighting.",
  "Utilize Solar Energy.",
  "Invest in plastic-free food storage containeers.",
  "Donate or upcycle what you don't want.",
  "Invest in reusable bags.",
  "Use recycled and eco-friendly wrapping paper materials.",
  "Stay warm by cuddling up under the mistletoe.",
  "Volunteer for local organizations.",
  "Donate when you can.",
];

const tipsContainer = document.getElementById('tipsContainer');
const newTipBtn = document.getElementById('newTipBtn');

function showTip() {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  
  // Create a new paragraph element
  const tipElement = document.createElement('p');
  tipElement.textContent = tip;
  tipElement.classList.add('fade-in-tip');
  
  // Clear previous tip and append new tip
  tipsContainer.innerHTML = '';
  tipsContainer.appendChild(tipElement);
}

// Show initial tip
showTip();

// Button click event
newTipBtn.addEventListener('click', showTip);


// Handle login form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    alert(`Logged in with ${email} (Demo only)`);
  });
}

// Handle register form
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Account created for ${name} (Demo only)`);
    window.location.href = "login.html"; // redirect back to login
  });
}