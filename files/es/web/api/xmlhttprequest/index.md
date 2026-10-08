---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Los objetos `XMLHttpRequest` (XHR) se usan para interactuar con servidores. Permiten recuperar datos de una URL sin necesidad de recargar la página completa, lo que hace posible actualizar solo una parte de la página web sin interrumpir la actividad del usuario.

{{InheritanceDiagram}}

A pesar de su nombre, `XMLHttpRequest` puede utilizarse para obtener cualquier tipo de datos, no solo XML.

Si tu comunicación necesita recibir datos de eventos o de mensajes desde un servidor, considera usar [eventos enviados por el servidor](/es/docs/Web/API/Server-sent_events) a través de la interfaz {{domxref("EventSource")}}. Para una comunicación bidireccional simultánea (full-duplex), [WebSockets](/es/docs/Web/API/WebSockets_API) puede ser una mejor opción.

## Constructor

- {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}
  - : El constructor inicializa un `XMLHttpRequest`. Debe llamarse antes de realizar cualquier otra llamada a un método.

## Propiedades de instancia

_Esta interfaz también hereda las propiedades de {{domxref("XMLHttpRequestEventTarget")}} y de {{domxref("EventTarget")}}._

- {{domxref("XMLHttpRequest.readyState")}} {{ReadOnlyInline}}
  - : Devuelve un número que representa el estado de la solicitud.
- {{domxref("XMLHttpRequest.response")}} {{ReadOnlyInline}}
  - : Devuelve un {{jsxref("ArrayBuffer")}}, un {{domxref("Blob")}}, un {{domxref("Document")}}, un objeto de JavaScript o una cadena, según el valor de {{domxref("XMLHttpRequest.responseType")}}, que contiene el cuerpo de la entidad de la respuesta.
- {{domxref("XMLHttpRequest.responseText")}} {{ReadOnlyInline}}
  - : Devuelve una cadena que contiene la respuesta a la solicitud como texto, o `null` si la solicitud no tuvo éxito o aún no se ha enviado.
- {{domxref("XMLHttpRequest.responseType")}}
  - : Especifica el tipo de la respuesta.
- {{domxref("XMLHttpRequest.responseURL")}} {{ReadOnlyInline}}
  - : Devuelve la URL serializada de la respuesta, o una cadena vacía si la URL es nula.
- {{domxref("XMLHttpRequest.responseXML")}} {{ReadOnlyInline}}
  - : Devuelve un {{domxref("Document")}} con la respuesta a la solicitud, o `null` si la solicitud no tuvo éxito, aún no se ha enviado o no se puede analizar como XML o HTML. No está disponible en [Web Workers](/es/docs/Web/API/Web_Workers_API).
- {{domxref("XMLHttpRequest.status")}} {{ReadOnlyInline}}
  - : Devuelve el [código de estado de respuesta HTTP](/es/docs/Web/HTTP/Reference/Status) de la solicitud.
- {{domxref("XMLHttpRequest.statusText")}} {{ReadOnlyInline}}
  - : Devuelve una cadena que contiene el mensaje de estado de la respuesta enviado por el servidor HTTP. A diferencia de {{domxref("XMLHttpRequest.status")}}, esto incluye el texto completo del mensaje de respuesta (por ejemplo, `"OK"`).

    > [!NOTE]
    > Según la especificación de HTTP/2 {{RFC(7540, "Response Pseudo-Header Fields", "8.1.2.4")}}, HTTP/2 no define una forma de transmitir la versión o la frase de razón que se incluyen en la línea de estado de HTTP/1.1.

- {{domxref("XMLHttpRequest.timeout")}}
  - : El tiempo en milisegundos que puede tardar una solicitud antes de ser cancelada automáticamente.
- {{domxref("XMLHttpRequest.upload")}} {{ReadOnlyInline}}
  - : Un {{domxref("XMLHttpRequestUpload")}} que representa el proceso de carga.
- {{domxref("XMLHttpRequest.withCredentials")}}
  - : Devuelve `true` si las solicitudes `Access-Control` entre sitios deben hacerse usando credenciales, como cookies o cabeceras de autorización; de lo contrario, devuelve `false`.

### Propiedades no estándar

- `XMLHttpRequest.mozAnon` {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Un booleano. Si es true, la solicitud se enviará sin cookies ni cabeceras de autenticación.
- `XMLHttpRequest.mozSystem` {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Un booleano. Si es true, no se aplicará la política del mismo origen a la solicitud.

## Métodos de instancia

- {{domxref("XMLHttpRequest.abort()")}}
  - : Cancela la solicitud si ya se ha enviado.
- {{domxref("XMLHttpRequest.getAllResponseHeaders()")}}
  - : Devuelve todas las cabeceras de respuesta, separadas por {{Glossary("CRLF")}}, como una cadena de texto, o `null` si no se ha recibido ninguna respuesta.
- {{domxref("XMLHttpRequest.getResponseHeader()")}}
  - : Devuelve la cadena que contiene el texto de la cabecera indicada, o `null` si aún no se ha recibido la respuesta o si la cabecera no existe en ella.
- {{domxref("XMLHttpRequest.open()")}}
  - : Inicializa una solicitud.
- {{domxref("XMLHttpRequest.overrideMimeType()")}}
  - : Sobrescribe el tipo MIME que devuelve el servidor.
- {{domxref("XMLHttpRequest.send()")}}
  - : Envía la solicitud. Si la solicitud es asíncrona (que es el comportamiento predeterminado), este método devuelve el control tan pronto como se envía la solicitud.
- {{domxref("XMLHttpRequest.setAttributionReporting()")}} {{securecontext_inline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Indica que quieres que la respuesta a la solicitud pueda registrar una fuente de atribución o un evento de activación.
- {{domxref("XMLHttpRequest.setPrivateToken()")}} {{experimental_inline}}
  - : Añade información de [token de estado privado](/es/docs/Web/API/Private_State_Token_API/Using) a una llamada `XMLHttpRequest` para iniciar operaciones con tokens de estado privado.
- {{domxref("XMLHttpRequest.setRequestHeader()")}}
  - : Establece el valor de una cabecera de solicitud HTTP. Debes llamar a `setRequestHeader()` después de {{domxref("XMLHttpRequest.open", "open()")}}, pero antes de {{domxref("XMLHttpRequest.send", "send()")}}.

## Eventos

_Esta interfaz también hereda los eventos de {{domxref("XMLHttpRequestEventTarget")}}._

- {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}}
  - : Se dispara cada vez que cambia la propiedad {{domxref("XMLHttpRequest.readyState", "readyState")}}.
    También está disponible mediante la propiedad de manejador de eventos `onreadystatechange`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("XMLSerializer")}}: serialización de un árbol DOM a XML
- [Uso de XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Fetch API](/es/docs/Web/API/Fetch_API)
