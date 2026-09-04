---
title: Uso de Service Workers
slug: Web/API/Service_Worker_API/Using_Service_Workers
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{DefaultAPISidebar("Service Workers API")}}

Este artículo proporciona información sobre cómo comenzar con los service workers, incluyendo la arquitectura básica, el registro de un service worker, el proceso de instalación y activación de un nuevo service worker, la actualización del service worker, el control de caché y las respuestas personalizadas, todo en el contexto de una aplicación con funcionalidad sin conexión.

## La premisa de los service workers

Un problema predominante que los usuarios web han sufrido durante años es la pérdida de conectividad. La mejor aplicación web del mundo proporcionará una experiencia de usuario terrible si no se puede descargar. Ha habido varios intentos de crear tecnologías para resolver este problema, y algunos de los problemas se han resuelto. Pero el problema predominante es que no existía un buen mecanismo de control general para el almacenamiento en caché de recursos y las solicitudes de red personalizadas.

Los service workers solucionan estos problemas. Usando un service worker se puede configurar una aplicación para usar recursos almacenados en caché primero, proporcionando así una experiencia predeterminada incluso sin conexión, antes de obtener más datos de la red (comúnmente conocido como "offline first"). Esto ya está disponible con las aplicaciones nativas, que es una de las principales razones por las que las aplicaciones nativas se eligen a menudo en lugar de las aplicaciones web.

Un service worker funciona como un servidor proxy, permitiendo modificar las solicitudes y respuestas reemplazándolas con elementos de su propia caché.

## Configuración para trabajar con service workers

Los service workers están habilitados de forma predeterminada en todos los navegadores modernos. Para ejecutar código que use service workers, se necesita servir el código a través de HTTPS, ya que los service workers están restringidos a ejecutarse sobre HTTPS por razones de seguridad. Es necesario un servidor que soporte HTTPS. Para alojar experimentos, se puede usar un servicio como GitHub, Netlify, Vercel, etc. Para facilitar el desarrollo local, los navegadores también consideran `localhost` como un origen seguro.

## Arquitectura básica

Con los service workers, generalmente se observan los siguientes pasos para la configuración básica:

1. Se obtiene el código del service worker y se registra usando [`serviceWorkerContainer.register()`](/es/docs/Web/API/ServiceWorkerContainer/register). Si tiene éxito, el service worker se ejecuta en un [`ServiceWorkerGlobalScope`](/es/docs/Web/API/ServiceWorkerGlobalScope); esto es básicamente un tipo especial de contexto worker, que se ejecuta fuera del hilo principal de ejecución del script, sin acceso al DOM. El service worker ahora está listo para procesar eventos.
2. Se lleva a cabo la instalación. Un evento `install` siempre es el primero enviado a un service worker (esto se puede usar para iniciar el proceso de llenar un IndexedDB y almacenar en caché los recursos del sitio). Durante este paso, la aplicación se prepara para tener todo disponible para uso sin conexión.
3. Cuando el controlador de `install` se completa, el service worker se considera instalado. En este punto, una versión anterior del service worker puede estar activa y controlando páginas abiertas. Como no se desea tener dos versiones diferentes del mismo service worker ejecutándose al mismo tiempo, la nueva versión aún no está activa.
4. Una vez que todas las páginas controladas por la versión anterior del service worker se han cerrado, es seguro retirar la versión anterior, y el service worker recién instalado recibe un evento `activate`. El uso principal de `activate` es limpiar los recursos utilizados en versiones anteriores del service worker. El nuevo service worker puede llamar a [`skipWaiting()`](/es/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) para solicitar ser activado inmediatamente sin esperar a que se cierren las páginas abiertas. El nuevo service worker recibirá entonces `activate` inmediatamente y tomará el control de cualquier página abierta.
5. Después de la activación, el service worker controlará las páginas, pero solo aquellas que se abrieron después de que `register()` tenga éxito. En otras palabras, los documentos tendrán que recargarse para ser controlados realmente, porque un documento comienza su vida con o sin un service worker y lo mantiene durante toda su vida. Para anular este comportamiento predeterminado y adoptar las páginas abiertas, un service worker puede llamar a [`clients.claim()`](/es/docs/Web/API/Clients/claim).
6. Cada vez que se obtiene una nueva versión de un service worker, este ciclo se repite y los restos de la versión anterior se limpian durante la activación de la nueva versión.

![diagrama de ciclo de vida](sw-lifecycle.svg)

Este es un resumen de los eventos de service worker disponibles:

- [`install`](/es/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [`activate`](/es/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
- [`message`](/es/docs/Web/API/ServiceWorkerGlobalScope/message_event)
- Eventos funcionales
  - [`fetch`](/es/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
  - [`sync`](/es/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
  - [`push`](/es/docs/Web/API/ServiceWorkerGlobalScope/push_event)

## Demostración

Para demostrar los conceptos básicos de registro e instalación de un service worker, se ha creado una demostración simple llamada [simple service worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker), que es una galería de imágenes de Star Wars Lego. Utiliza una función basada en promesas para leer datos de imagen de un objeto JSON y cargar las imágenes usando [`fetch()`](/es/docs/Web/API/Fetch_API/Using_Fetch), antes de mostrar las imágenes en línea en la página. Se ha mantenido estático por ahora. También registra, instala y activa un service worker.

![Las palabras Star Wars seguidas de una imagen de una versión Lego del personaje Darth Vader](demo-screenshot.png)

Se puede ver el [código fuente en GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) y el [simple service worker ejecutándose en vivo](https://bncb2v.csb.app/).

### Registrar el worker

El primer bloque de código en el archivo JavaScript de la aplicación, `app.js`, es el siguiente. Este es el punto de entrada para usar service workers.

```js
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker instalándose");
      } else if (registration.waiting) {
        console.log("Service worker instalado");
      } else if (registration.active) {
        console.log("Service worker activo");
      }
    } catch (error) {
      console.error(`El registro falló con ${error}`);
    }
  }
};

// …

registerServiceWorker();
```

1. El bloque `if` realiza una prueba de detección de características para asegurarse de que los service workers sean compatibles antes de intentar registrar uno.
2. A continuación, se usa la función [`ServiceWorkerContainer.register()`](/es/docs/Web/API/ServiceWorkerContainer/register) para registrar el service worker para este sitio. El código del service worker es un archivo JavaScript que reside dentro de la aplicación (nótese que esta es la URL del archivo relativa al origen, no al archivo JS que lo referencia).
3. El parámetro `scope` es opcional y se puede usar para especificar el subconjunto del contenido que se desea que el service worker controle. En este caso, se ha especificado `'/'`, lo que significa todo el contenido bajo el origen de la aplicación. Si se omite, tomará este valor predeterminado de todos modos, pero se ha especificado aquí con fines ilustrativos.

Esto registra un service worker, que se ejecuta en un contexto worker y, por lo tanto, no tiene acceso al DOM.

Un solo service worker puede controlar muchas páginas. Cada vez que se carga una página dentro de su alcance, el service worker se instala para esa página y opera en ella. Por lo tanto, es necesario tener cuidado con las variables globales en el script del service worker: cada página no tiene su propio worker único.

> [!NOTE]
> Una gran ventaja de los service workers es que si se usa la detección de características como se muestra arriba, los navegadores que no soportan service workers pueden simplemente usar la aplicación en línea de la manera normal esperada.

#### ¿Por qué falla el registro de mi service worker?

Un service worker falla en registrarse por una de las siguientes razones:

- No se está ejecutando la aplicación en un [contexto seguro](/es/docs/Web/Security/Defenses/Secure_Contexts) (sobre HTTPS).
- La ruta del archivo del service worker es incorrecta.
  La ruta debe ser relativa al origen, no al directorio raíz de la aplicación.
  En el ejemplo, el worker está en `https://bncb2v.csb.app/sw.js` y la raíz de la aplicación es `https://bncb2v.csb.app/`, por lo que el service worker debe especificarse como `/sw.js`.
- La ruta del service worker apunta a un service worker de un origen diferente al de la aplicación.
- El registro del service worker contiene una opción `scope` más amplia de lo permitido por la ruta del worker.
  El alcance predeterminado para un service worker es el directorio donde se encuentra el worker.
  En otras palabras, si el script `sw.js` está ubicado en `/js/sw.js`, solo puede controlar URLs en (o anidadas dentro de) la ruta `/js/` de forma predeterminada.
  El alcance de un service worker se puede ampliar (o reducir) con el encabezado {{HTTPHeader("Service-Worker-Allowed")}}.
- Hay configuraciones específicas del navegador habilitadas, como bloquear todas las cookies, modo de navegación privada, eliminación automática de cookies al cerrar, etc.
  Consulte la [compatibilidad de navegadores de `serviceWorker.register()`](/es/docs/Web/API/ServiceWorkerContainer/register#browser_compatibility) para más información.

### Instalación y activación: llenar la caché

Después de que el service worker se registra, el navegador intentará instalar y luego activar el service worker para la página/sitio.

El evento `install` es el primer evento que se dispara en la instalación o actualización del service worker.
Se emite una sola vez, inmediatamente después de que el registro se completa exitosamente, y se usa generalmente para llenar las capacidades de almacenamiento en caché sin conexión del navegador con los recursos necesarios para ejecutar la aplicación sin conexión. Para esto, se usa la API de almacenamiento del Service Worker, [`cache`](/es/docs/Web/API/Cache), un objeto global en el service worker que permite almacenar recursos entregados por respuestas, indexados por sus solicitudes. Esta API funciona de manera similar a la caché estándar del navegador, pero es específica para el dominio. Los contenidos de la caché se mantienen hasta que se limpien.

Así es como el service worker maneja el evento `install`:

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

1. Se agrega un detector de eventos `install` al service worker (por lo tanto `self`), y luego se encadena un método [`ExtendableEvent.waitUntil()`](/es/docs/Web/API/ExtendableEvent/waitUntil) al evento, esto asegura que el service worker no se instalará hasta que el código dentro de `waitUntil()` se haya ejecutado exitosamente.
2. Dentro de `addResourcesToCache()` se usa el método [`caches.open()`](/es/docs/Web/API/CacheStorage/open) para crear una nueva caché llamada `v1`, que será la versión 1 de la caché de recursos del sitio. Luego se llama a la función `addAll()` en la caché creada, que toma como parámetro un arreglo de URLs relativas al {{domxref("WorkerGlobalScope.location", "location", "", 1)}} del worker para todos los recursos que se desea almacenar en caché.
3. Si la promesa se rechaza, la instalación falla y el worker no hará nada. Esto está bien, ya que se puede corregir el código e intentar de nuevo la próxima vez que ocurra el registro.
4. Después de una instalación exitosa, el service worker se activa. Esto no tiene mucho uso distinto la primera vez que se instala/activa el service worker, pero significa más cuando se actualiza el service worker (ver la sección [Actualizar el service worker](#actualizar_el_service_worker) más adelante).

> [!NOTE]
> [La API Web Storage (`localStorage`)](/es/docs/Web/API/Web_Storage_API) funciona de manera similar a la caché del service worker, pero es síncrona, por lo que no está permitida en service workers.

> [!NOTE]
> [IndexedDB](/es/docs/Web/API/IndexedDB_API) se puede usar dentro de un service worker para almacenamiento de datos si se requiere.

### Respuestas personalizadas a solicitudes

Ahora que los recursos del sitio están almacenados en caché, se necesita indicar a los service workers que hagan algo con el contenido almacenado en caché. Esto se hace con el evento `fetch`.

1. Un evento `fetch` se dispara cada vez que se obtiene cualquier recurso controlado por un service worker, lo que incluye los documentos dentro del alcance especificado y cualquier recurso referenciado en esos documentos (por ejemplo, si `index.html` hace una solicitud de origen cruzado para incrustar una imagen, eso también pasa por su service worker).

2. Se puede adjuntar un detector de eventos `fetch` al service worker, luego llamar al método `respondWith()` en el evento para interceptar las respuestas HTTP y actualizarlas con contenido propio.

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* el contenido personalizado va aquí */);
   });
   ```

3. Se podría empezar respondiendo con el recurso cuya URL coincida con la de la solicitud de red, en cada caso:

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` permite hacer coincidir cada recurso solicitado de la red con el recurso equivalente disponible en la caché, si hay uno coincidente disponible. La coincidencia se realiza a través de URL y varios encabezados, al igual que con las solicitudes HTTP normales.

![Diagrama de evento fetch](sw-fetch.svg)

## Recuperar solicitudes fallidas

`caches.match(event.request)` es excelente cuando hay una coincidencia en la caché del service worker, pero ¿qué pasa con los casos en los que no hay coincidencia? Si no se proporciona ningún tipo de manejo de fallos, la promesa se resolvería con `undefined` y no se obtendría nada.

Después de probar la respuesta de la caché, se puede recurrir a una solicitud de red regular:

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

Si los recursos no están en la caché, se solicitan de la red.

Usando una estrategia más elaborada, se podría no solo solicitar el recurso de la red, sino también guardarlo en la caché para que las solicitudes posteriores de ese recurso también se puedan recuperar sin conexión. Esto significaría que si se añadieran imágenes adicionales a la galería de Star Wars, la aplicación podría capturarlas automáticamente y almacenarlas en caché. El siguiente fragmento implementa tal estrategia:

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async (request, event) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  event.waitUntil(putInCache(request, responseFromNetwork.clone()));
  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request, event));
});
```

Si la URL de la solicitud no está disponible en la caché, se solicita el recurso de la red con `await fetch(request)`. Después de eso, se coloca un clon de la respuesta en la caché. La función `putInCache()` usa `caches.open('v1')` y `cache.put()` para agregar el recurso a la caché. La respuesta original se devuelve al navegador para entregarse a la página que la solicitó.

Clonar la respuesta es necesario porque los flujos de solicitud y respuesta solo se pueden leer una vez. Para devolver la respuesta al navegador y ponerla en la caché, es necesario clonarla. Así el original se devuelve al navegador y el clon se envía a la caché. Cada uno se lee una vez.

Lo que puede parecer un poco extraño es que la promesa devuelta por `putInCache()` no se espera. La razón es que no se desea esperar hasta que el clon de respuesta se haya agregado a la caché antes de devolver una respuesta. Sin embargo, es necesario llamar a `event.waitUntil()` con la promesa, para asegurar que el service worker no se detenga antes de que la caché se haya llenado.

El único problema ahora es que si la solicitud no coincide con nada en la caché y la red no está disponible, la solicitud seguirá fallando. Se puede proporcionar un respaldo predeterminado para que, pase lo que pase, el usuario al menos obtenga algo:

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, fallbackUrl, event }) => {
  // Primero intentar obtener el recurso de la caché
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Luego intentar obtener el recurso de la red
  try {
    const responseFromNetwork = await fetch(request);
    // la respuesta solo se puede usar una vez
    // se necesita guardar el clon para poner una copia en caché
    // y servir la segunda
    event.waitUntil(putInCache(request, responseFromNetwork.clone()));
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // cuando incluso la respuesta alternativa no está disponible,
    // no hay nada que se pueda hacer, pero siempre se debe
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
      event,
    }),
  );
});
```

Se ha optado por esta imagen alternativa porque las únicas actualizaciones que probablemente fallarán son las imágenes nuevas, ya que todo lo demás depende de la instalación en el detector de eventos `install` visto anteriormente.

## Precarga de navegación del service worker

Si está habilitada, la función de [precarga de navegación](/es/docs/Web/API/NavigationPreloadManager) comienza a descargar recursos tan pronto como se realiza la solicitud de fetch, y en paralelo con la activación del service worker. Esto asegura que la descarga comience inmediatamente al navegar a una página, en lugar de tener que esperar hasta que el service worker esté activado. Ese retraso ocurre relativamente rara vez, pero es inevitable cuando sucede y puede ser significativo.

Primero, la función debe habilitarse durante la activación del service worker, usando [`registration.navigationPreload.enable()`](/es/docs/Web/API/NavigationPreloadManager/enable):

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

Luego se usa [`event.preloadResponse`](/es/docs/Web/API/FetchEvent/preloadResponse) para esperar a que el recurso precargado termine de descargarse en el controlador de eventos `fetch`.

Continuando con el ejemplo de las secciones anteriores, se inserta el código para esperar el recurso precargado después de la verificación de caché, y antes de obtenerlo de la red si eso no tiene éxito.

El nuevo proceso es:

1. Verificar la caché.
2. Esperar `event.preloadResponse`, que se pasa como `preloadResponsePromise` a la función `cacheFirst()`. Almacenar en caché el resultado si se obtiene.
3. Si ninguno de estos está definido, se recurre a la red.

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({
  request,
  preloadResponsePromise,
  fallbackUrl,
  event,
}) => {
  // Primero intentar obtener el recurso de la caché
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Luego intentar usar (y almacenar en caché) la respuesta precargada, si está disponible
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info("using preload response", preloadResponse);
    event.waitUntil(putInCache(request, preloadResponse.clone()));
    return preloadResponse;
  }

  // Luego intentar obtener el recurso de la red
  try {
    const responseFromNetwork = await fetch(request);
    // la respuesta solo se puede usar una vez
    // se necesita guardar el clon para poner una copia en caché
    // y servir la segunda
    event.waitUntil(putInCache(request, responseFromNetwork.clone()));
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // cuando incluso la respuesta alternativa no está disponible,
    // no hay nada que se pueda hacer, pero siempre se debe
    // devolver un objeto Response
    return new Response("Ocurrió un error de red", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

// Habilitar precarga de navegación
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
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
      event,
    }),
  );
});
```

Nótese que en este ejemplo se descargan y almacenan en caché los mismos datos para el recurso, ya sea que se descargue "normalmente" o se precargue. En su lugar, se puede optar por descargar y almacenar en caché un recurso diferente en la precarga. Para más información, consulte [`NavigationPreloadManager` > Respuestas personalizadas](/es/docs/Web/API/NavigationPreloadManager#custom_responses).

## Actualizar el service worker

Si el service worker se instaló previamente, pero luego hay una nueva versión del worker disponible al refrescar o cargar la página, la nueva versión se instala en segundo plano, pero aún no se activa. Solo se activa cuando ya no hay páginas cargadas que aún usen el service worker antiguo. Tan pronto como no queden más páginas cargadas de este tipo, el nuevo service worker se activa.

> [!NOTE]
> Es posible evitar esto usando [`Clients.claim()`](/es/docs/Web/API/Clients/claim).

Se querrá actualizar el detector de eventos `install` en el nuevo service worker a algo como esto (nótese el nuevo número de versión):

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

      // …

      // incluir otros nuevos recursos para la nueva versión…
    ]),
  );
});
```

Mientras el service worker se está instalando, la versión anterior sigue siendo responsable de los fetches. La nueva versión se está instalando en segundo plano. Se está llamando a la nueva caché `v2`, por lo que la caché anterior `v1` no se ve afectada.

Cuando ninguna página está usando la versión anterior, el nuevo worker se activa y se vuelve responsable de los fetches.

### Eliminar cachés antiguas

Como se vio en la sección anterior, cuando se actualiza un service worker a una nueva versión, se crea una nueva caché en el controlador de eventos `install`. Mientras haya páginas abiertas controladas por la versión anterior del worker, es necesario mantener ambas cachés, porque la versión anterior necesita su versión de la caché. Se puede usar el evento `activate` para eliminar datos de las cachés anteriores.

Las promesas pasadas a `waitUntil()` bloquearán otros eventos hasta completarse, por lo que se puede estar seguro de que la operación de limpieza se habrá completado para cuando se reciba el primer evento `fetch` en el nuevo service worker.

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

- [Chrome](https://www.chromium.org/blink/serviceworker/service-worker-faq/)
- [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/application/service_workers/index.html)
  - El botón "Olvidar este sitio", disponible en las [opciones de personalización de la barra de herramientas de Firefox](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars), se puede usar para limpiar los service workers y sus cachés.
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools/progressive-web-apps/#service-workers)

## Véase también

- [Promesas](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Uso de web workers](/es/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{HTTPHeader("Service-Worker-Allowed")}} encabezado HTTP
