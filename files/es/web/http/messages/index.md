---
title: Mensajes HTTP
slug: Web/HTTP/Messages
---

{{HTTPSidebar}}

Los mensajes HTTP, son los medios por los cuales se intercambian datos entre servidores y clientes. Hay dos tipos de mensajes: _peticiones_, enviadas por el cliente al servidor, para pedir el inicio de una acción; y _respuestas_, que son la respuesta del servidor.

Los mensajes HTTP están compuestos de texto, codificado en ASCII, y pueden comprender múltiples líneas. En HTTP/1.1, y versiones previas del protocolo, estos mensajes eran enviados de forma abierta a través de la conexión. En HTTP/2.0 los mensajes, que anteriormente eran legibles directamente, se conforman mediante tramas binarias codificadas para aumentar la optimización y rendimiento de la transmisión.

Los desarrolladores de páginas Web, o administradores de sitios Web, desarrolladores... raramente codifican directamente estos mensajes HTTP. Normalmente especifican estos mensajes HTTP, mediante archivos de configuración (para proxies, y servidores), APIs (para navegadores) y otros medios.

![From a user-, script-, or server- generated event, an HTTP/1.x msg is generated, and if HTTP/2 is in use, it is binary framed into an HTTP/2 stream, then sent.](httpmsg2.png)

El mecanismo de tramas binarias de HTTP/2 ha sido diseñado para que no necesite ninguna modificación de las APIs o archivos de configuración utilizados: es totalmente transparente para el usuario.

Las peticiones y respuestas HTTP, comparten una estructura similar, compuesta de:

1. Una _línea de inicio_ ('_start-line_' en inglés) describiendo la petición a ser implementada, o su estado, sea de éxito o fracaso. Esta línea de comienzo, es siempre una única línea.
2. Un grupo opcional de _cabeceras HTTP_, indicando la petición o describiendo el cuerpo ('_body_' en inglés) que se incluye en el mensaje.
3. Una línea vacía ('_empty-line_' en inglés) indicando toda la meta-información ha sido enviada.
4. Un campo de cuerpo de mensaje opcional ('_body_' en inglés) que lleva los datos asociados con la petición (como contenido de un formulario HTML), o los archivos o documentos asociados a una respuesta (como una página HTML, o un archivo de audio, vídeo ... ) . La presencia del cuerpo y su tamaño es indicada en la línea de inicio y las cabeceras HTTP.

La línea de inicio y las cabeceras HTTP, del mensaje, son conocidas como la _cabeza_ de la peticiones, mientras que su contenido en datos se conoce como el _cuerpo_ del mensaje.

![Requests and responses share a common structure in HTTP](httpmsgstructure2.png)

## Peticiones HTTP

### Línea de inicio

Las peticiones HTTP son mensajes enviados por un cliente, para iniciar una acción en el servidor. Su línea de inicio está formada por tres elementos:

1. Un _[método HTTP](/es/docs/Web/HTTP/Methods)_, un verbo como: {{HTTPMethod("GET")}}, {{HTTPMethod("PUT")}} o {{HTTPMethod("POST")}}) o un nombre como: {{HTTPMethod("HEAD")}} o {{HTTPMethod("OPTIONS")}}), que describan la acción que se pide sea realizada. Por ejemplo, `GET` indica que un archivo ha de ser enviado hacia el cliente, o `POST` indica que hay datos que van a ser enviados hacia el servidor (creando o modificando un recurso, o generando un documento temporal para ser enviado).
2. El objetivo de una petición, normalmente es una {{glossary("URL")}}, o la dirección completa del protocolo, puerto y dominio también suelen ser especificados por el contexto de la petición. El formato del objetivo de la petición varia según los distintos métodos HTTP. Puede ser:

   - Una dirección absoluta, seguida de un signo de cierre de interrogación `'?'` y un texto de consulta. Este es el formato más comun, conocido como el formato original ('_origin form_' en inglés), se usa en los métodos `GET`, `POST`, `HEAD`, y `OPTIONS` .
     `POST / HTTP 1.1 GET /background.png HTTP/1.0 HEAD /test.html?query=alibaba HTTP/1.1 OPTIONS /anypage.html HTTP/1.0`
   - Una URL completa; conocido como el formato absoluto, usado mayormente con `GET` cuando se conecta a un proxy.
     `GET http://developer.mozilla.org/es/docs/Web/HTTP/Messages HTTP/1.1`
   - El componente de autoriade de una URL, formado por el nombre del domínio y opcionalmente el puerto (el puerto precedido por el simbolo `':'` ), se denomina a este formato como el formato de autoridad. Unicamente se usa con `CONNECT` cuando se establece un tunel HTTP.
     `CONNECT developer.mozilla.org:80 HTTP/1.1`
   - El formato de asterisco, se utliza un asterisco (`'*'`) junto con las opciones: `OPTIONS` , representando al servidor entero en conjunto.
     `OPTIONS * HTTP/1.1`

3. la versión de HTTP, la cual define la estructura de los mensajes, actuando como indicador, de la versión que espera que se use para la respuesta.

### Cabeceras

Las [cabeceras HTTP](/es/docs/Web/HTTP/Headers) de una petición siguen la misma estructura que la de una cabecera HTTP. Una cadena de caracteres, que no diferencia mayusculas ni minusculas, seguida por dos puntos (`':'`) y un valor cuya estructura depende de la cabecera. La cabecera completa, incluido el valor, ha de ser formada en una única línea, y pude ser bastante larga.

Hay bastantes cabeceras posibles. Estas se pueden clasificar en varios grupos:

- _Cabeceras generales,_ ('_General headers_' en inglés), como {{HTTPHeader("Via")}}, afectan al mensaje como una unidad completa.
- Cabeceras de petición, ('_Request headers_' en inglés), como {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Accept-Type")}}, modifican la petición especificándola en mayor detalle ( como: {{HTTPHeader("Accept-Language")}}, o dándole un contexto, como: {{HTTPHeader("Referer")}}, o restringiéndola condicionalmente, como: {{HTTPHeader("If-None")}}.
- _Cabeceras de entidad, ('Entity headers'_ en ingles), como {{HTTPHeader("Content-Length")}} las cuales se aplican al cuerpo de la petición. Por supuesto, esta cabecera no necesita ser transmitida si el mensaje no tiene cuerpo ('_body_' en inglés).

![Example of headers in an HTTP request](http_request_headers3.png)

### Cuerpo

La parte final de la petición el el cuerpo. No todas las peticiones llevan uno: las peticiones que reclaman datos, como `GET`, `HEAD`, `DELETE`, o `OPTIONS`, normalmente, no necesitan ningún cuerpo. Algunas peticiones pueden mandar peticiones al servidor con el fin de actualizarlo: como es el caso con la petición `POST` (que contiene datos de un formulario HTML).

Los cuerpos pueden ser dividos en dos categorias:

- Cuerpos con un único dato, que consisten en un único archivo defindo por las dos cabeceras: {{HTTPHeader("Content-Type")}} y {{HTTPHeader("Content-Length")}}.
- [Cuerpos con múltiples datos](/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data), que están formados por distintos contenidos, normalmente estan asociados con los [formularios HTML](/es/docs/Web/Guide/HTML/Forms).

## Respuestas HTTP

### Línea de estado

La línea de inicio de una respuesta HTTP, se llama la _línea de estado_, y contienen la siguiente información:

1. La _versión del protocolo_, normalmente `HTTP/1.1`.
2. Un _código de estado_, indicando el éxito o fracaso de la petición. Códigos de estado muy comunes son: {{HTTPStatus("200")}}, {{HTTPStatus("404")}}, o {{HTTPStatus("302")}}
3. Un _texto de estado_, que es una breve descripción, en texto, a modo informativo, de lo que significa el código de estado, con el fin de que una persona pueda interpretar el mensaje HTTP.

Una línea de estado típica es por ejemplo: `HTTP/1.1 404 Not Found.`

### Cabeceras

Las [cabeceras HTTP](/es/docs/Web/HTTP/Headers) para respuestas siguen también la misma estructura como cualquier otra cabecera: una cadena de texto, que no diferencia entre mayusculas y minúsculas, seguida por dos puntos (`':'`) y un valor cuya estructura depende del tipo de cabecera. Toda la cabecera incluido su valor, se ha de expresar en una única línea.

Existen varias cabeceras posibles. Estas se puede dividir en distintos grupos:

- _Cabeceras generales,_ ('_General headers_' en inglés), como {{HTTPHeader("Via")}}, afectan al mensaje completo.
- Cabeceras de petición, ('_Request headers_' en inglés), como {{HTTPHeader("Vary")}} , {{HTTPHeader("Accept-Ranges")}}, dan información adicional sobre el servidor, que no tiene espacio en la línea de estado.
- _Cabeceras de entidad, ('Entity headers'_ en ingles), como {{HTTPHeader("Content-Length")}} las cuales se aplican al cuerpo de la petición. Por supuesto, esta cabecera no necesita ser transmitida si el mensaje no tiene cuerpo ('_body_' en inglés).

![Example of headers in an HTTP response](http_response_headers3.png)

### Cuerpo

La última parte del mensaje de respuesta el es 'cuerpo'. No todas las respuestas tienen uno, respuestas con un código de estado como {{HTTPStatus("201")}} o {{HTTPStatus("204")}} normalmente prescinden de él.

De forma general, los cuerpos se pueden diferenciar en tres categorias:

- Cuerpos con un único dato, consisten en un simple archivo, de longitud conocida y definido en las cabeceras: {{HTTPHeader("Content-Type")}} y {{HTTPHeader("Content-Length")}}.
- Cuerpos con un único dato, consisten en un simple archivo, de longitud desconocida, y codificado en partes, indicadas con {{HTTPHeader("Transfer-Encoding")}} valor `chunked` (que significa: 'partido' en inglés).
- [Cuerpos con múltiples datos](/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data), consisten de varios datos, cada uno con una sección distinta de información. Este caso es relativamente raro y poco común.

## Tramas HTTP/2

Los mensajes HTTP/1.x tienen algunas desventajas por su no muy alta eficiencia en la transmisión.

- Las cabeceras, al contrario de los cuerpos, no se comprimen.
- Las cabeceras, habitualmente se repiten de un mensaje al siguiente, aún así, la cabecera se repite en todos los mensajes.
- No se puede multiplexar. Se han de abrir varias conexiones para el mismo servidor, las conexiones TCP 'en caliente' ('_warm TCP connections_' en inglés) son más eficientes que las conexiones 'en frio'.

HTTP/2 introduce un paso extra: divide los mensajes HTTP/1.x en tramas que integra en un flujo de datos. Los datos y las tramas de las cabeceras, se separan, esto permite la compresión de las cabeceras. Varios flujos de datos pueden combinarse juntos, y entonces se puede usar un procedimiento de multiplexación, permitiendo un uso más eficiente, de las conexiónes TCP.

![HTTP/2 modify the HTTP message to divide them in frames (part of a single stream), allowing for more optimization.](binary_framing2.png)

Las tramas HTTP son trasnparentes para los desarrolladores Web. Este paso adicional en HTTP/2, de los mensajes HTTP/1.0 y el protocolo por debajo. No son necesarios cambios en las APIs usadas por los desarrolladores Web para utilizar estas tramas HTTP, cuando las usan ambos: servidor y navegador.

## Conclusión

Los mensajes HTTP son la clave para usar HTTP; su estructura es sencilla y son fácilmente ampliables. El protocolo HTTP/2 añade un mecanismo de tramas y una capa intermedia entre la sintaxis de HTTP/1.x y su protocolo inferior, sin modificarlo radicalmente: se construye sobre mecanismos de transmisión probados.
