---
title: Usar Service Workers
slug: Web/API/Service_Worker_API/Using_Service_Workers
page-type: guide
tags:
  - Guide
  - Service
  - ServiceWorker
  - Workers
  - basics
---

{{ServiceWorkerSidebar}}

Este artículo brinda información sobre cómo comenzar con el servicio de trabajadores — *Service Workers*, incluida la arquitectura básica, el registro de un servicio de trabajadores, el proceso de instalación y activación de un nuevo servicio de trabajadores, la actualización de tu servicio de trabajadores, el control de caché y las respuestas personalizadas, todo en el contexto de una aplicación simple, con funcionalidad fuera de línea.

## La premisa del servicio de trabajadores

Un problema primordial del que los usuarios de la web han adolecido durante años es la pérdida de conectividad. La mejor aplicación web del mundo proporcionará una experiencia de usuario terrible si no la puedes descargar. Ha habido varios intentos de crear tecnologías para resolver este problema, y ​​algunos de los problemas se han resuelto. Pero el problema primordial es que todavía no existe un buen mecanismo de control general para el almacenamiento en caché de activos y las solicitudes de red personalizadas.

El intento anterior, _AppCache_, parecía ser una buena idea porque te permitía especificar activos para almacenar en caché con mucha facilidad. Sin embargo, hizo muchas suposiciones sobre lo que estabas tratando de hacer y luego se rompió horriblemente cuando tu aplicación no siguió exactamente esas suposiciones. Lee el documento de Jake Archibald (desafortunadamente mal titulado pero bien escrito) [Application Cache is a Douchebag](https://alistapart.com/article/application-cache-is-a-douchebag/) para obtener más detalles.

> **Nota**: A partir de Firefox 84, se eliminó AppCache ({{bug("1619673")}}). También se ha [eliminado](https://bugs.chromium.org/p/chromium/issues/detail?id=582750) de Chromium 95 y está obsoleto en Safari.

El servicio de trabajadores finalmente deberían solucionar estos problemas. La sintaxis del servicio de trabajadores es más compleja que la de AppCache, pero la compensación es que puedes usar JavaScript para controlar su comportamiento implícito en AppCache con un buen grado de fina granularidad, lo que te permite manejar este problema y muchos más. Al usar un servicio de trabajadores, puedes configurar fácilmente una aplicación para usar activos almacenados en caché primero, proporcionando así una experiencia predeterminada incluso cuando estás desconectado, antes de obtener más datos de la red (comúnmente conocido como [Primero sin conexión](https://offlinefirst.org/)). Esto ya está disponible con las aplicaciones nativas, que es una de las principales razones por las que las aplicaciones nativas a menudo se eligen en lugar de las aplicaciones web.

## Configuración para jugar con el servicio de trabajadores

En estos días, el servicio de trabajadores está habilitado de forma predeterminada en todos los navegadores modernos. Para ejecutar código con el servicio de trabajadores, deberás entregar tu código a través de HTTPS: el servicio de trabajadores, por razones de seguridad, está restringido a ejecutarse a través de HTTPS. Por lo tanto, GitHub es un buen lugar para alojar experimentos, ya que admite HTTPS. Para facilitar el desarrollo local, los navegadores también consideran `localhost` como un origen seguro.

## Arquitectura básica

Con el servicio de trabajadores, generalmente se observan los siguientes pasos para la configuración básica:

1. La URL del servicio del trabajador se obtiene y registra a través de {{domxref("serviceWorkerContainer.register()")}}.
2. Si tiene éxito, el servicio de trabajador se ejecuta en {{domxref("ServiceWorkerGlobalScope") }}; esto es básicamente un tipo especial de contexto de trabajo, que se ejecuta fuera del hilo principal de ejecución del script, sin acceso al DOM.
3. El servicio del trabajador ahora está listo para procesar eventos.
4. Se intenta la instalación del trabajador cuando se accede posteriormente a las páginas controladas por el servicio del trabajador. Un evento de instalación siempre es el primero que se envía a un servicio del trabajador (esto se puede usar para iniciar el proceso de completar un IndexedDB y almacenar en caché los activos del sitio). Este es realmente el mismo tipo de procedimiento que instalar una aplicación nativa o Firefox OS: hace que todo esté disponible para usar sin conexión.
5. Cuando se completa el controlador `oninstall`, se considera que el servicio del trabajador está instalado.
6. Lo siguiente es la activación. Cuando se instala el servicio del trabajador, recibe un evento de activación. El uso principal de `onactivate` es para la limpieza de los recursos utilizados en versiones anteriores de un script del servicio del trabajador.
7. El servicio del trabajador ahora controlará las páginas, pero solo aquellas que se abran después de que `register()` tenga éxito. En otras palabras, los documentos se deberán volver a cargar para controlarlos realmente, porque un documento comienza con o sin un servicio del trabajador y lo mantiene durante toda su vida.

![](sw-lifecycle.png)

El siguiente gráfico muestra un resumen de los eventos de *service worker* disponibles:

![install, activate, message, fetch, sync, push](sw-events.png)

## Demostración del Servicio de trabajadores

Para demostrar los conceptos básicos de registro e instalación de un servicio de trabajador, hemos creado una demostración simple llamada [Servicio de trabajador simple](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker), que es una simple galería de imágenes de Star Wars Lego. Utiliza una función impulsada por promesas para leer datos de imagen de un objeto JSON y cargar las imágenes usando Ajax, antes de mostrar las imágenes en una línea hacia abajo en la página. Hemos mantenido las cosas estáticas y simples por ahora. También registra, instala y activa un servicio de trabajador, y cuando los navegadores admiten más especificaciones, almacenará en caché todos los archivos necesarios para que funcione sin conexión.

![Las palabras Star Wars seguidas de una imagen de una versión Lego del personaje de Darth Vader](demo-screenshot.png)

Puedes ver el [código fuente en GitHub](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) y el [Sencillo servicio de trabajador ejecutándose en vivo](https://bncb2v.csb.app/).

### Registra a tu trabajador

El primer bloque de código en el archivo JavaScript de nuestra aplicación, `app.js`, es el siguiente. Este es nuestro punto de entrada en el uso del servicio de trabajadores.

```js
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Falló el registro con el ${error}`);
    }
  }
};

// …

registerServiceWorker();
```

1. The if-block performs a feature detection test to make sure service workers are supported before trying to register one.
2. Next, we use the {{domxref("ServiceWorkerContainer.register()") }} function to register the service worker for this site, which is just a JavaScript file residing inside our app (note this is the file's URL relative to the origin, not the JS file that references it.)
3. The `scope` parameter is optional, and can be used to specify the subset of your content that you want the service worker to control. In this case, we have specified '`'/'`, which means all content under the app's origin. If you leave it out, it will default to this value anyway, but we specified it here for illustration purposes.

This registers a service worker, which runs in a worker context, and therefore has no DOM access. You then run code in the service worker outside of your normal pages to control their loading.

A single service worker can control many pages. Each time a page within your scope is loaded, the service worker is installed against that page and operates on it. Bear in mind therefore that you need to be careful with global variables in the service worker script: each page doesn't get its own unique worker.

> **Note:** Your service worker functions like a proxy server, allowing you to modify requests and responses, replace them with items from its own cache, and more.

> **Note:** One great thing about service workers is that if you use feature detection like we've shown above, browsers that don't support service workers can just use your app online in the normal expected fashion. Furthermore, if you use AppCache and SW on a page, browsers that don't support SW but do support AppCache will use that, and browsers that support both will ignore the AppCache and let SW take over.

#### Why is my service worker failing to register?

This could be for the following reasons:

1. You are not running your application through HTTPS.
2. The path to your service worker file is not written correctly — it needs to be written relative to the origin, not your app's root directory. In our example, the worker is at `https://bncb2v.csb.app/sw.js`, and the app's root is `https://bncb2v.csb.app/`. But the path needs to be written as `/sw.js`.
3. It is also not allowed to point to a service worker of a different origin than that of your app.

![](important-notes.png)

Also note:

- The service worker will only catch requests from clients under the service worker's scope.
- The max scope for a service worker is the location of the worker.
- If your service worker is active on a client being served with the `Service-Worker-Allowed` header, you can specify a list of max scopes for that worker.
- In Firefox, Service Worker APIs are hidden and cannot be used when the user is in [private browsing mode](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history).

### Install and activate: populating your cache

After your service worker is registered, the browser will attempt to install then activate the service worker for your page/site.

The install event is fired when an install is successfully completed. The install event is generally used to populate your browser's offline caching capabilities with the assets you need to run your app offline. To do this, we use Service Worker's storage API — {{domxref("cache")}} — a global object on the service worker that allows us to store assets delivered by responses, and keyed by their requests. This API works in a similar way to the browser's standard cache, but it is specific to your domain. It persists until you tell it not to — again, you have full control.

Here's how our service worker handles the `install` event:

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
    ])
  );
});
```

1. Here we add an `install` event listener to the service worker (hence `self`), and then chain a {{domxref("ExtendableEvent.waitUntil()") }} method onto the event — this ensures that the service worker will not install until the code inside `waitUntil()` has successfully occurred.
2. Inside `addResourcesToCache` we use the [`caches.open()`](/en-US/docs/Web/API/CacheStorage/open) method to create a new cache called `v1`, which will be version 1 of our site resources cache. Then we call a function that calls `addAll()` on the created cache, which for its parameter takes an array of origin-relative URLs to all the resources you want to cache.
3. If the promise is rejected, the install fails, and the worker won't do anything. This is OK, as you can fix your code and then try again the next time registration occurs.
4. After a successful installation, the service worker activates. This doesn't have much of a distinct use the first time your service worker is installed/activated, but it means more when the service worker is updated (see the [Updating your service worker](#updating_your_service_worker) section later on.)

> **Note:** [localStorage](/en-US/docs/Web/API/Web_Storage_API) works in a similar way to service worker cache, but it is synchronous, so not allowed in service workers.

> **Note:** [IndexedDB](/en-US/docs/Web/API/IndexedDB_API) can be used inside a service worker for data storage if you require it.

### Custom responses to requests

Now you've got your site assets cached, you need to tell service workers to do something with the cached content. This is easily done with the `fetch` event.

![](sw-fetch.png)

A `fetch` event fires every time any resource controlled by a service worker is fetched, which includes the documents inside the specified scope, and any resources referenced in those documents (for example if `index.html` makes a cross origin request to embed an image, that still goes through its service worker.)

You can attach a `fetch` event listener to the service worker, then call the `respondWith()` method on the event to hijack our HTTP responses and update them with your own magic.

```js
self.addEventListener("fetch", (event) => {
  event
    .respondWith
    // magic goes here
    ();
});
```

We could start by responding with the resource whose URL matches that of the network request, in each case:

```js
self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request));
});
```

`caches.match(event.request)` allows us to match each resource requested from the network with the equivalent resource available in the cache, if there is a matching one available. The matching is done via URL and various headers, just like with normal HTTP requests.

Let's look at a few other options we have when defining our magic (see our [Fetch API documentation](/en-US/docs/Web/API/Fetch_API) for more information about {{domxref("Request")}} and {{domxref("Response")}} objects.)

1. The {{domxref("Response.Response","Response()")}} constructor allows you to create a custom response. In this case, we are just returning a simple text string:

   ```js
   new Response("Hello from your friendly neighborhood service worker!");
   ```

2. This more complex `Response` below shows that you can optionally pass a set of headers in with your response, emulating standard HTTP response headers. Here we are just telling the browser what the content type of our synthetic response is:

   ```js
   new Response(
     "<p>Hello from your friendly neighborhood service worker!</p>",
     {
       headers: { "Content-Type": "text/html" },
     }
   );
   ```

3. If a match wasn't found in the cache, you could tell the browser to {{domxref("fetch()")}} the default network request for that resource, to get the new resource from the network if it is available:

   ```js
   fetch(event.request);
   ```

4. If a match wasn't found in the cache, and the network isn't available, you could just match the request with some kind of default fallback page as a response using {{domxref("CacheStorage.match","match()")}}, like this:

   ```js
   caches.match("./fallback.html");
   ```

5. You can retrieve a lot of information about each request by calling parameters of the {{domxref("Request")}} object returned by the {{domxref("FetchEvent")}}:

   ```js
   event.request.url;
   event.request.method;
   event.request.headers;
   event.request.body;
   ```

## Recovering failed requests

So `caches.match(event.request)` is great when there is a match in the service worker cache, but what about cases when there isn't a match? If we didn't provide any kind of failure handling, our promise would resolve with `undefined` and we wouldn't get anything returned.

Fortunately, service workers' promise-based structure makes it trivial to provide further options towards success. We could do this:

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

If the resources aren't in the cache, they are requested from the network.

If we were being really clever, we would not only request the resource from the network; we would also save it into the cache so that later requests for that resource could be retrieved offline too! This would mean that if extra images were added to the Star Wars gallery, our app could automatically grab them and cache them. The following would do the trick:

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

If the request URL is not available in the cache, we request the resource from the network request with `await fetch(request)`. After that, we put a clone of the response into the cache. The `putInCache` function uses `caches.open('v1')` and `cache.put()` to add the resource to the cache. The original response is returned to the browser to be given to the page that called it.

Cloning the response is necessary because request and response streams can only be read once. In order to return the response to the browser and put it in the cache we have to clone it. So the original gets returned to the browser and the clone gets sent to the cache. They are each read once.

What might look a bit weird is that the promise returned by `putInCache` is not awaited. But the reason is that we don't want to wait until the response clone has been added to the cache before returning a response.

The only trouble we have now is that if the request doesn't match anything in the cache, and the network is not available, our request will still fail. Let's provide a default fallback so that whatever happens, the user will at least get something:

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request);
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // when even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object
    return new Response("Network error happened", {
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
    })
  );
});
```

We have opted for this fallback image because the only updates that are likely to fail are new images, as everything else is depended on for installation in the `install` event listener we saw earlier.

## Service Worker Navigation Preload

If enabled, the [navigation preload](/en-US/docs/Web/API/NavigationPreloadManager) feature starts downloading resources as soon as the fetch request is made, and in parallel with service worker bootup.
This ensures that download starts immediately on navigation to a page, rather than having to wait until the service worker has booted.
That delay happens relatively rarely, but is unavoidable when it does happen, and may be significant.

First the feature must be enabled during service worker activation, using {{domxref("NavigationPreloadManager.enable()", "registration.navigationPreload.enable()")}}:

```js
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener("activate", (event) => {
  event.waitUntil(enableNavigationPreload());
});
```

Then use {{domxref("FetchEvent.preloadResponse", "event.preloadResponse")}} to wait for the preloaded resource to finish downloading in the `fetch` event handler.

Continuing the example from the previous sections, we insert the code to wait for the preloaded resource after the cache check, and before fetching from the network if that doesn't succeed.

The new process is:

1. Check cache
2. Wait on `event.preloadResponse`, which is passed as `preloadResponsePromise` to the `cacheFirst` function.
   Cache the result if it returns.
3. If neither of these are defined then we go to the network.

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
  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to use (and cache) the preloaded response, if it's there
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info("using preload response", preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request);
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // when even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

// Enable navigation preload
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!
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
    ])
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      preloadResponsePromise: event.preloadResponse,
      fallbackUrl: "/gallery/myLittleVader.jpg",
    })
  );
});
```

Note that in this example we download and cache the same data for the resource whether it is downloaded "normally" or preloaded.
You can instead choose to download and cache a different resource on preload.
For more information see [`NavigationPreloadManager` > Custom responses](/en-US/docs/Web/API/NavigationPreloadManager#custom_responses).

## Updating your service worker

If your service worker has previously been installed, but then a new version of the worker is available on refresh or page load, the new version is installed in the background, but not yet activated. It is only activated when there are no longer any pages loaded that are still using the old service worker. As soon as there are no more such pages still loaded, the new service worker activates.

You'll want to update your `install` event listener in the new service worker to something like this (notice the new version number):

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

      // include other new resources for the new version…
    ])
  );
});
```

While this happens, the previous version is still responsible for fetches. The new version is installing in the background. We are calling the new cache `v2`, so the previous `v1` cache isn't disturbed.

When no pages are using the current version, the new worker activates and becomes responsible for fetches.

### Deleting old caches

You also get an `activate` event. This is generally used to do stuff that would have broken the previous version while it was still running, for example getting rid of old caches. This is also useful for removing data that is no longer needed to avoid filling up too much disk space — each browser has a hard limit on the amount of cache storage that a given service worker can use. The browser does its best to manage disk space, but it may delete the Cache storage for an origin. The browser will generally delete all of the data for an origin or none of the data for an origin.

Promises passed into `waitUntil()` will block other events until completion, so you can rest assured that your clean-up operation will have completed by the time you get your first `fetch` event on the new service worker.

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

## Developer tools

Chrome has `chrome://inspect/#service-workers`, which shows current service worker activity and storage on a device, and `chrome://serviceworker-internals`, which shows more detail and allows you to start/stop/debug the worker process. In the future they will have throttling/offline modes to simulate bad or non-existent connections, which will be a really good thing.

Firefox has also started to implement some useful tools related to service workers:

- You can navigate to [`about:debugging`](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) to see what SWs are registered and update/remove them.
- When testing you can get around the HTTPS restriction by checking the "Enable Service Workers over HTTP (when toolbox is open)" option in the [Firefox Developer Tools settings](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html).
- The "Forget" button, available in Firefox's customization options, can be used to clear service workers and their caches ({{bug(1252998)}}).

> **Note:** You may serve your app from `http://localhost` (e.g. using `me@localhost:/my/app$ python -m SimpleHTTPServer`) for local development. See [Security considerations](https://www.w3.org/TR/service-workers/#security-considerations)

## See also

- [The Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- Download the [Service Workers 101 cheatsheet](sw101.png).
- [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
