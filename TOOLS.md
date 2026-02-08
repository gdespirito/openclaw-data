# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.


### TTS

- Preferred voice: cLzIVykddLltvgkzos6C (ElevenLabs) — use when TTS requested or when audio needed
- Default speaker: Kitchen HomePod
- TTS policy: Only use TTS when user requests audio or when an incoming voice/audio message needs reply. Keep spoken text <=1500 chars.
```

## Browser control / Airbnb scraping

- Preferred method: control the local Chrome/Chromium profile directly (profile: chrome) via the OpenClaw browser tool when available.
- Fallback: if the OpenClaw browser relay is not attached for the chrome profile, use the internal "openclaw browser" profile or Playwright as a fallback (Playwright is installed on the Pi and will be used only if needed).
- Playwright config: uses the Chromium installed by Playwright and (when required) the persistent profile at /home/pi/.config/chromium/Default. Playwright is Plan B/C — prefer browser relay/profile control first.
- Notes: when scraping Airbnb, only read reservation data (guest name, check-in, check-out, listing title/address, confirmation code). Do not store passwords or tokens. Any installation or browser changes performed by the agent are allowed (per user instruction) and will be logged.

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.