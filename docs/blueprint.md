# PES V2 Blueprint

## Project
PERKABEM Event System V2

## Architecture

Frontend:
- GitHub Pages
- HTML
- CSS
- Vanilla JavaScript

Backend:
- Google Apps Script API only

Database:
- Google Spreadsheet

## Core Modules

1. Dashboard
2. Events
3. Guest
4. Invitation
5. Scanner
6. Lucky Draw
7. Report
8. Settings

## Database Sheets

- EVENTS
- MASTER_MEMBER
- GUEST
- CHECKIN
- TABLE
- SEAT
- INVITATION
- SETTINGS
- LOG

## Main Flow

Event dibuat
↓
Guest dimasukkan
↓
Invitation generate
↓
WhatsApp dikirim
↓
QR scan
↓
Check-in
↓
Dashboard update
↓
Lucky Draw
↓
Report

## Scanner Flow

Scan QR
↓
Get Member ID
↓
Preview Guest
↓
CHECK-IN
↓
Update GUEST
↓
Insert CHECKIN LOG
↓
Update Dashboard
↓
Scan next guest

## Design System

Primary: #B5121B  
Gold: #D4AF37  
Background: #F4F6F9  
White: #FFFFFF  
Text: #2C3E50  

Font: Poppins  
Radius: 20px  
Style: clean, premium, responsive

## Version Plan

v2.0.0 - Foundation  
v2.1.0 - Database Architecture  
v2.2.0 - API Engine  
v2.3.0 - Guest Module  
v2.4.0 - Invitation Module  
v2.5.0 - Scanner Module  
v2.6.0 - Dashboard Live  
v2.7.0 - Lucky Draw  
v3.0.0 - Production Release
