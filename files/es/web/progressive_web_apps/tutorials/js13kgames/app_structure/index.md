---
title: Estructura de una aplicación web progresiva
slug: Web/Progressive_web_apps/Tutorials/js13kGames/App_structure
---

{{PreviousMenuNext("Web/Progressive_web_apps/Introduction", "Web/Progressive_web_apps/Offline_Service_workers", "Web/Progressive_web_apps")}}

Ahora que conoces la teoría detrás de las PWAs, veamos la estructura recomendada de una aplicación real. Comenzaremos analizando la aplicación [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/), veamos por qué está construida de esa manera y qué beneficios aporta.

## Arquitectura de una aplicación

Hay dos principales y diferentes enfoques para representar un sitio web — en el servidor o en el cliente. Ambos tienen sus ventajas y desventajas, y puedes combinar los dos enfoques hasta cierto punto.

- La representación del lado del servidor (SSR) significa que un sitio web se representa en el servidor, por lo que ofrece una primera carga más rápida, pero navegar entre páginas requiere descargar contenido HTML nuevo. Funciona muy bien en todos los navegadores, pero adolece en términos de tiempo de navegación entre páginas y, por lo tanto, rendimiento percibido general — cargar una página requiere un nuevo viaje de ida y vuelta al servidor.
- La representación de lado del cliente (CSR) permite que el sitio web se actualice en el navegador casi instantáneamente cuando se navega a diferentes páginas, pero requiere más de un golpe de descarga inicial y una representación adicional en el cliente al principio. El sitio web es más lento en una visita inicial, pero puede ser más rápido para navegar.

La combinación de SSR con CSR puede generar los mejores resultados: puedes representar un sitio web en el servidor, almacenar en caché su contenido y luego actualizar la representación en el lado del cliente cuando sea necesario. La carga de la primera página es rápida debido al SSR y la navegación entre páginas es fluida porque el cliente puede volver a renderizar la página solo con las partes que han cambiado.

Las PWAs se pueden crear utilizando cualquier enfoque que desees, pero algunas funcionarán mejor que otras. El enfoque más popular es el concepto de "intérprete de la aplicación", que combina SSR y CSR exactamente de la manera descrita anteriormente, y además sigue la metodología "fuera de línea primero" que explicaremos en detalle en los próximos artículos y utilizaremos en nuestra aplicación de ejemplo. También hay un nuevo enfoque que involucra la [API Streams](/es/docs/Web/API/Streams_API), que mencionaremos brevemente.

## Intérprete de la aplicación

El concepto de intérprete de la aplicación se ocupa de cargar una interfaz de usuario mínima lo antes posible y luego almacenarla en caché para que esté disponible sin conexión para visitas posteriores antes de cargar todo el contenido de la aplicación. De esa manera, la próxima vez que alguien visite la aplicación desde el dispositivo, la interfaz de usuario se cargará desde la caché de inmediato y se solicitará cualquier contenido nuevo del servidor (si aún no está disponible en la caché).

Esta estructura es rápida y también se siente rápida, ya que el usuario ve "algo" instantáneamente, en lugar de una ruleta de carga o una página en blanco. También permite que el sitio web sea accesible sin conexión si la conexión de red no está disponible.

Podemos controlar lo que se solicita del servidor y lo que se recupera de la caché con un [servicio worker](/es/docs/Web/API/Service_Worker_API), que se explicará en detalle en el próximo artículo, por ahora centrémonos en la estructura en sí misma.

### ¿Por qué debería usarla?

Esta arquitectura permite que un sitio web se beneficie al máximo de todas las funciones de PWA — almacena en caché el intérprete de la aplicación y administra el contenido dinámico de una manera que mejora enormemente el rendimiento. Además del intérprete básico, puedes agregar otras funciones como [agregar a la pantalla de inicio](/es/docs/Web/Progressive_web_apps/Add_to_home_screen) o [notificaciones push](/es/docs/Web/API/Push_API), con la certeza de que la aplicación seguirá funcionando correctamente si no son compatibles con el navegador del usuario — esta es la belleza de la mejora progresiva.

El sitio web se siente como una aplicación nativa con interacción instantánea y un rendimiento sólido, al tiempo que conserva todos los beneficios de la web.

### Ser enlazable, progresiva y adaptable por diseño

Es importante recordar las ventajas de PWA y tenerlas en cuenta al diseñar la aplicación. El enfoque del intérprete de la aplicación permite que los sitios web sean:

- Enlazable: aunque se comporta como una aplicación nativa, sigue siendo un sitio web; puedes hacer clic en los enlaces dentro de la página y enviar una URL a alguien si deseas compartirla.
- Progresiva: comienza con el "buen, antiguo sitio web básico" y agrega progresivamente nuevas funciones mientras recuerdas detectar si están disponibles en el navegador y manejas con elegancia cualquier error que surja si no hay soporte disponible. Por ejemplo, un modo fuera de línea con la ayuda del servicio _workers_ es solo un rasgo adicional que mejora la experiencia del sitio web, pero aún se puede usar perfectamente sin él.
- Adaptable: El diseño web adaptable también se aplica a las aplicaciones web progresivas, ya que ambas son principalmente para dispositivos móviles. Hay una gran variedad de dispositivos con navegadores — es importante preparar tu sitio web para que funcione en diferentes tamaños de pantalla, ventanas gráficas o densidades de píxeles, utilizando tecnologías como [metaetiqueta de la ventana gráfica](/es/docs/Mozilla/Mobile/Viewport_meta_tag), [consultas de medios CSS](/es/docs/Web/CSS/Media_Queries/Using_media_queries), [Flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout) y [Rejilla CSS](/es/docs/Web/CSS/CSS_Grid_Layout).

## Concepto diferente: streams o transmisiones

Se puede lograr un enfoque completamente diferente para la representación del lado del servidor o del cliente con la [API Streams](/es/docs/Web/API/Streams_API). Con un poco de ayuda del servicio _workers_, las transmisiones pueden mejorar en gran medida la forma en que analizamos el contenido.

El modelo de intérprete de la aplicación requiere que todos los recursos estén disponibles antes de que el sitio web pueda comenzar a renderizarse. Es diferente con HTML, ya que el navegador ya está transmitiendo los datos y puede ver cuándo se cargan y procesan los elementos en el sitio web. Sin embargo, para que JavaScript esté "operativo", se debe descargar en su totalidad.

La API de _Streams_ permite a los desarrolladores tener acceso directo a la transmisión de datos desde el servidor — si deseas realizar una operación en los datos (por ejemplo, agregar un filtro a un video), ya no necesitas esperar a que se complete la descarga y convertirla en un blob (o lo que sea) — puedes comenzar de inmediato. Proporciona un control detallado: la transmisión se puede iniciar, encadenar con otra transmisión, cancelar, verificar errores y más.

En teoría, la transmisión es un mejor modelo, pero también es más complejo, y en el momento de redactar este artículo (marzo de 2018), la API de _Streams_ todavía está en proceso y aún no está completamente disponible en ninguno de los principales navegadores. Cuando esté disponible, será la forma más rápida de servir el contenido — los beneficios serán enormes en términos de rendimiento.

Para obtener ejemplos trabajando y más información, consulta la [documentación de la API de Streams](/es/docs/Web/API/Streams_API).

## Estructura de nuestra aplicación de ejemplo

La estructura del sitio web [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) es bastante simple: consta de un solo archivo HTML ([index.html](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/index.html)) con estilo CSS básico ([style.css](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/style.css)) y algunas imágenes, scripts y tipos de letra. La estructura de la carpeta se ve así:

![Estructura del directorio de js13kPWA.](js13kpwa-directory.png)

### El HTML

Desde el punto de vista HTML, el intérprete de la aplicación es todo lo que está fuera de la sección de contenido:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>js13kGames — Entradas del marco A</title>
    <meta
      name="description"
      content="Una lista de las entradas del marco A enviadas a la competencia js13kGames 2017, que se utiliza como ejemplo para los artículos de MDN sobre Aplicaciones Web Progresivas" />
    <meta name="author" content="end3r" />
    <meta name="theme-color" content="#B12A34" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:image" content="icons/icon-512.png" />
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="stylesheet" href="style.css" />
    <link rel="manifest" href="js13kpwa.webmanifest" />
    <script src="data/games.js" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <p>
        <a class="logo" href="http://js13kgames.com"
          ><img src="img/js13kgames.png" alt="js13kGames"
        /></a>
      </p>
    </header>
    <main>
      <h1>js13kGames — Entradas del marco A</h1>
      <p class="description">
        Lista de juegos enviada a
        <a href="http://js13kgames.com/aframe">categoría Marco A</a> en la
        competencia de <a href="http://2017.js13kgames.com">js13kGames 2017</a>.
        Puedes
        <a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa"
          >bifurcar js13kPWA en GitHub</a
        >
        para revisar su código fuente.
      </p>
      <button id="notifications">Solicitar notificaciones ficticias</button>
      <section id="content">// Contenido insertado aquí</section>
    </main>
    <footer>
      <p>
        © js13kGames 2012-2020, creado y mantenido por
        <a href="http://end3r.com">Andrzej Mazur</a> de
        <a href="http://enclavegames.com">Enclave Games</a>.
      </p>
    </footer>
  </body>
</html>
```

La sección {{HTMLElement("head")}} contiene información básica como título, descripción y enlaces a CSS, manifiesto web, archivo JS de contenido de juegos y app.js; ahí es donde se inicia nuestra aplicación JavaScript. El {{HTMLElement("body")}} se divide en {{HTMLElement("header")}} (que contiene la imagen vinculada), {{HTMLElement("main")}} de la página (con título, descripción y lugar para el contenido) y {{HTMLElement("footer")}} (derechos de autor y enlaces).

El único trabajo de la aplicación es enumerar todas las entradas del Marco A de la competencia js13kGames 2017. Como puedes ver, es un sitio web muy común de una página — el objetivo es tener algo simple para que podamos centrarnos en la implementación de las características reales de PWA.

### El CSS

El CSS también es lo más sencillo posible: usa {{CSSxRef("@font-face")}} para cargar y usar un tipo de letra personalizado, y aplica un estilo simple de los elementos HTML. El enfoque general es que el diseño se vea bien tanto en dispositivos móviles (con un enfoque de diseño web adaptable) como en dispositivos de escritorio.

### El `main` de la aplicación JavaScript

El archivo `app.js` hace algunas cosas que veremos de cerca en los próximos artículos. En primer lugar, genera el contenido en base a esta plantilla:

```js
var template =
  "<article>\n\
    <img src='data/img/SLUG.jpg' alt='NAME'>\n\
    <h3>#POS. NAME</h3>\n\
    <ul>\n\
    <li><span>Author:</span> <strong>AUTHOR</strong></li>\n\
    <li><span>Twitter:</span> <a href='https://twitter.com/TWITTER'>@TWITTER</a></li>\n\
    <li><span>Website:</span> <a href='http://WEBSITE/'>WEBSITE</a></li>\n\
    <li><span>GitHub:</span> <a href='https://GITHUB'>GITHUB</a></li>\n\
    <li><span>More:</span> <a href='http://js13kgames.com/entries/SLUG'>js13kgames.com/entries/SLUG</a></li>\n\
    </ul>\n\
</article>";
var content = "";
for (var i = 0; i < games.length; i++) {
  var entry = template
    .replace(/POS/g, i + 1)
    .replace(/SLUG/g, games[i].slug)
    .replace(/NAME/g, games[i].name)
    .replace(/AUTHOR/g, games[i].author)
    .replace(/TWITTER/g, games[i].twitter)
    .replace(/WEBSITE/g, games[i].website)
    .replace(/GITHUB/g, games[i].github);
  entry = entry.replace("<a href='http:///'></a>", "-");
  content += entry;
}
document.getElementById("content").innerHTML = content;
```

A continuación, registra un servicio _works_:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/pwa-examples/js13kpwa/sw.js");
}
```

El siguiente bloque de código solicita permiso para recibir notificaciones cuando se hace clic en un botón:

```js
var button = document.getElementById("notifications");
button.addEventListener("click", function (e) {
  Notification.requestPermission().then(function (result) {
    if (result === "granted") {
      randomNotification();
    }
  });
});
```

El último bloque crea notificaciones que muestran un elemento seleccionado al azar de la lista de juegos:

```js
function randomNotification() {
  var randomItem = Math.floor(Math.random() * games.length);
  var notifTitle = games[randomItem].name;
  var notifBody = "Creado por " + games[randomItem].author + ".";
  var notifImg = "data/img/" + games[randomItem].slug + ".jpg";
  var options = {
    body: notifBody,
    icon: notifImg,
  };
  var notif = new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
```

### El servicio worker

El último archivo que veremos rápidamente es el servicio _worker_: `sw.js` — primero importa datos del archivo `games.js`:

```js
self.importScripts("data/games.js");
```

A continuación, crea una lista de todos los archivos que se almacenarán en caché, tanto del intérprete de la aplicación como del contenido:

```js
var cacheName = "js13kPWA-v1";
var appShellFiles = [
  "/pwa-examples/js13kpwa/",
  "/pwa-examples/js13kpwa/index.html",
  "/pwa-examples/js13kpwa/app.js",
  "/pwa-examples/js13kpwa/style.css",
  "/pwa-examples/js13kpwa/fonts/graduate.eot",
  "/pwa-examples/js13kpwa/fonts/graduate.ttf",
  "/pwa-examples/js13kpwa/fonts/graduate.woff",
  "/pwa-examples/js13kpwa/favicon.ico",
  "/pwa-examples/js13kpwa/img/js13kgames.png",
  "/pwa-examples/js13kpwa/img/bg.png",
  "/pwa-examples/js13kpwa/icons/icon-32.png",
  "/pwa-examples/js13kpwa/icons/icon-64.png",
  "/pwa-examples/js13kpwa/icons/icon-96.png",
  "/pwa-examples/js13kpwa/icons/icon-128.png",
  "/pwa-examples/js13kpwa/icons/icon-168.png",
  "/pwa-examples/js13kpwa/icons/icon-192.png",
  "/pwa-examples/js13kpwa/icons/icon-256.png",
  "/pwa-examples/js13kpwa/icons/icon-512.png",
];
var gamesImages = [];
for (var i = 0; i < games.length; i++) {
  gamesImages.push("data/img/" + games[i].slug + ".jpg");
}
var contentToCache = appShellFiles.concat(gamesImages);
```

El siguiente bloque instala el servicio _worker_, que luego almacena en caché todos los archivos contenidos en la lista anterior:

```js
self.addEventListener("install", function (e) {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log(
        "[Servicio Worker] Almacena todo en caché: contenido e intérprete de la aplicación",
      );
      return cache.addAll(contentToCache);
    }),
  );
});
```

Por último, el servicio _worker_ obtiene contenido de la caché si está disponible allí, lo cual proporciona una funcionalidad fuera de línea:

```js
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (r) {
      console.log("[Servicio Worker] Obteniendo recurso: " + e.request.url);
      return (
        r ||
        fetch(e.request).then(function (response) {
          return caches.open(cacheName).then(function (cache) {
            console.log(
              "[Servicio Worker] Almacena el nuevo recurso: " + e.request.url,
            );
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    }),
  );
});
```

### Los datos de JavaScript

Los datos de los juegos están presentes en el directorio _data_ en forma de un objeto JavaScript ([`games.js`](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/data/games.js)):

```js
var games = [
  {
    slug: "perdido-en-el-ciberespacio",
    name: "Perdido en el ciberespacio",
    author: "Zosia y Bartek",
    twitter: "bartaz",
    website: "",
    github: "github.com/bartaz/lost-in-cyberspace",
  },
  {
    slug: "vernissage",
    name: "Vernissage",
    author: "Platane",
    twitter: "platane_",
    website: "github.com/Platane",
    github: "github.com/Platane/js13k-2017",
  },
  // ...
  {
    slug: "emma-3d",
    name: "Emma-3D",
    author: "Prateek Roushan",
    twitter: "",
    website: "",
    github: "github.com/coderprateek/Emma-3D",
  },
];
```

Cada entrada tiene su propia imagen en el directorio `data/img`. Este es nuestro contenido, cargado en la sección de contenido con JavaScript.

## Siguiente

En el próximo artículo veremos con más detalle cómo se almacenan en caché el intérprete de la aplicación y el contenido para su uso sin conexión con la ayuda del servicio _worker_.

{{PreviousMenuNext("Web/Progressive_web_apps/Introduction", "Web/Progressive_web_apps/Offline_Service_workers", "Web/Progressive_web_apps")}}

{{QuickLinksWithSubpages("/es/docs/Web/Progressive_web_apps/")}}
