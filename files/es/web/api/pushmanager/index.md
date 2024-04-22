---
title: PushManager
slug: Web/API/PushManager
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{ApiRef("Push API")}}

La interfaz **`PushManager`** de la [API Push](/es/docs/Web/API/Push_API) proporciona una forma de recibir notificaciones de servidores de terceros, así como solicitar URL para notificaciones push.

Se accede a esta interfaz a través de la propiedad {{domxref("ServiceWorkerRegistration.pushManager")}}.

## Propiedades estáticas

- [`PushManager.supportedContentEncodings`](/es/docs/Web/API/PushManager/supportedContentEncodings_static)
  - : Devuelve una matriz de codificaciones de contenido admitidas que se pueden usar para cifrar la carga útil de un mensaje push.

## Métodos de instancia

- {{domxref("PushManager.getSubscription()")}}
  - : Recupera una suscripción push existente. Devuelve un objeto {{jsxref("Promise")}} que se resuelve en un objeto {{domxref("PushSubscription")}} que contiene detalles de una suscripción existente. Si no existe una suscripción existente, esto se resuelve en un valor `null`.
- {{domxref("PushManager.permissionState()")}}
  - : Devuelve un {{jsxref("Promise")}} que resuelve el estado de permiso del {{domxref("PushManager")}} actual, que será `'granted'`, `'denied'` o `'prompt'`.
- {{domxref("PushManager.subscribe()")}}
  - : Se suscribe a un servicio push. Devuelve un objeto {{jsxref("Promise")}} que se resuelve en un objeto {{domxref("PushSubscription")}} que contiene detalles de una suscripción push. Se crea una nueva suscripción push si el trabajador del servicio actual no tiene una suscripción existente.

### Métodos obsoletos

- {{domxref("PushManager.hasPermission()")}} {{deprecated_inline}}
  - : Devuelve un {{jsxref("Promise")}} que se resuelve en `PushPermissionStatus` de la aplicación web solicitante, que será `granted`, `denied` o `default`. Reemplazado por {{domxref("PushManager.permissionState()")}}.
- {{domxref("PushManager.register()")}} {{deprecated_inline}}
  - : Se suscribe a una suscripción push. Reemplazado por {{domxref("PushManager.subscribe()")}}.
- {{domxref("PushManager.registrations()")}} {{deprecated_inline}}
  - : Recupera suscripciones push existentes. Reemplazado por {{domxref("PushManager.getSubscription()")}}.
- {{domxref("PushManager.unregister()")}} {{deprecated_inline}}
  - : Anula el registro y elimina un extremo de suscripción especificado. En la API actualizada, se anula el registro de una suscripción llamando al método {{domxref("PushSubscription.unsubscribe()")}}.

## Example

```js
this.onpush = (event) => {
  console.log(event.data);
  // Desde aquí podemos escribir los datos en una IndexedDB, enviarlos
  // a cualquier ventana abierta, mostrar una notificación, etc.
};

navigator.serviceWorker
  .register("serviceworker.js")
  .then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager.subscribe().then(
      (pushSubscription) => {
        console.log(pushSubscription.endpoint);
        // Los detalles de suscripción push que necesita el servidor
        // de aplicaciones ahora están disponibles y se pueden enviar
        // mediante, por ejemplo, XMLHttpRequest.
      },
      (error) => {
        console.error(error);
      },
    );
  });
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [API Push](/es/docs/Web/API/Push_API)
- [API de Trabajador de Servicio](/es/docs/Web/API/Service_Worker_API)
