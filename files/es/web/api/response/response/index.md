---
title: Response()
slug: Web/API/Response/Response
---

{{APIRef("Fetch")}}

El constructor **`Response()`** crea un nuevo objeto {{domxref("Response")}}

## Sintaxis

```
var miRespuesta = new Response(cuerpo,opciones);
```

### Parámetros

- _cuerpo_ {{optional_inline}}

  - : Un objeto que define el cuerpo de la respuesta. Puede ser `null`, o uno de los siguientes elementos:

    - {{domxref("Blob")}}
    - {{domxref("BufferSource")}}
    - {{domxref("FormData")}}
    - {{domxref("ReadableStream")}}
    - {{domxref("URLSearchParams")}}
    - {{domxref("USVString")}}

- _opciones_ {{optional_inline}}

  - : Un objeto que contiene las opciones de personalización para la respuesta HTTP. Las opciones posibles son:

    - `status`: El código de estado HTTP, p.e.: `200`.
    - `statusText`: El mensaje de estado asociado con el código de estado HTTP, p.e.: `OK`.
    - `headers`: Cualquier cabecera que quieras añadir a la respuesta. Puede ser un objeto {{domxref("Headers")}} o un objeto literal de {{domxref("ByteString")}} pares claves/valor (ver [Cabeceras HTTP](/es/docs/Web/HTTP/Headers) para más información).

## Ejemplos

En nuestro [ejemplo Fetch Response](https://github.com/mdn/fetch-examples/tree/master/fetch-response) (ver [Fetch Response live](http://mdn.github.io/fetch-examples/fetch-response/)) creamos un nuevo objeto `Response` usando el constructor, pasándole un nuevo objeto {{domxref("Blob")}} como cuerpo, y un objeto con `status` y`statusText` como opciones:

```js
var miBlob = new Blob();
var opciones = { status: 200, statusText: "Flipante!" };
var miRespuesta = new Response(miBlob, opciones);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Relacionado

- [ServiceWorker API](/es/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/es/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/es/docs/Web/HTTP)
