---
title: CacheStorage
slug: Web/API/CacheStorage
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Service Workers API")}}

La interfaz **`CacheStorage`** representa el almacenamiento para objetos {{domxref("Cache")}}.

La interfaz:

- Proporciona un directorio maestro de todos los cachés con nombre a los que se puede acceder mediante un {{domxref("ServiceWorker")}} u otro tipo de trabajador o alcance de {{domxref("window")}} (no está limitado a usándolo solo con _service worker_).
- Mantiene una asignación de nombres de cadenas a objetos {{domxref("Cache")}} correspondientes

Utilice {{domxref("CacheStorage.open()")}} para obtener una instancia de {{domxref("Cache")}}.

Usa {{domxref("CacheStorage.match()")}} para verificar si un {{domxref("Request")}} dado es una clave en cualquiera de los {{domxref("Cache")}} objetos que el objeto `CacheStorage` rastrea.

Puede acceder a `CacheStorage` a través de la propiedad global {{domxref("caches")}}.

> **Nota:** `CacheStorage` siempre rechaza con un `SecurityError` en orígenes que no son de confianza (es decir, aquellos que no usan HTTPS, aunque esta definición probablemente se volverá más compleja en el futuro). Al probar en Firefox, puede evitar esto marcando la opción **Activar service workers bajo HTTP (cuando la caja de herramientas esté abierta)** en el menú de opciones/engranaje de las Herramientas de desarrollador de Firefox. Además, debido a que `CacheStorage` requiere acceso al sistema de archivos, es posible que no esté disponible en modo privado en Firefox.

> **Nota:** {{domxref("CacheStorage.match()")}} es un método conveniente. Se puede implementar una funcionalidad equivalente para hacer coincidir una entrada de caché devolviendo una matriz de nombres de caché desde {{domxref("CacheStorage.keys()")}}, abriendo cada caché con {{domxref("CacheStorage.open()")}}, y haciendo coincidir el que quieras con {{domxref("Cache.match()")}}.

{{AvailableInWorkers}}

{{securecontext_header}}

## Métodos de instancia

- {{domxref("CacheStorage.match()")}}
  - : Comprueba si un objeto {{domxref("Request")}} dado es una clave en cualquiera de los objetos {{domxref("Cache")}} que rastrea el objeto {{domxref("CacheStorage")}} y devuelve un {{jsxref("Promise")}} que se resuelve en esa coincidencia.
- {{domxref("CacheStorage.has()")}}
  - : Devuelve un {{jsxref("Promise")}} que se resuelve en `true` si existe un objeto {{domxref("Cache")}} que coincide con `cacheName`.
- {{domxref("CacheStorage.open()")}}
  - : Devuelve un {{jsxref("Promise")}} que se resuelve en el objeto {{domxref("Cache")}} que coincide con `cacheName` (se crea un nuevo caché si aún no existe).
- {{domxref("CacheStorage.delete()")}}
  - : Encuentra el objeto {{domxref("Cache")}} que coincide con `cacheName` y, si lo encuentra, elimina el objeto {{domxref("Cache")}} y devuelve un {{jsxref("Promise")}} que se resuelve en `true`. Si no se encuentra ningún objeto {{domxref("Cache")}}, se resuelve como `false`.
- {{domxref("CacheStorage.keys()")}}
  - : Devuelve un {{jsxref("Promise")}} que se resolverá con una matriz que contiene cadenas correspondientes a todos los objetos {{domxref("Cache")}} nombrados rastreados por {{domxref("CacheStorage")}}. Utilice este método para iterar sobre una lista de todos los objetos {{domxref("Cache")}}.

## Ejemplos

Este fragmento de código de MDN [ejemplo simple de _service worker_](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (vea [simple _service worker_ ejecutándose en vivo](https://bncb2v.csb.app/).)
Este código de _service worker_ espera que se active un {{domxref("InstallEvent")}}, luego ejecuta {{domxref("ExtendableEvent.waitUntil","waitUntil")}} para manejar el proceso de instalación de la aplicación. Esto consiste en llamar a {{domxref("CacheStorage.open")}} para crear un nuevo caché, luego usar {{domxref("Cache.addAll")}} para agregarle una serie de activos.

En el segundo bloque de código, esperamos que se active un {{domxref("FetchEvent")}}. Construimos una respuesta personalizada así:

1. Compruebe si se encuentra una coincidencia para la solicitud en CacheStorage. Si es así, entrega eso.
2. De lo contrario, obtenga la solicitud de la red, luego abra también el caché creado en el primer bloque y agregue un clon de la solicitud usando {{domxref("Cache.put")}} (`cache.put(event.request, response.clone())`).
3. Si esto falla (por ejemplo, porque la red no funciona), devuelva una respuesta alternativa.

Finalmente, devuelva lo que sea que la respuesta personalizada terminó siendo igual a, usando {{domxref("FetchEvent.respondWith")}}.

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
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
      ),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // caches.match() siempre se resuelve,
      // pero en caso de éxito, la respuesta tendrá valor
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then((response) => {
            // la respuesta puede usarse solo una vez
            // que necesitamos guardar el clon para poner
            // una copia en caché y entregar la segunda
            let responseClone = response.clone();

            caches.open("v1").then((cache) => {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(() => caches.match("/gallery/myLittleVader.jpg"));
      }
    }),
  );
});
```

Este fragmento muestra cómo se puede usar la API fuera del contexto de un _service worker_ y usa el operador `await` para obtener un código mucho más legible.

```js
// Intente obtener datos del caché, pero recurra a buscarlos en vivo.
async function getData() {
  const cacheVersion = 1;
  const cacheName = `myapp-${cacheVersion}`;
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  let cachedData = await getCachedData(cacheName, url);

  if (cachedData) {
    console.log("Datos almacenados en caché recuperados");
    return cachedData;
  }

  console.log("Obtener datos nuevos");

  const cacheStorage = await caches.open(cacheName);
  await cacheStorage.add(url);
  cachedData = await getCachedData(cacheName, url);
  await deleteOldCaches(cacheName);

  return cachedData;
}

// Obtener datos del caché.
async function getCachedData(cacheName, url) {
  const cacheStorage = await caches.open(cacheName);
  const cachedResponse = await cacheStorage.match(url);

  if (!cachedResponse || !cachedResponse.ok) {
    return false;
  }

  return await cachedResponse.json();
}

// Elimine los cachés antiguos para respetar
// el espacio en disco del usuario.
async function deleteOldCaches(currentCache) {
  const keys = await caches.keys();

  for (const key of keys) {
    const isOurCache = key.startsWith("myapp-");
    if (currentCache === key || !isOurCache) {
      continue;
    }
    caches.delete(key);
  }
}

try {
  const data = await getData();
  console.log({ data });
} catch (error) {
  console.error({ error });
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Uso de _Service Workers_](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("caches")}}
- [Navegación privada / Modos de incógnito](/es/docs/Web/API/Web_Storage_API#private_browsing_incognito_modes)
