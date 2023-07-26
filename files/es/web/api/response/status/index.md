---
title: Response.status
slug: Web/API/Response/status
---

{{APIRef("Fetch")}}

La propiedad de solo lectura **`status`** de la interfaz {{domxref("Response")}} contiene el código de estado de la respuesta (ejm., `200` para un éxito).

## Sintaxis

```
var myStatus = response.status;
```

### Valor

Un número (para ser preciso, uno corto sin signo).

## Ejemplo

En nuestro [ejemplo Fetch Response](https://github.com/mdn/fetch-examples/tree/master/fetch-response) (ver [Fetch Response en vivo](http://mdn.github.io/fetch-examples/fetch-response/)) nosotros creamos un nuevo objeto {{domxref("Request")}} usando el constructor {{domxref("Request.Request","Request()")}}, pasándole una ruta JPG. Luego buscamos esta solicitud usando {{domxref("GlobalFetch.fetch","fetch()")}}, extraemos un blob de la respuesta usando {{domxref("Body.blob")}}, creamos un objeto URL fuera de ella usando {{domxref("URL.createObjectURL")}}, y mostramos esto en un {{htmlelement("img")}}.

Tenga en cuenta que en la parte superior del bloque `fetch()` registramos el valor de la respuesta `status` en la consola.

```js
var myImage = document.querySelector("img");

var myRequest = new Request("flowers.jpg");

fetch(myRequest).then(function (response) {
  console.log(response.status); // returns 200
  response.blob().then(function (myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [API de Servicio Worker](/es/docs/Web/API/ServiceWorker_API)
- [Control de acceso HTTP (CORS)](/es/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/es/docs/Web/HTTP)
