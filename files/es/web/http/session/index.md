---
title: Una típica sesión de HTTP
slug: Web/HTTP/Session
---

{{HTTPSidebar}}

En los protocolos basados en el modelo cliente-servidor, como es el caso del HTTP, una sesión consta de tres fases:

1. El cliente establece una conexión TCP (o la conexión correspondiente si la capa de transporte corresponde a otro protocolo).
2. El cliente manda su petición, y espera por la respuesta.
3. El servidor procesa la petición, y responde con un código de estado y los datos correspondientes.

A partir del protocolo HTTP/1.1 la conexión, no se cierra al finalizar la tercera fase, y el cliente puede continuar realizando peticiones. Esto significa que la segunda y tercera fase, pueden repetirse cualquier número de veces.

## Estableciendo una conexión

En un protocolo cliente servidor, es siempre el cliente el que establece la conexión. Iniciar una conexión en HTTP, implica iniciar una conexión en el protocolo correspondiente a la capa de comunicación subyacente, que normalmente es TCP.

En TCP el puerto por defecto, para un servidor HTTP en un computador, es el puerto 80. Se pueden usar otros puertos como el 8000 o el 8080. La URL de la página pedida contiene tanto el nombre del dominio, como el número de puerto, aunque este puede ser omitido, si se trata del puerto 80. Véase la referencia de [Identificación de recursos en la Web](/es/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web) para más detalles.

> **Nota:** El modelo cliente-servidor no permite que el servidor mande datos al cliente sin una petición explicita. Como solución parcial a este problema, los desarrolladores web, usan varias técnicas, como hacer un ping al servidor periódicamente, mediante {{domxref("XMLHTTPRequest")}}, {{domxref("Fetch")}} APIs, o usar la HTML [WebSockets API](/en/WebSockets) o protocolos similares.

## Mandando una petición

Una vez la conexión está establecida, el cliente, puede mandar una petición de datos (normalmente es un navegador, u otra cosa, como una 'araña' ( o 'crawler' en inglés), un sistema de indexación automático de páginas web). La petición de datos de un cliente HTTP, consiste en directivas de texto, separadas mediante CRLF (retorno de carro, y cambio de linea), y se divide en tres partes:

1. La primera parte, consiste en una linea, que contiene un método, seguido de sus parámetros:

   - la dirección del documento pedido: por ejemplo su URL completa, sin indicar el protocolo o el nombre del dominio.
   - la versión del protocolo HTTP

2. La siguiente parte, está formada por un bloque de líneas consecutivas, que representan las cabeceras de la petición HTTP, y dan información al servidor, sobre que tipo de datos es apropiado (como qué lenguaje usar, o el tipo MIME a usar), u otros datos que modifiquen su comportamiento (como que no envié la respuesta si ya está cacheada). Estas cabeceras HTTP forman un bloque que acaba con una línea en blanco.
3. La parte final es un bloque de datos opcional, que puede contener más datos para ser usados por el método POST.

### Ejemplo de peticiones

Si queremos una página web, como por ejemplo: <https://developer.mozilla.org/>, y además le indicamos al servidor que se preferiría la página en Francés, si fuera posible:

```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

Observe la línea vacía al final, que separa el bloque de datos, del bloque de cabecera. Como no existe el campo `Content-Length` en la cabecera de HTTP, el bloque de datos está vacío, y ahí está el fin de la cabecera, permitiendo al servidor procesar la petición en el momento que recibe la línea vacía.

Otro ejemplo, en el caso del envío de los datos de un formulario, la trama es:

```
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Juan%20Garcia&request=Envieme%20uno%20de%20sus%20catalogos
```

### Métodos de peticiones

HTTP define un conjunto de [métodos de peticiones](/es/docs/Web/HTTP/Methods) en los que se indican las acciones que se piden realizar al recibir un conjunto de datos. A pesar de que pueden referirse como 'nombres', estos métodos de petición, son denominados a veces como 'verbos' de HTTP. La peticiones más comunes son `GET` y `POST`:

- El método {{HTTPMethod("GET")}} hace una petición de un recurso específico. Las peticiones con `GET` unicamente hacen peticiones de datos.
- El método {{HTTPMethod("POST")}} envía datos al servidor de manera que este pueda cambiar su estado. Este es el método usado normalmente para enviar los datos de un [formulario HTML](/es/docs/Web/Guide/HTML/Forms).

## Estructura de la respuesta del servidor

Después de que el agente de usuario envía su petición, el servidor web lo procesa, y a continuación responde. De forma similar a la petición del servidor, la respuesta del servidor está formada por directivas de texto, separadas por el carácter CRLF, y divida en tres bloques.

1. La primera línea, es la línea de estado, que consiste en una confirmación del la versión de HTTP utilizado, y seguido por el estado de la petición (y una breve descripción de este, en formato de texto, que pueda ser leído por personas).
2. Las líneas siguientes representan cabeceras de HTTP concretas, dando al cliente información sobre los datos enviado( por ejemplo, su tipo, su tamaño, algoritmos de compresión utilizados, y sugerencias para el cacheo). Al igual que las cabeceras HTTP de la petición de un cliente, las cabeceras HTTP del servidor, finalizan con una línea vacía.
3. El bloque final, es el bloque que puede contener opcionalmente los datos.

### Ejemplos de respuestas

La respuesta correcta de una página web, es como sigue:

```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (aquí estarían los 29769 bytes de la página web pedida)
```

La respuesta para la petición de datos que han sido movidos permanentemente, sería:

```
HTTP/1.1 301 Moved Permanently
Server: Apache/2.2.3 (Red Hat)
Content-Type: text/html; charset=iso-8859-1
Date: Sat, 09 Oct 2010 14:30:24 GMT
Location: https://developer.mozilla.org/ (este es el nuevo enlace a los datos; se espera que el agente de usuario lo pida a continuación)
Keep-Alive: timeout=15, max=98
Accept-Ranges: bytes
Via: Moz-Cache-zlb05
Connection: Keep-Alive
X-Cache-Info: caching
X-Cache-Info: caching
Content-Length: 325 (se da una página por defecto para mostrar en el caso de que el agente de usuario no sea capaz de seguir el enlace)

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>301 Movido permanentemente</title>
</head><body>
<h1>Movido de forma permanente</h1>
<p>El documento ha sido movido <a href="https://developer.mozilla.org/">aquí</a>.</p>
<hr>
<address>Apache/2.2.3 (Red Hat) Servidor en: developer.mozilla.org Port 80</address>
</body></html>
```

Una notificación de que los datos pedidos no existen:

```
HTTP/1.1 404 Not Found
Date: Sat, 09 Oct 2010 14:33:02 GMT
Server: Apache
Last-Modified: Tue, 01 May 2007 14:24:39 GMT
ETag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
Accept-Ranges: bytes
Content-Length: 10732
Content-Type: text/html

<!DOCTYPE html... (contiene una página personalizada de ayuda al usuario para que pueda encontrar los datos que busca)
```

### Códigos de estado de las respuestas

Los [códigos de estado de las respuestas](/es/docs/Web/HTTP/Status) indican si una petición HTTP ha sido finalizada correctamente. Las respuestas se agrupan en cinco clases: respuestas informativas, respuestas de finalización correcta, redirecciones, errores del cliente y errores del servidor.

- {{HTTPStatus(200)}}: OK. La petición ha sido procesada correctamente
- {{HTTPStatus(301)}}: Datos movidos permanentemente. Este código de respuesta indica que la URI de los datos pedidos ha cambiado.
- {{HTTPStatus(404)}}: Datos no encontrados. El servidor no puede localizar los datos pedidos.

## Vea también

- [Identificación de recursos en la Web](/es/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
- [Cabeceras HTTP](/es/docs/Web/HTTP/Headers)
- [Métodos de petición HTTP](/es/docs/Web/HTTP/Methods)
- [Códigos de estados de respuesta HTTP](/es/docs/Web/HTTP/Status)
