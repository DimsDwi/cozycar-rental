/* ============================================================
   RentCarPremium – script.js
   ============================================================ */

/* ===== Fallback Default Car Data ===== */
const defaultFleet = [
  {
    name: "Toyota Avanza",
    category: "economy",
    img: "https://th.bing.com/th/id/OIP.oUgGefpCbE5vS0LjZGcq3wHaEK?w=265&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "The Toyota Avanza is our most popular family MPV — spacious, fuel-efficient, and perfectly suited for city drives and long road trips alike. Comfortable for groups of up to 7 passengers.",
    features: [
      "AC",
      "Bluetooth",
      "USB Charger",
      "Power Windows",
      "Child Seat Ready",
    ],
    icons: [
      "fa-wind",
      "fa-bluetooth",
      "fa-usb",
      "fa-car-side",
      "fa-baby-carriage",
    ],
    transmission: "Manual",
    seats: "7 Seats",
    fuel: "Petrol",
    baggage: "Large",
    price: "Rp 350.000/day",
    badge: "Economy",
    badgeClass: "economy",
    status: "available",
  },
  {
    name: "Pajero Sport",
    category: "suv",
    img: "https://th.bing.com/th/id/OIP.t22fXZm8ajaMk3SZnd7yOwHaEh?w=259&h=150&c=6&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Dominate any terrain with the Mitsubishi Pajero Sport. Built for adventure seekers who refuse to compromise on comfort. Ideal for mountain routes and challenging roads.",
    features: ["AC", "GPS Navigation", "Bluetooth", "4WD", "USB Charger"],
    icons: [
      "fa-wind",
      "fa-map-marker-alt",
      "fa-bluetooth",
      "fa-road",
      "fa-usb",
    ],
    transmission: "Automatic",
    seats: "7 Seats",
    fuel: "Diesel",
    baggage: "Extra Large",
    price: "Rp 850.000/day",
    badge: "SUV",
    badgeClass: "suv",
    status: "rented",
  },
  {
    name: "Toyota Raize",
    category: "economy",
    img: "https://th.bing.com/th/id/OIP.m85mOLIDQ7piIHSHy_spLgHaEo?w=328&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Compact yet commanding, the Toyota Raize is your urban escape companion. Its stylish design and peppy CVT make navigating city traffic genuinely enjoyable.",
    features: [
      "AC",
      "Bluetooth",
      "GPS Navigation",
      "USB Charger",
      "360 Camera",
    ],
    icons: [
      "fa-wind",
      "fa-bluetooth",
      "fa-map-marker-alt",
      "fa-usb",
      "fa-camera",
    ],
    transmission: "CVT",
    seats: "5 Seats",
    fuel: "Petrol",
    baggage: "Medium",
    price: "Rp 450.000/day",
    badge: "Economy",
    badgeClass: "economy",
    status: "available",
  },
  {
    name: "Honda Brio",
    category: "economy",
    img: "https://th.bing.com/th/id/OIP.tw2qW6LhWyCzQKC5aZrY2QHaE8?w=253&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "The Honda Brio is the perfect city companion — lightweight, agile, and easy to park. Great fuel economy makes it ideal for extended journeys on a budget.",
    features: [
      "AC",
      "Bluetooth",
      "USB Charger",
      "Power Steering",
      "Keyless Entry",
    ],
    icons: ["fa-wind", "fa-bluetooth", "fa-usb", "fa-steering-wheel", "fa-key"],
    transmission: "CVT",
    seats: "5 Seats",
    fuel: "Petrol",
    baggage: "Small",
    price: "Rp 300.000/day",
    badge: "Economy",
    badgeClass: "economy",
    status: "available",
  },
  {
    name: "Toyota Yaris",
    category: "economy",
    img: "https://th.bing.com/th/id/OIP.pTMqt5w8bcjOJmfh1vdY1gHaE8?w=244&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Sporty, sleek, and surprisingly spacious for its class. The Toyota Yaris blends modern aesthetics with reliable performance for the discerning everyday driver.",
    features: [
      "AC",
      "Bluetooth",
      "GPS Navigation",
      "USB Charger",
      "Parking Sensor",
    ],
    icons: [
      "fa-wind",
      "fa-bluetooth",
      "fa-map-marker-alt",
      "fa-usb",
      "fa-parking",
    ],
    transmission: "CVT",
    seats: "5 Seats",
    fuel: "Petrol",
    baggage: "Medium",
    price: "Rp 380.000/day",
    badge: "Economy",
    badgeClass: "economy",
    status: "available",
  },
  {
    name: "Toyota Alphard",
    category: "premium",
    img: "https://th.bing.com/th/id/OIP.Qn-1zHXewPxutdXA5yAZLQHaE8?w=240&h=150&c=6&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "The pinnacle of luxury MPV travel. The Toyota Alphard delivers a hotel-on-wheels experience with captain seats, ambient lighting, and whisper-quiet ride quality.",
    features: [
      "Dual AC",
      "GPS Navigation",
      "Bluetooth",
      "USB Charger",
      "Sunroof",
      "Captain Seats",
    ],
    icons: [
      "fa-wind",
      "fa-map-marker-alt",
      "fa-bluetooth",
      "fa-usb",
      "fa-sun",
      "fa-chair",
    ],
    transmission: "Automatic",
    seats: "7 Seats",
    fuel: "Hybrid",
    baggage: "Extra Large",
    price: "Rp 1.500.000/day",
    badge: "Premium",
    badgeClass: "premium",
    status: "available",
  },
  {
    name: "Toyota Hiace",
    category: "van",
    img: "https://th.bing.com/th/id/OIP.B_0JEHa3Nm3IFk8mjK9M3AHaE8?w=270&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "The go-to vehicle for group travel and corporate transfers. The Toyota Hiace offers exceptional cargo capacity and comfortable seating for up to 15 passengers.",
    features: ["AC", "Bluetooth", "USB Charger", "CCTV Ready", "Wide Body"],
    icons: ["fa-wind", "fa-bluetooth", "fa-usb", "fa-video", "fa-arrows-alt-h"],
    transmission: "Manual",
    seats: "15 Seats",
    fuel: "Diesel",
    baggage: "Cargo",
    price: "Rp 900.000/day",
    badge: "Van",
    badgeClass: "van",
    status: "available",
  },
];

// Fallback Default Landing Page Text Data for ALL sections
const defaultLandingData = {
  // Hero Section
  heroTagline: "Premium · Reliable · Affordable",
  heroTitle: "Search and book your cozy car here",
  heroSub:
    "Premium car rental experience with modern vehicles, affordable pricing, and easy booking system.",
  heroBtnText: "Explore Fleet",
  // Promo Tape
  promoText:
    "🎉 Get 20% discount on your first booking! Use coupon code: COZYFIRST20",
  // About Us
  aboutTitle: "Who We Are",
  aboutText:
    "CozyCar Rental is Yogyakarta's premier transport solution. Established in 2018, we have served over 10,000+ satisfied clients. We offer high-quality self-drive cars, cars with experienced tour drivers, wedding transportation, and corporate mobility.",
  // Services
  srv1Title: "Self Drive Rental",
  srv1Desc:
    "Rent a car and drive yourself around. Flexible daily or weekly plans.",
  srv2Title: "Driver Included",
  srv2Desc:
    "Rent with our experienced, polite, and english-speaking local drivers.",
  srv3Title: "Airport Transfer",
  srv3Desc: "Hassle-free airport pick-up and drop-off service in Yogyakarta.",
  srv4Title: "Wedding Cars",
  srv4Desc:
    "Make your special day memorable with our clean, premium luxury cars.",
  // Why Choose Us
  whyTitle: "Why Choose RentCarPremium",
  why1Title: "Premium Fleet",
  why1Desc:
    "Selective catalog of clean, well-maintained, and newest luxury car models.",
  why2Title: "Best Price",
  why2Desc:
    "Competitive and transparent pricing. No hidden fees or surprise charges.",
  why3Title: "24/7 Support",
  why3Desc:
    "Support reps and road assistance crew ready round-the-clock for your safety.",
  // How It Works
  procTitle: "How To Book Your Ride",
  proc1Title: "Select Vehicle",
  proc1Desc:
    "Browse our premium fleet and choose the car matching your journey.",
  proc2Title: "Choose Dates",
  proc2Desc:
    "Select your pickup & return dates and fill in reservation details.",
  proc3Title: "Enjoy Journey",
  proc3Desc:
    "Collect your car or have it delivered, and hit the road comfortably.",
  // Main Fleet Catalog Headers
  catalogTitle: "Browse our extensive and modern fleet",
  catalogSub:
    "Choose from our carefully curated selection of premium vehicles for every journey.",
  // Pricing Packages
  packagesTitle: "Our Pricing Packages",
  packagesSub: "Choose the pricing model that fits your travel duration best.",
  // Safety Section
  safetyTitle: "Safe & Sanitized Vehicles",
  safetyDesc:
    "Every car in our fleet undergoes strict 25-point inspection, complete sanitization, and deep cleaning after every single rental to guarantee your safety and peace of mind.",
  // Loyalty Club
  loyaltyTitle: "Join Our Premium Member Club",
  loyaltyDesc:
    "Earn points on every trip, get priority car upgrades, and unlock exclusive discounts up to 30%. Register now for free!",
  // Call To Action (CTA)
  ctaTitle: "Ready to hit the road?",
  ctaDesc:
    "Book your comfortable and luxury ride now. Rent a car in 3 simple steps.",
  // Rental Requirements
  termsTitle: "Rental Requirements",
  term1: "Valid Identity Card (KTP/Passport) required for verification.",
  term2:
    "Valid Driver's License (SIM A / International License) for self-drive.",
  term3: "Security deposit of Rp 500.000 returned on car drop-off.",
  term4: "Fuel must be returned at the same level as pickup.",
  // FAQ Section
  faqTitle: "Frequently Asked Questions",
  faqSub: "Everything you need to know before hitting the road with us.",
  // Contact details
  phone: "+62 812 3456 7890",
  email: "hello@rentcarpremium.id",
  address: "Jl. Malioboro No. 88, Yogyakarta 55271",
  hours: "Mon–Sat: 08.00–20.00 WIB",
  // Newsletter
  newsTitle: "Newsletter Subscriptions",
  newsDesc: "Get exclusive deals and weekly discount codes in your inbox.",
  // Footer
  footerDesc:
    "Premium car rental experience crafted for those who value comfort, style, and reliability.",
  copyright:
    "© 2025 RentCarPremium. All rights reserved. Crafted with heart in Yogyakarta.",
  // Stats Counters
  clients: 500,
  cars: 30,
  rating: 5,
};

// Load shared data
let sharedFleet = JSON.parse(localStorage.getItem("cozycar_fleet"));
if (!sharedFleet) {
  sharedFleet = defaultFleet;
  localStorage.setItem("cozycar_fleet", JSON.stringify(sharedFleet));
}

let landingData = JSON.parse(localStorage.getItem("cozycar_landing_data"));
if (!landingData) {
  landingData = defaultLandingData;
  localStorage.setItem("cozycar_landing_data", JSON.stringify(landingData));
} else {
  // Merge missing keys to prevent script breaks if config expands
  landingData = { ...defaultLandingData, ...landingData };
  localStorage.setItem("cozycar_landing_data", JSON.stringify(landingData));
}

/* ===== DOM Ready ===== */
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  applyLandingPageData();
  initNavbar();
  initHeroTyping();
  initCounters();
  initAOS();
  initSwiper();
  initAccordion();
  renderFleetHome();
  initFleetFilter();
  initCarSearch();
  populateCarDropdown();
  initBookingForm();
  initContactForm();
  initNewsletterForm();
  initScrollProgress();
  initBackToTop();
  initDarkMode();
  initSmoothScroll();
});

/* ===== Apply LocalStorage Landing Page Data ===== */
function applyLandingPageData() {
  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  const setHtml = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  };

  // Section 4: Hero
  setTxt("heroTagline", landingData.heroTagline);
  setTxt("heroSub", landingData.heroSub);

  const heroBtn = document.getElementById("heroBtnText");
  if (heroBtn) {
    heroBtn.innerHTML = `${landingData.heroBtnText} <i class="fas fa-arrow-right"></i>`;
  }

  // Section 5: Promo Tape
  setTxt("promoText", landingData.promoText);

  // Section 9: About Us
  setTxt("aboutTitle", landingData.aboutTitle);
  setTxt("aboutText", landingData.aboutText);

  // Section 10: Services
  setTxt("srv1Title", landingData.srv1Title);
  setTxt("srv1Desc", landingData.srv1Desc);
  setTxt("srv2Title", landingData.srv2Title);
  setTxt("srv2Desc", landingData.srv2Desc);
  setTxt("srv3Title", landingData.srv3Title);
  setTxt("srv3Desc", landingData.srv3Desc);
  setTxt("srv4Title", landingData.srv4Title);
  setTxt("srv4Desc", landingData.srv4Desc);

  // Section 11: Why Choose Us
  const whyTitleEl = document.getElementById("whyTitle");
  if (whyTitleEl) {
    whyTitleEl.innerHTML = landingData.whyTitle.replace(
      /RentCarPremium/g,
      "<em>RentCarPremium</em>",
    );
  }
  setTxt("why1Title", landingData.why1Title);
  setTxt("why1Desc", landingData.why1Desc);
  setTxt("why2Title", landingData.why2Title);
  setTxt("why2Desc", landingData.why2Desc);
  setTxt("why3Title", landingData.why3Title);
  setTxt("why3Desc", landingData.why3Desc);

  // Section 12: How It Works
  const procTitleEl = document.getElementById("procTitle");
  if (procTitleEl) {
    procTitleEl.innerHTML = landingData.procTitle.replace(
      /Book Your Ride/g,
      "<em>Book Your Ride</em>",
    );
  }
  setTxt("proc1Title", landingData.proc1Title);
  setTxt("proc1Desc", landingData.proc1Desc);
  setTxt("proc2Title", landingData.proc2Title);
  setTxt("proc2Desc", landingData.proc2Desc);
  setTxt("proc3Title", landingData.proc3Title);
  setTxt("proc3Desc", landingData.proc3Desc);

  // Section 14: Main Catalog
  const catTitleEl = document.getElementById("catalogTitle");
  if (catTitleEl) {
    catTitleEl.innerHTML = landingData.catalogTitle.replace(
      /and modern fleet/g,
      "<em>and modern fleet</em>",
    );
  }
  setTxt("catalogSub", landingData.catalogSub);

  // Section 16: Packages
  setTxt("packagesTitle", landingData.packagesTitle);
  setTxt("packagesSub", landingData.packagesSub);

  // Section 17: Safety
  setTxt("safetyTitle", landingData.safetyTitle);
  setTxt("safetyDesc", landingData.safetyDesc);

  // Section 18: Loyalty
  setTxt("loyaltyTitle", landingData.loyaltyTitle);
  setTxt("loyaltyDesc", landingData.loyaltyDesc);

  // Section 22: CTA
  setTxt("ctaTitle", landingData.ctaTitle);
  setTxt("ctaDesc", landingData.ctaDesc);

  // Section 23: Requirements
  setTxt("termsTitle", landingData.termsTitle);
  setTxt("term1", landingData.term1);
  setTxt("term2", landingData.term2);
  setTxt("term3", landingData.term3);
  setTxt("term4", landingData.term4);

  // Section 26: FAQ
  setTxt("faqTitle", landingData.faqTitle);
  setTxt("faqSub", landingData.faqSub);

  // Section 27: Contact Info
  setTxt("contactEmail", landingData.email);
  setTxt("footerEmail", landingData.email);
  setTxt("contactPhone", landingData.phone);
  setTxt("footerPhone", landingData.phone);
  setTxt("contactAddress", landingData.address);
  setTxt("footerAddress", landingData.address);
  setTxt("workingHours", landingData.hours);
  setTxt("footerHours", landingData.hours);

  // Section 30: Newsletter
  setTxt("newsTitle", landingData.newsTitle);
  setTxt("newsDesc", landingData.newsDesc);

  // Section 31: Footer Brand Description
  setTxt("footerDesc", landingData.footerDesc);

  // Section 32: Copyright
  setTxt("footerCopyright", landingData.copyright);

  // Section 7: Stats targets
  const statClients = document.getElementById("statClients");
  const statCars = document.getElementById("statCars");
  const statRating = document.getElementById("statRating");

  if (statClients) statClients.setAttribute("data-target", landingData.clients);
  if (statCars) statCars.setAttribute("data-target", landingData.cars);
  if (statRating) statRating.setAttribute("data-target", landingData.rating);
}

/* ===== Loading Screen ===== */
function initLoader() {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hidden");
      document.body.style.overflow = "";
    }, 2200);
    document.body.style.overflow = "hidden";
  }
}

/* ===== Navbar ===== */
function initNavbar() {
  const nav = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (nav && hamburger && navMenu) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 60);
    });

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navMenu.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navMenu.classList.remove("open");
      });
    });

    // Active link on scroll
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY + 100;
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) {
          link.classList.toggle(
            "active",
            scrollY >= top && scrollY < top + height,
          );
        }
      });
    });
  }
}

/* ===== Hero Typing Effect ===== */
function initHeroTyping() {
  const el = document.getElementById("heroTitle");
  if (!el) return;
  const text = landingData.heroTitle;
  let i = 0;
  let html = "";
  const cursor = '<span class="cursor"></span>';

  function type() {
    if (i < text.length) {
      html += text.charAt(i);
      el.innerHTML = html + cursor;
      i++;
      setTimeout(type, 52);
    } else {
      el.innerHTML = html + cursor;
      setTimeout(() => {
        const c = el.querySelector(".cursor");
        if (c) c.style.animationIterationCount = "infinite";
      }, 500);
    }
  }

  setTimeout(type, 1000);
}

/* ===== Stat Counter Animation ===== */
function initCounters() {
  const stats = document.querySelectorAll(".stat-num");
  let animated = false;

  function animateCounters() {
    stats.forEach((el) => {
      const target = +el.dataset.target;
      const duration = 1600;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current);
      }, 16);
    });
    animated = true;
  }

  window.addEventListener("scroll", () => {
    if (animated) return;
    const hero = document.querySelector(".hero-stats");
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    if (rect.top < window.innerHeight) animateCounters();
  });
}

/* ===== AOS ===== */
function initAOS() {
  if (window.AOS) {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }
}

/* ===== Swiper Testimonials ===== */
function initSwiper() {
  if (window.Swiper && document.querySelector(".testimonials-swiper")) {
    new Swiper(".testimonials-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }
}

/* ===== Accordion ===== */
function initAccordion() {
  document.querySelectorAll(".acc-header").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".acc-item");
      const isOpen = item.classList.contains("open");
      document
        .querySelectorAll(".acc-item")
        .forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
}

/* ===== Dynamic Fleet Rendering ===== */
function renderFleetHome() {
  const grid = document.getElementById("carsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  sharedFleet.forEach((car, index) => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.setAttribute("data-category", car.category);
    card.setAttribute("data-name", car.name.toLowerCase());
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", (index % 3) * 80);

    let badgeHtml = `<span class="car-badge ${car.badgeClass}">${car.badge}</span>`;
    let rentButtonHtml = `<button class="btn-rent" onclick="window.location.href='#booking-section'; selectCarDropdown('${car.name}')">Rent Now</button>`;

    if (car.status === "rented") {
      badgeHtml = `<span class="car-badge" style="background:#3b82f6">Rented</span>`;
      rentButtonHtml = `<button class="btn-rent disabled" style="background:#64748b;cursor:not-allowed;" disabled>Rented</button>`;
    } else if (car.status === "maintenance") {
      badgeHtml = `<span class="car-badge" style="background:#ef4444">In Maintenance</span>`;
      rentButtonHtml = `<button class="btn-rent disabled" style="background:#64748b;cursor:not-allowed;" disabled>Unavailable</button>`;
    }

    card.innerHTML = `
      <div class="car-img-wrap">
        <img src="${car.img}" alt="${car.name}" loading="lazy" />
        ${badgeHtml}
      </div>
      <div class="car-info">
        <h3 class="car-name">${car.name}</h3>
        <div class="car-specs">
          <span><i class="fas fa-cog"></i> ${car.transmission}</span>
          <span><i class="fas fa-users"></i> ${car.seats}</span>
          <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
        </div>
        <div class="car-rating">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
          <span>4.8</span>
        </div>
        <div class="car-footer">
          <div class="car-price"><span class="price">${car.price.split("/")[0]}</span><span class="per">/day</span></div>
          <div class="car-actions">
            <button class="btn-view" onclick="openModal(${index})">Details</button>
            ${rentButtonHtml}
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ===== Fleet Filter ===== */
function initFleetFilter() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      filterCars(filter, document.getElementById("carSearch").value);
    });
  });
}

/* ===== Car Search ===== */
function initCarSearch() {
  const searchInput = document.getElementById("carSearch");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const activeFilter =
        document.querySelector(".filter-btn.active")?.dataset.filter || "all";
      filterCars(activeFilter, searchInput.value);
    });
  }
}

function filterCars(filter, query) {
  const cards = document.querySelectorAll(".car-card");
  const q = query.toLowerCase().trim();
  let visibleCount = 0;

  cards.forEach((card) => {
    const cat = card.dataset.category;
    const name = card.dataset.name;
    const matchFilter = filter === "all" || cat === filter;
    const matchSearch = !q || name.includes(q);
    const show = matchFilter && matchSearch;
    card.classList.toggle("hidden", !show);
    if (show) visibleCount++;
  });

  const noResults = document.getElementById("noResults");
  if (noResults) {
    noResults.style.display = visibleCount === 0 ? "block" : "none";
  }
}

/* ===== Populate Dynamic Car Booking Dropdown ===== */
function populateCarDropdown() {
  const select = document.getElementById("bCarType");
  if (!select) return;
  select.innerHTML = '<option value="">Select vehicle...</option>';

  sharedFleet.forEach((car) => {
    if (car.status === "available") {
      const option = document.createElement("option");
      option.value = car.name;
      option.textContent = `${car.name} (${car.price})`;
      select.appendChild(option);
    }
  });
}

window.selectCarDropdown = (carName) => {
  const select = document.getElementById("bCarType");
  if (select) {
    select.value = carName;
  }
};

/* ===== Car Modal ===== */
window.openModal = (idx) => {
  const car = sharedFleet[idx];
  if (!car) return;
  const overlay = document.getElementById("carModal");

  document.getElementById("modalImg").src = car.img;
  document.getElementById("modalImg").alt = car.name;
  document.getElementById("modalName").textContent = car.name;
  document.getElementById("modalDesc").textContent =
    car.desc ||
    "Experience absolute luxury and convenience with our top-tier car services, crafted for your ultimate journey.";

  const badge = document.getElementById("modalBadge");
  badge.textContent = car.badge || car.category.toUpperCase();
  badge.className = `car-badge ${car.badgeClass || car.category}`;

  const featEl = document.getElementById("modalFeatures");
  const features = car.features || ["AC", "Bluetooth", "USB Charger"];
  const icons = car.icons || ["fa-wind", "fa-bluetooth", "fa-usb"];
  featEl.innerHTML = features
    .map(
      (f, i) =>
        `<span class="feature-tag"><i class="fas ${icons[i] || "fa-check"}"></i>${f}</span>`,
    )
    .join("");

  const specsEl = document.getElementById("modalSpecs");
  specsEl.innerHTML = `
    <div class="spec-item"><span>Transmission</span><strong>${car.transmission}</strong></div>
    <div class="spec-item"><span>Capacity</span><strong>${car.seats}</strong></div>
    <div class="spec-item"><span>Fuel Type</span><strong>${car.fuel}</strong></div>
    <div class="spec-item"><span>Baggage</span><strong>${car.baggage || "Medium"}</strong></div>
    <div class="spec-item"><span>Category</span><strong>${car.badge || car.category}</strong></div>
    <div class="spec-item"><span>Rating</span><strong>★ 4.8+</strong></div>
  `;

  document.getElementById("modalPrice").textContent = car.price;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closeModal = () => {
  const modal = document.getElementById("carModal");
  if (modal) {
    modal.classList.remove("open");
  }
  document.body.style.overflow = "";
};

const carModal = document.getElementById("carModal");
if (carModal) {
  carModal.addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ===== Booking Form Submission with LocalStorage Integration ===== */
function initBookingForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("bName").value.trim();
    const email = document.getElementById("bEmail").value.trim();
    const phone = document.getElementById("bPhone").value.trim();
    const location = document.getElementById("bLocation").value.trim();
    const pickup = document.getElementById("bPickup").value;
    const ret = document.getElementById("bReturn").value;
    const carSelected = document.getElementById("bCarType").value;

    if (
      !name ||
      !email ||
      !phone ||
      !location ||
      !pickup ||
      !ret ||
      !carSelected
    ) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill in all required fields before proceeding.",
        confirmButtonColor: "#d4af37",
      });
      return;
    }

    if (new Date(ret) <= new Date(pickup)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Dates",
        text: "Return date must be after pickup date.",
        confirmButtonColor: "#d4af37",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#d4af37",
      });
      return;
    }

    const days = Math.ceil(
      (new Date(ret) - new Date(pickup)) / (1000 * 60 * 60 * 24),
    );
    const carObj = sharedFleet.find((c) => c.name === carSelected);
    const dailyPrice = carObj
      ? parseInt(carObj.price.replace(/[^0-9]/g, "")) || 350000
      : 350000;
    const totalCost = days * dailyPrice;

    let bookings = JSON.parse(localStorage.getItem("cozycar_bookings")) || [];
    const nextId = `#BK-00${bookings.length + 86}`;

    const newBookingObj = {
      id: nextId,
      customer: name,
      car: carSelected,
      pickup: pickup,
      return: ret,
      status: "Pending",
      amount: "Rp " + totalCost.toLocaleString("id-ID"),
    };

    bookings.unshift(newBookingObj);
    localStorage.setItem("cozycar_bookings", JSON.stringify(bookings));

    Swal.fire({
      icon: "success",
      title: "🎉 Booking Received!",
      html: `
        <p style="color:#5a5a5a;line-height:1.7">
          Thank you, <strong>${name}</strong>!<br/>
          Your request for <strong>${carSelected}</strong> for <strong>${days} day(s)</strong> has been logged.<br/><br/>
          Estimated Price: <strong>Rp ${totalCost.toLocaleString("id-ID")}</strong>.<br/>
          You can track this booking under code: <strong>${nextId}</strong>.
        </p>
      `,
      confirmButtonColor: "#d4af37",
      confirmButtonText: "Great, thanks!",
    });
    form.reset();
  });
}

/* ===== Contact Form ===== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cName").value.trim();
    const email = document.getElementById("cEmail").value.trim();
    const msg = document.getElementById("cMessage").value.trim();

    if (!name || !email || !msg) {
      showToast("Please fill in all required fields.", false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address.", false);
      return;
    }
    showToast(`Message sent! We'll get back to you soon, ${name}.`);
    form.reset();
  });
}

/* ===== Newsletter Form ===== */
function initNewsletterForm() {
  const form = document.getElementById("newsletterForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("nlEmail").value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Please enter a valid email.", false);
      return;
    }
    showToast("Successfully subscribed to our newsletter!");
    form.reset();
  });
}

/* ===== Toast ===== */
function showToast(msg, success = true) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toastMsg");
  if (toast && toastMsg) {
    const icon = toast.querySelector("i");
    toastMsg.textContent = msg;
    icon.className = success
      ? "fas fa-check-circle"
      : "fas fa-exclamation-circle";
    icon.style.color = success ? "#4ade80" : "#f87171";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3500);
  }
}

/* ===== Scroll Progress Bar ===== */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (bar) {
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      bar.style.width = `${(scrolled / total) * 100}%`;
    });
  }
}

/* ===== Back to Top ===== */
function initBackToTop() {
  const btn = document.getElementById("backTop");
  if (btn) {
    window.addEventListener("scroll", () => {
      btn.classList.toggle("show", window.scrollY > 400);
    });
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* ===== Dark Mode ===== */
function initDarkMode() {
  const toggle = document.getElementById("darkToggle");
  const icon = document.getElementById("darkIcon");
  const html = document.documentElement;

  if (toggle && icon) {
    const saved = localStorage.getItem("theme") || "light";
    html.setAttribute("data-theme", saved);
    icon.className = saved === "dark" ? "fas fa-sun" : "fas fa-moon";

    toggle.addEventListener("click", () => {
      const current = html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      icon.className = next === "dark" ? "fas fa-sun" : "fas fa-moon";
    });
  }
}

/* ===== Smooth Scroll ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 80;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset,
          behavior: "smooth",
        });
      }
    });
  });
}
