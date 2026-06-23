# Despliegue

Este sitio se construye con [Docusaurus](https://docusaurus.io/) y se despliega en
dos entornos:

| Entorno | Plataforma | URL | Cuándo se actualiza |
| --- | --- | --- | --- |
| **Producción** | GitHub Pages | `https://jac-mtt.github.io/jac-docs/` | Al hacer *push* / *merge* a `main` |
| **Staging (revisión)** | Cloudflare Workers | `https://jac-docs.<cuenta>.workers.dev` y previews por rama | En cada *push* a cualquier rama / PR |

El flujo de trabajo es: se abre un *Pull Request* → Cloudflare publica una **preview**
con una URL única → los revisores aprueban sobre esa preview → al hacer *merge* a `main`,
GitHub Pages publica la versión de producción.

---

## Flujo para editar contenido (colaboradores)

Producción (GitHub Pages) se publica **automáticamente al hacer _merge_ a `main`**. Para
que tus pares puedan revisar **antes** de publicar, cada cambio se hace en una rama, que
obtiene su propia *preview* de Cloudflare. No edites `main` directamente.

### Opción A — Desde el navegador (recomendada para cambios de texto)

1. En el sitio publicado, abre la página que quieres modificar y baja hasta el enlace
   **"Editar esta página"** (✏️) al final del contenido.
2. Se abre el archivo en el editor de GitHub. Inicia sesión si te lo pide.
3. Edita en la pestaña **Edit**; revisa el resultado en la pestaña **Preview**.
4. Baja a **Commit changes** y escribe una descripción breve del cambio.
5. Marca **"Create a new branch for this commit and start a pull request"** y nombra la
   rama (ej: `corrige-trafico`).
6. Pulsa **Propose changes** → **Create pull request**.
7. Tras 1-2 minutos, en el PR aparece (en los *checks* de Cloudflare) el enlace a la
   **preview**. Ábrelo para revisar tu cambio en staging y compártelo con tus pares.
8. Si hay correcciones, vuelve a editar sobre la misma rama: la preview se actualiza sola.
9. Cuando esté aprobado, pulsa **Merge pull request**. En ~1-2 minutos queda publicado en
   producción.

> El botón "Editar esta página" funciona porque `docusaurus.config.ts` define
> `editUrl: https://github.com/jac-mtt/jac-docs/edit/main/`.

### Opción B — Con Git en tu equipo (para cambios mayores)

1. `git checkout main && git pull`
2. `git checkout -b mi-cambio`
3. Edita los archivos; previsualiza con `yarn start` (http://localhost:3000/jac-docs/).
4. `git add -A && git commit -m "descripción del cambio"`
5. `git push -u origin mi-cambio`
6. Abre un Pull Request hacia `main` en GitHub.
7. Revisa la preview de Cloudflare del PR, pide revisión y haz *merge*.

> En ningún caso hace falta tocar la configuración: la preview y la publicación se generan
> solas a partir del PR.

---

## Configuración de `url` / `baseUrl`

GitHub Pages sirve el sitio bajo el subpath `/jac-docs/`, mientras que Cloudflare lo
sirve desde la raíz de un dominio (`/`). Por eso `docusaurus.config.ts` lee estos
valores desde variables de entorno, con los valores de GitHub Pages como predeterminados:

```ts
url: process.env.SITE_URL || "https://jac-mtt.github.io",
baseUrl: process.env.SITE_BASE_URL || "/jac-docs/",
```

La variable que distingue producción de staging es **`SITE_BASE_URL`**; el "interruptor"
es simplemente *qué build la define*:

- **GitHub Pages** y **desarrollo local**: no definen nada → valores por defecto
  (`/jac-docs/`) → comportamiento de producción.
- **Cloudflare Workers**: define `SITE_BASE_URL=/` → se sirve desde la raíz → staging.

`SITE_URL` es opcional: si la dejas **sin definir**, el sitio igual se sirve en la URL
genérica `*.workers.dev` y los metadatos (sitemap/canónico) caen al dominio de producción
(inofensivo, incluso recomendable, en staging).

---

## Producción — GitHub Pages

Automático mediante GitHub Actions:

- `.github/workflows/deploy.yml` — construye y publica a GitHub Pages en cada *push* a `main`.
- `.github/workflows/test-deploy.yml` — verifica que el sitio compile en cada PR.

No requiere configuración adicional.

---

## Staging — Cloudflare Workers (configuración única)

> Cloudflare unificó Pages dentro de **Workers** (Workers Builds + Static Assets).
> El sitio se despliega como un Worker "solo-assets" que sirve la carpeta `build/`.
> Requiere permisos para conectar el repositorio `jac-mtt/jac-docs` en Cloudflare.

### Archivos en el repositorio

Ya están incluidos y son necesarios para que `wrangler deploy` funcione:

- `wrangler.jsonc` — define el Worker `jac-docs` y su carpeta de assets (`./build`).
- `.nvmrc` — fija Node 22 en el build de Cloudflare.

> ⚠️ Estos archivos deben estar en la rama que Cloudflare construye (normalmente
> `main`) **antes** de desplegar; de lo contrario el paso de *deploy* falla.

### Pasos en el panel de Cloudflare

1. **Workers & Pages** → *Create* → *Import a repository* → autoriza y elige
   `jac-mtt/jac-docs`.
2. En **Set up your application** / *Create and deploy*:

   | Campo | Valor |
   | --- | --- |
   | Project name | `jac-docs` (define el subdominio `jac-docs.<cuenta>.workers.dev`) |
   | Build command | `yarn build` |
   | Deploy command | `npx wrangler deploy` |
   | Builds for non-production branches | ✅ activado (genera previews por rama) |
   | Non-production branch deploy command | `npx wrangler versions upload` |
   | Path | `/` |
   | API token | *Create new token* y ponle un nombre (ej: `jac-docs-ci`) |

3. **Deploy**.

### Variables de build

`yarn build` necesita estas variables. Si el formulario no las ofrece, agrégalas
después en *Worker* → *Settings* → *Build* → *Variables and secrets* y vuelve a
desplegar:

| Variable | Valor | Para qué sirve |
| --- | --- | --- |
| `SITE_BASE_URL` | `/` | **Imprescindible.** Sirve desde la raíz (no `/jac-docs/`); sin esto los assets dan 404. |
| `ENABLE_EXPERIMENTAL_COREPACK` | `1` | Permite usar Yarn 4 según el campo `packageManager`. |
| `SITE_URL` | *(no la definas)* | Opcional. Sin ella, el sitio igual se sirve en `jac-docs.<cuenta>.workers.dev`. No la agregues vacía. |

(La versión de Node la fija `.nvmrc`; no hace falta `NODE_VERSION`.)

### Cómo revisar los cambios

- **`main`** (rama de producción del Worker) → `https://jac-docs.<cuenta>.workers.dev`.
- **Cualquier otra rama / PR** → `wrangler versions upload` crea una **preview** con su
  propia URL de versión (visible en los logs del build y en la pestaña *Versions* del
  Worker). Comparte esa URL con tus pares para revisar antes de hacer *merge* a `main`.

### Dominio propio (opcional)

Como `rosebush.garden` ya está en Cloudflare:

1. *Worker* → *Settings* → *Domains & Routes* → *Add* → *Custom domain* →
   `jac-docs.rosebush.garden`. El DNS se configura automáticamente.
2. Actualiza la variable `SITE_URL` a `https://jac-docs.rosebush.garden`.

### Notas y solución de problemas

- **`wrangler deploy` falla por configuración**: confirma que `wrangler.jsonc` está en
  la rama que Cloudflare construye.
- **Yarn 4 / Corepack**: si la instalación de dependencias falla, revisa que
  `ENABLE_EXPERIMENTAL_COREPACK=1` esté definida. Alternativa: cambia el *Build command*
  a `corepack enable && yarn install --immutable && yarn build`.
- **`baseUrl`**: nunca uses rutas absolutas `/jac-docs/...` escritas a mano en el
  contenido. Para enlazar archivos de `static/` usa el componente `DownloadButton` o
  `useBaseUrl`, de modo que la ruta se adapte sola a cada entorno.
