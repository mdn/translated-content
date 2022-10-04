---
title: Caché
slug: Web/API/Cache
page-type: web-api-interface
tags:
  - API
  - Caché
  - Cache
  - Cache API
  - API Caché
  - Interfaz
  - Interface
  - Offline
  - Desconectado
  - Fuera de línea
  - Referencia
  - Reference
  - Service Workers
  - Service worker API
  - Storage
browser-compat: api.Cache
---

{{APIRef("Service Workers API")}}

La interfaz **`Caché`** proporciona un mecanismo de almacenamiento persistente para pares de objetos {{domxref("Request")}} / {{domxref("Response")}} que se almacenan en memoria caché de larga duración. El tiempo de vida de un objeto `Cache` depende del navegador, pero los scripts de un solo origen generalmente pueden depender de la presencia de un objeto `Cache` poblado previamente. Ten en cuenta que la interfaz `Cache` está expuesta tanto a los ámbitos *window* como a *workers*. No tienes que usarlo junto con los *service workers*, aunque esté definido en la especificación del *service worker*.

Un origen puede tener varios objetos `Cache` con nombre. Eres responsable de implementar cómo tu script (por ejemplo, en un {{domxref("ServiceWorker")}}) maneja las actualizaciones de `Cache`. Los elementos en una `Cache` no se actualizan a menos que se solicite explícitamente; no caducan a menos que se eliminen. Usa {{domxref("CacheStorage.open", "CacheStorage.open()")}} para abrir un objeto `Cache` con nombre específico y luego llama a cualquiera de los métodos `Cache` para mantener la `Cache`.

También eres responsable de depurar periódicamente las entradas de caché. Cada navegador tiene un límite estricto en la cantidad de almacenamiento en caché que puede usar un determinado origen. Las estimaciones de uso de la cuota `cache` están disponibles a través del método {{domxref("StorageManager.estimate()")}}. El navegador hace lo mejor que puede para administrar el espacio en disco, pero puede eliminar el almacenamiento en `Cache` para un origen. El navegador, generalmente, eliminará todos los datos de un origen o ninguno de los datos de un origen. Asegúrate de versionar las cachés por nombre y usa las cachés solo de la versión del script en el que pueden operar de manera segura. Consulta [Eliminación de cachés antiguas](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers#eliminar_cachés_antiguos) para obtener más información.

> **Nota:** El algoritmo de coincidencia de claves depende del valor en el [encabezado VARY](https://www.fastly.com/blog/best-practices-using-vary-header). Por lo tanto, hacer coincidir una nueva clave requiere mirar tanto la clave como el valor de las entradas en el objeto `Cache`.

> **Nota:** La API de almacenamiento en caché no respeta los encabezados de almacenamiento en caché HTTP.

{{AvailableInWorkers}}

{{securecontext_header}}

## Métodos

- {{domxref("Cache.match", "Cache.match(request, options)")}}
  - : Devuelve una {{jsxref("Promise")}} que se resuelve en la respuesta asociada con la primera solicitud coincidente en el objeto `Cache`.
- {{domxref("Cache.matchAll", "Cache.matchAll(request, options)")}}
  - : Devuelve una {{jsxref("Promise")}} que se resuelve en un arreglo de todas las respuestas coincidentes en el objeto `Cache`.
- {{domxref("Cache.add", "Cache.add(request)")}}
  - : Toma una URL, la recupera y agrega el objeto `response` resultante a la memoria caché dada. Esto es funcionalmente equivalente a llamar a `fetch()` y luego usar `put()` para agregar los resultados a la caché.
- {{domxref("Cache.addAll", "Cache.addAll(requests)")}}
  - : Toma un arreglo de URLs, las recupera y agrega los objetos `response` resultantes a la memoria caché dada.
- {{domxref("Cache.put", "Cache.put(request, response)")}}
  - : Toma tanto una petición como su respuesta y la agrega a la memoria caché dada.
- {{domxref("Cache.delete", "Cache.delete(request, options)")}}
  - : Encuentra la entrada `Cache` cuya clave es la petición, devolviendo una {{jsxref("Promise")}} que se resuelve en `true` si se encuentra y elimina una entrada `Cache` coincidente. Si no se encuentra ninguna entrada `Cache`, la promesa se resuelve en `false`.
- {{domxref("Cache.keys", "Cache.keys(request, options)")}}
  - : Devuelve una {{jsxref("Promise")}} que se resuelve en un arreglo de claves `Cache`.

## Ejemplos

Este fragmento de código proviene de le [ejemplo de almacenamiento en caché selectivo del *service worker*](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js). (ve el [almacenamiento en caché selectivo en vivo](https://googlechrome.github.io/samples/service-worker/selective-caching/)) El código usa {{domxref("CacheStorage.open()")}} para abrir cualquier objeto `Cache` con un encabezado `Content-Type` que comienza con `font/`.

Luego, el código usa {{domxref("Cache.match()")}} para ver si ya hay una fuente coincidente en la caché y, de ser así, la devuelve. Si no hay una fuente coincidente, el código obtiene la fuente de la red y usa {{domxref("Cache.put()")}} para almacenar en caché el recurso obtenido.

El código maneja las excepciones generadas por la operación {{domxref("fetch()")}}. Ten en cuenta que una respuesta de error HTTP (por ejemplo, 404) no activará una excepción. Devolverá un objeto `response` normal que tiene el código de error apropiado.

El fragmento de código también muestra una práctica recomendada para el control de versiones de las memorias caché utilizadas por el *service worker*. Aunque solo hay una caché en este ejemplo, se puede usar el mismo enfoque para varias cachés. Asigna un identificador abreviado para una caché a un nombre de caché específico y versionado. El código también elimina todas las cachés que no se nombran en `CURRENT_CACHES`.

En el código de ejemplo, `caches` es una propiedad de {{domxref("ServiceWorkerGlobalScope")}}. Contiene el objeto `CacheStorage`, mediante el cual puede acceder a la interfaz {{domxref("CacheStorage")}}.

> **Nota:** En Chrome, visita `chrome://inspect/#service-workers` y haz clic en el enlace "inspeccionar" debajo del *servicie worker* registrado para ver las declaraciones de registro de las diversas acciones que [`service-worker .js`](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) está ejecutando.

```js
const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  font: `font-cache-v${CACHE_VERSION}`,
};

self.addEventListener("activate", (event) => {
  // Elimina todas las cachés que no se nombran en CURRENT_CACHES.
  // Si bien solo hay una caché en este ejemplo, la misma lógica manejará el caso en el que
  // hay varias cachés versionadas.
  const expectedCacheNamesSet = new Set(Object.values(CURRENT_CACHES));
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!expectedCacheNamesSet.has(cacheName)) {
            // Si este nombre de caché no está presente en el conjunto de nombres de caché "esperados", lo elimina.
            console.log("Elimina la caché desactualizada:", cacheName);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Manejo del evento fetch para", event.request.url);

  event.respondWith(
    caches.open(CURRENT_CACHES.font).then((cache) => {
      return cache
        .match(event.request)
        .then((response) => {
          if (response) {
            // Si hay una entrada en la caché para event.request, se definirá la respuesta
            // y podemos simplemente devolverla. Ten en cuenta que en este ejemplo, solo se almacenan en caché los recursos de fuentes.
            console.log("Respuesta encontrada en caché:", response);

            return response;
          }

          // De lo contrario, si no hay una entrada en el caché para event.request, la respuesta será
          // undefined, y necesitamos fetch() el recurso.
          console.log(
            " No se encontró respuesta para %s en caché. A punto de fetch " +
              "desde la red…",
            event.request.url
          );

          // Llamamos a .clone() en la petición ya que la podríamos usar en una llamada a cache.put() más adelante.
          // Tanto fetch() como cache.put() "consumen" la petición, por lo que necesitamos hacer una copia.
          // (consulta https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)
          return fetch(event.request.clone()).then((response) => {
            console.log(
              "  La respuesta para %s de la red es: %O",
              event.request.url,
              response
            );

            if (
              response.status < 400 &&
              response.headers.has("content-type") &&
              response.headers.get("content-type").match(/^font\//i)
            ) {
              // Esto evita el almacenamiento en caché de respuestas que sabemos que son errores (es decir, el código de estado HTTP de 4xx o 5xx).
              // También solo queremos almacenar en caché las respuestas que corresponden a fuentes,
              // es decir, tener un encabezado de respuesta de tipo de contenido que comience con "font/".
              // Ten en cuenta que para respuestas filtradas opacas (https://fetch.spec.whatwg.org/#concept-filtered-response-opaque)
              // no podemos acceder a los encabezados de respuesta, por lo que esta verificación siempre fallará y la fuente no se almacenará en caché.
              // Todas las fuentes web de Google se sirven desde un dominio compatible con CORS, por lo que no es un problema aquí.
              // Es algo a tener en cuenta si estás intentando almacenar en caché otros recursos desde un dominio
              // de origen cruzado que no es compatible con CORS, sin embargo!
              // Llamamos a .clone() en la respuesta para guardar una copia en la caché. Al hacerlo, podemos mantener
              // el objeto `response` original que devolveremos a la página controlada.
              // (consulta https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)
              console.log("  Almacenamiento en caché de la respuesta a ", event.request.url);
              cache.put(event.request, response.clone());
            } else {
              console.log("  No almacenar en caché la respuesta a ", event.request.url);
            }

            // Devuelve el objeto `response` original, que se utilizará para cumplir con la solicitud de recursos.
            return response;
          });
        })
        .catch((error) => {
          // Este catch() manejará las excepciones que surjan de las operaciones match() o fetch().
          // Ten en cuenta que una respuesta de error HTTP (por ejemplo, 404) NO activará una excepción.
          // Devolverá un objeto `response` normal que tiene el conjunto de códigos de error apropiado.
          console.error("  Error en el controlador fetch: ", error);

          throw error;
        });
    })
  );
});
```

### Objetos Cookies y Cache

La [API Fetch](/es/docs/Web/API/Fetch_API) requiere que se eliminen los encabezados {{httpheader("Set-Cookie")}} antes de devolver un objeto {{domxref("Response")}} de {{domxref("fetch()")}}. Por lo tanto, una `Response` almacenada en una `Cache` no contendrá encabezados `Set-Cookie` y, por lo tanto, no hará que se almacenen *cookies*.

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

## Ve también

- [Usar *Service Workers*](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Código básico de ejemplo para *Service workers*](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [¿Está listo el *ServiceWorker*?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Usar *web workers*](/es/docs/Web/API/Web_Workers_API/Using_web_workers)
