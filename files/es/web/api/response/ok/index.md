---
title: Response.ok
slug: Web/API/Response/ok
---

{{APIRef("Fetch")}}
La propiedad de solo lectura **`ok`** de la interfaz {{domxref("Response")}} contiene un Booleano que indica si la respuesta fue exitosa (estado en un rango de 200 a 299) o no.

## Sintaxis

```
var miOK = respuesta.ok;
```

### Valor

Un {{domxref("Boolean")}}.

## Ejemplo

En nuestro [ejemplo de Fetch Response](https://github.com/mdn/fetch-examples/tree/master/fetch-response) (véase [Fetch Response en vivo](http://mdn.github.io/fetch-examples/fetch-response/)) creamos un nuevo {{domxref("Request")}} usando el constructor {{domxref("Request.Request","Request()")}}, pasando una ruta a un JPG. Luego traemos esta petición usando {{domxref("GlobalFetch.fetch","fetch()")}}, extraemos un blob de la respuesta usando {{domxref("Body.blob")}}, creamos un objeto URL usando {{domxref("URL.createObjectURL")}}, y mostrar esto en un {{htmlelement("img")}}.

> **Nota:** en la parte superior del bloque de `fetch()` imprimimos el valor de `ok` en la consola.

```js
var imagen = document.querySelector("img");

var peticion = new Request("flowers.jpg");

fetch(peticion).then(function (respuesta) {
  console.log(respuesta.ok); //retorna true si la respuesta fue exitosa
  respuesta.blob().then(function (miBlob) {
    var objectoURL = URL.createObjectURL(miBlob);
    imagen.src = objectURL;
  });
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
