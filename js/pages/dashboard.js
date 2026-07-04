function renderDashboardPage(){
  return `
    <div class="grid">
      <div class="card">
        <h3>Total Guest</h3>
        <div class="value" id="totalGuest">0</div>
      </div>

      <div class="card">
        <h3>Checked In</h3>
        <div class="value" id="checkedIn">0</div>
      </div>

      <div class="card">
        <h3>Waiting</h3>
        <div class="value" id="waiting">0</div>
      </div>

      <div class="card">
        <h3>Attendance</h3>
        <div class="value" id="attendance">0%</div>
      </div>
    </div>

    <div class="panel">
      <h3>Dashboard Live</h3>
      <p>Connected to PES V2 API.</p>
    </div>
  `;
}

async function loadDashboard(){
  const result = await api(
    "dashboard",
    "summary",
    {
      eventId: CONFIG.EVENT_ID
    }
  );

  if(!result.success){
    console.error(result);
    return;
  }

  document.getElementById("totalGuest").innerText = result.data.TotalGuest;
  document.getElementById("checkedIn").innerText = result.data.CheckedIn;
  document.getElementById("waiting").innerText = result.data.Waiting;
  document.getElementById("attendance").innerText = result.data.AttendancePercent + "%";
}
