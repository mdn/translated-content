---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
---

{{HTTPSidebar}}

El encabezado de respuesta **`Access-Control-Allow-Credentials`** le dice al navegador si exponer la respuesta al código JavaScript (del frontend) cuando el modo credenciales en la petición es incluído.

Cuando las credenciales de una petición ({{domxref("Request.credentials")}}) es `include`, los navegadores sólo expondran la respuesta al código JavaScript del frontend si el valor de `Access-Control-Allow-Credentials` es `true`.

Las credenciales son cookies, encabezados de autorización o certíficados de cliente TLS.

Cuando se usa como parte de una respueste a una petición previa, indica si la petición real puede ser hecha utilizando credenciales. Note que peticiones {{HTTPMethod("GET")}} sencillas no tienen una solicitud previa, y por lo tanto, una petición es hecha por un recurso con credenciales, si el encabezado no regresa con el recurso, la respuesta es ignorada por el navegador y no es devuelto como contenido web.

El encabezado `Access-Control-Allow-Credentials` trabaja en conjunción con la propiedad {{domxref("XMLHttpRequest.withCredentials")}} o con la opción `credentials` en el constructor {{domxref("Request.Request()", "Request()")}} de la API Fetch. Para una petición CORS con credenciales, para que el navegador exponga la respuesta al código JavaScript del fronend, tanto el servidor (utilizando el encabezado `Access-Control-Allow-Credentials`) y el cliente (al configurar el modo de las credenciales para peticiones XHR, Fetch, o Ajax) se debe indicar que estan permitiendo la inclusión de credenciales.

| Tipo de encabezado                                                       | {{Glossary("Response header", "Respuesta del encabezado")}} |
| ------------------------------------------------------------------------ | ----------------------------------------------------------- |
| {{Glossary("Forbidden header name", "Nombre prohibido del encabezado")}} | no                                                          |

## Sintaxis

```
Access-Control-Allow-Credentials: true
```

## Directivas

- true
  - : El único valor válido para este encabezado es `true` (en minúsculas). Si no se necesitan credenciales, se debe omitir este encabezado (en lugar de colocar su valor como `false`).

## Ejemplos

Permitir credenciales:

```
Access-Control-Allow-Credentials: true
```

Utilizando [XHR](/es/docs/Web/API/XMLHttpRequest) con credenciales:

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

Utilizando [Fetch](/es/docs/Web/API/Fetch_API) con credenciales:

```js
fetch(url, {
  credentials: "include",
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("XMLHttpRequest.withCredentials")}}
- {{domxref("Request.Request()", "Request()")}}
