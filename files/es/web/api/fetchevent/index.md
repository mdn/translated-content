---
title: FetchEvent
slug: Web/API/FetchEvent
---

{{APIRef("Service Workers API")}}{{ SeeCompatTable() }}

Este es el tipo de evento para eventos "`fetch`" despachados en el {{domxref("ServiceWorkerGlobalScope", "scope global del service worker", "", 1)}}. Contiene información sobre la búsqueda (fetch), incluyendo la petición (request) y cómo el receptor tratará la respuesta (response).

Provee el método {{domxref("FetchEvent.respondWith", "event.respondWith()")}}, el cúal nos permite proporcionar una respuesta a esta búsqueda (fetch).

## Constructor

- {{domxref("FetchEvent.FetchEvent()", "new FetchEvent()")}}
  - : Crea un nuevo objecto `FetchEvent`. Este constructor no se usa normalmente. El propio navegador crea estos objetos y los proporciona a los callbacks de eventos "`fetch`".

## Propiedades

_Hereda propiedades del ancestro, {{domxref("Event")}}_.

- {{domxref("fetchEvent.clientId")}} {{readonlyInline}}
  - : El {{domxref("Client.id", "id")}} del mismo origen {{domxref("Client", "client")}} que inició el "fetch".
- {{domxref("fetchEvent.preloadResponse")}} {{readonlyinline}}
  - : Un {{jsxref("Promise")}} para un {{domxref("Response")}}, o vacío si este no es una navegación, o {{domxref("NavigationPreloadManager", "navigation preload", "", 1)}} no esta habilitado.
- {{domxref("fetchEvent.request")}} {{readonlyInline}}
  - : La {{domxref("Request")}} que el navegador intenta crear.

## Métodos

_Herada métodos del padre,_ _{{domxref("ExtendableEvent")}}_.

- {{domxref("fetchEvent.respondWith()")}}
  - : Evita el manejo de búsqueda predeterminado del navegador y proporciona (una promesa) una respuesta usted mismo.
- {{domxref("extendableEvent.waitUntil()")}}
  - : Extiende el tiempo de vida del evento. Se usa para notificar al navegador las tareas que van más allá de la devolución de una respuesta, como la transmisión y el almacenamiento en caché.

## Ejemplos

Este evento fetch, permite al navegador hacer esta acción por defecto para peticiones non-GET. Para peticiones GET esto intenta retornar una coincidencia en el cache, y vuelve de nuevo a la red. Si busca una concidencia en el cache, actualiza asincronicamente el cache para la próxima vez.

```js
addEventListener("fetch", (event) => {
  // Permite al navegador hacer este asunto por defecto
  // para peticiones non-GET.
  if (event.request.method != "GET") return;

  // Evita el valor predeterminado, y manejar solicitud nosostros mismos.
  event.respondWith(
    (async function () {
      // Intenta obtener la respuesta de el cache.
      const cache = await caches.open("dynamic-v1");
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) {
        // Si encontramos una coincidencia en el cache, lo devuelve, pero también
        // actualizar la entrada en el cache en segundo plano.
        event.waitUntil(cache.add(event.request));
        return cachedResponse;
      }

      // Si no encontramos una coincidencia en el cache, usa la red.
      return fetch(event.request);
    })(),
  );
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Promise")}}
- [Fetch API](/es/docs/Web/API/Fetch_API)
