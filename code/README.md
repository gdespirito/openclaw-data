# code/ — mini apps y proyectos

Convención: **cada proyecto vive aislado** (sin dependencias compartidas entre proyectos).

## Estructura

- `code/<YYYY>/<project-slug>/`
  - `README.md` (qué hace, cómo correr, TODOs)
  - `src/`
  - `tests/` (opcional)
  - `scripts/` (opcional)
  - `.env.example` (si aplica; **no** guardar secretos reales)

Ejemplo:

- `code/2026/airbnb-tools/`

## Reglas de trabajo

- Un proyecto = una carpeta.
- Si hay que reutilizar algo, se copia dentro del proyecto (primero simple). Si se vuelve repetitivo, lo conversamos y recién ahí extraemos una lib/paquete.
- Todo lo que sea deploy/hosting se decide proyecto a proyecto (lo vemos después).

## Nombres

- `project-slug`: kebab-case (ej: `lavadero-reminders`, `airbnb-reviews-bot`).

