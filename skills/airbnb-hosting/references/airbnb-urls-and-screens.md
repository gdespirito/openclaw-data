# Airbnb Hosting — URLs & screens

## Key URLs

- Reservations (Hosting): https://www.airbnb.com/hosting/reservations
  - Use: current guests ("Currently hosting"), upcoming check-ins, confirmation codes.

- Calendar router: https://www.airbnb.com/calendar-router
  - Use: entry point to calendars for multiple listings.

- Multicalendar (after selecting listing): https://www.airbnb.com/multicalendar
  - Often redirects to listing-specific multicalendar like:
  - https://www.airbnb.com/multicalendar/<listing_id>

## What to extract (minimal)

- Guest name
- Check-in date
- Checkout date
- Listing title (to map to “Pullinque” / “Pupuya”)
- Confirmation code (only if asked / useful)

## Common UI landmarks (best-effort; may change)

- Reservations table columns: Status, Guests, Check-in, Checkout, Listing, Confirmation Code.
- Status values frequently used:
  - Currently hosting
  - Confirmed
  - Canceled

- Multicalendar:
  - Listing picker (left/top) to switch between properties.
  - Month selector + Month/Week view.
  - Right sidebar shows reservation details when a day block or guest tag is selected.

## Notes

- Airbnb UI changes often; prefer reading the visible text in the table/sidebar over relying on fixed selectors.
- If a login wall appears, the user must complete login/2FA in the same browser profile.
