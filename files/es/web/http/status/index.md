---
title: Códigos de estado de respuesta HTTP
slug: Web/HTTP/Status
---

{{HTTPSidebar}}

Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:

1. Respuestas informativas (`100`–`199`),
2. Respuestas satisfactorias (`200`–`299`),
3. Redirecciones (`300`–`399`),
4. Errores de los clientes (`400`–`499`),
5. y errores de los servidores (`500`–`599`).

Los códigos de estado se definen en la sección 10 de[RFC 2616](https://tools.ietf.org/html/rfc2616#section-10). Puedes obtener las especificaciones actualizadas en [RFC 7231.](https://tools.ietf.org/html/rfc7231#section-6.5.1)

## Respuestas informativas

- {{HTTPStatus(100, "100 Continue")}}
  - : Esta respuesta provisional indica que todo hasta ahora está bien y que el cliente debe continuar con la solicitud o ignorarla si ya está terminada.
- {{HTTPStatus(101, "101 Switching Protocol")}}
  - : Este código se envía en respuesta a un encabezado de solicitud {{HTTPHeader("Upgrade")}} por el cliente e indica que el servidor acepta el cambio de protocolo propuesto por el agente de usuario.
- {{HTTPStatus(102, "102 Processing")}} ({{Glossary("WebDAV")}})
  - : Este código indica que el servidor ha recibido la solicitud y aún se encuentra procesandola, por lo que no hay respuesta disponible.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Este código de estado está pensado principalmente para ser usado con el encabezado {{HTTPHeader("Link")}}, permitiendo que el agente de usuario empiece a [pre-cargar](/es/docs/Web/HTML/Attributes/rel/preload) recursos mientras el servidor prepara una respuesta.

## Respuestas satisfactorias

- `GET`: El recurso se ha obtenido y se transmite en el cuerpo del mensaje.
- `HEAD`: Los encabezados de entidad están en el cuerpo del mensaje.
- `PUT` o `POST`: El recurso que describe el resultado de la acción se transmite en el cuerpo del mensaje.
- `TRACE`: El cuerpo del mensaje contiene el mensaje de solicitud recibido por el servidor.

<!---->

- {{HTTPStatus(200, "200 OK")}}
  - : La solicitud ha tenido éxito. El significado de un éxito varía dependiendo del método HTTP:
- {{HTTPStatus(201, "201 Created")}}
  - : La solicitud ha tenido éxito y se ha creado un nuevo recurso como resultado de ello. Ésta es típicamente la respuesta enviada después de una petición PUT.
- {{HTTPStatus(202, "202 Accepted")}}
  - : La solicitud se ha recibido, pero aún no se ha actuado. Es una petición "sin compromiso", lo que significa que no hay manera en HTTP que permite enviar una respuesta asíncrona que indique el resultado del procesamiento de la solicitud. Está pensado para los casos en que otro proceso o servidor maneja la solicitud, o para el procesamiento por lotes.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : La petición se ha completado con éxito, pero su contenido no se ha obtenido de la fuente originalmente solicitada, sino que se recoge de una copia local o de un tercero. Excepto esta condición, se debe preferir una respuesta de 200 OK en lugar de esta respuesta.
- {{HTTPStatus(204, "204 No Content")}}
  - : La petición se ha completado con éxito pero su respuesta no tiene ningún contenido, aunque los encabezados pueden ser útiles. El agente de usuario puede actualizar sus encabezados en caché para este recurso con los nuevos valores.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : La petición se ha completado con éxito, pero su respuesta no tiene contenidos y además, el agente de usuario tiene que inicializar la página desde la que se realizó la petición, este código es útil por ejemplo para páginas con formularios cuyo contenido debe borrarse después de que el usuario lo envíe.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : La petición servirá parcialmente el contenido solicitado. Esta característica es utilizada por herramientas de descarga como wget para continuar la transferencia de descargas anteriormente interrumpidas, o para dividir una descarga y procesar las partes simultáneamente.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV")}})
  - : Una respuesta Multi-Estado transmite información sobre varios recursos en situaciones en las que varios códigos de estado podrían ser apropiados. El cuerpo de la petición es un mensaje XML.
- {{HTTPStatus(208, "208 Multi-Status")}} ({{Glossary("WebDAV")}})
  - : El listado de elementos DAV ya se notificó previamente, por lo que no se van a volver a listar.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://tools.ietf.org/html/rfc3229))
  - : El servidor ha cumplido una petición `GET` para el recurso y la respuesta es una representación del resultado de una o más manipulaciones de instancia aplicadas a la instancia actual.

## Redirecciones

- {{HTTPStatus(300, "300 Multiple Choice")}}
  - : Esta solicitud tiene más de una posible respuesta. User-Agent o el usuario debe escoger uno de ellos. No hay forma estandarizada de seleccionar una de las respuestas.
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Este código de respuesta significa que la URI del recurso solicitado ha sido cambiado. Probablemente una nueva URI sea devuelta en la respuesta.
- {{HTTPStatus(302, "302 Found")}}
  - : Este código de respuesta significa que el recurso de la URI solicitada ha sido cambiado temporalmente. Nuevos cambios en la URI serán agregados en el futuro. Por lo tanto, la misma URI debe ser usada por el cliente en futuras solicitudes.
- {{HTTPStatus(303, "303 See Other")}}
  - : El servidor envía esta respuesta para dirigir al cliente a un nuevo recurso solicitado a otra dirección usando una petición GET.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Esta es usada para propósitos de "caché". Le indica al cliente que la respuesta no ha sido modificada. Entonces, el cliente puede continuar usando la misma versión almacenada en su caché.
- `305 Use Proxy` {{deprecated_inline}}
  - : Fue definida en una versión previa de la especificación del protocolo HTTP para indicar que una respuesta solicitada debe ser accedida desde un proxy. Ha quedado obsoleta debido a preocupaciones de seguridad correspondientes a la configuración de un proxy.
- `306 unused`
  - : Este código de respuesta ya no es usado más. Actualmente se encuentra reservado. Fue usado en previas versiones de la especificación HTTP1.1.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : El servidor envía esta respuesta para dirigir al cliente a obtener el recurso solicitado a otra URI con el mismo método que se usó la petición anterior. Tiene la misma semántica que el código de respuesta HTTP `302 Found`, con la excepción de que el agente usuario _no debe_ cambiar el método HTTP usado: si un `POST` fue usado en la primera petición, otro `POST` debe ser usado en la segunda petición.

<!---->

- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Significa que el recurso ahora se encuentra permanentemente en otra URI, especificada por la respuesta de encabezado HTTP `Location:`. Tiene la misma semántica que el código de respuesta HTTP `301 Moved Permanently`, con la excepción de que el agente usuario _no debe_ cambiar el método HTTP usado: si un `POST` fue usado en la primera petición, otro `POST` debe ser usado en la segunda petición.

## Errores de cliente

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, la autenticación es posible.
- `402 Payment Required`
  - : Este código de respuesta está reservado para futuros usos. El objetivo inicial de crear este código fue para ser utilizado en sistemas digitales de pagos. Sin embargo, no está siendo usado actualmente.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada.
- {{HTTPStatus(404, "404 Not Found")}}
  - : El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : El método solicitado es conocido por el servidor pero ha sido deshabilitado y no puede ser utilizado. Los dos métodos obligatorios, `GET` y `HEAD`, nunca deben ser deshabilitados y no deberían retornar este código de error.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Esta respuesta es enviada cuando el servidor, después de aplicar una [negociación de contenido servidor-impulsado](/es/docs/Web/HTTP/Content_negotiation#server-driven_negotiation), no encuentra ningún contenido seguido por la criteria dada por el usuario.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Esto es similar al código 401, pero la autenticación debe estar hecha a partir de un proxy.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Esta respuesta es enviada en una conexión inactiva en algunos servidores, incluso sin alguna petición previa por el cliente. Significa que el servidor quiere desconectar esta conexión sin usar. Esta respuesta es muy usada desde algunos navegadores, como Chrome, Firefox 27+, o IE9, usa mecanismos de pre-conexión HTTP para acelerar la navegación. También hay que tener en cuenta que algunos servidores simplemente desconecta la conexión sin enviar este mensaje.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Esta respuesta puede ser enviada cuando una petición tiene conflicto con el estado actual del servidor.
- {{HTTPStatus(410, "410 Gone")}}
  - : Esta respuesta puede ser enviada cuando el contenido solicitado ha sido borrado del servidor.
- {{HTTPStatus(411, "411 Length Required")}}
  - : El servidor rechaza la petición porque el campo de encabezado `Content-Length` no esta definido y el servidor lo requiere.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : El cliente ha indicado pre-condiciones en sus encabezados la cual el servidor no cumple.
- {{HTTPStatus(413, "413 Payload Too Large")}}
  - : La entidad de petición es más larga que los límites definidos por el servidor; el servidor puede cerrar la conexión o retornar un campo de encabezado `Retry-After`.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : La URI solicitada por el cliente es más larga de lo que el servidor está dispuesto a interpretar.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : El formato multimedia de los datos solicitados no está soportado por el servidor, por lo cual el servidor rechaza la solicitud.
- {{HTTPStatus(416, "416 Requested Range Not Satisfiable")}}
  - : El rango especificado por el campo de encabezado `Range` en la solicitud no cumple; es posible que el rango está fuera del tamaño de los datos objetivo del URI.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Significa que la expectativa indicada por el campo de encabezado `Expect` solicitada no puede ser cumplida por el servidor.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : El servidor se rehúsa a intentar hacer café con una tetera.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : La petición fue dirigida a un servidor que no es capaz de producir una respuesta. Esto puede ser enviado por un servidor que no está configurado para producir respuestas por la combinación del esquema y la autoridad que están incluidos en la URI solicitada
- {{HTTPStatus(422, "422 Unprocessable Entity")}} ({{Glossary("WebDAV")}})
  - : La petición estaba bien formada pero no se pudo seguir debido a errores de semántica.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV")}})
  - : El recurso que está siendo accedido está bloqueado.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV")}})
  - : La petición falló debido a una falla de una petición previa.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : El servidor se rehúsa a aplicar la solicitud usando el protocolo actual pero puede estar dispuesto a hacerlo después que el cliente se actualice a un protocolo diferente. El servidor envía un encabezado Upgrade en una respuesta para indicar los protocolos requeridos.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : El servidor origen requiere que la solicitud sea condicional. Tiene la intención de prevenir problemas de 'actualización perdida', donde un cliente OBTIENE un estado del recurso, lo modifica, y lo PONE devuelta al servidor, cuando mientras un tercero ha modificado el estado del servidor, llevando a un conflicto.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : El usuario ha enviado demasiadas solicitudes en un periodo de tiempo dado.
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : El servidor no está dispuesto a procesar la solicitud porque los campos de encabezado son demasiado largos. La solicitud PUEDE volver a subirse después de reducir el tamaño de los campos de encabezado solicitados.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : El usuario solicita un recurso ilegal, como alguna página web censurada por algún gobierno.

## Errores de servidor

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : El servidor ha encontrado una situación que no sabe cómo manejarla.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : El método solicitado no está soportado por el servidor y no puede ser manejado. Los únicos métodos que los servidores requieren soporte (y por lo tanto no deben retornar este código) son `GET` y `HEAD`.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petición, obtuvo una respuesta inválida.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : El servidor no está listo para manejar la petición. Causas comunes puede ser que el servidor está caído por mantenimiento o está sobrecargado. Hay que tomar en cuenta que junto con esta respuesta, una página usuario-amigable explicando el problema debe ser enviada. Estas respuestas deben ser usadas para condiciones temporales y el encabezado HTTP `Retry-After:` debería, si es posible, contener el tiempo estimado antes de la recuperación del servicio. El webmaster debe también cuidar los encabezados relacionados al caché que son enviados junto a esta respuesta, ya que estas respuestas de condición temporal deben usualmente no estar en el caché.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Esta respuesta de error es dada cuando el servidor está actuando como una puerta de enlace y no puede obtener una respuesta a tiempo.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : La versión de HTTP usada en la petición no está soportada por el servidor.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : El servidor tiene un error de configuración interna: negociación de contenido transparente para la petición resulta en una referencia circular.
- {{HTTPStatus(507, "507 Insufficient Storage")}}
  - : El servidor tiene un error de configuración interna: la variable de recurso escogida está configurada para acoplar la negociación de contenido transparente misma, y no es por lo tanto un punto final adecuado para el proceso de negociación.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV")}})
  - : El servidor detectó un ciclo infinito mientras procesaba la solicitud.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Extensiones adicionales para la solicitud son requeridas para que el servidor las cumpla.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : El código de estado 511 indica que el cliente necesita autenticar para obtener acceso a la red.

## Ver también

- [Anexo:Códigos de estado HTTP](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP)
- [IANA official registry of HTTP status codes](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
- [Códigos HTTP: Una guía con los códigos de estado más comunes](https://www.lucushost.com/blog/codigos-http-mas-comunes/)
