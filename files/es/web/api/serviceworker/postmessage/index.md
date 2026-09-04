---
title: "ServiceWorker: método postMessage()"
short-title: postMessage()
slug: Web/API/ServiceWorker/postMessage
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Service Workers API")}}{{securecontext_header}}{{AvailableInWorkers}}

El método **`postMessage()`** de la interfaz {{domxref("ServiceWorker")}} envía un mensaje al worker. El primer parámetro son los datos a enviar al worker. Los datos pueden ser cualquier objeto JavaScript que pueda ser procesado por el [algoritmo de clonación estructurada](/es/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

El service worker puede enviar información de vuelta a sus clientes usando el método {{domxref("Client.postMessage", "postMessage()")}}. El mensaje no se enviará de vuelta a este objeto `ServiceWorker`, sino al {{domxref("ServiceWorkerContainer")}} asociado disponible a través de {{domxref("navigator.serviceWorker")}}.

## Sintaxis

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### Parámetros

- `message`
  - : El objeto a entregar al worker; estará en el campo `data` del evento entregado al evento {{domxref("ServiceWorkerGlobalScope.message_event", "message")}}. Puede ser cualquier objeto JavaScript procesado por el [algoritmo de clonación estructurada](/es/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

    El parámetro `message` es obligatorio. Si los datos a pasar al worker no son importantes, se debe pasar `null` o `undefined` explícitamente.

- `transfer` {{optional_inline}}
  - : Un [arreglo](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) opcional de [objetos transferibles](/es/docs/Web/API/Web_Workers_API/Transferable_objects) para transferir su propiedad. La propiedad de estos objetos se transfiere al lado destino y ya no se pueden usar en el lado emisor. Estos objetos transferibles deben estar adjuntos al mensaje; de lo contrario, se moverían pero no serían accesibles en el extremo receptor.
- `options` {{optional_inline}}
  - : Un objeto opcional que contiene las siguientes propiedades:
    - `transfer` {{optional_inline}}
      - : Tiene el mismo significado que el parámetro `transfer`.

### Valor de retorno

Ninguno ({{jsxref("undefined")}}).

### Excepciones

- {{jsxref("SyntaxError")}}
  - : Se lanza si no se proporciona el parámetro `message`.

## Ejemplos

En este ejemplo se crea un {{domxref("ServiceWorker")}} y se envía un mensaje inmediatamente:

```js
navigator.serviceWorker.register("service-worker.js");

navigator.serviceWorker.ready.then((registration) => {
  registration.active.postMessage(
    "Mensaje de prueba enviado inmediatamente después de la creación",
  );
});
```

Para recibir el mensaje, el service worker, en `service-worker.js`, debe escuchar el evento {{domxref("ServiceWorkerGlobalScope.message_event", "message")}} en su ámbito global.

```js
// Esto debe estar en `service-worker.js`
addEventListener("message", (event) => {
  console.log(`Mensaje recibido: ${event.data}`);
});
```

Ten en cuenta que el service worker puede enviar mensajes de vuelta al hilo principal usando el método {{domxref("Client.postMessage()", "postMessage()")}}. Para recibirlo, el hilo principal necesita escuchar un evento {{domxref("ServiceWorkerContainer.message_event", "message")}} en el objeto {{domxref("ServiceWorkerContainer")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La interfaz {{domxref("ServiceWorker")}} a la que pertenece.
- Su contraparte, el método {{domxref("Client.postMessage()", "postMessage()")}} que un service worker debe usar para enviar un mensaje de vuelta al {{domxref("ServiceWorkerContainer")}} asociado.
