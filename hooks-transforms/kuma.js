// OpenClaw hook transform for Kuma
// Exports a function(ctx) that can override the hook action payload.

export default function transform(ctx) {
  const p = ctx?.payload ?? {};
  const event = typeof p.event === 'string' ? p.event : undefined;
  const status = typeof p.status === 'string' ? p.status : undefined;
  const monitor = typeof p.monitor === 'string' ? p.monitor : undefined;

  // Special-case: explicit test webhook -> send a short confirmation back.
  if (event === 'test') {
    return {
      kind: 'agent',
      // Make the assistant response deterministic and short.
      message:
        'Responde SOLO con una línea confirmando recepción del webhook de prueba de Kuma. ' +
        'Incluye monitor si viene.\n' +
        `monitor=${monitor ?? 'n/a'}`,
      name: 'Kuma Test',
      wakeMode: 'now',
      deliver: true,
      channel: 'whatsapp',
      to: '+56988153776',
      timeoutSeconds: 30
    };
  }

  // Default: send a readable alert message.
  return {
    kind: 'agent',
    message:
      'Formatea este evento de Kuma como alerta corta para WhatsApp. ' +
      'Incluye status/monitor/event y si falta algo, dilo. ' +
      'No inventes datos. Payload JSON:\n' +
      JSON.stringify(p),
    name: 'Kuma Alert',
    wakeMode: 'now',
    deliver: true,
    channel: 'whatsapp',
    to: '+56988153776',
    timeoutSeconds: 60
  };
}
