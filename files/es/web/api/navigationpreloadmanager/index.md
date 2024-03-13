---
title: NavigationPreloadManager
slug: Web/API/NavigationPreloadManager
---

{{APIRef("Service Workers API")}}

La interfaz **`NavigationPreloadManager`** de la [API de _Service Worker_](/es/docs/Web/API/Service_Worker_API) proporciona métodos para administrar la precarga de recursos en paralelo con el arranque del _service worker_.

Si es compatible, {{domxref("ServiceWorkerRegistration.navigationPreload")}} devuelve un objeto de este tipo.
Se espera el resultado de una solicitud de recuperación de precarga usando la promesa devuelta por {{domxref("FetchEvent.preloadResponse")}}.

## Métodos

- {{domxref("NavigationPreloadManager.enable()")}}
  - : Habilita la precarga de navegación, devolviendo una {{jsxref("Promise")}} que se resuelve con {{jsxref('undefined')}}.
- {{domxref("NavigationPreloadManager.disable()")}}
  - : Deshabilita la precarga de navegación, devolviendo una {{jsxref("Promise")}} que se resuelve con {{jsxref('undefined')}}.
- {{domxref("NavigationPreloadManager.setHeaderValue()")}}
  - : Establece el valor del encabezado HTTP {{HTTPHeader("Service-Worker-Navigation-Preload")}} que se envía en las solicitudes de precarga y devuelve una {{jsxref("Promise")}} vacía.
- {{domxref("NavigationPreloadManager.getState()")}}
  - : Devuelve una {{jsxref("Promise")}} que se resuelve en un objeto con propiedades que indican si la precarga está habilitada y qué valor se enviará en la Cabecera HTTP {{HTTPHeader("Service-Worker-Navigation-Preload") }} en solicitudes de precarga.

## Descripción

Los *service worker*s manejan eventos {{domxref("fetch()")}} en nombre de un sitio, para páginas dentro de un determinado ámbito.
Cuando un usuario navega a una página que utiliza un _service worker_, el navegador inicia el trabajador (si aún no se está ejecutando), luego le envía un evento de recuperación y espera el resultado.
Al recibir un evento, el trabajador devuelve el recurso desde una caché si está presente o, de lo contrario, obtiene el recurso del servidor remoto (y almacena una copia para devolverla en futuras solicitudes).

Un _service worker_ no puede procesar eventos desde el navegador hasta que se haya iniciado.
Esto es inevitable, pero por lo general no tiene mucho impacto.
Los *service worker*s a menudo ya están iniciados (permanecen activos durante algún tiempo después de procesar otras solicitudes).
Incluso si un _service worker_ tiene que arrancar, la mayor parte del tiempo puede estar devolviendo valores de una caché, lo cual es muy rápido.
Sin embargo, en aquellos casos en los que un trabajador tiene que arrancar antes de que pueda comenzar a obtener un recurso remoto, la demora puede ser significativa.

El {{domxref("NavigationPreloadManager")}} proporciona un mecanismo para permitir que la recuperación de los recursos se ejecute en paralelo con el inicio del _service worker_, de modo que cuando el trabajador pueda manejar la solicitud de recuperación desde el navegador, el recurso posiblemente ya se ha descargado total o parcialmente.
Esto hace que el caso en el que el trabajador tenga que empezar "no sea peor" que cuando el trabajador ya se ha iniciado y, en algunos casos, mejor.

El administrador de precarga envía el encabezado HTTP {{HTTPHeader("Service-Worker-Navigation-Preload")}} con las solicitudes de precarga, lo que permite personalizar las respuestas para las solicitudes de precarga.
Esto se podría usar, por ejemplo, para reducir los datos enviados a solo una parte de la página original o para personalizar la respuesta según el estado de inicio de sesión del usuario.

## Ejemplos

Los ejemplos aquí son de [Acelera el _Service Worker_ con precargas de navegación](https://developer.chrome.com/blog/navigation-preload/) (developer.chrome.com).

### Detectar características y habilitar precarga de navegación

A continuación, habilitamos la precarga de navegación en el controlador de eventos `activate` del _service worker_, después de usar primero {{domxref("ServiceWorkerRegistration.navigationPreload")}} para determinar si la función es compatible (esto devuelve el `NavigationPreloadManager` para el _service worker_ o `undefined` si la característica no es compatible).

```js
addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration.navigationPreload) {
        // ¡Habilitar precargas de navegación!
        await self.registration.navigationPreload.enable();
      }
    })(),
  );
});
```

### Usar una respuesta precargada

El siguiente código muestra un controlador de eventos de recuperación del _service worker_ que usa una respuesta ({{domxref("FetchEvent.preloadResponse")}}) precargada.

El controlador de eventos `fetch` llama a {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} para devolver una promesa a la página controlada.
Esta promesa se resolverá con el recurso solicitado, que puede ser desde la caché, una solicitud de recuperación precargada o una nueva solicitud de red.

Si hay una solicitud de URL coincidente en el objeto {{domxref("Cache")}}, el código devuelve una promesa resuelta para obtener la respuesta de la caché.
Si no se encuentra ninguna coincidencia en la caché, el código devuelve la respuesta precargada resuelta ({{domxref("FetchEvent.preloadResponse")}}).
Si no hay una entrada de caché coincidente o una respuesta precargada, el código inicia una nueva operación de recuperación desde la red y devuelve la promesa (no resuelta) para esa operación de recuperación.

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // Responder desde la caché si podemos
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;

      // De lo contrario, usa la respuesta precargada, si está allí
      const response = await event.preloadResponse;
      if (response) return response;

      // Si no, intenta en la red.
      return fetch(event.request);
    })(),
  );
});
```

### Respuestas personalizadas

El navegador envía el encabezado HTTP {{HTTPHeader("Service-Worker-Navigation-Preload")}} con solicitudes de precarga, con un valor de directiva predeterminado en `true`.
Esto permite a los servidores diferenciar entre solicitudes de recuperación normales y precargadas, y enviar diferentes respuestas en cada caso si es necesario.

> **Nota:** Si la respuesta de la precarga y las operaciones normales de recuperación pueden ser diferentes, entonces el servidor debe establecer `Vary: Service-Worker-Navigation-Preload` para garantizar que las diferentes respuestas se almacenen en caché.

El valor del encabezado se puede cambiar a cualquier otro valor de cadena usando {{domxref("NavigationPreloadManager.setHeaderValue()")}} para proporcionar contexto adicional para la operación de precarga.
Por ejemplo, puedes establecer el valor en el ID de tu recurso almacenado en caché más reciente, de modo que el servidor no devuelva ningún recurso a menos que realmente se necesite.
De manera similar, puedes configurar la información devuelta según el estado de autenticación en lugar de usar _cookies_.

El siguiente código muestra cómo establecer el valor de la directiva `header` en alguna variable `newValue`.

```js
navigator.serviceWorker.ready
  .then((registration) =>
    registration.navigationPreload.setHeaderValue(newValue),
  )
  .then(() => {
    console.log("¡Listo!");
  });
```

[Acelera el _Service Worker_ con precargas de navegación > Respuestas personalizadas para precargas](https://developer.chrome.com/blog/navigation-preload/) proporciona un ejemplo más completo de un sitio donde se construye la respuesta para una página web de artículo desde un encabezado y pie de página en caché, de modo que solo devuelva el contenido del artículo para una precarga.

### Obtener el estado

Puedes usar {{domxref("NavigationPreloadManager.getState()")}} para verificar si la precarga de navegación está habilitada y determinar qué valor de directiva se envía con el encabezado HTTP
{{HTTPHeader("Service-Worker-Navigation-Preload")}} para solicitudes de precarga.

El siguiente código muestra cómo obtener la promesa que se resuelve en un objeto `state` y registrar el resultado.

```js
navigator.serviceWorker.ready
  .then((registration) => registration.navigationPreload.getState())
  .then((state) => {
    console.log(state.enabled); // boolean
    console.log(state.headerValue); // string
  });
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Acelera el _Service Worker_ con precargas de navegación](https://developer.chrome.com/blog/navigation-preload/) (developer.chrome.com)
