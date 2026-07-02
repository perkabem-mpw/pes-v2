function renderDashboardPage(){
  return `
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
      <p>Dashboard foundation aktif. Data real akan masuk setelah API milestone.</p>
    </div>
  `;
}
