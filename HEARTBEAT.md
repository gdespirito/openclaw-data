# HEARTBEAT.md

# Heartbeat checks configured by user (Gonza)

# Active hours
- Agent active: 07:00–23:00 America/Santiago

# Checks to run (rotate through, 2-4 times per day)
- Email: check inbox for urgent or high-priority messages; surface only important ones.
- Calendar: upcoming events in next 48h; help confirm/coordinate with Mariana when relevant.
- Mentions / messages: check configured channels for direct mentions.
- Memory processing: review recent memory/YYYY-MM-DD.md files and suggest items to move into MEMORY.md (ask before long-term summarization if >1 item).
- Family/relationship prompts: look for opportunities to schedule or remind about dates/panorama with Mariana; suggest and help coordinate.

# Behavior
- Be proactive but non-intrusive: only surface items that are time-sensitive, important, or help maintain relationships (e.g., scheduling with Mery).
- If nothing needs attention, reply HEARTBEAT_OK

# Reminder delivery policy (WhatsApp)
- For user reminders that matter, **send them as explicit WhatsApp messages** (not only as internal systemEvent text), because system events may not surface reliably to the user.
- Reminders should be **acknowledged**: ask Gonza to reply with an ACK keyword.
  - ACK keywords: **ok, listo, dale, visto** (and close variants like "oki", "okey").
- If Gonza does **not** reply with an ACK keyword, schedule a **follow-up ping 5 minutes later** (“¿lo viste?”).
- If Gonza **does** reply with an ACK keyword before the follow-up fires, **cancel** the pending follow-up (cron.remove).

# Notes
- The agent may create cron jobs for exact reminders when requested by the user.
- This file is editable by the user at any time to tune checks.