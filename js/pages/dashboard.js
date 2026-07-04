/**
 * =====================================================
 * DASHBOARD MODULE
 * PES V2
 * =====================================================
 */

function dashboardRouter(request) {
  const action = (request.action || "").toLowerCase();

  switch (action) {
    case "summary":
      return dashboardSummary(request);

    case "recent":
      return dashboardRecent(request);

    default:
      return errorResponse("Dashboard Action Not Found", 404);
  }
}

function dashboardSummary(request) {
  const eventId = (request.eventId || "").trim();

  if (!eventId) {
    return errorResponse("EventID Required", 400);
  }

  const data = getGuestRows();

  let totalGuest = 0;
  let checkedIn = 0;
  let waiting = 0;

  data.rows.forEach(function(row) {
    const guest = rowToObject(data.headers, row);

    if (String(guest.EventID) === String(eventId)) {
      totalGuest++;

      if (guest.CheckInStatus === STATUS.CHECKED_IN) {
        checkedIn++;
      } else {
        waiting++;
      }
    }
  });

  const attendancePercent = totalGuest === 0
    ? 0
    : Math.round((checkedIn / totalGuest) * 100);

  return success({
    EventID: eventId,
    TotalGuest: totalGuest,
    CheckedIn: checkedIn,
    Waiting: waiting,
    AttendancePercent: attendancePercent
  }, "Dashboard Summary");
}

function dashboardRecent(request) {
  const eventId = (request.eventId || "").trim();
  const limit = Number(request.limit || 10);

  if (!eventId) {
    return errorResponse("EventID Required", 400);
  }

  const sh = sheet(SHEETS.CHECKIN);
  const values = sh.getDataRange().getValues();

  if (values.length <= 1) {
    return success([], "No Recent Check-In");
  }

  const headers = values[0];

  const result = values
    .slice(1)
    .map(function(row) {
      return rowToObject(headers, row);
    })
    .filter(function(item) {
      return String(item.EventID) === String(eventId);
    })
    .sort(function(a, b) {
      return new Date(b.CheckInTime) - new Date(a.CheckInTime);
    })
    .slice(0, limit);

  return success(result, "Recent Check-In");
}
