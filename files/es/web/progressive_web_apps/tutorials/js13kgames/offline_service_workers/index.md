---
title: Hacer que las PWAs trabajen desconectadas con servicio workers
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
---

{{PreviousMenuNext("Web/Progressive_web_apps/App_structure", "Web/Progressive_web_apps/Installable_PWAs", "Web/Progressive_web_apps")}}

Ahora que hemos visto cómo se ve la estructura de js13kPWA y hemos visto el intérprete básico en funcionamiento, veamos cómo se implementan las capacidades sin conexión con el Servicio _Worker_. En este artículo, analizamos cómo se usa en nuestro [ejemplo de js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) ([ve el código fuente también](<https: //github.com/mdn/pwa-examples/tree/master/js13kpwa>)). Examinamos cómo agregar funcionalidad fuera de línea.

## El servicio workers explicado

El servicio _workers_ son un delegado virtual entre el navegador y la red. Finalmente, solucionan problemas con los que los desarrolladores de aplicaciones para el usuario han luchado durante años, en particular, cómo almacenar correctamente en caché los activos de un sitio web y ponerlos a disposición cuando el dispositivo del usuario está desconectado.

Se ejecutan en un hilo separado del código JavaScript principal de nuestra página y no tienen acceso a la estructura DOM. Esto introduce un enfoque diferente al de la programación web tradicional — la API no bloquea y puede enviar y recibir comunicación entre diferentes contextos. Puede darle a un servicio _worker_ algo en lo que trabajar y recibir el resultado cuando esté listo utilizando un enfoque basado en una {{JSxRef("Objetos_globales/Promise", "promesa")}}.

Pueden hacer mucho más que "solo" ofrecer capacidades sin conexión, incluido el manejo de notificaciones, la realización de cálculos pesados en un hilo separado, etc. El servicio _workers_ es bastante poderoso, ya que pueden tomar el control de las solicitudes de red, modificarlas, entregar respuestas personalizadas recuperadas de la caché o sintetizar respuestas por completo.

### Seguridad

Debido a que son tan poderosos, los Servicios _Workers_ solo se pueden ejecutar en contextos seguros (es decir, HTTPS). Si deseas experimentar primero antes de enviar tu código a producción, siempre puedes probar en un anfitrión local o configurar las páginas de GitHub — ambas admiten HTTPS.

## Desconectado primero

El patrón "desconectado primero" o "primero caché" es la estrategia más popular para entregar contenido al usuario. Si un recurso está almacenado en caché y disponible sin conexión, devuélvelo primero antes de intentar descargarlo del servidor. Si aún no está en la caché, descárgalo y almacénalo para uso futuro.

## "Progresiva" en PWA

Cuando se implementa correctamente como una mejora progresiva, el servicio _workers_ puede beneficiar a los usuarios que tienen navegadores modernos que admiten la API al brindar soporte fuera de línea, pero no romperán nada para aquellos que usan navegadores heredados.

## El servicio workers en la aplicación `js13kPWA`

Suficiente teoría, ¡veamos algo de código real!

### Registrar el servicio worker

Comenzaremos mirando el código que registra un nuevo Servicio _Worker_, en el archivo `app.js`:

**Nota**: Usamos la sintaxis de las **funciones flecha** de [ES6](http://es6-features.org/) en la implementación del servicio _worker_

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
}
```

Si la API del servicio _worker_ es compatible con el navegador, se registra en el sitio mediante el método {{DOMxRef("ServiceWorkerContainer.register()")}}. Su contenido reside en el archivo `sw.js` y se puede ejecutar después de que el registro sea exitoso. Es la única parte del código de servicio _worker_ que se encuentra dentro del archivo `app.js`; todo lo demás que sea específico de servicio _worker_ se escribe en el archivo `sw.js`.

### Ciclo de vida de un servicio worker

Cuando se completa el registro, el archivo `sw.js` se descarga automáticamente, luego se instala y finalmente se activa.

#### Instalación

La API nos permite agregar escuchas de eventos para los eventos clave que nos interesan; el primero es el evento `install`:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});
```

En el escucha de `install`, podemos iniciar la caché y agregarle archivos para su uso sin conexión. Nuestra aplicación _js13kPWA_ hace exactamente eso.

Primero, se crea una variable para almacenar el nombre de la caché y los archivos del intérprete de la aplicación se enumeran en un arreglo.

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
```

A continuación, los enlaces a las imágenes que se cargarán junto con el contenido del archivo `data/games.js` se generan en el segundo arreglo. Después de eso, ambos arreglos se fusionan usando la función {{JSxRef("Array.prototype.concat()")}}.

```js
var gamesImages = [];
for (var i = 0; i < games.length; i++) {
  gamesImages.push("data/img/" + games[i].slug + ".jpg");
}
var contentToCache = appShellFiles.concat(gamesImages);
```

Entonces podemos manejar el evento `install` en sí mismo:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log(
        "[Servicio Worker] Almacena todo en caché: contenido e intérprete de la aplicación",
      );
      return cache.addAll(contentToCache);
    }),
  );
});
```

Aquí hay dos cosas que necesitan una explicación: qué hace {{DOMxRef("ExtendableEvent.waitUntil")}} y qué es el objeto {{DOMxRef("Caches", "caches")}}.

El servicio _worker_ no se instala hasta que se ejecuta el código dentro de `waitUntil`. Este devuelve una promesa — este enfoque es necesario porque la instalación puede llevar algún tiempo, por lo que tenemos que esperar a que finalice.

`caches` es un objeto {{DOMxRef("CacheStorage")}} especial disponible en el ámbito del servicio _worker_ dado para permitir guardar datos, guardar en el [almacenamiento web](/es/docs/Web/API/Web_Storage_API) no funcionará porque el almacenamiento web es síncrono. Con el servicio _workers_, usamos la API de `Cache` en su lugar.

Aquí, abrimos una caché con un nombre dado, luego agregamos a la caché todos los archivos que nuestra aplicación usa, para que estén disponibles la próxima vez que se cargue (identificado por la URL de la solicitud).

#### Activación

También hay un evento `activate`, que se usa de la misma manera que `install`. Este evento generalmente se usa para eliminar cualquier archivo que ya no sea necesario y limpiar después la aplicación en general. No es necesario que hagamos eso en nuestra aplicación, así que lo omitiremos.

### Responder a las recuperaciones

También tenemos un evento `fetch` a nuestra disposición, que se activa cada vez que se activa una solicitud HTTP desde nuestra aplicación. Esto es muy útil, ya que nos permite interceptar solicitudes y reaccionar con respuestas personalizadas. Aquí hay un sencillo ejemplo de uso:

```js
self.addEventListener("fetch", (e) => {
  console.log("[Servicio Worker] Recurso obtenido " + e.request.url);
});
```

La respuesta puede ser cualquier cosa que queramos: el archivo solicitado, su copia en caché o un fragmento de código JavaScript que hará algo específico; las posibilidades son infinitas.

En nuestra aplicación de ejemplo, servimos contenido de la caché en lugar de la red siempre que el recurso realmente esté en la caché. Hacemos esto tanto si la aplicación está en línea como si está fuera de línea. Si el archivo no está en la caché, la aplicación primero lo agrega allí antes de servirlo:

```js
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
      console.log("[Servicio Worker] Obteniendo recurso: " + e.request.url);
      return (
        r ||
        fetch(e.request).then((response) => {
          return caches.open(cacheName).then((cache) => {
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

Aquí, respondemos al evento `fetch` con una función que intenta encontrar el recurso en la caché y devolver la respuesta si está allí. Si no es así, usamos otra solicitud de recuperación para obtenerla de la red, luego almacenamos la respuesta en la caché para que esté disponible allí la próxima vez que se solicite.

El método {{DOMxRef("FetchEvent.respondWith")}} toma el control; esta es la parte que funciona como un servidor delegado entre la aplicación y la red. Esto nos permite responder a cada solicitud con cualquier cosa que queramos: preparada por el servicio _worker_, tomada de la caché o modificada si es necesario.

¡Eso es! Nuestra aplicación almacena en caché sus recursos al instalarlos y los sirve con la recuperación de la caché, por lo tanto, funciona incluso si el usuario está desconectado. También almacena en caché contenido nuevo cada vez que se agrega.

## Actualizaciones

Todavía hay un punto que cubrir: ¿cómo se actualiza un servicio _worker_ cuando hay disponible una nueva versión de la aplicación que contiene nuevos activos? El número de versión en el nombre de la caché es clave para esto:

```js
var cacheName = "js13kPWA-v1";
```

Cuando esto se actualice a v2, podemos agregar todos nuestros archivos (incluidos nuestros archivos nuevos) a una nueva caché:

```js
contentToCache.push("/pwa-examples/js13kpwa/icons/icon-32.png");

// ...

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("js13kPWA-v2").then((cache) => {
      return cache.addAll(contentToCache);
    }),
  );
});
```

Se instala un nuevo servicio _worker_ en segundo plano y el anterior (v1) funciona correctamente hasta que no hay páginas que lo utilicen; el nuevo servicio _worker_ se activa y se hace cargo de la administración de la página desde el anterior.

## Limpiar la caché

¿Recuerdas el evento `active` que omitimos?, se puede usar para borrar la antigua caché que ya no necesitamos:

```js
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});
```

Esto asegura que solo tengamos los archivos que necesitamos en la caché, por lo que no dejamos basura; el [espacio de caché disponible en el navegador es limitado](/es/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria), por lo que es una buena idea limpiarlo nosotros mismos después.

## Otros casos de uso

Servir archivos desde la caché no es la única característica que ofrece el servicio _worker_. Si tienes que hacer cálculos pesados, los puedes descargar del hilo principal y hacerlos en el _worker_, y recibir el resultado tan pronto como estén disponibles. En cuanto al rendimiento, puedes obtener recursos que no se necesitan en este momento, pero que podrían serlo en un futuro cercano, por lo que la aplicación será más rápida cuando realmente los necesite.

## Resumen

En este artículo, analizamos cómo puedes hacer que tu PWA funcione sin conexión con el servicio _workers_. Asegúrate de consultar nuestra documentación adicional si deseas obtener más información sobre los conceptos detrás de la [API de Service Worker](/es/docs/Web/API/Service_Worker_API) y cómo usarla con más detalle.

El servicio _workers_ también se utilizan cuando se trata de [notificaciones push](/es/docs/Web/API/Push_API); esto se explicará en un artículo posterior.

{{PreviousMenuNext("Web/Progressive_web_apps/App_structure", "Web/Progressive_web_apps/Installable_PWAs", "Web/Progressive_web_apps")}}

{{QuickLinksWithSubpages("/es/docs/Web/Progressive_web_apps/")}}
