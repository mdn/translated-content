---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
---

{{APIRef("XMLHttpRequest API")}}

`XMLHttpRequest` es un objeto [JavaScript](/es/docs/Web/JavaScript) que fue diseñado por Microsoft y adoptado por Mozilla, Apple y Google. Actualmente es un [estándar de la W3C](https://www.w3.org/TR/XMLHttpRequest/). Proporciona una forma fácil de obtener información de una URL sin tener que recargar la página completa. Una página web puede actualizar sólo una parte de la página sin interrumpir lo que el usuario está haciendo. `XMLHttpRequest` es ampliamente usado en la programación AJAX.

A pesar de su nombre, `XMLHttpRequest` puede ser usado para recibir cualquier tipo de dato, no solo XML, y admite otros formatos además de [HTTP](/en-US/HTTP) (incluyendo `file` y `ftp`).

Para crear una instancia de `XMLHttpRequest`, debes hacer lo siguiente:

```
var req = new XMLHttpRequest();
```

Para obtener más información de cómo usar `XMLHttpRequest`, mira [Usar XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

> [!NOTE]
> De forma predeterminada, Firefox 3 limita la cantidad de conexiones de `XMLHttpRequest` por servidor a 6 (las versiones previas limitan a 2 conexiones por servidor). Algunos sitios web interactivos pueden mantener una conexión `XMLHttpRequest` abierta, así que abrir múltiples sesiones a esos sitios puede derivar en congelamientos del navegador de una forma que la ventana no se actualiza y los controles no responden. Este valor puede ser cambiado al editar la preferencia `network.http.max-persistent-connections-per-server` en [`about:config`](/about:config).

## Resumen del método

| `void abort();`                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- |
| `string getAllResponseHeaders();`                                                                                                 |
| `ACString getResponseHeader(in AUTF8String header);`                                                                              |
| `[noscript] void init(in nsIPrincipal principal, in nsIScriptContext scriptContext, in nsPIDOMWindow ownerWindow);`               |
| `void open(in AUTF8String method, in AUTF8String url);`                                                                           |
| `[noscript] void openRequest(in AUTF8String method, in AUTF8String url, in boolean async, in AString user, in AString password);` |
| `void overrideMimeType(in AUTF8String mimetype);`                                                                                 |
| `void send([optional] in nsIVariant body);`                                                                                       |
| `void sendAsBinary(in DOMString body);`                                                                                           |
| `void setRequestHeader(in AUTF8String header, in AUTF8String value);`                                                             |

## Propiedades

- `channel`: `nsIChannel`
  - : El canal es usado por el objeto cuando se produce el pedido. Esto da `null` si el canal aún no fue creado. En el caso de un pedido de múltiples partes, este es el canal inicial, no las diferentes partes del pedido múltiple. **Es necesario tener privilegios elevados para acceder; sólo lectura.** {{ Non-standard_inline() }}
- `mozBackgroundRequest`: `booleano`
  - : Indica si el objeto representa o no un pedido de un servicio de fondo. Si es `true`, no se asocia una carga de grupo con el pedido, y los diálogos de seguridad no se muestran al usuario. **Es necesario tener privilegios elevados para acceder.** {{ Non-standard_inline() }}

    En los casos en que un diálogo de seguridad debe ser mostrado (como en una autentficación o la notificación de un certificado no válido), el pedido simplemente falla.

- `mozResponseArrayBuffer` {{ Non-standard_inline() }}
  : [`ArrayBuffer`](/es/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
  - : La respuesta al pedido en la forma de un arreglo de JavaScript. Esto es NULL si el pedido no fue exitoso o si todavía no ha sido enviado. **Sólo lectura.**
- `multipart`: `booleano`
  - : Indica cuando se espera que la respuesta sea o no una serie de mútiples documentos XML. Si se define como `true`, el tipo de contenido de la respuesta inicial debe ser `multipart/x-mixed-replace` u ocurrirá un error. Todos los pedidos deben ser asincrónicos.

    Esto permite el uso del push del servidor; para cada documento XML que se escribe para este pedido, se crea un nuevo XMLDOMdocument y se llama al manejador `onload` entre cada documento.

    > [!NOTE]
    > Cuando esto se elige, el manejador `onload` y otros manejadores de eventos no son reiniciados después de que el primer XMLdocument es cargado, y el manejador `onload` es llamado después de que cada parte de la respuesta es recibida.

- `onreadystatechange`
  : `nsIDOMEventListener`
  - : Una función del objeto JavaScript que se llama cuando el atributo `readyState` cambia. El callback se llama desde la interfaz del usuario.

    > [!WARNING]
    > Esto no debe ser usado desde código nativo. Tampoco debes usarlo con pedidos sincrónicos.

- `readyState`: `long`
  - : El estado del pedido:

    | Valor | Estado          | Descripción                                                                |
    | ----- | --------------- | -------------------------------------------------------------------------- |
    | `0`   | `UNINITIALIZED` | todavía no se llamó a `open()`.                                            |
    | `1`   | `LOADING`       | todavía no se llamó a `send()`.                                            |
    | `2`   | `LOADED`        | `send()` ya fue invocado, y los encabezados y el estado están disponibles. |
    | `3`   | `INTERACTIVE`   | Descargando; `responseText` contiene información parcial.                  |
    | `4`   | `COMPLETED`     | La operación está terminada.                                               |

- `responseText`: `AString`
  - : La respuesta al pedido como texto, o `null` si el pedido no fue exitoso o todavía no se envió. **Sólo lectura.**
- `responseXML`: `nsIDOMDocument`
  - : La respuesta al pedido como un objeto DOM[`Document`](/es/docs/Web/API/Document), o `null` si el pedido no fue exitoso, aún no fue enviado o no puede ser analizado como XML. La respuesta es analizada como si fuera `text/xml`. **Sólo lectura.**

    > [!NOTE]
    > Si el servidor no aplica el encabezado de tipo de contenido `text/xml`, puedes usar `overrideMimeType()` para forzar a `XMLHttpRequest` a analizarlo como XML igualmente.

- `status`: `unsigned long`
  - : El estado de la respuesta al pedido. Éste es el código HTTPresult (por ejemplo, `status` es 200 por un pedido exitoso). **Sólo lectura.**
- `statusText`: `AUTF8String`
  - : La cadena de respuesta que devuelve el HTTPserver. A diferencia de `status`, este incluye el texto completo del mensaje de respuesta ("`200 OK`", por ejemplo). **Sólo lectura.**
- `upload`: `nsIXMLHttpRequestUpload`
  - : El proceso de subida puede ser rastreado al agregar un registro de evento a `upload`.
- `withCredentials`: `booleano`
  - : Indica cuando el pedido de Access-Control entre sitios debe o no ser realizado usando credenciales como cookies o encabezados de autorización.

    > [!NOTE]
    > Esto nunca afecta los pedidos en para el propio sitio.

    El valor predeterminado es `false`.

## Métodos

### abort()

Aborta el pedido si éste ya fue enviado.

```
void abort();
```

###### Parámetros

Ninguno.

### getAllResponseHeaders()

Devuelve todos los encabezados de respuesta como una cadena.

> [!NOTE]
> Para pedidos multi partes, esto devuelve los encabezados de la parte _actual_ del pedido, no del canal original.

```
string getAllResponseHeaders();
```

###### Parámetros

Ninguno.

###### Valor devuelto

El texto de todos los encabezados de respuesta, o `null` si no se ha recibido ninguna respuesta.

### getResponseHeader()

Devuelve el texto de un encabezado específico.

```
ACString getResponseHeader(
 in AUTF8String header
);
```

###### Parámetros

- `header`
  - : El nombre del encabezado buscado.

###### Valor devuelto

Una cadena que contiene el texto de un encabezado específico, o `null` tanto si la respuesta no se ha recibido o el encabezado no existe en la respuesta.

### init()

Inicializa el objeto para que sea usado desde código C++.

> [!WARNING]
> **Aviso:** Este método _no_ debe ser llamado desde JavaScript.

```
[noscript] void init(
 in nsIPrincipal principal,
 in nsIScriptContext scriptContext,
 in nsPIDOMWindow ownerWindow
);
```

###### Parámetros

- `principal`
  - : El principal para usar en el pedido; no debe ser `null`.
- `scriptContext`
  - : El contexto del programa que usará en el pedido; no debe ser `null`.
- `ownerWindow`
  - : La ventana asociada con el pedido; puede ser `null`.

### open()

Inicializa el pedido. Este método es para ser usado desde código JavaScript, para inicializar un pedido desde código nativo, debes usar [`openRequest()`](</en/XMLHttpRequest#openRequest()>).

> [!NOTE]
> Llamar a este método en un pedido activo (uno para el cual `open()` o `openRequest()` ya han sido llamados) es equivalente a usar `abort()`.

```
void open(
 in AUTF8String method,
 in AUTF8String url,
 [optional] in boolean async,
 [optional] in AString user,
 [optional] in AString password
);
```

###### Parámetros

- `method`
  - : El método HTTP a usar: tanto "POST" o "GET". Se ignora para urls que no son de HTTP.
- `url`
  - : La URL a la que se envía el pedido.
- `async`
  - : Un parámetro booleano opcional, predeterminado es `true`, que indica si se debe o no realizar la operación de forma asíncrona. Si este valor es `false`, el método `send()` no se devuelve hasta que se reciba la respuesta completa. Si es `true`, la notificación de una transacción completada se proporciona mediante los oyentes de eventos. Esto debe ser `true` si el atributo `multipart` es verdadero o se lanzará una excepción.
- `user`
  - : El nombre de usuario es opcional solo es usado con fines de autenticación, de forma predeterminada es una cadena vacía.
- `password`
  - : La contraseña es opcional solo es usado con fines de autenticación, de forma predeterminada es una cadena vacía.

### openRequest()

Inicia la peticion, este metodo est

Inicializa la peticion. Este método se utiliza desde el código nativo, para inicializar una solicitud desde el código JavaScript, utilice `open ()` en su lugar.

> [!NOTE]
> Calling this method an already active request (one for which `open()` or `openRequest()` has already been called) is the equivalent of calling `abort()`.

```
void open(
 in AUTF8String method,
 in AUTF8String url,
 in boolean async,
 in AString user,
 in AString password
);
```

###### Parameters

- `method`
  - : The HTTPmethod to use; either "POST"or "GET". Ignored for non-HTTPURLs.
- `url`
  - : The URLto which to send the request.
- `async`
  - : An optional boolean parameter, defaulting to `true`, indicating whether or not to perform the operation asynchronously. If this value is `false`, the `send()` method does not return until the response is received. If `true`, notification of a completed transaction is provided using event listeners. This _must_ be true if the `multipart` attribute is `true`, or an exception will be thrown.
- `user`
  - : The optional user name to use for authentication purposes; by default, this is an empty string.
- `password`
  - : The optional password to use for authentication purposes; by default, this is an empty string.

### overrideMimeType()

Overrides the MIMEtype returned by the server.

> [!NOTE]
> This method must be called before `send()`.

```
void overrideMimeType(
 in AUTF8String mimetype
);
```

###### Parameters

- `mimetype`
  - : The type that should be used instead of the one returned by the server, if any.

### send()

Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent. If the request is synchronous, this method doesn't return until the response has arrived.

> [!NOTE]
> Any event listeners you wish to set must be set before calling `send()`.

```
void send(
 [optional] in nsIVariant body
);
```

###### Parameters

- `body`
  - : This may be an `nsIDocument`, `nsIInputStream`, or a string (an `nsISupportsString` if called from native code) that is used to populate the body of a POST request. Starting with Gecko 1.9.2, you may also specify an DOM{{ domxref("File") }} , and starting with Gecko 2.0 (Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1) you may also specify a [`FormData`](/es/docs/Web/API/FormData) object.

###### Notes

If the body is an `nsIDOMDocument`, it is serialized before being sent.

If it's an `nsIInputStream`, it must be compatible with `nsIUploadChannel`'s `setUploadStream()` method. In that case, a Content-Length header is added to the request, with its value obtained using `nsIInputStream`'s `available()` method. Any headers included at the top of the stream are treated as part of the message body. The stream's MIMEtype should be specified by setting the Content-Type header using the [`setRequestHeader()`](</en/XMLHttpRequest#setRequestHeader()>)method prior to calling `send()`.

### sendAsBinary()

A variant of the `send()` method that sends binary data.

```
void sendAsBinary(
 in DOMString body
);
```

###### Parameters

- `body`
  - : The request body as a DOMstring. This data is converted to a string of single-byte characters by truncation (removing the high-order byte of each character).

### setRequestHeader()

Sets the value of an HTTPrequest header.

> [!NOTE]
> You must call [`open()`](</en/XMLHttpRequest#open()>)before using this method.

```
void setRequestHeader(
 in AUTF8String header,
 in AUTF8String value
);
```

###### Parameters

- `header`
  - : The name of the header whose value is to be set.
- `value`
  - : The value to set as the body of the header.

## Implementation notes

`XMLHttpRequest` is implemented in Gecko using the `nsIJSXMLHttpRequest` and `nsIXMLHttpRequest` interfaces.

## See also

- [Using XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`FormData`](/es/docs/Web/API/FormData)
- [MDC AJAX introduction](/es/docs/Learn_web_development/Core/Scripting/Network_requests)
- [XMLHttpRequest - REST and the Rich User Experience](https://www.peej.co.uk/articles/rich-user-experience.html)
- [Microsoft documentation](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmobjxmlhttprequest.asp)
- [Apple developers' reference](https://developer.apple.com/internet/webcontent/xmlhttpreq.html)
- ["Using the XMLHttpRequest Object" (jibbering.com)](https://jibbering.com/2002/4/httprequest.html)
- [The XMLHttpRequest Object: W3C Working Draft](https://www.w3.org/TR/XMLHttpRequest/)
