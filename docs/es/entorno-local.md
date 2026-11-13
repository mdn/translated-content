# Levanta el entorno local de MDN

Esta guía te explica, paso a paso, cómo correr MDN en tu propia computadora. Es útil cuando quieres **ver tus traducciones renderizadas** mientras trabajas, o revisar que los enlaces y macros de un documento se vean bien antes de abrir tu PR.

No es obligatorio: siempre puedes contribuir desde el navegador o confiar en la URL de previsualización que el bot genera en cada PR. Pero ver el resultado en vivo es más cómodo y te ahorra varios viajes de ida y vuelta.

## Qué vas a instalar

> 💾 **Ojo con el espacio:** cada repositorio ocupa alrededor de 1 a 2 GB. Asegúrate de tener al menos 5 GB libres en tu disco antes de empezar.

Necesitas dos repositorios, y deben vivir **uno al lado del otro** en la misma carpeta:

| Carpeta               | Qué contiene                                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `content/`            | El contenido en inglés y la plataforma que renderiza las páginas (de [mdn/content](https://github.com/mdn/content))                 |
| `translated-content/` | Las traducciones, incluida la nuestra en español (tu _fork_ de [mdn/translated-content](https://github.com/mdn/translated-content)) |

Ya no hace falta clonar `mdn/yari`: desde [yari v6.0.0](https://github.com/mdn/yari/releases/tag/v6.0.0) ese repositorio dejó de publicar la herramienta de línea de comandos, y la plataforma (Fred y rari) se instala como dependencia de `content/`.

Además necesitas:

- **Node.js** versión 24 o superior, que es lo que exige `content/` (puedes instalarla con [mise](https://mise.jdx.dev/), [fnm](https://github.com/Schniz/fnm) o [nvm](https://github.com/nvm-sh/nvm)).
- **npm** 11 o superior, que viene con esa versión de Node.

No necesitas instalar Rust ni Yarn: `npm install` descarga todo lo demás por su cuenta.

## Paso 1: clona los dos repositorios

Crea una carpeta (llámala como quieras, por ejemplo `mdn/`) y dentro de ella clona:

```bash
# El contenido en inglés, que incluye la plataforma
git clone https://github.com/mdn/content.git

# Tu fork de las traducciones (cambia TU_USUARIO por tu usuario de GitHub)
git clone https://github.com/TU_USUARIO/translated-content.git
```

> ⏳ Los repositorios son grandes. El primer `clone` puede tardar varios minutos. Ten paciencia, sólo hay que hacerlo una vez.

## Paso 2: instala las dependencias

```bash
cd content
npm install
```

Son unos 745 paquetes y tarda menos de un minuto. Con esto ya tienes la plataforma completa; no hace falta instalar nada más.

## Paso 3: dile a la plataforma dónde están las traducciones

Dentro de `content/`, crea un archivo llamado `.env` con esta línea:

```
CONTENT_TRANSLATED_ROOT=../translated-content/files
```

Sin ella, las páginas en `/es/` no cargan (las de `/en-US/` sí). El repositorio trae un `.env-dist`, pero sólo sirve para configurar el editor; la línea de arriba tienes que escribirla tú.

## Paso 4: arranca el servidor

```bash
npm start
```

Cuando veas `Server started at http://localhost:5042`, abre una página con el prefijo `/es/`, por ejemplo:

<http://localhost:5042/es/docs/Web/HTML>

> ⏳ La primera vez, rari descarga sus datos de referencia (compatibilidad de navegadores, especificaciones) y las primeras peticiones pueden tardar o fallar durante un minuto. Espera un poco y recarga.

Si ves la página en español, ¡listo, tu entorno funciona!

## El día a día

- **Edita y recarga.** Cambia cualquier archivo en `translated-content/files/es/` (o `content/files/en-us/`) y recarga la página en el navegador. El servidor re-renderiza al vuelo, no hay que recompilar nada.
- **Para dejar de trabajar**, pulsa `Ctrl-C` en la terminal donde corre `npm start`. La próxima vez que quieras trabajar, sólo repite el paso 4.
- **Para actualizar** todo después de unos días: haz `git pull` en los dos repositorios y vuelve a correr `npm install` dentro de `content/` antes de `npm start`.

## Si algo falla

- **Las páginas en `/es/` no cargan:** revisa que `content/.env` exista y contenga `CONTENT_TRANSLATED_ROOT`, y que la ruta apunte a tu carpeta `translated-content/files`.
- **`npm install` falla compilando `mozjpeg` (macOS):** el paquete intenta compilarse desde el código fuente y necesita `automake`. Puedes instalarlo (`brew install automake`) o saltarte esa compilación, que no hace falta para levantar el sitio:

  ```bash
  npm install --ignore-scripts
  npm rebuild @mdn/rari
  ```

- **`No version is set for command node` (con asdf):** asdf no lee el `.nvmrc` de `content/` a menos que actives `legacy_version_file`. Lo más simple es fijar la versión: `asdf set nodejs 24.20.0` dentro de `content/`.
- **El puerto 5042 está ocupado:** seguramente quedó un servidor de una sesión anterior. Ciérralo con `lsof -ti:5042,5043 | xargs kill`.
- **Errores raros después de actualizar:** borra `content/node_modules`, corre `npm install` de nuevo y vuelve a arrancar.

¿Atascado? Pregúntanos en nuestro [Telegram](https://t.me/+Dr6qKQCAepw4MjFj) (también está en [Charla con nosotros](./README.md#charla-con-nosotros)).
