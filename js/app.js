const pageTitle = document.getElementById("pageTitle");
const content = document.getElementById("content");
const menuItems = document.querySelectorAll(".menu-item");
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");

const pages = {
  dashboard: {
    title: "Dashboard",
    html: `
      <div class="grid">
        <div class="card">
          <h3>Total Guest</h3>
          <div class="value">0</div>
        </div>
        <div class="card">
          <h3>Checked In</h3>
          <div class="value">0</div>
        </div>
        <div class="card">
          <h3>Waiting</h3>
          <div class="value">0</div>
        </div>
        <div class="card">
          <h3>Attendance</h3>
          <div class="value">0%</div>
        </div>
      </div>

      <div class="panel">
        <h3>PERKABEM Event System V2</h3>
        <p>Foundation layout sudah aktif. Module database akan dibuat di milestone berikutnya.</p>
      </div>
    `
  },

  guest: {
    title: "Guest",
    html: `<div class="panel"><h3>Guest Module</h3><p>Coming soon.</p></div>`
  },

  invitation: {
    title: "Invitation",
    html: `<div class="panel"><h3>Invitation Module</h3><p>Coming soon.</p></div>`
  },

  scanner: {
    title: "Scanner",
    html: `<div class="panel"><h3>QR Scanner</h3><p>Coming soon.</p></div>`
  },

  luckydraw: {
    title: "Lucky Draw",
    html: `<div class="panel"><h3>Lucky Draw</h3><p>Coming soon.</p></div>`
  },

  report: {
    title: "Report",
    html: `<div class="panel"><h3>Report</h3><p>Coming soon.</p></div>`
  },

  settings: {
    title: "Settings",
    html: `<div class="panel"><h3>Settings</h3><p>Coming soon.</p></div>`
  }
};

function loadPage(page){
  const selectedPage = pages[page] || pages.dashboard;

  pageTitle.textContent = selectedPage.title;
  content.innerHTML = selectedPage.html;

  menuItems.forEach(item => {
    item.classList.toggle("active", item.dataset.page === page);
  });

  sidebar.classList.remove("show");
}

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    loadPage(item.dataset.page);
  });
});

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

loadPage("dashboard");
