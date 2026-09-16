# Levanta el entorno local de MDN

Esta guía te explica, paso a paso, cómo correr MDN en tu propia computadora. Es útil cuando quieres **ver tus traducciones renderizadas** mientras trabajas, o revisar que los enlaces y macros de un documento se vean bien antes de abrir tu PR.

No es obligatorio: siempre puedes contribuir desde el navegador o confiar en la URL de previsualización que el bot genera en cada PR. Pero ver el resultado en vivo es más cómodo y te ahorra varios viajes de ida y vuelta.

## Qué vas a instalar

> 💾 **Ojo con el espacio:** cada repositorio ocupa alrededor de 1 a 2 GB. Asegúrate de tener al menos 5 GB libres en tu disco antes de empezar.

MDN se construye con tres repositorios que deben vivir **uno al lado del otro** en la misma carpeta:

| Carpeta               | Qué contiene                                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `content/`            | El contenido en inglés (de [mdn/content](https://github.com/mdn/content))                                                           |
| `translated-content/` | Las traducciones, incluida la nuestra en español (tu _fork_ de [mdn/translated-content](https://github.com/mdn/translated-content)) |
| `yari/`               | La plataforma que renderiza las páginas (de [mdn/yari](https://github.com/mdn/yari))                                                |

Además necesitas:

- **Node.js** versión 20 o superior (te recomendamos una versión 22; puedes instalarla con [mise](https://mise.jdx.dev/), [fnm](https://github.com/Schniz/fnm) o [nvm](https://github.com/nvm-sh/nvm)).
- **Yarn clásico** (versión 1.x). Si no lo tienes: `npm install -g yarn`.

No necesitas instalar Rust ni ningún compilador: `yarn install` descarga todo lo demás por su cuenta.

## Paso 1: clona los tres repositorios

Crea una carpeta (llámala como quieras, por ejemplo `mdn/`) y dentro de ella clona:

```bash
# El contenido en inglés
git clone https://github.com/mdn/content.git

# Tu fork de las traducciones (cambia TU_USUARIO por tu usuario de GitHub)
git clone git@github.com:TU_USUARIO/translated-content.git

# La plataforma
git clone https://github.com/mdn/yari.git
```

> ⏳ Los repositorios son grandes. El primer `clone` puede tardar varios minutos. Ten paciencia, sólo hay que hacerlo una vez.

## Paso 2: instala las dependencias de yari

```bash
cd yari
yarn install
```

La primera vez tarda uno o dos minutos. Al terminar, ya tienes todo lo necesario, incluida la herramienta que renderiza las páginas.

## Paso 3: configura el archivo `.env`

Copia el archivo de ejemplo y edítalo:

```bash
cp .env-dist .env
```

Abre `.env` con tu editor y deja estas dos líneas sin el `#` del principio (la segunda viene comentada, quítale el `#`):

```
CONTENT_ROOT=../content/files
CONTENT_TRANSLATED_ROOT=../translated-content/files
```

Estas rutas le dicen a la plataforma dónde encontrar los dos repos de contenido que clonaste en el paso 1. Si te saltas la segunda, las páginas en `/es/` no cargarán.

## Paso 4: compila una vez

```bash
yarn build:prepare
```

Compila la interfaz y tarda alrededor de un minuto. Sólo lo necesitas la primera vez, o después de actualizar el repositorio `yari`.

## Paso 5: arranca el servidor

```bash
yarn start
```

Cuando veas el mensaje `webpack compiled successfully`, abre <http://localhost:3000> en tu navegador. Para ver tus traducciones, visita una página con el prefijo `/es/`, por ejemplo:

<http://localhost:3000/es/docs/Web/HTML>

Si ves la página en español, ¡listo, tu entorno funciona!

## El día a día

- **Edita y recarga.** Cambia cualquier archivo en `translated-content/files/es/` (o `content/files/en-us/`) y recarga la página en el navegador. El servidor re-renderiza al vuelo, no hay que recompilar nada.
- **Para dejar de trabajar**, pulsa `Ctrl-C` en la terminal donde corre `yarn start`. La próxima vez que quieras trabajar, sólo repite el paso 5.
- **Para actualizar** todo después de unos días: haz `git pull` en los tres repositorios y, si `yari` cambió, vuelve a correr `yarn build:prepare` antes de `yarn start`.

## Si algo falla

- **`No version is set for command node` (con asdf):** la carpeta `yari` trae un `.nvmrc` con una versión mayor que asdf no resuelve. Ejecuta `asdf shell nodejs 22.14.0` dentro de `yari/`, o exporta la versión que tengas instalada.
- **Las páginas en `/es/` dan 404:** revisa que `CONTENT_TRANSLATED_ROOT` esté sin comentar en `yari/.env`.
- **El puerto 3000 está ocupado:** seguramente quedó un servidor de una sesión anterior. Ciérralo con `lsof -ti:3000 | xargs kill` o reinicia tu computadora.
- **Errores raros después de actualizar:** borra `yari/node_modules`, corre `yarn install` y `yarn build:prepare` de nuevo.

¿Atascado? Pregúntanos en nuestro [Telegram](https://t.me/+Dr6qKQCAepw4MjFj) (también está en [Charla con nosotros](./README.md#charla-con-nosotros)).
