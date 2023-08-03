---
title: fetch()
slug: Web/API/fetch
---

{{APIRef("Fetch API")}}

El método **`fetch()`** lanza el proceso de solicitud de un recurso de la red. Esto devuelve una promesa que resuelve al objeto {{domxref("Response")}} que representa la respuesta a la solicitud realizada.

Tanto {{domxref("Window")}} como {{domxref("WorkerGlobalScope")}} implementan `WorkerOrGlobalScope`, por lo que el método `fetch()` está disponible en prácticamente cualquier contexto desde el que se pueda necesitar solicitar un recurso.

Una promesa {{domxref("fetch","fetch()")}} se rechaza con un {{jsxref("TypeError")}} cuando sucede un error en la red, aunque normalmente significa un tema de permisos o similar. Una comprobación más precisa de una solicitud con `fetch()` debería comprobar que la promesa se resuelve, y que la propiedad {{domxref("Response.ok")}} tiene valor `true`. Un estatus HTTP 404 no constituye un error de red.

El método `fetch()` es controlado por la directiva `connect-src` de la [Política de Seguridad de Contenido (Content Security Policy)](/es/docs/Security/CSP/CSP_policy_directives) en lugar de la directiva del recurso que se solicita.

> **Nota:** Los parámetros del método `fetch()` son indénticos a los del constructor de {{domxref("Request.Request","Request()")}}.

## Sintaxis

```
Promise<Response> fetch(input[, init]);
```

### Parámetros

- _input_

  - : Define el recurso que se quiere solicitar. Puede ser:

    - Un {{domxref("USVString")}} con la URL del recurso a solicitar. Algunos navegadores aceptan los esquemas `blob:` y `data:`.
    - Un objeto {{domxref("Request")}}.

- _init_ {{optional_inline}}

  - : Objeto de opciones que contiene configuraciones para personalizar la solicitud. Estas opciones pueden ser:

    - `method`: El método de solicitud, p.ej., `GET`, `POST`.
    - `headers`: Cualquier cabecera que se quiera añadir a la solicitud, contenidas en un objeto {{domxref("Headers")}} o un objeto literal con valores {{domxref("ByteString")}}.
    - `body`: Cualquier cuerpo que se quiera añadir a la solicitud: puede ser un {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, u objeto {{domxref("USVString")}}. Nótese que las solicitudes con métodos `GET` o `HEAD` no pueden tener cuerpo.
    - `mode`: El modo a usar en la solicitud, p.ej., `cors`, `no-cors`, o `same-origin`.
    - `credentials`: Las credenciales que se quieran utilizar para la solicitud: `omit`, `same-origin`, o `include`. Para enviar automáticamente las cookies del dominio actual, debe indicarse esta opción. Desde Chrome 50, esta propiedad también acepta una instancia de {{domxref("FederatedCredential")}} o de {{domxref("PasswordCredential")}}.
    - `cache`: El modo de caché a utilizar en la solicitud: `default`, `no-store`, `reload`, `no-cache`, `force-cache`, o `only-if-cached`.
    - `redirect`: El modo de redirección a usar: `follow` (seguir redirecciones automáticamente), `error` (abortar si sucede un error durante la redirección), o `manual` (gestionar redirecciones manualmente). El valor por defecto en Chrome es `follow` (hasta la versión 46 era `manual`).
    - `referrer`: Un {{domxref("USVString")}} que especifique `no-referrer`, `client`, o una URL. El valor por defecto es `client`.
    - `referrerPolicy`: Especifica el valor de la cabecera HTTP referer. Puede ser `no-referrer`, `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin`, `unsafe-url`.
    - `integrity`: Contiene el valor de [integridad de subrecurso (subresource integrity)](/es/docs/Web/Security/Subresource_Integrity) de la solicitud (p.ej., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
    - `keepalive`: La opción `keepalive` se puede usar para permitir que recurso dure más que la página. Las solicitudes con el indicador `keepalive` son un reemplazo de la API {{domxref("Navigator.sendBeacon()")}}.
    - `signal`: Una instancia de objeto {{domxref("AbortSignal")}}; permite comunicarse con con una solicitud vigente y abortarla si se desea via {{domxref("AbortController")}}.

### Return value

Una {{domxref("Promise")}} que resuelve a un objeto {{domxref("Response")}}.

### Excepciones

| **Tipo**     | **Descriptción**                                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `AbortError` | Se abortó la solicitud (mediante {{domxref("AbortController.abort()")}}).                                                                                          |
| `TypeError`  | Desde [Firefox 43](/es/docs/Mozilla/Firefox/Releases/43), `fetch()` lanza un `TypeError` si la URL tiene credenciales, como en `http://usuario:clave@ejemplo.com`. |

## Ejemplo

En el ejemplo de [solicitud con Request](https://github.com/mdn/fetch-examples/tree/master/fetch-request) (ver [Fetch Request live](https://mdn.github.io/fetch-examples/fetch-request/)) creamos un nuevo objeto {{domxref("Request")}} usando el constructor pertinente, y realizamos una solicitud usando `fetch()`. Dado que estamos solicitando una imagen, ejecutamos {{domxref("Body.blob()")}} en la respuesta para darle el tipo MIME correspondiente para que sea gestionada apropiadamente, luego creamos un objeto URL de ella para mostrarla en un elemento {{htmlelement("img")}}.

```js
var miImagen = document.querySelector("img");

var miSolicitud = new Request("flores.jpg");

fetch(miSolicitud)
  .then(function (respuesta) {
    return respuesta.blob();
  })
  .then(function (respuesta) {
    var objeto = URL.createObjectURL(respuesta);
    miImagen.src = objeto;
  });
```

En el ejemplo de [solicitud con inicializador y Request](https://github.com/mdn/fetch-examples/blob/master/fetch-with-init-then-request/index.html) (ver [Fetch Request init live](https://mdn.github.io/fetch-examples/fetch-with-init-then-request/)) hacemos lo mismo pero además pasamos un objeto inicializador cuando invocamos el `fetch()`:

```js
var miImagen = document.querySelector('img');

var misCabeceras = new Headers();
misCabeceras.append('Content-Type', 'image/jpeg');

var miInicializador = { method: 'GET',
                        headers: misCabeceras,
                        mode: 'cors',
                        cache: 'default' };

var miSolicitud = new Request('flores.jpg');

fetch(miSolicitud,miInicializador).then(function(respuesta) {
  ...
});
```

Nótese que también podríamos pasar el objeto inicializador con el constructor de `Request` para conseguir el mismo efecto, p.ej.:

```js
var miSolicitud = new Request("flores.jpg", miInicializador);
```

También se puede usar un objeto literal a modo de `headers` en `init`.

```js
var miInicializador = {
  method: "GET",
  headers: {
    "Content-Type": "image/jpeg",
  },
  mode: "cors",
  cache: "default",
};

var myRequest = new Request("flowers.jpg", miInicializador);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Fetch API](/es/docs/Web/API/Fetch_API)
- [ServiceWorker API](/es/docs/Web/API/ServiceWorker_API)
- [Control de acceso HTTP (CORS)](/es/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/es/docs/Web/HTTP)
