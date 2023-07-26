---
title: Request
slug: Web/API/Request
---

{{APIRef("Fetch")}}

La interfaz **`Request`** de la [API Fetch](/es/docs/Web/API/Fetch_API) representa una solicitud de respuesta.

Puedes crear un nuevo objeto `Request` usando el constructor {{domxref("Request.Request()")}}, pero es preferible encontrar un objeto `Request` que sea devuelto como el resultado de otra operacion API, como un operador de servicio {{domxref("FetchEvent.request")}}.

## Constructor

- {{domxref("Request.Request()")}}
  - : Crea un nuevo objeto `Request`.

## Propiedades

- {{domxref("Request.method")}} {{readonlyInline}}
  - : Contiene el metodo de solicitud (`GET`, `POST`, etc.)
- {{domxref("Request.url")}} {{readonlyInline}}
  - : Contiene la URL de la solicitud.
- {{domxref("Request.headers")}} {{readonlyInline}}
  - : Contiene el objeto asociado de la solicitud {{domxref("Headers")}}
- {{domxref("Request.context")}} {{readonlyInline}} {{deprecated_inline()}}
  - : Contiene el contexto de la solicitud (p.ej., `audio`, `image`, `iframe`, etc.)
- {{domxref("Request.referrer")}} {{readonlyInline}}
  - : Contiene la referencia de la soliditud (p.ej., `client`).
- {{domxref("Request.referrerPolicy")}} {{readonlyInline}}
  - : Contiene la política de referencia de la solicitud (p.ej., `no-referrer`).
- {{domxref("Request.mode")}} {{readonlyInline}}
  - : Contiene el modo de la solicitud. (p.ej., `cors`, `no-cors`, `same-origin`, `navigate`.)
- {{domxref("Request.credentials")}} {{readonlyInline}}
  - : Contiene las credenciales de la solicitud (p.ej., `omit`, `same-origin`).
- {{domxref("Request.redirect")}} {{readonlyinline}}
  - : Contiene el modo de cómo son manipuladas las redirecciones. Puede ser `follow`, `error`, o `manual`.
- {{domxref("Request.integrity")}} {{readonlyInline}}
  - : Contiene el valor del subrecurso de integridad ([subresource integrity](/es/docs/Web/Security/Subresource_Integrity)) de la solicitud (p.ej., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- {{domxref("Request.cache")}} {{readonlyInline}}
  - : Contiene el modo de caché de la solicitud (p.ej., `default`, `reload`, `no-cache`).

`Request` implementa {{domxref("Body")}}, por lo que también tiene las siguientes propiedades disponibles:

- {{domxref("Body.body")}} {{readonlyInline}}
  - : Un simple getter usado para exponer un contenido del cuerpo {{domxref("ReadableStream")}}
- {{domxref("Body.bodyUsed")}} {{readonlyInline}}
  - : Almacena un {{domxref("Boolean")}} que declara si ya se ha usado el cuerpo en una respuesta.

## Métodos

- {{domxref("Request.clone()")}}
  - : Crea una copia del objeto actual `Request`.

`Request` implementa {{domxref("Body")}}, por lo que también tiene los siguientes métodos disponibles:

- {{domxref("Body.arrayBuffer()")}}
  - : Devuelve una promesa que se resuelve con una representación {{domxref("ArrayBuffer")}} del cuerpo de la solicitud.
- {{domxref("Body.blob()")}}
  - : Devuelve una promesa que se resuelve con una representación {{domxref("Blob")}} del cuerpo de la solicitud.
- {{domxref("Body.formData()")}}
  - : Devuelve una promesa que se resuelve con una representación {{domxref("FormData")}} del cuerpo de la solicitud.
- {{domxref("Body.json()")}}
  - : Devuelve una promesa que se resuelve con una representación {{domxref ("JSON")}} del cuerpo de la solicitud.
- {{domxref("Body.text()")}}
  - : Devuelve una promesa que se resuelve con una representación {{domxref("USVString")}} (text) del cuerpo de la solicitud.

> **Nota:** Las funciones {{domxref("Body")}} solo pueden ser ejecutadas una vez; Las siguientes llamadas se resolverán con strings/ArrayBuffers vacíos.

## Ejemplos

En el siguiente fragmento de código, creamos una nueva solicitud utilizando el constructor `Request()` (para un archivo de imagen en el mismo directorio que el script), luego devolvemos algunos valores de propiedad de la solicitud:

```js
const myRequest = new Request("http://localhost/flowers.jpg");

const myURL = myRequest.url; // http://localhost/flowers.jpg
const myMethod = myRequest.method; // GET
const myCred = myRequest.credentials; // omit
```

Puede obtener esta solicitud pasando el objeto `Request` como parámetro a una llamada {{domxref("GlobalFetch.fetch()")}}, por ejemplo:

```js
fetch(myRequest)
  .then((response) => response.blob())
  .then((blob) => {
    myImage.src = URL.createObjectURL(blob);
  });
```

En el siguiente fragmento de código, creamos una nueva solicitud utilizando el constructor `Request()` con algunos datos iniciales y contenido del cuerpo para una solicitud de API que necesita una carga útil del cuerpo:

```js
const myRequest = new Request("http://localhost/api", {
  method: "POST",
  body: '{"foo":"bar"}',
});

const myURL = myRequest.url; // http://localhost/api
const myMethod = myRequest.method; // POST
const myCred = myRequest.credentials; // omit
const bodyUsed = myRequest.bodyUsed; // true
```

> **Nota:** El tipo de cuerpo solo puede ser {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}} o tipo {{domxref("ReadableStream")}}, así que para añadir un objeto JSON a la carga útil, necesitas convertir a string (stringify) dicho objeto.

Puede obtener esta solicitud de API pasando el objeto `Request` como parámetro a una llamada {{domxref("GlobalFetch.fetch()")}}, por ejemplo, y obtener la respuesta:

```js
fetch(myRequest)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something went wrong on api server!");
    }
  })
  .then((response) => {
    console.debug(response);
    // ...
  })
  .catch((error) => {
    console.error(error);
  });
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [ServiceWorker API](/es/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/es/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/es/docs/Web/HTTP)
