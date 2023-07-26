---
title: Response
slug: Web/API/Response
---

{{APIRef("Fetch API")}}

La interfaz **`Response`** de la [Fetch API](/es/docs/Web/API/Fetch_API) representa la respuesta a una petición.

Tú puedes crear un nuevo objeto `Response` usando el constructor{{domxref("Response.Response()")}}, pero es más probable encontrar un objeto Response siendo devuelto como resultado de la operación de otra API, por ejemplo un service worker {{domxref("Fetchevent.respondWith")}}, o un simple {{domxref("GlobalFetch.fetch()")}}.

## Constructor

- {{domxref("Response.Response","Response()")}}
  - : Crea un nuevo objeto `Response`.

## Propiedades

- {{domxref("Response.headers")}} {{readonlyinline}}
  - : Contiene el objeto {{domxref("Headers")}} asociado con la respuesta.
- {{domxref("Response.ok")}} {{readonlyinline}}
  - : Contiene un estado indicando si la respuesta fue exitosa (estado en el rango 200-299) o no.
- {{domxref("Response.redirected")}} {{ReadOnlyInline}}
  - : Indica si la respuesta es o no el resultado de una redirección; eso es, su lista de URL tiene más de una entrada.
- {{domxref("Response.status")}} {{readonlyinline}}
  - : Contiene el código de estado de la respuesta (e.g., `200` si fue exitosa).
- {{domxref("Response.statusText")}} {{readonlyinline}}
  - : Contiene el mensaje de estado correspondiente al código de estado (e.g., `OK` para el Código `200`).
- {{domxref("Response.type")}} {{readonlyinline}}
  - : Contiene el tipo de respuesta (e.g., `basic`, `cors`).
- {{domxref("Response.url")}} {{readonlyinline}}
  - : Contiene la URL de respuesta.
- {{domxref("Response.useFinalURL")}}
  - : Contiene un valor booleano indicando si ésta es la URL final de respuesta.

`Response` implementa {{domxref("Body")}}, de modo que además contiene las propiedades que se detallan a continuación:

- {{domxref("Body.body")}} {{readonlyInline}}
  - : Un simple método get que expone un {{domxref("ReadableStream")}} de los contenidos del body.
- {{domxref("Body.bodyUsed")}} {{readonlyInline}}
  - : Almacena un {{domxref("Boolean")}} en el cuál declara si el body ya fue enviado como respuesta anteriormente.

## Methods

- {{domxref("Response.clone()")}}
  - : Clona un Objeto Respuesta.
- {{domxref("Response.error()")}}
  - : Devuelve un nuevo objeto Respuesta asociado a un error de red.
- {{domxref("Response.redirect()")}}
  - : Crea una nueva respuesta con un URL distinto.
    `Response` iimplementa {{domxref("Body")}}, de modo que además contiene los métodos que se detallan a continuación:

<!---->

- {{domxref("Body.arrayBuffer()")}}
  - : Toma un flujo {{domxref("Response")}} y lo lee hasta completarlo. Devuelve una promesa que resuelve con un {{domxref("ArrayBuffer")}}.
- {{domxref("Body.blob()")}}
  - : Toma un flujo {{domxref("Response")}} y lo lee hasta completarlo. Devuelve una promesa que resuelve con un {{domxref("Blob")}}.
- {{domxref("Body.formData()")}}
  - : Toma un flujo {{domxref("Response")}} y lo lee hasta completarlo. Devuelve una promesa que resuelve con un objeto {{domxref("FormData")}}.
- {{domxref("Body.json()")}}
  - : Recibe un flujo {{domxref("Response")}} y lo lee hasta completarlo. Devuelve una promesa que resuelve como {{jsxref("JSON")}} el texto del Body enviado.
- {{domxref("Body.text()")}}
  - : Recibe un flujo {{domxref("Response")}} y lo lee hasta completarlo. Devuelve una promesa que resuelve con un {{domxref("USVString")}} (texto).

## Examples

En nuestro [ejemplo básico de ferch](https://github.com/mdn/fetch-examples/tree/gh-pages/basic-fetch) ([ejecutar el ejemplo](http://mdn.github.io/fetch-examples/basic-fetch/)) usamos una llamada `fetch()` para descargar una imagen y mostrarla en una etiqueta {{htmlelement("img")}} . La llamda a `fetch()` call devuelve una promesa, la cual resuelve a un objeto `Response` asociado a la operación fetch.

Observa como ya que lo que estamos solicitando es una imagen, necesitamos ejecutar {{domxref("Body.blob")}} ({{domxref("Response")}} implements body) para darle a la respuesta su tipo MIME correcto.

```js
var myImage = document.querySelector(".my-image");
fetch("flowers.jpg")
  .then(function (response) {
    return response.blob();
  })
  .then(function (blob) {
    var objectURL = URL.createObjectURL(blob);
    myImage.src = objectURL;
  });
```

También puedes usar el constructor {{domxref("Response.Response()")}} para crear tus objetos `Response` personalizados:

```js
var myResponse = new Response();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [ServiceWorker API](/es/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/es/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/es/docs/Web/HTTP)
