---
title: Usar Service Workers
slug: Web/API/Service_Worker_API/Using_Service_Workers
---

{{DefaultAPISidebar}}

Este artículo brinda información sobre cómo comenzar con el _service worker_, incluida la arquitectura básica, el registro de un _service worker_, el proceso de instalación y activación de un nuevo _service worker_, la actualización de tu _service worker_, el control de caché y las respuestas personalizadas, todo en el contexto de una aplicación simple, con funcionalidad fuera de línea.

## La premisa del service worker

Un problema primordial del que los usuarios de la web han adolecido durante años es la pérdida de conectividad. La mejor aplicación web del mundo proporcionará una experiencia de usuario terrible si no la puedes descargar. Ha habido varios intentos de crear tecnologías para resolver este problema, y algunos de los problemas se han resuelto. Pero el problema primordial es que todavía no existe un buen mecanismo de control general para el almacenamiento en caché de activos y las solicitudes de red personalizadas.

El intento anterior, _AppCache_, parecía ser una buena idea porque te permitía especificar activos para almacenar en caché con mucha facilidad. Sin embargo, hizo muchas suposiciones sobre lo que estabas tratando de hacer y luego se rompió horriblemente cuando tu aplicación no siguió exactamente esas suposiciones. Lee el documento de Jake Archibald (desafortunadamente mal titulado pero bien escrito) [Application Cache is a Douchebag](https://alistapart.com/article/application-cache-is-a-douchebag/) para obtener más detalles.

> **Nota:** A partir de Firefox 84, se eliminó _AppCache_ ([Error 1619673 en Firefox](https://bugzil.la/1619673)). También se ha [eliminado](https://bugs.chromium.org/p/chromium/issues/detail?id=582750) de Chromium 95 y está obsoleto en Safari.

El _service worker_ finalmente debería solucionar estos problemas. La sintaxis del _service worker_ es más compleja que la de _AppCache_, pero la compensación es que puedes usar JavaScript para controlar su comportamiento implícito en _AppCache_ con un buen grado de fina granularidad, lo que te permite manejar este problema y muchos más. Al usar un _service worker_, puedes configurar fácilmente una aplicación para usar activos almacenados en caché primero, proporcionando así una experiencia predeterminada incluso cuando estás desconectado, antes de obtener más datos de la red (comúnmente conocido como [Primero sin conexión](https://offlinefirst.org/)). Esto ya está disponible con las aplicaciones nativas, que es una de las principales razones por las que las aplicaciones nativas a menudo se eligen en lugar de las aplicaciones web.

## Configuración para jugar con el service worker

En estos días, el _service worker_ está habilitado de forma predeterminada en todos los navegadores modernos. Para ejecutar código con el _service worker_, deberás entregar tu código a través de HTTPS: el _service worker_, por razones de seguridad, está restringido a ejecutarse a través de HTTPS. Por lo tanto, GitHub es un buen lugar para alojar experimentos, ya que admite HTTPS. Para facilitar el desarrollo local, los navegadores también consideran `localhost` como un origen seguro.

## Arquitectura básica

Con el _service worker_, generalmente se observan los siguientes pasos para la configuración básica:

1. La URL del _service worker_ se obtiene y registra a través de {{domxref("serviceWorkerContainer.register()")}}.
2. Si tiene éxito, el _service worker_ se ejecuta en {{domxref("ServiceWorkerGlobalScope") }}; esto es básicamente un tipo especial de contexto de trabajo, que se ejecuta fuera del hilo principal de ejecución del script, sin acceso al DOM.
3. El _service worker_ ahora está listo para procesar eventos.
4. Se intenta la instalación del _worker_ cuando se accede posteriormente a las páginas controladas por el _service worker_. Un evento de instalación siempre es el primero que se envía a un _service worker_ (esto se puede usar para iniciar el proceso de completar una IndexedDB «base de datos indexada» y almacenar en caché los activos del sitio). Este es realmente el mismo tipo de procedimiento que instalar una aplicación nativa o Firefox OS: hace que todo esté disponible para usar sin conexión.
5. Cuando se completa el controlador `oninstall`, se considera que el _service worker_ está instalado.
6. Lo siguiente es la activación. Cuando se instala el _service worker_, recibe un evento de activación. El uso principal de `onactivate` es para la limpieza de los recursos utilizados en versiones anteriores de un script del _service worker_.
7. El _service worker_ ahora controlará las páginas, pero solo aquellas que se abran después de que `register()` tenga éxito. En otras palabras, los documentos se deberán volver a cargar para controlarlos realmente, porque un documento comienza con o sin un _service worker_ y lo mantiene durante toda su vida.

![](sw-lifecycle.png)

El siguiente gráfico muestra un resumen de los eventos de _service worker_ disponibles:

![install, activate, message, fetch, sync, push](sw-events.png)

## Demostración del service worker

Para demostrar los conceptos básicos de registro e instalación de un _service worker_, hemos creado una demostración simple llamada [_service worker_ simple](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker), que es una simple galería de imágenes de Star Wars Lego. Utiliza una función impulsada por promesas para leer datos de imagen de un objeto JSON y cargar las imágenes usando Ajax, antes de mostrar las imágenes en una línea hacia abajo en la página. Hemos mantenido las cosas estáticas y simples por ahora. También registra, instala y activa un _service worker_, y cuando los navegadores admiten más especificaciones, almacenará en caché todos los archivos necesarios para que funcione sin conexión.

![Las palabras Star Wars seguidas de una imagen de una versión Lego del personaje Darth Vader](demo-screenshot.png)

Puedes ver el [código fuente en GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) y el [Sencillo _service worker_ ejecutándose en vivo](https://bncb2v.csb.app/).

### Registra a tu worker

El primer bloque de código en el archivo JavaScript de nuestra aplicación, `app.js`, es el siguiente. Este es nuestro punto de entrada en el uso del _service worker_.

```js
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Instalando el Service worker");
      } else if (registration.waiting) {
        console.log("Service worker instalado");
      } else if (registration.active) {
        console.log("Service worker activo");
      }
    } catch (error) {
      console.error(`Falló el registro con el ${error}`);
    }
  }
};

// …

registerServiceWorker();
```

1. El bloque if realiza una prueba de detección de características para asegurarse de que el _service worker_ sea compatible antes de intentar registrar uno.
2. A continuación, usamos la función {{domxref("ServiceWorkerContainer.register()") }} para registrar el _service worker_ para este sitio, que solo es un archivo JavaScript que reside dentro de nuestra aplicación (ten en cuenta que esta es la URL del archivo relativa al origen , no el archivo JS que hace referencia a él).
3. El parámetro `scope` es opcional y se puede usar para especificar el subconjunto de tu contenido que deseas controle el _service worker_. En este caso, hemos especificado `'/'`, lo cual significa todo el contenido bajo el origen de la aplicación. Si lo omites, tendrá este valor predeterminado de todos modos, pero lo especificamos aquí con fines ilustrativos.

Esto registra un _service worker_, que se ejecuta en un contexto de trabajador y, por lo tanto, no tiene acceso al DOM. Luego ejecuta el código en el _service worker_ fuera de tus páginas normales para controlar su carga.

Un solo _service worker_ puede controlar muchas páginas. Cada vez que se carga una página dentro de su alcance, el _service worker_ se instala en esa página y opera en ella. Por lo tanto, ten en cuenta que debes tener cuidado con las variables globales en el script del _service worker_: cada página no tiene su propio trabajador único.

> **Nota:** Tu _service worker_ funciona como un servidor proxy, lo que te permite modificar solicitudes y respuestas, reemplazarlas con elementos de su propio caché y más.

> **Nota:** Una gran cosa acerca del _service worker_ es que si usas la detección de funciones como se muestra arriba, los navegadores que no son compatibles con los _service workers_ pueden usar tu aplicación en línea de la manera normal esperada. Además, si usas _AppCache_ y <abbr title="ServiceWorker">SW</abbr> en una página, los navegadores que no admiten <abbr title="ServiceWorker">SW</abbr> pero sí _AppCache_ lo usarán, y los navegadores que admiten ambos ignorarán _AppCache_ y dejarán que <abbr title="ServiceWorker">SW</abbr> tome el control.

#### ¿Por qué mi service worker no se registra?

Esto se podría deber a las siguientes razones:

1. No estás ejecutando tu aplicación a través de HTTPS.
2. La ruta a tu archivo del _service worker_ no está escrita correctamente — se debe escribir en relación con el origen, no con el directorio raíz de tu aplicación. En nuestro ejemplo, el trabajador está en `https://bncb2v.csb.app/sw.js` y la raíz de la aplicación es `https://bncb2v.csb.app/`. Pero la ruta se debe escribir como `/sw.js`.
3. Tampoco está permitido apuntar a un _service worker_ de un origen diferente al de tu aplicación.

![](important-notes.png)

También ten en cuenta:

- El _service worker_ solo capturará las solicitudes de los clientes bajo el alcance del _service worker_.
- El alcance máximo para un _service worker_ es la ubicación del trabajador.
- Si tu _service worker_ está activo en un cliente al que se atiende con el encabezado `Service-Worker-Allowed`, puedes especificar una lista de alcances máximos para ese trabajador.
- En Firefox, las APIs de _Service Worker_ están ocultas y no se pueden usar cuando el usuario está en [modo de navegación privada](https://support.mozilla.org/es/kb/private-browsing-use-firefox-without-history).

### Instalar y activar: llena tu caché

Después de que tu _service worker_ esté registrado, el navegador intentará instalar y luego activar el _service worker_ para tu página/sitio.

El evento `install` se activa cuando una instalación se completa con éxito. El evento `install` generalmente se usa para llenar las capacidades de almacenamiento en caché sin conexión de tu navegador con los activos que necesita para ejecutar tu aplicación sin conexión. Para hacer esto, usamos la API de almacenamiento de _Service Worker_: {{domxref("cache")}} — un objeto global en _Service Worker_ que nos permite almacenar los activos entregados por las respuestas y con clave de sus solicitudes. Esta API funciona de manera similar a la memoria caché estándar del navegador, pero es específica para tu dominio. Persiste hasta que le dices que no lo haga — nuevamente, tienes el control total.

Así es como nuestro _service worker_ maneja el evento `install`:

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/style.css",
      "/app.js",
      "/image-list.js",
      "/star-wars-logo.jpg",
      "/gallery/bountyHunters.jpg",
      "/gallery/myLittleVader.jpg",
      "/gallery/snowTroopers.jpg",
    ]),
  );
});
```

1. Aquí agregamos un detector de eventos `install` al _service worker_ (por lo tanto, `self`), y luego encadenamos un método {{domxref("ExtendableEvent.waitUntil()") }} al evento; esto garantiza que el _service worker_ no se instale hasta que el código dentro de `waitUntil()` haya ocurrido con éxito.
2. Dentro de `addResourcesToCache` usamos el método [`caches.open()`](/es/docs/Web/API/CacheStorage/open) para crear un nuevo caché llamado `v1`, que será la versión 1 de nuestro caché de recursos del sitio. Luego llamamos a una función que llama a `addAll()` en el caché creado, que para su parámetro toma un arreglo de URLs relativas al origen de todos los recursos que deseas almacenar en caché.
3. Si se rechaza la promesa, la instalación falla y el trabajador no hará nada. Esto está bien, ya que puedes corregir tu código y luego intentarlo de nuevo la próxima vez que se registre.
4. Después de una instalación exitosa, el _service worker_ se activa. Esto no tiene mucho de un uso distinto la primera vez que se instala/activa tu _service worker_, pero significa más cuando se actualiza el _service worker_ (consulta la sección [Actualizar tu _service worker_](#actualizar_tu_service_worker) más adelante).

> **Nota:** [localStorage](/es/docs/Web/API/Web_Storage_API) funciona de manera similar a la memoria caché del _service worker_, pero es síncrono, por lo que no está permitido en el _service worker_.

> **Nota:** [IndexedDB](/es/docs/Web/API/IndexedDB_API) se puede usar dentro de un _service worker_ para el almacenamiento de datos si lo requieres.

### Respuestas personalizadas a solicitudes

Ahora que tienes los activos de tu sitio almacenados en caché, debes decir al _service worker_ que haga algo con el contenido almacenado en caché. Esto se hace fácilmente con el evento `fetch`.

![](sw-fetch.png)

Un evento `fetch` se activa cada vez que se recupera cualquier recurso controlado por un _service worker_, lo que incluye los documentos dentro del alcance especificado y cualquier recurso al que se haga referencia en esos documentos (por ejemplo, si `index.html` hace una solicitud de origen cruzado para incrustar una imagen, que todavía pasa por su _service worker_).

Puedes adjuntar un detector de eventos `fetch` al _service worker_, luego llamar al método `respondWith()` en el evento para capturar nuestras respuestas HTTP y actualizarlas con tu propia magia.

```js
self.addEventListener("fetch", (event) => {
  event
    .respondWith
    // la magia va aquí
    ();
});
```

Podríamos empezar respondiendo con el recurso cuya URL coincida con la de la solicitud de red, en cada caso:

```js
self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request));
});
```

`caches.match(event.request)` nos permite hacer coincidir cada recurso solicitado de la red con el recurso equivalente disponible en caché, si hay uno coincidente disponible. La coincidencia se realiza a través de URL y varios encabezados, al igual que con las solicitudes HTTP normales.

Veamos algunas otras opciones que tenemos al definir nuestra magia (consulta nuestra [documentación de la API Fetch](/es/docs/Web/API/Fetch_API) para obtener más información sobre los objetos {{domxref("Request")}} y {{domxref("Response")}}.)

1. El constructor {{domxref("Response.Response","Response()")}} te permite crear una respuesta personalizada. En este caso, solo estamos devolviendo una cadena de texto simple:

   ```js
   new Response("¡Hola desde tu amigable vecindario del service worker!");
   ```

2. Esta `Response` más compleja a continuación muestra que, opcionalmente, puedes pasar un conjunto de encabezados con tu respuesta, emulando los encabezados de respuesta HTTP estándar. Aquí solo le estamos diciendo al navegador cuál es el tipo de contenido de nuestra respuesta sintética:

   ```js
   new Response(
     "<p>¡Hola desde tu amigable vecindario del service worker!</p>",
     {
       headers: { "Content-Type": "text/html" },
     },
   );
   ```

3. Si no se encontró una coincidencia en caché, le puedes decir al navegador que {{domxref("fetch()")}} la solicitud de red predeterminada para ese recurso, para obtener el nuevo recurso de la red si está disponible:

   ```js
   fetch(event.request);
   ```

4. Si no se encontró una coincidencia en caché y la red no está disponible, puedes hacer coincidir la solicitud con algún tipo de página de respaldo predeterminada como respuesta usando {{domxref("CacheStorage.match","match() ")}}, como esta:

   ```js
   caches.match("./fallback.html");
   ```

5. Puedes recuperar mucha información sobre cada solicitud llamando a los parámetros del objeto {{domxref("Request")}} devuelto por {{domxref("FetchEvent")}}:

   ```js
   event.request.url;
   event.request.method;
   event.request.headers;
   event.request.body;
   ```

## Recuperar solicitudes fallidas

Entonces `caches.match(event.request)` es excelente cuando hay una coincidencia en caché del _service worker_, pero ¿qué pasa con los casos en los que no hay una coincidencia? Si no proporcionamos ningún tipo de manejo de fallas, nuestra promesa se resolvería con `undefined` y no tendríamos nada devuelto.

Afortunadamente, la estructura basada en promesas del _service worker_ hace que sea trivial brindar más opciones hacia el éxito. Podríamos hacer esto:

```js
const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  return fetch(request);
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
```

Si los recursos no están en la memoria caché, se solicitan desde la red.

Si fuéramos realmente inteligentes, no solo solicitaríamos el recurso de la red; ¡también lo guardaríamos en caché para que las solicitudes posteriores de ese recurso también se puedan recuperar sin conexión! Esto significaría que si se agregaran imágenes adicionales a la galería de Star Wars, nuestra aplicación podría capturarlas automáticamente y almacenarlas en caché. Lo siguiente haría el truco:

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  putInCache(request, responseFromNetwork.clone());
  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
```

Si la URL de la solicitud no está disponible en la memoria caché, solicitamos el recurso de la solicitud de red con `await fetch(request)`. Después de eso, colocamos en caché un clon de la respuesta. La función `putInCache` usa `caches.open('v1')` y `cache.put()` para agregar el recurso a la caché. La respuesta original se devuelve al navegador para que se proporcione a la página que la llamó.

La clonación de la respuesta es necesaria porque los flujos de solicitud y respuesta solo se pueden leer una vez. Para devolver la respuesta al navegador y ponerla en caché la tenemos que clonar. Entonces, el original se devuelve al navegador y el clon se envía a caché. Cada uno se lee una vez.

Lo que puede parecer un poco extraño es que no se espera la promesa devuelta por `putInCache`. Pero la razón es que no queremos esperar hasta que el clon de respuesta se haya agregado a la caché antes de devolver una respuesta.

El único problema que tenemos ahora es que si la solicitud no coincide con nada en caché y la red no está disponible, nuestra solicitud seguirá fallando. Proporcionemos un respaldo predeterminado para que, pase lo que pase, el usuario al menos obtenga algo:

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // Primero intenta obtener el recurso desde caché
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // A continuación, intenta obtener el recurso desde la red
  try {
    const responseFromNetwork = await fetch(request);
    // la respuesta solo se puede usar una vez
    // necesitamos guardar el clon para poner una copia en caché
    // y servir el segundo
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // cuando incluso la respuesta alternativa no está disponible,
    // no hay nada que podamos hacer, pero siempre debemos
    // devolver un objeto Response
    return new Response("Ocurrió un error de red", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      fallbackUrl: "/gallery/myLittleVader.jpg",
    }),
  );
});
```

Hemos optado por esta imagen alternativa porque las únicas actualizaciones que probablemente fallarán son las imágenes nuevas, ya que todo lo demás depende de la instalación en el detector de eventos `install` que vimos anteriormente.

## Precarga de navegación del service worker

Si está habilitada, la función de [precarga de navegación](/es/docs/Web/API/NavigationPreloadManager) comienza a descargar recursos tan pronto como se realiza la solicitud de recuperación y en paralelo con el inicio del _service worker_.
Esto garantiza que la descarga comience de inmediato al navegar a una página, en lugar de tener que esperar hasta que se inicie el _service worker_.
Ese retraso ocurre en muy raras ocasiones, pero es inevitable cuando ocurre y puede ser significativo.

Primero, la función debe estar habilitada durante la activación del _service worker_, usando {{domxref("NavigationPreloadManager.enable()", "registration.navigationPreload.enable()")}}:

```js
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // ¡Habilitar precargas de navegación!
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener("activate", (event) => {
  event.waitUntil(enableNavigationPreload());
});
```

Luego usa {{domxref("FetchEvent.preloadResponse", "event.preloadResponse")}} para esperar a que el recurso precargado se termine de descargar en el controlador de eventos `fetch`.

Continuando con el ejemplo de las secciones anteriores, insertamos el código para esperar el recurso precargado después de la verificación de la caché y antes de recuperarlo de la red si eso no tiene éxito.

El nuevo proceso es:

1. Comprobar la caché
2. Esperar en `event.preloadResponse`, que se pasa como `preloadResponsePromise` a la función `cacheFirst`.
   Guardar en caché el resultado si regresa.
3. Si ninguno de estos está definido, vamos a la red.

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // Primero intenta obtener el recurso desde caché
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // A continuación, intenta usar (y almacenar en caché) la respuesta precargada, si está allí
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info("using preload response", preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  // A continuación, intenta obtener el recurso desde la red
  try {
    const responseFromNetwork = await fetch(request);
    // la respuesta solo se puede usar una vez
    // necesitamos guardar el clon para poner una copia en caché
    // y servir el segundo
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // cuando incluso la respuesta alternativa no está disponible,
    // no hay nada que podamos hacer, pero siempre debemos
    // devolver un objeto Response
    return new Response("Ocurrió un error de red", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

// Habilita la precarga de navegación
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // ¡Habilitar precargas de navegación!
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener("activate", (event) => {
  event.waitUntil(enableNavigationPreload());
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/style.css",
      "/app.js",
      "/image-list.js",
      "/star-wars-logo.jpg",
      "/gallery/bountyHunters.jpg",
      "/gallery/myLittleVader.jpg",
      "/gallery/snowTroopers.jpg",
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      preloadResponsePromise: event.preloadResponse,
      fallbackUrl: "/gallery/myLittleVader.jpg",
    }),
  );
});
```

Ten en cuenta que en este ejemplo descargamos y almacenamos en caché los mismos datos para el recurso, ya sea que se descargue "normalmente" o se precargue.
En su lugar, puedes optar por descargar y almacenar en caché un recurso diferente en la precarga.
Para obtener más información, consulta [NavigationPreloadManager > Respuestas personalizadas](/es/docs/Web/API/NavigationPreloadManager#custom_responses).

## Actualizar tu service worker

Si tu _service worker_ se instaló anteriormente, pero luego está disponible una nueva versión del trabajador al actualizar o cargar la página, la nueva versión se instala en segundo plano, pero aún no está activada. Solo se activa cuando ya no hay páginas cargadas que todavía estén usando el antiguo _service worker_. Tan pronto como no queden más páginas cargadas, se activa el nuevo _service worker_.

Querrás actualizar tu escucha de eventos `install` en el nuevo _service worker_ a algo como esto (observa el nuevo número de versión):

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v2");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/style.css",
      "/app.js",
      "/image-list.js",

      // ...

      // incluir otros nuevos recursos para la nueva versión…
    ]),
  );
});
```

Mientras esto sucede, la versión anterior sigue siendo responsable de las recuperaciones. La nueva versión se está instalando en segundo plano. Estamos llamando al nuevo caché `v2`, por lo que el caché anterior `v1` no se ve afectado.

Cuando ninguna página está usando la versión actual, el nuevo trabajador se activa y se vuelve responsable de las recuperaciones.

### Eliminar cachés antiguos

También obtienes un evento `activate`. Esto generalmente se usa para hacer cosas que habrían roto la versión anterior mientras aún se estaba ejecutando, por ejemplo, deshacerse de los cachés antiguos. Esto también es útil para eliminar datos que ya no se necesitan para evitar llenar demasiado espacio en disco: cada navegador tiene un límite estricto en la cantidad de almacenamiento en caché que puede usar un determinado _service worker_. El navegador hace todo lo posible para administrar el espacio en disco, pero puede eliminar el almacenamiento en caché de un origen. El navegador, generalmente, eliminará todos los datos de un origen o ninguno de los datos de un origen.

Las promesas pasadas a `waitUntil()` bloquearán otros eventos hasta que se completen, por lo que puedes estar seguro de que tu operación de limpieza se habrá completado cuando obtengas tu primer evento `fetch` en el nuevo _service worker_.

```js
const deleteCache = async (key) => {
  await caches.delete(key);
};

const deleteOldCaches = async () => {
  const cacheKeepList = ["v2"];
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
};

self.addEventListener("activate", (event) => {
  event.waitUntil(deleteOldCaches());
});
```

## Herramientas de desarrollo

Chrome tiene `chrome://inspect/#service-workers`, que muestra la actividad actual de los _service workers_ y el almacenamiento en un dispositivo, y `chrome://serviceworker-internals`, que muestra más detalles y te permite iniciar/detener/depurar el proceso del trabajador. En el futuro, tendrán modos de limitación/desconexión para simular conexiones defectuosas o inexistentes, lo que será algo realmente bueno.

Firefox también ha comenzado a implementar algunas herramientas útiles relacionadas con los _service workers_:

- Puedes navegar a [`about:debugging`](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) para ver qué <abbr title="Service Workers">SW</abbr>s están registrados y actualizarlos/eliminarlos.
- Al realizar pruebas, puedes sortear la restricción de HTTPS marcando la opción "Habilitar _service worker_ a través de HTTP (cuando la caja de herramientas está abierta)" en la [Configuración de herramientas de desarrollo de Firefox](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html).
- El botón "Olvidar", disponible en las opciones de personalización de Firefox, se puede usar para borrar los _service workers_ y sus cachés ([Error 1252998 en Firefox](https://bugzil.la/1252998)).

> **Nota:** Puedes servir tu aplicación desde `http://localhost` (por ejemplo, usando `me@localhost:/my/app$ python -m SimpleHTTPServer`) para el desarrollo local. Ve [Consideraciones de seguridad](https://www.w3.org/TR/service-workers/#security-considerations)

## Véase también

- [El manual del _service worker_](https://github.com/mdn/serviceworker-cookbook)
- [¿Está listo ServiceWorker?](https://jakearchibald.github.io/isserviceworkerready/)
- Descarga la [hoja de trucos de _service worker_ 101](sw101.png).
- [Promesas](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Usar _web workers_](/es/docs/Web/API/Web_Workers_API/Using_web_workers)
