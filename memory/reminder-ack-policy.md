# Reminder ACK policy (WhatsApp)

- ACK keywords (case-insensitive, trimmed):
  - ok
  - listo
  - dale
  - visto
  - close variants: oki, okey

Behavior:
- When a reminder message asks for ACK, and Gonza replies with an ACK keyword before the scheduled follow-up, cancel the follow-up cron job.
- Follow-up message: "¿Lo viste?"

Last confirmed by Gonza: 2026-02-06
