document.addEventListener('DOMContentLoaded', () => {
  initLayout();
  initScrollHeader();
  initMobileMenu();
  initFAQ();
  initForms();
  highlightActiveLink();
  initTimetable();
});

// Programmatically render consistent luxury header and footer across pages
function initLayout() {
  const header = document.getElementById('global-header');
  const footer = document.getElementById('global-footer');

  if (header) {
    header.innerHTML = `
      <div class="container nav-container">
        <a href="index.html" class="logo">
          <img src="assets/logo.png" alt="JUST FITNESS">
        </a>
        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav id="nav-menu">
          <ul>
            <li><a href="index.html" data-page="index.html">Home</a></li>
            <li><a href="about.html" data-page="about.html">About</a></li>
            <li><a href="services.html" data-page="services.html">Services</a></li>
            <li><a href="membership.html" data-page="membership.html">Membership</a></li>
            <li><a href="spa-recovery.html" data-page="spa-recovery.html">Spa & Recovery</a></li>
            <li><a href="contact.html" data-page="contact.html">Contact</a></li>
          </ul>
        </nav>
        <div class="nav-right" style="display: flex; align-items: center; gap: 1.5rem;">
          <a href="https://www.instagram.com/justfitness_2024?igsh=MXUyazRjYzV6b3E1cw==" target="_blank" aria-label="Instagram" style="color: #a0a5ad; display: flex; align-items: center; justify-content: center; transition: var(--transition-fast);" onmouseover="this.style.color='#ff3333'" onmouseout="this.style.color='#a0a5ad'">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="contact.html" class="btn btn-primary" style="padding: 0.65rem 1.6rem; font-size: 0.75rem;">Claim Free Trial</a>
        </div>
      </div>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="logo footer-logo">
              <img src="assets/logo.png" alt="JUST FITNESS">
            </a>
            <p class="footer-desc" style="margin-top: 1rem;">A complete luxury fitness and wellness destination. Investing in your physical potential, mental clarity, and long-term health.</p>
            <div style="margin-top: 1rem; display: flex; gap: 0.8rem; align-items: center;">
              <a href="https://www.instagram.com/justfitness_2024?igsh=MXUyazRjYzV6b3E1cw==" target="_blank" style="color: #a0a5ad; display: inline-flex; align-items: center; gap: 0.5rem; transition: var(--transition-fast);" onmouseover="this.style.color='#ff3333'" onmouseout="this.style.color='#a0a5ad'">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span style="font-size: 0.85rem;">@justfitness_2024</span>
              </a>
            </div>
          </div>
          <div>
            <h4 class="footer-title">Explore</h4>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html">Classes & Services</a></li>
              <li><a href="gallery.html">Visual Gallery</a></li>
              <li><a href="blog.html">Wellness Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-title">Pillars</h4>
            <ul class="footer-links">
              <li><a href="membership.html">Memberships</a></li>
              <li><a href="personal-training.html">Bespoke Coaching</a></li>
              <li><a href="spa-recovery.html">Thermal Spa & Recovery</a></li>
              <li><a href="nutrition.html">Nutrition & Fuel Cafe</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-title">Contact</h4>
            <ul class="footer-links">
              <li><a href="tel:+917508189500">+91 75081 89500</a></li>
              <li><a href="mailto:inderpreetsinghsaini43@gmail.com">inderpreetsinghsaini43@gmail.com</a></li>
              <li><a href="contact.html">2nd Floor Sco 53B, 53C, 54, above Domino's, Sector 125, Sunny Enclave, Kharar, Punjab 140301</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} JUST FITNESS. All Rights Reserved.</p>
          <div style="display: flex; gap: 1.5rem;">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    `;
  }
}

// Active state for navbar links
function highlightActiveLink() {
  const path = window.location.pathname;
  let page = path.split('/').pop() || 'index.html';
  
  // Clean up any parameters or hashes
  page = page.split('#')[0].split('?')[0];

  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
    const dataPage = link.getAttribute('data-page');
    if (page === dataPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Scrolled navbar shadow & height transition
function initScrollHeader() {
  const header = document.getElementById('global-header');
  if (!header) return;

  // Set default scrolled class if already scrolled on load
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Responsive mobile menu toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = toggleBtn.querySelectorAll('span');
    if (toggleBtn.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && e.target !== toggleBtn) {
      toggleBtn.classList.remove('active');
      navMenu.classList.remove('active');
      const spans = toggleBtn.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
}

// FAQ Accordion Toggles
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');
    
    if (!btn || !answer) return;
    
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other FAQ items first
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });
      
      if (!isActive) {
        item.classList.add('active');
        // Slide down
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// Form Handlers & Validations
function initForms() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic validation check
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#ff3333';
        } else {
          input.style.borderColor = '';
        }
      });
      
      if (isValid) {
        // Show success animation modal/toast
        showSuccessModal(form);
      }
    });
  });
}

function showSuccessModal(form) {
  // Create beautiful, luxury success alert overlay
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.backgroundColor = 'rgba(9, 10, 12, 0.88)';
  modal.style.backdropFilter = 'blur(15px)';
  modal.style.webkitBackdropFilter = 'blur(15px)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '9999';
  modal.style.opacity = '0';
  modal.style.transition = 'opacity 0.4s ease';

  modal.innerHTML = `
    <div style="
      background-color: #121417;
      color: #ffffff;
      padding: 4rem 3rem;
      border-radius: 32px;
      text-align: center;
      max-width: 500px;
      width: 90%;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 51, 51, 0.1);
      position: relative;
      overflow: hidden;
    ">
      <div style="
        position: absolute;
        top: -50px;
        right: -50px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 51, 51, 0.2) 0%, rgba(255, 51, 51, 0) 70%);
        pointer-events: none;
      "></div>
      <div style="font-size: 4rem; margin-bottom: 1.5rem; line-height: 1; color: #ff3333;">✓</div>
      <h3 style="font-family: 'Outfit', sans-serif; font-size: 2.2rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.1;">Reservation Received</h3>
      <p style="font-family: 'Inter', sans-serif; font-size: 1rem; font-weight: 400; color: #a0a5ad; margin-bottom: 2rem;">
        An executive wellness concierge will contact you within the hour to customize your visit. Welcome to the elite tier of lifestyle wellness.
      </p>
      <button id="close-modal-btn" class="btn btn-primary" style="
        background-color: #ff3333;
        border-color: #ff3333;
        color: #ffffff;
      ">Return</button>
    </div>
  `;

  document.body.appendChild(modal);

  // Fade in
  setTimeout(() => {
    modal.style.opacity = '1';
  }, 10);

  const closeBtn = modal.querySelector('#close-modal-btn');
  closeBtn.addEventListener('click', () => {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.remove();
      form.reset();
    }, 400);
  });
}

// 1. Timetable Navigation Control
function initTimetable() {
  const tabs = document.querySelectorAll('.timetable-tab-btn');
  const grids = document.querySelectorAll('.timetable-grid');

  if (tabs.length === 0 || grids.length === 0) return;

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      grids.forEach(g => g.classList.remove('active'));

      tab.classList.add('active');
      grids[index].classList.add('active');
    });
  });
}

// 2. Interactive Customizer Calculator for Memberships
function updateCustomPrice() {
  const addSpa = document.getElementById('add-spa');
  const addCoaching = document.getElementById('add-coaching');
  const addNutrition = document.getElementById('add-nutrition');
  const display = document.getElementById('custom-price-display');

  if (!display) return;

  let price = 250;
  if (addSpa && addSpa.checked) price += 150;
  if (addCoaching && addCoaching.checked) price += 250;
  if (addNutrition && addNutrition.checked) price += 150;

  display.innerText = `$${price}/mo`;
}
window.updateCustomPrice = updateCustomPrice;

// 3. Macros & Daily Intake Calculator
function calculateMacros() {
  const weightInput = document.getElementById('calc-weight');
  const heightInput = document.getElementById('calc-height');
  const goalSelect = document.getElementById('calc-goal');
  const resultDiv = document.getElementById('calc-result');
  const caloriesDisplay = document.getElementById('calc-calories-display');
  const mealDisplay = document.getElementById('calc-meal-display');

  if (!weightInput || !heightInput || !goalSelect || !resultDiv) return;

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height measurements.");
    return;
  }

  // Calculate standard Harris-Benedict baseline target calories for age 25
  let calories = Math.round((10 * weight) + (6.25 * height) - (5 * 25) + 5);
  const goal = goalSelect.value;

  let meal = "";
  if (goal === "gain") {
    calories += 500;
    meal = "Keto Salmon Plate + Pro Recovery Shake (High protein & carbs)";
  } else {
    calories -= 300;
    meal = "Green Clarity Juice + Grilled Chicken Salad (Low carb & fat)";
  }

  caloriesDisplay.innerText = `Daily Target: ${calories} kcal`;
  mealDisplay.innerText = `Recommended Fuel: ${meal}`;
  resultDiv.style.display = 'block';
  
  // Smooth scroll to output
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
window.calculateMacros = calculateMacros;
