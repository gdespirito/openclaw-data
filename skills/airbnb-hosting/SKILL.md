---
name: airbnb-hosting
description: Operate Airbnb as a host via the web UI (Hosting). Use when the user asks to check current guests, upcoming check-in/checkout dates, reservation details (guest name, dates, listing, confirmation code), availability gaps, minimum-stay rule effects, or to navigate the hosting calendar/multicalendar to find free days.
---

# Airbnb Hosting

Operate Airbnb Hosting reliably using the Browser tool, extracting only the minimum needed info.

## Defaults

- Prefer `browser` profile **chrome** (user’s real Chrome via relay). If not available/attached, use profile **openclaw**.
- Data minimization: for ops questions, read only: **guest name, check-in, checkout, listing title, confirmation code**.
- Don’t change pricing/availability or message guests unless the user explicitly asks.

## Quick workflows

### A) “¿Quién está ahora en Pullinque / Pupuya (y cómo se llama)?”

1. Open Reservations:
   - Go to `https://www.airbnb.com/hosting/reservations`.
2. Ensure tab **Upcoming** is selected.
3. Find rows with status **Currently hosting**.
4. For each relevant listing, capture:
   - Guest name
   - Check-in / Checkout
   - Listing (title is enough to map to property)
5. Reply with just the names + property mapping.

### B) “¿Cuándo se van?” (checkout)

- From the same **Currently hosting** reservation row(s), read the **Checkout** column and answer with the date.

### C) “Revisa el calendario: ¿qué día libre hay para ir (gap de 1 noche por mínimo 2)?”

1. Open calendar router:
   - `https://www.airbnb.com/calendar-router`
2. Click the listing you care about (e.g., Pullinque).
3. You should land on Multicalendar for that listing.
4. Identify the surrounding reservations (names/tags on the right or in day blocks) and look for a **single free night** between:
   - a checkout day (guest leaves) and
   - the next check-in day (next guest arrives)
5. Report the **date** and explain it’s a 1-night gap (often unrentable due to minimum stay).

## Reliability tips

- If the calendar view is too dense: switch to **Month** view and/or use the month dropdown.
- If the right sidebar shows a guest/reservation, use it to confirm **dates** without opening extra pages.
- If you can’t tell which listing a reservation belongs to: use the **Listing** column in Reservations, or ensure the correct listing is selected in the Multicalendar picker.

## Troubleshooting

If Airbnb asks to log in, do not attempt password resets. Ask the user to complete login/2FA in the controlled browser tab, then continue.

For URLs + common screens, see: `references/airbnb-urls-and-screens.md`.
