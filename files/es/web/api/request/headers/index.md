---
title: Request.headers
slug: Web/API/Request/headers
---

{{APIRef("Fetch")}}

La propiedad de solo lectura **headers** de la interface {{domxref("Request")}} es un objeto de tipo {{domxref("Headers")}}, asociado a la petición.

## Sintax

```
var myHeaders = request.headers;
```

### Valor

Un objeto de tipo {{domxref("Headers")}}.

## Ejemplo

En el siguiente fragmento de código, crearemos una nueva petición utilizando el constructor del {{domxref("Request.Request()")}} (para un archivo de imagen ubicado en el mismo directorio del script), guardamos el encabezado de la petición en una variable:

```js
var myRequest = new Request("flowers.jpg");
var myHeaders = myRequest.headers; // Headers {}
```

Para agregar encabezados al objeto {{domxref("Headers")}} usamos {{domxref("Headers.append")}}; creamos una nueva petición usando el parametro init del constructor y asignamos los encabezados como una opción del parametro init:

```js
var myHeaders = new Headers();
myHeaders.append("Content-Type", "image/jpeg");

var myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

var myRequest = new Request("flowers.jpg", myInit);

myContentType = myRequest.headers.get("Content-Type"); // returns 'image/jpeg'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [ServiceWorker API](/es/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/es/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/es/docs/Web/HTTP)
