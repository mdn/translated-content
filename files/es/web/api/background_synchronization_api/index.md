---
title: API de Background Synchronization
slug: Web/API/Background_Synchronization_API
l10n:
  sourceCommit: dd84b3b089d199be3771d6afe01e068b19889e71
---

{{DefaultAPISidebar("Background Sync")}}{{Securecontext_Header}}{{AvailableInWorkers}}

La **API de Background Synchronization** habilita a una aplicación web pospongan tareas para que se puedan ejecutar en un [service worker](/es/docs/Web/API/Service_Worker_API) una vez el usuario tenga conexión de red estable.

## Conceptos y uso

La API de Background Synchronization permite que las aplicaciones web pospongan la sincronización con el servidor a su service worker para que la gestione más tarde, si el dispositivo está sin conexión. Entre sus usos se incluye el envío de solicitudes en segundo plano si no se pudieron enviar mientras se usaba la aplicación.

Por ejemplo, una aplicación de cliente de correo puede dejar que sus usuarios envíen correos cuando quieran, incluso si el dispositivo no tiene conexión de red. El frontend de la aplicación se limita a registrar una solicitud de sincronización y el service worker recibe una alerta cuando la red vuelve a estar presente y se encarga de la sincronización.

La interfaz {{domxref('SyncManager')}} está disponible a través de {{domxref('ServiceWorkerRegistration.sync')}}. Una etiqueta identificadora única se establece para "nombrar" el evento de sincronización, que después se puede escuchar dentro del script {{domxref('ServiceWorker')}}. Una vez el evento se reciba, puedes ejecutar cualquier funcionalidad disponible, como enviar solicitudes al servidor.

Como esta API depende de service workers, la funcionalidad proporcionada por esta API solo está disponible en un contexto seguro.

## Interfaces

- {{domxref('SyncManager')}} {{Experimental_Inline}}
  - : Registra las tareas que se ejecutarán en un serviceworker posteriormente con conectividad de red. Estas tareas se denominan _solicitudes de sincronización en segundo plano_.
- {{domxref('SyncEvent')}} {{Experimental_Inline}}
  - : Representa un evento de sincronización, enviado al [ámbito global](/es/docs/Web/API/ServiceWorkerGlobalScope) de un {{domxref('ServiceWorker')}}. Proporciona una manera de ejecutar tareas en el service worker una vez que el dispositivo tenga conectividad de red.

### Extensiones a otras interfaces

Las siguientes adiciones a la [API de Service Worker](/es/docs/Web/API/Service_Worker_API) proporciona un punto de entrada para configurar la sincronización en segundo plano.

- {{domxref("ServiceWorkerRegistration.sync")}} {{ReadOnlyInline}}
  - : Devuelve una referencia a la interfaz {{domxref("SyncManager")}} para registrar tareas que se ejecutarán una vez que el dispositivo tenga conectividad de red.
- Evento {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}}
  - : Un controlador de eventos que se activa cuando se produce un evento {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}}. Esto ocurre en cuanto la red está disponible.

## Ejemplos

Los siguientes ejemplos muestran cómo utilizar la interfaz.

### Solicitar una sincronización en segundo plano

La siguiente función asincrónica registra una sincronización en segundo plano desde un contexto de navegación:

```js
async function syncMessagesLater() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.sync.register("sync-messages");
  } catch {
    console.log("Background Sync could not be registered!");
  }
}
```

### Verificar una sincronización en segundo plano por etiqueta

Este código verifica si una tarea de sincronización en segundo plano con una etiqueta determinada está registrada.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.sync.getTags().then((tags) => {
    if (tags.includes("sync-messages")) {
      console.log("Messages sync already requested");
    }
  });
});
```

### Escuchar una sincronización en segundo plano dentro de un Service Worker

El siguiente ejemplo muestra cómo responder a un evento de sincronización en segundo plano en el service worker.

```js
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-messages") {
    event.waitUntil(sendOutboxMessages());
  }
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Presentamos la sincronización en segundo plano](https://developer.chrome.com/blog/background-sync/)
