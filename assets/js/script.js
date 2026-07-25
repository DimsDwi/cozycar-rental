/* ============================================================
   CozyCar Rental – script.js
   ============================================================ */

/* ===== Fallback Default Car Data ===== */
const defaultFleet = [
  {
    name: "Toyota Avanza",
    category: "economy",
    img: "https://th.bing.com/th/id/OIP.oUgGefpCbE5vS0LjZGcq3wHaEK?w=265&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Toyota Avanza adalah MPV keluarga terfavorit kami — lapang, irit bahan bakar, dan sangat cocok untuk perjalanan dalam kota maupun luar kota. Nyaman untuk hingga 7 penumpang.",
    features: [
      "AC",
      "Bluetooth",
      "USB Charger",
      "Power Windows",
      "Kursi Bayi Ready",
    ],
    icons: [
      "fa-wind",
      "fa-bluetooth",
      "fa-usb",
      "fa-car-side",
      "fa-baby-carriage",
    ],
    transmission: "Manual",
    seats: "7 Kursi",
    fuel: "Bensin",
    baggage: "Besar",
    price: "Rp 350.000/hari",
    badge: "Ekonomi",
    badgeClass: "economy",
    status: "available",
  },
  {
    name: "Pajero Sport",
    category: "suv",
    img: "https://th.bing.com/th/id/OIP.t22fXZm8ajaMk3SZnd7yOwHaEh?w=259&h=150&c=6&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Taklukkan berbagai medan dengan Mitsubishi Pajero Sport. Dirancang untuk jiwa petualang yang tetap mengutamakan kenyamanan. Sangat ideal untuk rute pegunungan dan medan menantang.",
    features: ["AC", "Navigasi GPS", "Bluetooth", "4WD", "USB Charger"],
    icons: [
      "fa-wind",
      "fa-map-marker-alt",
      "fa-bluetooth",
      "fa-road",
      "fa-usb",
    ],
    transmission: "Otomatis",
    seats: "7 Kursi",
    fuel: "Diesel",
    baggage: "Sangat Besar",
    price: "Rp 850.000/hari",
    badge: "SUV",
    badgeClass: "suv",
    status: "rented",
  },
  {
    name: "Toyota Raize",
    category: "economy",
    img: "https://th.bing.com/th/id/OIP.m85mOLIDQ7piIHSHy_spLgHaEo?w=328&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Kompak namun tangguh, Toyota Raize adalah teman perjalanan perkotaan Anda. Desain stylish dan transmisi CVT yang responsif membuat navigasi lalu lintas kota menjadi menyenangkan.",
    features: ["AC", "Bluetooth", "Navigasi GPS", "USB Charger", "Kamera 360"],
    icons: [
      "fa-wind",
      "fa-bluetooth",
      "fa-map-marker-alt",
      "fa-usb",
      "fa-camera",
    ],
    transmission: "CVT",
    seats: "5 Kursi",
    fuel: "Bensin",
    baggage: "Sedang",
    price: "Rp 450.000/hari",
    badge: "Ekonomi",
    badgeClass: "economy",
    status: "available",
  },
  {
    name: "Honda Brio",
    category: "economy",
    img: "https://th.bing.com/th/id/OIP.tw2qW6LhWyCzQKC5aZrY2QHaE8?w=253&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Honda Brio adalah mobil kota yang sempurna — ringan, lincah, dan mudah diparkir. Sangat irit bahan bakar, menjadikannya pilihan ideal untuk perjalanan hemat.",
    features: [
      "AC",
      "Bluetooth",
      "USB Charger",
      "Power Steering",
      "Keyless Entry",
    ],
    icons: ["fa-wind", "fa-bluetooth", "fa-usb", "fa-steering-wheel", "fa-key"],
    transmission: "CVT",
    seats: "5 Kursi",
    fuel: "Bensin",
    baggage: "Kecil",
    price: "Rp 300.000/hari",
    badge: "Ekonomi",
    badgeClass: "economy",
    status: "available",
  },
  {
    name: "Toyota Yaris",
    category: "economy",
    img: "https://th.bing.com/th/id/OIP.pTMqt5w8bcjOJmfh1vdY1gHaE8?w=244&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Sporty, elegan, dan sangat luas untuk kelasnya. Toyota Yaris memadukan estetika modern dengan performa andal untuk kenyamanan berkendara harian Anda.",
    features: [
      "AC",
      "Bluetooth",
      "Navigasi GPS",
      "USB Charger",
      "Sensor Parkir",
    ],
    icons: [
      "fa-wind",
      "fa-bluetooth",
      "fa-map-marker-alt",
      "fa-usb",
      "fa-parking",
    ],
    transmission: "CVT",
    seats: "5 Kursi",
    fuel: "Bensin",
    baggage: "Sedang",
    price: "Rp 380.000/hari",
    badge: "Ekonomi",
    badgeClass: "economy",
    status: "available",
  },
  {
    name: "Toyota Alphard",
    category: "premium",
    img: "https://th.bing.com/th/id/OIP.Qn-1zHXewPxutdXA5yAZLQHaE8?w=240&h=150&c=6&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Puncak kenyamanan perjalanan MPV mewah. Toyota Alphard menghadirkan pengalaman serasa hotel berjalan dengan captain seat, pencahayaan kabin elegan, dan rasa berkendara yang tenang.",
    features: [
      "Dual AC",
      "Navigasi GPS",
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
    transmission: "Otomatis",
    seats: "7 Kursi",
    fuel: "Hybrid",
    baggage: "Sangat Besar",
    price: "Rp 1.500.000/hari",
    badge: "Mewah",
    badgeClass: "premium",
    status: "available",
  },
  {
    name: "Toyota Hiace",
    category: "van",
    img: "https://th.bing.com/th/id/OIP.B_0JEHa3Nm3IFk8mjK9M3AHaE8?w=270&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    desc: "Pilihan utama untuk perjalanan rombongan dan ketersediaan kendaraan operasional. Toyota Hiace menawarkan kapasitas bagasi luar biasa dan tempat duduk nyaman hingga 15 penumpang.",
    features: ["AC", "Bluetooth", "USB Charger", "Kamera CCTV", "Kabin Luas"],
    icons: ["fa-wind", "fa-bluetooth", "fa-usb", "fa-video", "fa-arrows-alt-h"],
    transmission: "Manual",
    seats: "15 Kursi",
    fuel: "Diesel",
    baggage: "Kargo",
    price: "Rp 900.000/hari",
    badge: "Van",
    badgeClass: "van",
    status: "available",
  },
];

// Fallback Default Landing Page Text Data for ALL sections
const defaultLandingData = {
  // Hero Section
  heroTagline: "Mewah · Terpercaya · Terjangkau",
  heroTitle: "Cari dan sewa mobil nyaman Anda di sini",
  heroSub:
    "Pengalaman sewa mobil premium dengan armada modern, harga terjangkau, dan sistem pemesanan yang mudah.",
  heroBtnText: "Jelajahi Armada",
  // Promo Tape
  promoText:
    "🎉 Dapatkan diskon 20% untuk pemesanan pertama Anda! Gunakan kode kupon: COZYFIRST20",
  // About Us
  aboutTitle: "Tentang Kami",
  aboutText:
    "CozyCar Rental adalah penyedia solusi transportasi utama di Yogyakarta. Berdiri sejak tahun 2018, kami telah melayani lebih dari 10.000+ pelanggan puas. Kami menyediakan layanan sewa lepas kunci, mobil dengan pengemudi profesional, transportasi pernikahan, hingga kebutuhan operasional perusahaan.",
  // Services
  srv1Title: "Sewa Lepas Kunci",
  srv1Desc:
    "Sewa mobil dan kemudikan sendiri secara bebas. Pilihan harian atau mingguan yang fleksibel.",
  srv2Title: "Sewa Dengan Sopir",
  srv2Desc:
    "Sewa mobil beserta pengemudi berpengalaman, ramah, dan menguasai rute perjalanan.",
  srv3Title: "Antar Jemput Bandara",
  srv3Desc:
    "Layanan penjemputan dan pengantaran bandara yang tepat waktu dan nyaman di Yogyakarta.",
  srv4Title: "Mobil Pengantin",
  srv4Desc:
    "Jadikan hari istimewa Anda berkesan dengan mobil mewah yang bersih dan elegan.",
  // Why Choose Us
  whyTitle: "Mengapa Memilih CozyCar Rental",
  why1Title: "Armada Premium",
  why1Desc:
    "Koleksi mobil terpilih yang selalu bersih, terawat, dan menggunakan model keluaran terbaru.",
  why2Title: "Harga Terbaik",
  why2Desc:
    "Harga kompetitif dan transparan. Tanpa biaya tersembunyi atau kejutan harga di akhir.",
  why3Title: "Layanan 24/7",
  why3Desc:
    "Tim customer service dan bantuan darurat jalan raya siap melayani Anda 24 jam sehari.",
  // How It Works
  procTitle: "Cara Mudah Memesan Mobil",
  proc1Title: "Pilih Kendaraan",
  proc1Desc:
    "Jelajahi koleksi armada kami dan pilih mobil yang sesuai dengan kebutuhan perjalanan Anda.",
  proc2Title: "Tentukan Tanggal",
  proc2Desc:
    "Pilih tanggal penjemputan & pengembalian serta lengkapi data reservasi Anda.",
  proc3Title: "Nikmati Perjalanan",
  proc3Desc:
    "Ambil mobil Anda atau minta diantarkan ke lokasi Anda, lalu nikmati perjalanan dengan nyaman.",
  // Main Fleet Catalog Headers
  catalogTitle: "Jelajahi Koleksi Armada Modern Kami",
  catalogSub:
    "Pilih dari berbagai kategori kendaraan berkualitas untuk setiap jenis perjalanan Anda.",
  // Pricing Packages
  packagesTitle: "Paket Harga Sewa",
  packagesSub:
    "Pilih skema harga yang paling sesuai dengan durasi dan kebutuhan perjalanan Anda.",
  // Safety Section
  safetyTitle: "Kendaraan Aman & Higienis",
  safetyDesc:
    "Setiap mobil di armada kami melalui inspeksi ketat 25 poin, pembersihan menyeluruh, dan disinfeksi total setelah setiap penyewaan untuk menjamin keselamatan dan kenyamanan Anda.",
  // Loyalty Club
  loyaltyTitle: "Bergabunglah dengan Klub Member Premium",
  loyaltyDesc:
    "Kumpulkan poin setiap kali menyewa, dapatkan prioritas upgrade mobil, dan buka diskon eksklusif hingga 30%. Daftar sekarang gratis!",
  // Call To Action (CTA)
  ctaTitle: "Siap Memulai Perjalanan Anda?",
  ctaDesc:
    "Pesan mobil impian Anda yang nyaman dan mewah sekarang. Cukup sewa mobil dalam 3 langkah mudah.",
  // Rental Requirements
  termsTitle: "Syarat & Ketentuan Sewa",
  term1: "Identitas diri asli yang berlaku (KTP/Paspor) untuk verifikasi data.",
  term2:
    "Surat Izin Mengemudi (SIM A / SIM Internasional) yang masih berlaku untuk lepas kunci.",
  term3:
    "Deposit jaminan sebesar Rp 500.000 (dikembalikan saat pengembalian mobil).",
  term4: "BBM dikembalikan sesuai dengan posisi awal saat penjemputan mobil.",
  // FAQ Section
  faqTitle: "Pertanyaan yang Sering Diajukan",
  faqSub: "Semua hal yang perlu Anda ketahui sebelum menyewa mobil kami.",
  // Contact details
  phone: "+62 812 3456 7890",
  email: "hello@cozycar-rental.my.id",
  address: "Jl. Malioboro No. 88, Yogyakarta 55271",
  hours: "Senin–Sabtu: 08.00–20.00 WIB",
  // Newsletter
  newsTitle: "Berlangganan Newsletter",
  newsDesc:
    "Dapatkan penawaran eksklusif dan kode diskon mingguan langsung di email Anda.",
  // Footer
  footerDesc:
    "Pengalaman sewa mobil premium yang dirancang bagi Anda yang mengutamakan kenyamanan, gaya, dan keandalan.",
  copyright:
    "© 2025 CozyCar Rental. Hak cipta dilindungi undang-undang. Dibuat dengan sepenuh hati di Yogyakarta.",
  // Stats Counters
  clients: 500,
  cars: 30,
  rating: 5,
};

// Load shared data with full Indonesian sync
let sharedFleet = JSON.parse(localStorage.getItem("cozycar_fleet"));
if (
  !sharedFleet ||
  sharedFleet.length === 0 ||
  sharedFleet[0].seats?.includes("Seats")
) {
  sharedFleet = defaultFleet;
  localStorage.setItem("cozycar_fleet", JSON.stringify(sharedFleet));
}

let landingData = JSON.parse(localStorage.getItem("cozycar_landing_data"));
if (!landingData || landingData.heroTagline?.includes("Premium · Reliable")) {
  landingData = defaultLandingData;
  localStorage.setItem("cozycar_landing_data", JSON.stringify(landingData));
} else {
  // Always update keys from defaultLandingData to ensure clean Indonesian text
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
  initEmptyLinks();
});

/* ===== Apply LocalStorage Landing Page Data ===== */
function applyLandingPageData() {
  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
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
      /CozyCar Rental/g,
      "<em>CozyCar Rental</em>",
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
    let rentButtonHtml = `<button class="btn-rent" onclick="window.location.href='#booking-section'; selectCarDropdown('${car.name}')">Sewa Sekarang</button>`;

    if (car.status === "rented") {
      badgeHtml = `<span class="car-badge" style="background:#3b82f6">Disewa</span>`;
      rentButtonHtml = `<button class="btn-rent disabled" style="background:#64748b;cursor:not-allowed;" disabled>Disewa</button>`;
    } else if (car.status === "maintenance") {
      badgeHtml = `<span class="car-badge" style="background:#ef4444">Perawatan</span>`;
      rentButtonHtml = `<button class="btn-rent disabled" style="background:#64748b;cursor:not-allowed;" disabled>Tidak Tersedia</button>`;
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
          <div class="car-price"><span class="price">${car.price.split("/")[0]}</span><span class="per">/hari</span></div>
          <div class="car-actions">
            <button class="btn-view" onclick="openModal(${index})">Detail</button>
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
  select.innerHTML = '<option value="">Pilih kendaraan...</option>';

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
    "Nikmati kenyamanan dan kemewahan mutlak bersama layanan sewa mobil terbaik kami, dirancang khusus untuk perjalanan impian Anda.";

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
    <div class="spec-item"><span>Transmisi</span><strong>${car.transmission}</strong></div>
    <div class="spec-item"><span>Kapasitas</span><strong>${car.seats}</strong></div>
    <div class="spec-item"><span>Bahan Bakar</span><strong>${car.fuel}</strong></div>
    <div class="spec-item"><span>Bagasi</span><strong>${car.baggage || "Sedang"}</strong></div>
    <div class="spec-item"><span>Kategori</span><strong>${car.badge || car.category}</strong></div>
    <div class="spec-item"><span>Penilaian</span><strong>★ 4.8+</strong></div>
  `;

  document.getElementById("modalPrice").textContent = car.price;

  // Update Book This Car trigger inside modal dynamically
  const modalBookBtn = document.querySelector("#carModal .btn-primary");
  if (modalBookBtn) {
    modalBookBtn.setAttribute(
      "onclick",
      `closeModal(); selectCarDropdown('${car.name}');`,
    );
  }

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
        title: "Formulir Belum Lengkap",
        text: "Harap isi semua kolom yang wajib diisi sebelum melanjutkan.",
        confirmButtonColor: "#d4af37",
      });
      return;
    }

    if (new Date(ret) <= new Date(pickup)) {
      Swal.fire({
        icon: "error",
        title: "Tanggal Tidak Valid",
        text: "Tanggal pengembalian harus setelah tanggal penjemputan.",
        confirmButtonColor: "#d4af37",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Email Tidak Valid",
        text: "Harap masukkan alamat email yang valid.",
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
      title: "🎉 Pemesanan Diterima!",
      html: `
        <p style="color:#5a5a5a;line-height:1.7">
          Terima kasih, <strong>${name}</strong>!<br/>
          Permintaan sewa untuk <strong>${carSelected}</strong> selama <strong>${days} hari</strong> telah dicatat.<br/><br/>
          Estimasi Biaya: <strong>Rp ${totalCost.toLocaleString("id-ID")}</strong>.<br/>
          Anda dapat memantau pemesanan ini dengan kode: <strong>${nextId}</strong>.
        </p>
      `,
      confirmButtonColor: "#d4af37",
      confirmButtonText: "Bagus, Terima Kasih!",
    });
    form.reset();
  });
}

/* ===== Dynamic Page Actions Triggers ===== */
window.selectPackage = (packageName) => {
  const messageInput = document.getElementById("bMessage");
  if (messageInput) {
    messageInput.value = `Berminat untuk memesan paket: ${packageName}.`;
  }
};

window.selectLoyalty = () => {
  const messageInput = document.getElementById("cMessage");
  if (messageInput) {
    messageInput.value =
      "Saya ingin mendaftar Klub Member Premium. Mohon kirimkan detail informasi ke email saya.";
  }
};

window.playPromoVideo = () => {
  if (window.Swal) {
    Swal.fire({
      title: "CozyCar Rental – Video Promosi",
      html: `
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;">
          <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" 
            src="https://www.youtube.com/embed/1Z51h-Lek8w?autoplay=1" 
            title="Video Promosi" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      `,
      showConfirmButton: false,
      width: "700px",
      background: "var(--bg2)",
    });
  }
};

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
      showToast("Harap isi semua kolom yang wajib diisi.", false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Harap masukkan alamat email yang valid.", false);
      return;
    }
    showToast(`Pesan terkirim! Kami akan segera menghubungi Anda, ${name}.`);
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
      showToast("Harap masukkan email yang valid.", false);
      return;
    }
    showToast("Berhasil berlangganan newsletter kami!");
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

/* ===== Prevent jumpy links for empty hashes ===== */
function initEmptyLinks() {
  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.Swal) {
        Swal.fire({
          icon: "info",
          title: "Koneksi Media Sosial",
          text: "Saluran ini sedang dalam penyiapan. Ikuti kami di Instagram untuk pembaruan terbaru!",
          confirmButtonColor: "#d4af37",
        });
      }
    });
  });
}
