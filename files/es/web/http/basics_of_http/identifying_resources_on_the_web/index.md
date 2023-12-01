---
title: Identificación de recursos web
slug: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
---

{{HTTPSidebar}}

El objetivo de una solicitud HTTP se denomina "recurso", (es decir: datos), y dicho recurso, no posee un tipo definido por defecto; puede ser un documento, o una foto, o cualquier otra posibilidad. Cada recurso es identificado por un Identificador Uniforme de Recursos ({{Glossary("URI")}}) y es utilizado a través de HTTP, para la identificación del tipo de recurso.

La identidad y la localización del recursos en la Web son en su mayoria proporcionados por una sola dirección URL (Localicador de Recursos Uniforme; un tipo de URI). A veces, el mismo URI no proporciona la identidad ni la ubicación: HTTP usa un encabezado HTTP especifico, {{HTTPHeader("Alt-Svc")}} cuando el recurso solicitado por el cliente quiere acceder a él en otra ubicación.

## URLs and URNs

### URLs

La forma más común de URI es la ({{Glossary("URL")}}) (de las siglas en ingles: "_Uniform Resource Locator_", que podría traducirse como: Localizador Uniforme de Recursos), _que se conoce como la dirección web._

```
https://developer.mozilla.org
https://developer.mozilla.org/es/docs/Learn/
https://developer.mozilla.org/es/search?q=URL
```

Cualquiera de estas URLs se pueden escribir en la barra de direcciones de su navegador para decirle que cargue la página asociada (recurso).

Una URL está compuesta de diferentes partes, algunas obligatorias y otras son opcionales. Un ejemplo más complejo podría tener este aspecto:

```
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URNs

Un URN es una URI que identifica un recurso por su nombre en un espacio de nombres particular.

```
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

Las dos URNs corresponden a

- El libro "1984" por George Orwell,
- La especificación IETF 7230, Hypertext Transfer Protocol (HTTP/1.1): Sintaxis de Mensajes y Enrutamiento.

## Sintaxis de Identificador Uniforme de Recursos (URIs)

### Esquema o protocolo

- ![Protocol](mdn-url-protocol@x2.png)
  - : `http://` es el protocolo. Indica que el protocolo debe utilizar el navegador. Por lo general, es el protocolo HTTP o su versión segura, HTTPS. La Web requiere de uno de estos dos, pero los navegadores también saben como manejar otros protocolos como `mailto:` (para abrir un cliente de correo) o `ftp:` para manejar la transferencia de archivos, por lo que no se sorprenda si usted ve este tipo de protocolos. Los esquemas comunes son:

| Esquema     | Descripción                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| data        | [Datos URIs](/es/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)                    |
| file        | Host-nombre de archivo específicos                                          |
| ftp         | [Protocolo de Transferencia de Archivos](/es/docs/Glossary/FTP)             |
| http/https  | [Protocolo de transferencia de Hipertexto (Seguro)](/es/docs/Glossary/HTTP) |
| mailto      | Dirección de correo electrónico                                             |
| ssh         | shell seguro                                                                |
| tel         | teléfono                                                                    |
| urn         | Nombres Uniformes de Recursos                                               |
| view-source | Código fuente del recurso                                                   |
| ws/wss      | (Encriptado) conexiones [WebSocket](/es/docs/Web/API/WebSockets_API)        |

### Autoridad

- ![Domaine Name](mdn-url-domain@x2.png)
  - : `www.example.com` es el nombre de dominio o autoridad que gobierna el espacio de nombres. Indica cuando es solicitado el servidor Web . Alternativamente, Es posile usar directamente una {{Glossary("IP address")}}, pero debido a que es menos conveniente, no se usa muy amenudo en la Web.

### Puerto

- ![Port](mdn-url-port@x2.png)
  - : `:80` es el puerto en este caso. Indica la técnica "puerta" usada para acceder a los recursos en el servidor web. Usualmente es omitido si el servidor web usa los puertos estándares del protocolo HTTP (80 para HTTP y 443 para HTTPS) para permitir el acceso a sus recursos. De lo contrario, es obligatorio.

### Ruta de Acceso

- ![Path to the file](mdn-url-path@x2.png)
  - : `/path/to/myfile.html` es la ruta de acceso al recurso en el servidor Web. En los primeros días de la Web, una ruta como esta presentaba la ubicación física del archivo en el servidor Web. Hoy en día, es sobre todo una abstracción manejada por los servidores Web sin ningún tipo de realidad física.

### Consulta

- ![Parameters](mdn-url-parameters@x2.png)
  - : `?key1=value1&key2=value2` son unos parametros adicionales proporcionados al servidor Web. Esos parámetros son una lista de pares llave/valores separados por el simbolo &. El servidor Web puede utilizar estos parámetros para hacer cosas adicionales antes de retornar el recurso al usuario. Cada servidor Web tiene sus propias reglas con respecto a los parametros, y la única manera confiable de saber cómo un servidor web especifico está manejando parametros es preguntando al usuario del servidor web.

### Fragmento

- ![Anchor](mdn-url-anchor@x2.png)
  - : `#SomewhereInTheDocument` es una referencia a otra parte del propio recurso. Esto representa una especie de "marcador" dentro del recurso, otorgandole al navegador las instrucciones para mostrar el contenido que se encuentra en esa referencia señalada. En un documento HTML, por ejemplo, el navegador se desplazará hasta el punto donde se define el fragmento; en un video o documento de audio, el navegador intentará ir a la vez que el ancla se presenta. Vale la pena señalar que la parte después de la #, también conocido como indentificador de fragmento, nunca se envía al servidor con la solicitud.

## Ejemplos

```
https://developer.mozilla.org/es/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
```

## Especificaciones

| Especificación                                         | Título                                                             |
| ------------------------------------------------------ | ------------------------------------------------------------------ |
| {{RFC("7230", "Uniform Resource Identifiers", "2.7")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## Ver también

- [Qué es una URL?](/es/docs/Learn/Common_questions/What_is_a_URL)
- [Lista de esquemas URI IANA](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
