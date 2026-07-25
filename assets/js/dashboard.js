document.addEventListener("DOMContentLoaded", () => {
  /* ===== STATE MANAGEMENT (SHARED LOCALSTORAGE DATABASE) ===== */
  const loadSharedData = () => {
    // Force version migration to Indonesian defaults
    if (localStorage.getItem("cozycar_lang_v4") !== "true") {
      localStorage.removeItem("cozycar_fleet");
      localStorage.removeItem("cozycar_landing_data");
      localStorage.setItem("cozycar_lang_v4", "true");
    }

    // 1. Fleet Catalog
    let fleet = JSON.parse(localStorage.getItem("cozycar_fleet"));
    if (!fleet || fleet.length === 0 || fleet[0].seats?.includes("Seats")) {
      fleet = [
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
          features: [
            "AC",
            "Bluetooth",
            "Navigasi GPS",
            "USB Charger",
            "Kamera 360",
          ],
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
          icons: [
            "fa-wind",
            "fa-bluetooth",
            "fa-usb",
            "fa-steering-wheel",
            "fa-key",
          ],
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
          name: "Toyota Hiace",
          category: "van",
          img: "https://th.bing.com/th/id/OIP.B_0JEHa3Nm3IFk8mjK9M3AHaE8?w=270&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
          desc: "Pilihan utama untuk perjalanan rombongan dan ketersediaan kendaraan operasional. Toyota Hiace menawarkan kapasitas bagasi luar biasa dan tempat duduk nyaman hingga 15 penumpang.",
          features: [
            "AC",
            "Bluetooth",
            "USB Charger",
            "Kamera CCTV",
            "Kabin Luas",
          ],
          icons: [
            "fa-wind",
            "fa-bluetooth",
            "fa-usb",
            "fa-video",
            "fa-arrows-alt-h",
          ],
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
      localStorage.setItem("cozycar_fleet", JSON.stringify(fleet));
    }

    // 2. Bookings
    let bookings = JSON.parse(localStorage.getItem("cozycar_bookings"));
    if (!bookings) {
      bookings = [
        {
          id: "#BK-0092",
          customer: "Sarah Kusuma",
          car: "Toyota Alphard",
          pickup: "2026-10-15",
          return: "2026-10-18",
          status: "Active",
          amount: "Rp 4.500.000",
        },
        {
          id: "#BK-0091",
          customer: "Budi Raharjo",
          car: "Pajero Sport",
          pickup: "2026-10-14",
          return: "2026-10-16",
          status: "Completed",
          amount: "Rp 1.700.000",
        },
        {
          id: "#BK-0090",
          customer: "Dewi Santika",
          car: "Skoda Kodiaq",
          pickup: "2026-10-16",
          return: "2026-10-20",
          status: "Pending",
          amount: "Rp 4.400.000",
        },
        {
          id: "#BK-0089",
          customer: "Raka Pratama",
          car: "Toyota Hiace",
          pickup: "2026-10-10",
          return: "2026-10-12",
          status: "Completed",
          amount: "Rp 1.800.000",
        },
        {
          id: "#BK-0088",
          customer: "John Doe",
          car: "Honda Brio",
          pickup: "2026-10-17",
          return: "2026-10-19",
          status: "Pending",
          amount: "Rp 600.000",
        },
      ];
      localStorage.setItem("cozycar_bookings", JSON.stringify(bookings));
    }

    // 3. Customers
    let customers = JSON.parse(localStorage.getItem("cozycar_customers"));
    if (!customers) {
      customers = [
        {
          id: "CUST-802",
          name: "Sarah Kusuma",
          email: "sarah@kusuma.id",
          phone: "+62 812 3456 7890",
          bookings: 4,
          status: "Active",
        },
        {
          id: "CUST-801",
          name: "Budi Raharjo",
          email: "budi@raharjo.com",
          phone: "+62 819 8765 4321",
          bookings: 2,
          status: "Active",
        },
        {
          id: "CUST-800",
          name: "Dewi Santika",
          email: "dewi.s@gmail.com",
          phone: "+62 856 1234 5678",
          bookings: 5,
          status: "Active",
        },
        {
          id: "CUST-799",
          name: "Raka Pratama",
          email: "raka@pratama.co.id",
          phone: "+62 878 9988 7766",
          bookings: 12,
          status: "Active",
        },
        {
          id: "CUST-798",
          name: "John Doe",
          email: "johndoe@example.com",
          phone: "+62 821 4455 6677",
          bookings: 1,
          status: "Inactive",
        },
      ];
      localStorage.setItem("cozycar_customers", JSON.stringify(customers));
    }

    return { fleet, bookings, customers };
  };

  const state = loadSharedData();

  const saveFleet = () =>
    localStorage.setItem("cozycar_fleet", JSON.stringify(state.fleet));
  const saveBookings = () =>
    localStorage.setItem("cozycar_bookings", JSON.stringify(state.bookings));
  const saveCustomers = () =>
    localStorage.setItem("cozycar_customers", JSON.stringify(state.customers));

  /* ===== UPDATE ADMIN DISPLAY NAME HEADER ===== */
  const updateAdminHeaderName = () => {
    const adminProfile = JSON.parse(
      localStorage.getItem("cozycar_admin_profile"),
    ) || {
      displayName: "Admin User",
      email: "admin@cozycar-rental.my.id",
    };
    const headerName = document.getElementById("adminDisplayNameHeader");
    if (headerName) headerName.textContent = adminProfile.displayName;
  };

  updateAdminHeaderName();

  /* ===== TAB VIEW SWITCHING ===== */
  const sidebarLinks = document.querySelectorAll(".sidebar-link");
  const views = document.querySelectorAll(".dashboard-view");
  const pageTitle = document.getElementById("dashboardPageTitle");

  function switchTab(targetId) {
    sidebarLinks.forEach((link) => {
      if (link.getAttribute("data-target") === targetId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    views.forEach((view) => {
      if (view.id === `view-${targetId}`) {
        view.classList.add("active-view");
      } else {
        view.classList.remove("active-view");
      }
    });

    const titleMap = {
      overview: "Ringkasan Dashboard",
      bookings: "Manajemen Pemesanan",
      fleet: "Manajemen Armada",
      customers: "Database Pelanggan",
      settings: "Pengaturan Situs",
    };
    pageTitle.textContent = titleMap[targetId] || "Ringkasan";

    if (targetId === "bookings") renderBookingsTable();
    if (targetId === "fleet") renderFleetGrid();
    if (targetId === "customers") renderCustomersTable();
    if (targetId === "settings") populateSettingsForms();
    if (targetId === "overview") updateOverviewMetrics();
  }

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");
      switchTab(target);
      document.getElementById("sidebar").classList.remove("show");
    });
  });

  const viewAllBookingsBtn = document.getElementById("viewAllBookingsBtn");
  if (viewAllBookingsBtn) {
    viewAllBookingsBtn.addEventListener("click", () => {
      switchTab("bookings");
    });
  }

  /* ===== SIDEBAR MOBILE TOGGLE ===== */
  const openSidebar = document.getElementById("openSidebar");
  const closeSidebar = document.getElementById("closeSidebar");
  const sidebar = document.getElementById("sidebar");

  if (openSidebar && closeSidebar && sidebar) {
    openSidebar.addEventListener("click", () => sidebar.classList.add("show"));
    closeSidebar.addEventListener("click", () =>
      sidebar.classList.remove("show"),
    );
  }

  /* ===== DARK MODE TOGGLE ===== */
  const darkToggleDashboard = document.getElementById("darkToggleDashboard");
  const darkIconDashboard = document.getElementById("darkIconDashboard");
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    htmlEl.setAttribute("data-theme", "dark");
    if (darkIconDashboard) {
      darkIconDashboard.classList.remove("fa-moon");
      darkIconDashboard.classList.add("fa-sun");
    }
  }

  if (darkToggleDashboard) {
    darkToggleDashboard.addEventListener("click", () => {
      const currentTheme = htmlEl.getAttribute("data-theme");
      if (currentTheme === "dark") {
        htmlEl.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        darkIconDashboard.classList.replace("fa-sun", "fa-moon");
      } else {
        htmlEl.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        darkIconDashboard.classList.replace("fa-moon", "fa-sun");
      }
      updateChartTheme();
    });
  }

  /* ===== CHART JS IMPLEMENTATION ===== */
  let revenueChart;
  function initChart() {
    const ctx = document.getElementById("revenueChart");
    if (!ctx) return;

    const isDark = htmlEl.getAttribute("data-theme") === "dark";
    const textColor = isDark ? "#f8fafc" : "#334155";
    const gridColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

    revenueChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu",
          "Minggu",
        ],
        datasets: [
          {
            label: "Pendapatan (Rp)",
            data: [
              1500000, 2300000, 1800000, 3200000, 2800000, 4500000, 5100000,
            ],
            borderColor: "#d4af37",
            backgroundColor: "rgba(212, 175, 55, 0.1)",
            borderWidth: 2,
            pointBackgroundColor: "#d4af37",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#d4af37",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            grid: { display: false, drawBorder: false },
            ticks: { color: textColor },
          },
          y: {
            grid: { color: gridColor, drawBorder: false },
            ticks: {
              color: textColor,
              callback: (value) => "Rp " + value / 1000000 + "M",
            },
          },
        },
      },
    });
  }

  function updateChartTheme() {
    if (!revenueChart) return;
    const isDark = htmlEl.getAttribute("data-theme") === "dark";
    const textColor = isDark ? "#f8fafc" : "#334155";
    const gridColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

    revenueChart.options.scales.x.ticks.color = textColor;
    revenueChart.options.scales.y.ticks.color = textColor;
    revenueChart.options.scales.y.grid.color = gridColor;
    revenueChart.update();
  }

  initChart();

  /* ===== RENDER ENGINE ===== */

  // Sync Overview Cards dynamically
  function updateOverviewMetrics() {
    const availableCount = state.fleet.filter(
      (c) => c.status === "available",
    ).length;
    const totalCount = state.fleet.length;
    const activeBookingsCount = state.bookings.filter(
      (b) => b.status === "Active",
    ).length;
    const totalRevenueSum = state.bookings
      .filter((b) => b.status === "Completed" || b.status === "Active")
      .reduce(
        (sum, b) => sum + (parseInt(b.amount.replace(/[^0-9]/g, "")) || 0),
        0,
      );

    const revenueCard = document.querySelector(".stat-card:nth-child(1) h3");
    const bookingsCard = document.querySelector(".stat-card:nth-child(2) h3");
    const carsCard = document.querySelector(".stat-card:nth-child(3) h3");
    const customersCard = document.querySelector(".stat-card:nth-child(4) h3");

    if (revenueCard)
      revenueCard.textContent =
        "Rp " + (totalRevenueSum / 1000000).toFixed(1) + "M";
    if (bookingsCard) bookingsCard.textContent = activeBookingsCount;
    if (carsCard)
      carsCard.innerHTML = `${availableCount} <span>/ ${totalCount}</span>`;
    if (customersCard) customersCard.textContent = state.customers.length;
  }

  // 1. Overview Recent Bookings
  function renderRecentBookings() {
    const tbody = document.getElementById("recentBookingsTable");
    if (!tbody) return;
    tbody.innerHTML = "";

    state.bookings.slice(0, 5).forEach((b) => {
      const tr = document.createElement("tr");
      const statusClass = b.status.toLowerCase();
      tr.innerHTML = `
        <td><strong>${b.id}</strong></td>
        <td>${b.customer}</td>
        <td>${b.car}</td>
        <td>${b.pickup}</td>
        <td>${b.return}</td>
        <td><span class="status-badge ${statusClass}">${b.status}</span></td>
        <td><strong>${b.amount}</strong></td>
      `;
      tbody.appendChild(tr);
    });
  }

  // 2. Full Bookings Table Action
  window.changeBookingStatus = (id, newStatus) => {
    const booking = state.bookings.find((b) => b.id === id);
    if (booking) {
      booking.status = newStatus;

      if (newStatus === "Completed") {
        const custExists = state.customers.some(
          (c) => c.name === booking.customer,
        );
        if (!custExists) {
          state.customers.push({
            id: `CUST-${state.customers.length + 800}`,
            name: booking.customer,
            email: `${booking.customer.toLowerCase().replace(/\s+/g, "")}@example.com`,
            phone: "+62 812 0000 0000",
            bookings: 1,
            status: "Active",
          });
          saveCustomers();
        } else {
          const cust = state.customers.find((c) => c.name === booking.customer);
          cust.bookings++;
          saveCustomers();
        }
      }

      saveBookings();
      renderBookingsTable();
      renderRecentBookings();
      updateOverviewMetrics();

      if (window.Swal) {
        const statusMap = {
          Active: "Diterima",
          Completed: "Selesai",
          Cancelled: "Dibatalkan",
        };
        Swal.fire({
          icon: "success",
          title: `Pemesanan ${statusMap[newStatus] || newStatus}!`,
          text: `Kode booking ${id} telah ditandai sebagai ${statusMap[newStatus] || newStatus}.`,
          timer: 1500,
          showConfirmButton: false,
        });
      }
    }
  };

  function renderBookingsTable() {
    const tbody = document.getElementById("fullBookingsTable");
    const filter = document.getElementById("bookingsFilter").value;
    if (!tbody) return;
    tbody.innerHTML = "";

    const filtered = state.bookings.filter((b) => {
      if (filter === "all") return true;
      return b.status.toLowerCase() === filter;
    });

    filtered.forEach((b) => {
      const tr = document.createElement("tr");
      const statusClass = b.status.toLowerCase();

      let actionButtons = "";
      if (b.status === "Pending") {
        actionButtons = `
          <button class="btn-success-sm" onclick="changeBookingStatus('${b.id}', 'Active')"><i class="fas fa-check"></i> Terima</button>
          <button class="btn-danger-sm" onclick="changeBookingStatus('${b.id}', 'Cancelled')"><i class="fas fa-times"></i> Batal</button>
        `;
      } else if (b.status === "Active") {
        actionButtons = `
          <button class="btn-primary-sm" onclick="changeBookingStatus('${b.id}', 'Completed')"><i class="fas fa-flag-checkered"></i> Selesai</button>
        `;
      } else {
        actionButtons = `<span style="font-size:0.8rem; color:var(--text-light)">Tidak ada aksi</span>`;
      }

      tr.innerHTML = `
        <td><strong>${b.id}</strong></td>
        <td>${b.customer}</td>
        <td>${b.car}</td>
        <td>${b.pickup}</td>
        <td>${b.return}</td>
        <td><span class="status-badge ${statusClass}">${b.status === "Pending" ? "Menunggu" : b.status === "Active" ? "Aktif" : b.status === "Completed" ? "Selesai" : "Dibatalkan"}</span></td>
        <td><strong>${b.amount}</strong></td>
        <td><div class="actions-cell">${actionButtons}</div></td>
      `;
      tbody.appendChild(tr);
    });
  }

  const bookingsFilter = document.getElementById("bookingsFilter");
  if (bookingsFilter) {
    bookingsFilter.addEventListener("change", renderBookingsTable);
  }

  // 3. Fleet Grid Management Action
  window.toggleCarStatus = (name) => {
    const car = state.fleet.find((c) => c.name === name);
    if (car) {
      const statusOrder = ["available", "rented", "maintenance"];
      let nextIndex =
        (statusOrder.indexOf(car.status) + 1) % statusOrder.length;
      car.status = statusOrder[nextIndex];
      saveFleet();
      renderFleetGrid();
      updateOverviewMetrics();
    }
  };

  function renderFleetGrid() {
    const grid = document.getElementById("fleetGridDashboard");
    if (!grid) return;
    grid.innerHTML = "";

    const statusBadgeText = {
      available: "TERSEDIA",
      rented: "DISEWA",
      maintenance: "PERAWATAN",
    };

    state.fleet.forEach((car) => {
      const card = document.createElement("div");
      card.className = "fleet-card-dashboard";
      card.innerHTML = `
        <div class="fleet-img-wrap">
          <img src="${car.img}" alt="${car.name}" />
          <span class="fleet-status-badge ${car.status}">${statusBadgeText[car.status] || car.status.toUpperCase()}</span>
        </div>
        <div class="fleet-info-dashboard">
          <div class="fleet-info-header">
            <h4>${car.name}</h4>
            <span class="fleet-class-badge">${car.category}</span>
          </div>
          <div class="fleet-specs-dashboard">
            <span><i class="fas fa-cog"></i> ${car.transmission}</span>
            <span><i class="fas fa-users"></i> ${car.seats}</span>
            <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
          </div>
          <div class="fleet-price-row">
            <div>
              <h5>${car.price.split("/")[0]}</h5>
              <span>Per hari</span>
            </div>
            <button class="btn-outline-sm" onclick="toggleCarStatus('${car.name}')">Ubah Status</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // 4. Customers Database Rendering
  window.viewCustomerFile = (id) => {
    const cust = state.customers.find((c) => c.id === id);
    if (!cust) return;

    // Calculate customer specific rentals
    const custBookings = state.bookings.filter(
      (b) => b.customer.toLowerCase() === cust.name.toLowerCase(),
    );
    const bookingsListHtml =
      custBookings.length > 0
        ? custBookings
            .map(
              (b) => `
          <div style="border-bottom:1px solid var(--border);padding:6px 0;display:flex;justify-content:space-between;font-size:0.85rem;">
            <span><strong>${b.id}</strong> - ${b.car}</span>
            <span class="status-badge ${b.status.toLowerCase()}" style="float:none;padding:1px 6px;font-size:0.75rem;">${b.status}</span>
          </div>
        `,
            )
            .join("")
        : '<p style="font-size:0.85rem;color:var(--text-light)">Tidak ada riwayat sewa dalam histori sesi.</p>';

    if (window.Swal) {
      Swal.fire({
        title: `Profil Pelanggan`,
        html: `
          <div style="text-align: left; line-height: 1.8; font-family: inherit;">
            <div style="display:flex;align-items:center;gap:15px;margin-bottom:20px;border-bottom:1px solid var(--border);padding-bottom:15px;">
              <div style="width:50px;height:50px;border-radius:50%;background:rgba(212,175,55,0.1);color:#d4af37;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:700;">
                ${cust.name.charAt(0)}
              </div>
              <div>
                <h4 style="margin:0;font-size:1.1rem;color:var(--text)">${cust.name}</h4>
                <p style="margin:0;font-size:0.8rem;color:var(--text-light)">ID: ${cust.id}</p>
              </div>
            </div>
            <p><strong>Email:</strong> ${cust.email}</p>
            <p><strong>Telepon:</strong> ${cust.phone}</p>
            <p><strong>Status:</strong> <span class="status-badge ${cust.status === "Active" ? "completed" : "cancelled"}" style="float:none;display:inline-block;padding:2px 8px;font-size:0.8rem;">${cust.status === "Active" ? "Aktif" : "Nonaktif"}</span></p>
            <div style="margin-top:20px;">
              <h5 style="margin-bottom:8px;font-size:0.9rem;border-bottom:1px solid var(--border);padding-bottom:5px;">Pemesanan Terbaru</h5>
              <div style="max-height:150px;overflow-y:auto;">
                ${bookingsListHtml}
              </div>
            </div>
          </div>
        `,
        confirmButtonColor: "#d4af37",
        confirmButtonText: "Tutup Profil",
      });
    } else {
      alert(
        `Pelanggan: ${cust.name}\nEmail: ${cust.email}\nTelepon: ${cust.phone}\nSewa: ${cust.bookings}`,
      );
    }
  };

  function renderCustomersTable() {
    const tbody = document.getElementById("customersTable");
    if (!tbody) return;
    tbody.innerHTML = "";

    state.customers.forEach((c) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${c.id}</strong></td>
        <td>${c.name}</td>
        <td>${c.email}</td>
        <td>${c.phone}</td>
        <td>${c.bookings} Sewa</td>
        <td><span class="status-badge ${c.status === "Active" ? "completed" : "cancelled"}">${c.status === "Active" ? "Aktif" : "Nonaktif"}</span></td>
        <td>
          <button class="btn-outline-sm" onclick="viewCustomerFile('${c.id}')"><i class="fas fa-eye"></i> Lihat</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  /* ===== NEW DATA HANDLERS ===== */

  // 1. Add Booking Prompt
  const btnNewBooking = document.getElementById("btnNewBooking");
  if (btnNewBooking) {
    btnNewBooking.addEventListener("click", () => {
      if (window.Swal) {
        Swal.fire({
          title: "Registrasi Pemesanan Baru",
          html: `
            <input id="swal-custName" class="swal2-input" placeholder="Nama Pelanggan">
            <select id="swal-carType" class="swal2-input">
              <option value="">Pilih kendaraan...</option>
              ${state.fleet
                .filter((c) => c.status === "available")
                .map(
                  (c) =>
                    `<option value="${c.name}">${c.name} (${c.price})</option>`,
                )
                .join("")}
            </select>
            <input id="swal-pickup" class="swal2-input" type="date">
            <input id="swal-return" class="swal2-input" type="date">
          `,
          focusConfirm: false,
          showCancelButton: true,
          confirmButtonText: "Simpan Pemesanan",
          preConfirm: () => {
            const customer = document
              .getElementById("swal-custName")
              .value.trim();
            const car = document.getElementById("swal-carType").value;
            const pickup = document.getElementById("swal-pickup").value;
            const retDate = document.getElementById("swal-return").value;

            if (!customer || !car || !pickup || !retDate) {
              Swal.showValidationMessage("Harap isi semua kolom");
            }
            if (new Date(retDate) <= new Date(pickup)) {
              Swal.showValidationMessage(
                "Tanggal pengembalian harus setelah tanggal penjemputan",
              );
            }
            return { customer, car, pickup, return: retDate };
          },
        }).then((result) => {
          if (result.isConfirmed) {
            const nextId = `#BK-00${state.bookings.length + 86}`;

            const days = Math.ceil(
              (new Date(result.value.return) - new Date(result.value.pickup)) /
                (1000 * 60 * 60 * 24),
            );
            const carObj = state.fleet.find((c) => c.name === result.value.car);
            const dailyPrice = carObj
              ? parseInt(carObj.price.replace(/[^0-9]/g, "")) || 350000
              : 350000;
            const amount = "Rp " + (days * dailyPrice).toLocaleString("id-ID");

            const newBooking = {
              id: nextId,
              customer: result.value.customer,
              car: result.value.car,
              pickup: result.value.pickup,
              return: result.value.return,
              status: "Pending",
              amount: amount,
            };

            state.bookings.unshift(newBooking);
            saveBookings();
            renderBookingsTable();
            renderRecentBookings();
            updateOverviewMetrics();
            Swal.fire(
              "Berhasil Ditambahkan!",
              "Pemesanan baru telah berhasil dicatat.",
              "success",
            );
          }
        });
      }
    });
  }

  // 2. Add New Car Prompt
  const btnNewCar = document.getElementById("btnNewCar");
  if (btnNewCar) {
    btnNewCar.addEventListener("click", () => {
      if (window.Swal) {
        Swal.fire({
          title: "Tambah Mobil ke Armada",
          html: `
            <input id="swal-carName" class="swal2-input" placeholder="Nama Mobil (mis. Civic)">
            <select id="swal-carCat" class="swal2-input">
              <option value="economy">Ekonomi</option>
              <option value="suv">SUV</option>
              <option value="premium">Mewah</option>
              <option value="van">Van</option>
            </select>
            <input id="swal-gear" class="swal2-input" placeholder="Transmisi (CVT / Manual / Otomatis)">
            <input id="swal-seats" class="swal2-input" type="text" placeholder="Kapasitas (mis. 5 Kursi)">
            <input id="swal-fuel" class="swal2-input" placeholder="Bahan Bakar (Bensin / Diesel / Hybrid)">
            <input id="swal-priceDay" class="swal2-input" placeholder="Harga/Hari (mis. Rp 400.000/hari)">
            <input id="swal-img" class="swal2-input" placeholder="URL Gambar (opsional)">
          `,
          focusConfirm: false,
          showCancelButton: true,
          confirmButtonText: "Tambah Mobil",
          preConfirm: () => {
            const name = document.getElementById("swal-carName").value.trim();
            const category = document.getElementById("swal-carCat").value;
            const gearbox = document.getElementById("swal-gear").value.trim();
            const seats = document.getElementById("swal-seats").value.trim();
            const fuel = document.getElementById("swal-fuel").value.trim();
            const price = document.getElementById("swal-priceDay").value.trim();
            let img = document.getElementById("swal-img").value.trim();

            if (!name || !gearbox || !seats || !fuel || !price) {
              Swal.showValidationMessage("Harap isi semua kolom wajib");
            }
            if (!img)
              img =
                "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80";

            const badgeMap = {
              economy: "Ekonomi",
              suv: "SUV",
              premium: "Mewah",
              van: "Van",
            };
            const badge = badgeMap[category] || "Ekonomi";

            return {
              name,
              category,
              img,
              desc: `${name} adalah kendaraan luar biasa dalam armada kami, menawarkan performa, keandalan, dan kenyamanan terbaik untuk semua jenis perjalanan.`,
              features: ["AC", "Bluetooth", "USB Charger", "Power Windows"],
              icons: ["fa-wind", "fa-bluetooth", "fa-usb", "fa-car-side"],
              transmission: gearbox,
              seats,
              fuel,
              baggage: "Sedang",
              price,
              badge,
              badgeClass: category,
              status: "available",
            };
          },
        }).then((result) => {
          if (result.isConfirmed) {
            state.fleet.push(result.value);
            saveFleet();
            renderFleetGrid();
            updateOverviewMetrics();
            Swal.fire(
              "Berhasil!",
              "Mobil baru telah ditambahkan ke armada.",
              "success",
            );
          }
        });
      }
    });
  }

  /* ===== SETTINGS FORMS POPULATING & SUBMISSION ===== */
  function populateSettingsForms() {
    const landing =
      JSON.parse(localStorage.getItem("cozycar_landing_data")) || {};
    const adminProfile = JSON.parse(
      localStorage.getItem("cozycar_admin_profile"),
    ) || {
      displayName: "Admin User",
      email: "admin@cozycar-rental.my.id",
    };
    const sysSettings = JSON.parse(
      localStorage.getItem("cozycar_system_settings"),
    ) || {
      businessName: "CozyCar Rental",
      tax: 10,
      insurance: 75000,
    };

    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.value = val || "";
    };

    // Admin profile inputs
    setVal("adminDisplayNameInput", adminProfile.displayName);
    setVal("adminEmailInput", adminProfile.email);
    setVal("adminPasswordInput", "");

    // System settings inputs
    setVal("sysBusinessNameInput", sysSettings.businessName);
    setVal("sysTaxInput", sysSettings.tax);
    setVal("sysInsuranceInput", sysSettings.insurance);

    // Hero & Promo
    setVal("setHeroTitle", landing.heroTitle);
    setVal("setHeroTagline", landing.heroTagline);
    setVal("setHeroSub", landing.heroSub);
    setVal("setHeroBtnText", landing.heroBtnText);
    setVal("setPromoText", landing.promoText);

    // About & Stats
    setVal("setAboutTitle", landing.aboutTitle);
    setVal("setAboutText", landing.aboutText);
    setVal("setClients", landing.clients);
    setVal("setCars", landing.cars);
    setVal("setRating", landing.rating);

    // Services
    setVal("setSrv1Title", landing.srv1Title);
    setVal("setSrv1Desc", landing.srv1Desc);
    setVal("setSrv2Title", landing.srv2Title);
    setVal("setSrv2Desc", landing.srv2Desc);
    setVal("setSrv3Title", landing.srv3Title);
    setVal("setSrv3Desc", landing.srv3Desc);
    setVal("setSrv4Title", landing.srv4Title);
    setVal("setSrv4Desc", landing.srv4Desc);

    // Why Choose Us & Process
    setVal("setWhyTitle", landing.whyTitle);
    setVal("setWhy1Title", landing.why1Title);
    setVal("setWhy1Desc", landing.why1Desc);
    setVal("setWhy2Title", landing.why2Title);
    setVal("setWhy2Desc", landing.why2Desc);
    setVal("setWhy3Title", landing.why3Title);
    setVal("setWhy3Desc", landing.why3Desc);
    setVal("setProcTitle", landing.procTitle);
    setVal("setProc1Title", landing.proc1Title);
    setVal("setProc1Desc", landing.proc1Desc);
    setVal("setProc2Title", landing.proc2Title);
    setVal("setProc2Desc", landing.proc2Desc);
    setVal("setProc3Title", landing.proc3Title);
    setVal("setProc3Desc", landing.proc3Desc);

    // Headers & Safety & Loyalty
    setVal("setCatalogTitle", landing.catalogTitle);
    setVal("setCatalogSub", landing.catalogSub);
    setVal("setPackagesTitle", landing.packagesTitle);
    setVal("setPackagesSub", landing.packagesSub);
    setVal("setSafetyTitle", landing.safetyTitle);
    setVal("setSafetyDesc", landing.safetyDesc);
    setVal("setLoyaltyTitle", landing.loyaltyTitle);
    setVal("setLoyaltyDesc", landing.loyaltyDesc);
    setVal("setCtaTitle", landing.ctaTitle);
    setVal("setCtaDesc", landing.ctaDesc);

    // T&C, FAQ & Contact
    setVal("setTermsTitle", landing.termsTitle);
    setVal("setTerm1", landing.term1);
    setVal("setTerm2", landing.term2);
    setVal("setTerm3", landing.term3);
    setVal("setTerm4", landing.term4);
    setVal("setFaqTitle", landing.faqTitle);
    setVal("setFaqSub", landing.faqSub);
    setVal("setPhone", landing.phone);
    setVal("setEmail", landing.email);
    setVal("setAddress", landing.address);
    setVal("setHours", landing.hours);

    // News & Footer
    setVal("setNewsTitle", landing.newsTitle);
    setVal("setNewsDesc", landing.newsDesc);
    setVal("setFooterDesc", landing.footerDesc);
    setVal("setCopyright", landing.copyright);
  }

  // Bind settings forms submissions
  const landingPageForm = document.getElementById("landingPageForm");
  if (landingPageForm) {
    landingPageForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const getVal = (id) => {
        const el = document.getElementById(id);
        return el ? el.value.trim() : "";
      };

      const updatedLanding = {
        heroTitle: getVal("setHeroTitle"),
        heroTagline: getVal("setHeroTagline"),
        heroSub: getVal("setHeroSub"),
        heroBtnText: getVal("setHeroBtnText"),
        promoText: getVal("setPromoText"),
        aboutTitle: getVal("setAboutTitle"),
        aboutText: getVal("setAboutText"),
        clients: parseInt(getVal("setClients")) || 500,
        cars: parseInt(getVal("setCars")) || 30,
        rating: parseFloat(getVal("setRating")) || 5,

        srv1Title: getVal("setSrv1Title"),
        srv1Desc: getVal("setSrv1Desc"),
        srv2Title: getVal("setSrv2Title"),
        srv2Desc: getVal("setSrv2Desc"),
        srv3Title: getVal("setSrv3Title"),
        srv3Desc: getVal("setSrv3Desc"),
        srv4Title: getVal("setSrv4Title"),
        srv4Desc: getVal("setSrv4Desc"),

        whyTitle: getVal("setWhyTitle"),
        why1Title: getVal("setWhy1Title"),
        why1Desc: getVal("setWhy1Desc"),
        why2Title: getVal("setWhy2Title"),
        why2Desc: getVal("setWhy2Desc"),
        why3Title: getVal("setWhy3Title"),
        why3Desc: getVal("setWhy3Desc"),

        procTitle: getVal("setProcTitle"),
        proc1Title: getVal("setProc1Title"),
        proc1Desc: getVal("setProc1Desc"),
        proc2Title: getVal("setProc2Title"),
        proc2Desc: getVal("setProc2Desc"),
        proc3Title: getVal("setProc3Title"),
        proc3Desc: getVal("setProc3Desc"),

        catalogTitle: getVal("setCatalogTitle"),
        catalogSub: getVal("setCatalogSub"),
        packagesTitle: getVal("setPackagesTitle"),
        packagesSub: getVal("setPackagesSub"),
        safetyTitle: getVal("setSafetyTitle"),
        safetyDesc: getVal("setSafetyDesc"),
        loyaltyTitle: getVal("setLoyaltyTitle"),
        loyaltyDesc: getVal("setLoyaltyDesc"),
        ctaTitle: getVal("setCtaTitle"),
        ctaDesc: getVal("setCtaDesc"),

        termsTitle: getVal("setTermsTitle"),
        term1: getVal("setTerm1"),
        term2: getVal("setTerm2"),
        term3: getVal("setTerm3"),
        term4: getVal("setTerm4"),

        faqTitle: getVal("setFaqTitle"),
        faqSub: getVal("setFaqSub"),
        phone: getVal("setPhone"),
        email: getVal("setEmail"),
        address: getVal("setAddress"),
        hours: getVal("setHours"),

        newsTitle: getVal("setNewsTitle"),
        newsDesc: getVal("setNewsDesc"),
        footerDesc: getVal("setFooterDesc"),
        copyright: getVal("setCopyright"),
      };

      localStorage.setItem(
        "cozycar_landing_data",
        JSON.stringify(updatedLanding),
      );

      if (window.Swal) {
        Swal.fire({
          icon: "success",
          title: "Tersimpan!",
          text: "Konten halaman utama berhasil diperbarui. Muat ulang halaman depan untuk melihat perubahan.",
          confirmButtonColor: "#d4af37",
        });
      } else {
        alert("Konten halaman utama diperbarui!");
      }
    });
  }

  const adminProfileForm = document.getElementById("adminProfileForm");
  if (adminProfileForm) {
    adminProfileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const displayName = document
        .getElementById("adminDisplayNameInput")
        .value.trim();
      const email = document.getElementById("adminEmailInput").value.trim();
      const password = document
        .getElementById("adminPasswordInput")
        .value.trim();

      const profile = { displayName, email };
      if (password) profile.password = password; // Only save password if entered

      localStorage.setItem("cozycar_admin_profile", JSON.stringify(profile));
      updateAdminHeaderName();

      if (window.Swal) {
        Swal.fire({
          icon: "success",
          title: "Profil Diperbarui!",
          text: "Informasi profil admin telah disimpan.",
          confirmButtonColor: "#d4af37",
        });
      } else {
        alert("Profil disimpan!");
      }
    });
  }

  const systemSettingsForm = document.getElementById("systemSettingsForm");
  if (systemSettingsForm) {
    systemSettingsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const businessName = document
        .getElementById("sysBusinessNameInput")
        .value.trim();
      const tax = parseInt(document.getElementById("sysTaxInput").value) || 10;
      const insurance =
        parseInt(document.getElementById("sysInsuranceInput").value) || 75000;

      const config = { businessName, tax, insurance };
      localStorage.setItem("cozycar_system_settings", JSON.stringify(config));

      if (window.Swal) {
        Swal.fire({
          icon: "success",
          title: "Konfigurasi Tersimpan!",
          text: "Pengaturan konfigurasi sistem telah diperbarui.",
          confirmButtonColor: "#d4af37",
        });
      } else {
        alert("Pengaturan disimpan!");
      }
    });
  }

  /* ===== INITIAL RENDERS ===== */
  renderRecentBookings();
  updateOverviewMetrics();
});
