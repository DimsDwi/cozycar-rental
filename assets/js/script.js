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
    name: "Toyota Etios",
    category: "economy",
    img: "https://th.bing.com/th/id/OIP.eQrUA0qv_53PCn4i0zDPHgHaE8?w=278&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Reliable and practical, the Toyota Etios is a solid choice for budget-conscious travellers who still expect solid build quality and responsive handling.",
    features: [
      "AC",
      "Power Windows",
      "USB Charger",
      "Central Lock",
      "AM/FM Radio",
    ],
    icons: [
      "fa-wind",
      "fa-car-side",
      "fa-usb",
      "fa-lock",
      "fa-broadcast-tower",
    ],
    transmission: "Manual",
    seats: "5 Seats",
    fuel: "Petrol",
    baggage: "Medium",
    price: "Rp 280.000/day",
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
  {
    name: "Skoda Kodiaq",
    category: "suv",
    img: "https://th.bing.com/th/id/OIP.9dppdRpbWoQh_RIjaWYaTgHaEK?w=307&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "European engineering meets Indonesian roads. The Skoda Kodiaq offers impressive DSG transmission, panoramic roof, and premium interior finishes rarely found in this segment.",
    features: [
      "Panoramic Roof",
      "GPS Navigation",
      "Bluetooth",
      "USB Charger",
      "Lane Assist",
      "Park Assist",
    ],
    icons: [
      "fa-sun",
      "fa-map-marker-alt",
      "fa-bluetooth",
      "fa-usb",
      "fa-road",
      "fa-parking",
    ],
    transmission: "DSG",
    seats: "7 Seats",
    fuel: "Petrol",
    baggage: "Extra Large",
    price: "Rp 1.100.000/day",
    badge: "SUV",
    badgeClass: "suv",
    status: "available",
  },
];

// Load shared data
let sharedFleet = JSON.parse(localStorage.getItem("cozycar_fleet"));
if (!sharedFleet) {
  sharedFleet = defaultFleet;
  localStorage.setItem("cozycar_fleet", JSON.stringify(sharedFleet));
}

/* ===== DOM Ready ===== */
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
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
  const text = "Search and book your cozy car here";
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
  if (window.Swiper) {
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

    // Badge styling based on availability
    let badgeHtml = `<span class="car-badge ${car.badgeClass}">${car.badge}</span>`;
    let rentButtonHtml = `<button class="btn-rent" onclick="window.location.href='#booking'; selectCarDropdown('${car.name}')">Rent Now</button>`;

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

    // Calculate days and pricing
    const days = Math.ceil(
      (new Date(ret) - new Date(pickup)) / (1000 * 60 * 60 * 24),
    );
    const carObj = sharedFleet.find((c) => c.name === carSelected);
    const dailyPrice = carObj
      ? parseInt(carObj.price.replace(/[^0-9]/g, "")) || 350000
      : 350000;
    const totalCost = days * dailyPrice;

    // Load bookings and save
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
