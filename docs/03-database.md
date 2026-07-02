# PES V2 Database Design

Version : 2.0.0

Status : DRAFT

---

# Database Overview

PES V2 menggunakan Google Spreadsheet sebagai Database.

Setiap Sheet mewakili satu Entity.

Semua Sheet saling berelasi menggunakan ID.

---

# Database List

1. EVENTS
2. MASTER_MEMBER
3. GUEST
4. INVITATION
5. CHECKIN
6. TABLE
7. SEAT
8. SETTINGS
9. LOG
10. USERS
11. MERCHANT

---

# 1. EVENTS

Satu record = satu event.

| Field | Type | Description |
|------|------|-------------|
| EventID | Text | EVT0001 |
| EventName | Text | Nama Event |
| EventDate | Date | Tanggal |
| StartTime | Time | Jam Mulai |
| EndTime | Time | Jam Selesai |
| Venue | Text | Lokasi |
| Theme | Text | Tema Event |
| Logo | URL | Logo Event |
| Status | Active / Closed | Status |

---

# 2. MASTER_MEMBER

Database seluruh anggota PERKABEM.

| Field |
|------|
| MemberID |
| FullName |
| Alias |
| Gender |
| BirthDate |
| Phone |
| Email |
| Address |
| JoinDate |
| MembershipStatus |
| PhotoURL |
| QRCode |

---

# 3. GUEST

Peserta suatu event.

Member dapat mengikuti banyak event.

| Field |
|------|
| GuestID |
| EventID |
| MemberID |
| InvitationStatus |
| CheckInStatus |
| Pax |
| TableNo |
| SeatFrom |
| SeatTo |
| Notes |

---

# 4. INVITATION

Data seluruh undangan.

| Field |
|------|
| InvitationID |
| GuestID |
| SlideID |
| FileID |
| InvitationURL |
| GeneratedTime |
| SentTime |
| WhatsAppStatus |

---

# 5. CHECKIN

Log seluruh Check In.

| Field |
|------|
| CheckInID |
| GuestID |
| MemberID |
| CheckInTime |
| Operator |
| Device |
| Gate |
| Status |

---

# 6. TABLE

Master meja.

| Field |
|------|
| TableNo |
| Capacity |
| Reserved |
| Occupied |
| Status |

---

# 7. SEAT

Master kursi.

| Field |
|------|
| SeatID |
| TableNo |
| SeatNo |
| GuestID |
| Status |

---

# 8. SETTINGS

Konfigurasi aplikasi.

| Field |
|------|
| SettingKey |
| SettingValue |

---

# 9. LOG

Semua aktivitas sistem.

| Field |
|------|
| LogID |
| DateTime |
| User |
| Module |
| Action |
| Description |

---

# 10. USERS

Pengguna aplikasi.

| Field |
|------|
| UserID |
| Name |
| Email |
| Role |
| Password |
| Status |

Role:

- Admin
- Operator
- Scanner
- Viewer

---

# 11. MERCHANT

Merchant Partner.

| Field |
|------|
| MerchantID |
| MerchantName |
| Category |
| Discount |
| Logo |
| Status |

---

# ID Standard

| Entity | Prefix |
|---------|--------|
| Event | EVT |
| Member | PKB |
| Guest | GST |
| Invitation | INV |
| Check In | CHK |
| User | USR |
| Merchant | MCH |
| Table | TBL |
| Seat | SET |

---

# Relationship

EVENTS

↓

GUEST

↓

MASTER_MEMBER

↓

INVITATION

↓

CHECKIN

↓

LUCKY DRAW

---

# Future Expansion

- Payment
- Merchandise
- Cashback
- Digital Membership
- Attendance Analytics
- Mobile App
