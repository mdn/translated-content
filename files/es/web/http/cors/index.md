---
title: Control de acceso HTTP (CORS)
slug: Web/HTTP/CORS
original_slug: Web/HTTP/Access_control_CORS
---

{{HTTPSidebar}}

El Intercambio de Recursos de Origen Cruzado ({{Glossary("CORS")}}) es un mecanismo que utiliza cabeceras {{Glossary("HTTP")}} adicionales para permitir que un {{Glossary("user agent")}} obtenga permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio) al que pertenece. Un agente crea una petición HTTP de origen cruzado cuando solicita un recurso desde un dominio distinto, un protocolo o un puerto diferente al del documento que lo generó.

Un ejemplo de solicitud de origen cruzado: el código JavaScript frontend de una aplicación web que es localizada en `http://domain-a.com` utiliza {{domxref("XMLHttpRequest")}} para cargar el recurso `http://api.domain-b.com/data.json`.

Por razones de seguridad, los exploradores restringen las solicitudes HTTP de origen cruzado iniciadas dentro de un script. Por ejemplo, [XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest) y la API [Fetch](/es/docs/Web/API/Fetch_API) siguen la [política de mismo-origen](/es/docs/Web/Security/Same-origin_policy). Ésto significa que una aplicación que utilice esas APIs [XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest) sólo puede hacer solicitudes HTTP a su propio dominio, a menos que se utilicen cabeceras CORS.

![](cors_principle.png)

El [W3C](http://www.w3.org/) [Grupo de Trabajo de Aplicaciones Web](http://www.w3.org/2008/webapps/) recomienda el nuevo mecanismo de [Intercambio de Recursos de Origen Cruzado](http://www.w3.org/TR/cors/) (CORS, por sus siglas en inglés). CORS da controles de acceso a dominios cruzados para servidores web y transferencia segura de datos en dominios cruzados entre navegadores y servidores Web. Los exploradores modernos utilizan CORS en un **contenedor API** (como [XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest) o [Fetch](/es/docs/Web/API/Fetch_API)) para ayudar a mitigar los riesgos de solicitudes HTTP de origen cruzado.

## ¿Quién debería leer este artículo?

Todo el mundo, de verdad.

Más específicamente, este artículo está dirigido a administradores web, desarrolladores de servidores y desarrolladores de interfaz. Los exploradores modernos manejan los componentes sobre el intercambio de origen cruzado del lado del cliente. Incluyendo cabeceras y políticas de ejecución. Pero, este nuevo estándar determina que los servidores tienen que manejar las nuevas solicitudes y las cabeceras de las respuestas. Se recomienda, como lectura suplementaria, otro artículo para desarrolladores de servidor que discute el [intercambio de origen cruzado desde una perspectiva de servidor (con fragmentos de código PHP)](/es/docs/Web/HTTP/Server-Side_Access_Control).

## ¿Qué peticiones utiliza CORS?

Este [estándar de intercambio de origen cruzado](http://www.w3.org/TR/cors/) es utilizado para habilitar solicitudes HTTP de sitios cruzados para:

- Invocaciones de las APIs [`XMLHttpRequest`](/en/DOM/XMLHttpRequest) o [Fetch](/es/docs/Web/API/Fetch_API) en una manera de sitio cruzado, como se discutió arriba.
- Fuentes Web (para usos de fuente en dominios cruzados `@font-face` dentro de CSS), [para que los servidores puedan mostrar fuentes TrueType que sólo puedan ser cargadas por sitios cruzados y usadas por sitios web que lo tengan permitido.](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- Texturas WebGL.
- Imágenes dibujadas en patrones usando [`drawImage`](/es/docs/Web/API/CanvasRenderingContext2D/drawImage).
- Hojas de estilo (para acceso [CSSOM](/es/docs/Web/CSS/CSSOM_View)).
- Scripts (para excepciones inmutadas).

Este artículo es una discusión general sobre Intercambio de Recursos de Origin Cruzado e incluye una discusión sobre las cabeceras HTTP.

## Resumen

El estándar de Intercambio de Recursos de Origen Cruzado trabaja añadiendo nuevas cabeceras HTTP que permiten a los servidores describir el conjunto de orígenes que tienen permiso para leer la información usando un explorador web. Adicionalmente, para métodos de solicitud HTTP que causan efectos secundarios en datos del usuario (y en particular, para otros métodos HTTP distintos a `GET`, o para la utilización de `POST` con algunos tipos MIME), la especificación sugiere que los exploradores "verifiquen" la solicitud, solicitando métodos soportados desde el servidor con un método de solicitud HTTP `OPTIONS`, y luego, con la "aprobación" del servidor, enviar la verdadera solicitud con el método de solicitud HTTP verdadero. Los servidores pueden también notificar a los clientes cuando sus "credenciales" (incluyendo Cookies y datos de autenticación HTTP) deben ser enviados con solicitudes.

Las secciones siguientes discuten escenarios, así como el análisis de las cabeceras HTTP usados.

## Ejemplos de escenarios de control de accesos

Aquí, presentamos tres escenarios que ilustran cómo funciona el Intercambio de Recursos de Origen Cruzado. Todos estos ejemplos utilizan el objeto [`XMLHttpRequest`](/en/DOM/XMLHttpRequest), que puede ser utilizado para hacer invocaciones de sitios cruzados en cualquier explorador soportado.

Los fragmentos de JavaScript incluidos en estas secciones (y las instancias ejecutadas del código servidor que correctamente maneja las solicitudes de sitios cruzados) [pueden ser encontrados "en acción" aquí](http://arunranga.com/examples/access-control/), y pueden ser trabajados en exploradores que soportan [`XMLHttpRequest`](/en/DOM/XMLHttpRequest) de sitios cruzados. Una discusión de Intercambio de Recursos de Origen Cruzado desde una [perspectiva de servidor (incluyendo fragmentos de código PHP) puede ser encontrada aquí](/es/docs/Web/HTTP/Server-Side_Access_Control).

### Solicitudes simples

Una solicitud de sitio cruzado es aquella que cumple las siguientes condiciones:

- Los únicos métodos aceptados son:

  - GET
  - HEAD
  - POST.

- Aparte de las cabeceras establecidas automáticamente por el agente usuario (ej. `Connection`, `User-Agent`, etc.), las únicas cabeceras que están permitidas para establecer manualmente son:

  - `Accept`
  - `Accept-Language`
  - `Content-Language`
  - `Content-Type`

- Los únicos valores permitidos de la cabecera `Content-Type` son:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

> **Nota:** Estos son los mismos tipos de solicitud de sitios cruzados que un contenido web ya puede emitir, y ninguna respuesta de datos es liberada a menos que el servidor envíe la cabecera apropiada. Por lo tanto, los sitios que prevengan solicitudes falsas de sitios cruzados no tienen nada nuevo que temer sobre el control de acceso HTTP.

Por ejemplo, suponga que el contenido web en el dominio `http://foo.example` desea invocar contenido en el dominio `http://bar.other`. Código de este tipo puede ser utilizado dentro de JavaScript desplegado en foo.example:

```js
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/public-data/';

function callOtherDomain() {
  if(invocation) {
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}
```

Dejándonos ver lo que el explorador enviará al servidor en este caso, y veamos como responde el servidor:

```shell
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Referer: http://foo.example/examples/access-control/simpleXSInvocation.html
Origin: http://foo.example


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2.0.61
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml

[XML Data]
```

Las líneas 1 - 10 son las cabeceras enviadas por Firefox 3.5. Observe que la cabecera de solicitud HTTP principal aquí es la cabecera `Origin:` en la línea 10 de arriba, lo que muestra que la invocación proviene del contenido en el dominio `http://foo.example`.

Las líneas 13 - 22 muestran la respuesta HTTP del servidor en el dominio `http://bar.other`. En respuesta, el servidor envía de vuelta una cabecera `Access-Control-Allow-Origin:`, mostrado arriba en la línea 16. El uso de la cabecera `Origin:` y `Access-Control-Allow-Origin:` muestran el protocolo de control de acceso en su uso más simple. En este caso, el servidor responde con un `Access-Control-Allow-Origin: *` lo que significa que el recurso puede ser accedido por **cualquier** dominio en una forma de sitio cruzado. Si el dueño del recurso en `http://bar.other` deseara restringir el acceso al recurso solamente para `http://foo.example`, debería devolver lo siguiente:

`Access-Control-Allow-Origin: http://foo.example`

Note que ahora, ningún otro dominio aparte de `http://foo.example` (identificado por la cabecera ORIGIN: en la solicitud, como en la línea 10 arriba) puede acceder al recurso en una forma de sitio cruzado. La cabecera Access-Control-Allow-Origin debe contener el valor que fue enviado en la solicitud del encabezado `Origin.`

### Solicitudes Verificadas

A diferencia de las solicitudes simples (discutidas arriba), las solicitudes "verificadas" envían primero una solicitud HTTP por el método `OPTIONS` al recurso en el otro dominio, para determinar si es seguro enviar la verdadera solicitud. Las solicitudes de sitios cruzados son verificadas así ya que pueden tener implicaciones en la información de usuario. En particular, una solicitud es verificada sí:

- Usa métodos **distintos** a `GET, HEAD` `o POST`. También, si `POST` es utilizado para enviar solicitudes de información con Content-Type **distinto** a `application/x-www-form-urlencoded`, `multipart/form-data`, o `text/plain`, ej. si la solicitud `POST` envía una carga XML al servidor utilizando `application/xml` or `text/xml`, entonces la solicitud **es** verificada.
- Se establecen encabezados personalizados (ej. la solicitud usa un encabezado como `X-PINGOTHER`)

> **Nota:** Empezando en Gecko 2.0, las codificaciones de datos `text/plain`, `application/x-www-form-urlencoded`, y `multipart/form-data` pueden ser enviadas en sitios cruzados sin verificación. Anteriormente, solo `text/plain` podía ser enviado sin verificación.

Un ejemplo de este tipo de invocación puede ser:

```js
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/post-here/';
var body = '<?xml version="1.0"?><person><name>Arun</name></person>';

function callOtherDomain(){
  if(invocation)
    {
      invocation.open('POST', url, true);
      invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
      invocation.setRequestHeader('Content-Type', 'application/xml');
      invocation.onreadystatechange = handler;
      invocation.send(body);
    }
}

......
```

En el ejemplo de arriba, la línea 3 crea un cuerpo XML para enviar con la solicitud `POST` en la línea 8. También, en la línea 9, se establece una cabecera HTTP de solicitud "personalizado" (no estándar `X-PINGOTHER: pingpong`). Dichas cabeceras no son parte del protocolo HTTP/1.1, pero son útiles generalmente en aplicaciones web. Dado que la solicitud (`POST`) usa un Content-Type `application/xml`, y dado que se establece una cabecera personalizada, la solicitud es verificada.

Veamos este intercambio completo entre un cliente y un servidor:

```shell
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Origin: http://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER
Access-Control-Max-Age: 1728000
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain

POST /resources/post-here/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
X-PINGOTHER: pingpong
Content-Type: text/xml; charset=UTF-8
Referer: http://foo.example/examples/preflightInvocation.html
Content-Length: 55
Origin: http://foo.example
Pragma: no-cache
Cache-Control: no-cache

<?xml version="1.0"?><person><name>Arun</name></person>


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:40 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 235
Keep-Alive: timeout=2, max=99
Connection: Keep-Alive
Content-Type: text/plain

[Some GZIP'd payload]
```

Las líneas 1 - 12 arriba representan la solicitud verificada con los métodos `OPTIONS`. Firefox 3.1 determina lo que se necesita para enviar esto basándose en los parámetros de la solicitud que los fragmentos de JavaScript que se usaron arriba, para que el servidor pueda responder si es aceptable enviar la solicitud con los parámetros de la solicitud real. OPTIONS es un método HTTP/1.1 que se utiliza para determinar información adicional de los servidores, y es un método **idempotente**, esto significa que no puede ser utilizado para cambiar el recurso. Observe que, junto con la solicitud OPTIONS, se envían otras dos cabeceras de solicitud (líneas 11 y 12 respectivamente):

```
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER
```

La cabecera `Access-Control-Request-Method` notifica al servidor como parte de una solicitud verificada que cuándo se envíe la solicitud real, esta será enviada con un método de solicitud `POST`. La cabecera `Access-Control-Request-Headers` notifica al servidor que cuando la solicitud real sea enviada, será enviada con un encabezado `X-PINGOTHER` personalizado. Ahora, el servidor tiene la oportunidad para determinar si desea aceptar la solicitud bajo estas circunstancias.

Las líneas 15 - 27 de arriba corresponden con la respuesta que devuelve el servidor indicando que el método de la petición (POST) y la cabecera `X-PINGOTHER` son aceptadas. En particular, echemos un vistazo a las líneas 18-21:

```
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER
Access-Control-Max-Age: 1728000
```

El servidor responde con `Access-Control-Allow-Methods` y dice que `POST`, `GET`, y `OPTIONS` son métodos viables para consultar el recurso en cuestión. Observe que esta cabecera es similar al [HTTP/1.1 Allow: encabezado de respuesta](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.7), pero usado estrictamente dentro del contexto del control de acceso. El servidor también envía `Access-Control-Allow-Headers` con un valor de `X-PINGOTHER`, confirmando que es una cabecera permitida para ser usado en la solicitud real. Como `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers` es una lista separada por comas de cabeceras aceptables. Finalmente, `Access-Control-Max-Age` da el valor en segundos de cuánto tarda la respuesta de la solicitud verificada en ser capturada sin enviar otra solicitud verificada. En este caso, 1728000 segundos son 20 días.

### Solicitudes con credenciales

La capacidad más interesante expuesta tanto por [`XMLHttpRequest`](/en/DOM/XMLHttpRequest) y Access Control es la habilidad para hacer solicitudes "con credenciales" que estén al tanto de Cookies HTTP e información de Autenticación HTTP. Por defecto, en las invocaciones [`XMLHttpRequest`](/en/DOM/XMLHttpRequest) de un sitio curzado, los exploradores no enviarán credenciales. Una bandera específica tiene que ser establecida en el objeto [`XMLHttpRequest`](/en/DOM/XMLHttpRequest) cuando este es invocado.

En este ejemplo, el contenido cargado originalmente desde `http://foo.example` hace una solicitud GET simple a un recurso en `http://bar.other` que establece Cookies. El contenido en foo.example puede contener un JavaScript como este:

```js
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/credentialed-content/';

function callOtherDomain(){
  if(invocation) {
    invocation.open('GET', url, true);
    invocation.withCredentials = true;
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}
```

La línea 7 muestra la bandera en [`XMLHttpRequest`](/en/DOM/XMLHttpRequest) que tiene que ser establecida para poder hacer la invocación con Cookies, es decir, el valor booleano `withCredentials`. Por defecto, la invocación es hecha sin Cookies. Dado que esta es una simple solicitud `GET`, no es verificada, pero el explorador **rechazará** cualquier respuesta que no tiene el encabezado `Access-Control-Allow-Credentials: true`,y **no** hará disponible la respuesta para invocar contenido web.

A continuación se proporciona una muestra de intercambio entre un cliente y un servidor:

```shell
GET /resources/access-control-with-credentials/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Referer: http://foo.example/examples/credential.html
Origin: http://foo.example
Cookie: pageAccess=2


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:34:52 GMT
Server: Apache/2.0.61 (Unix) PHP/4.4.7 mod_ssl/2.0.61 OpenSSL/0.9.7e mod_fastcgi/2.4.2 DAV/2 SVN/1.4.2
X-Powered-By: PHP/5.2.6
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Set-Cookie: pageAccess=3; expires=Wed, 31-Dec-2008 01:34:53 GMT
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 106
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain


[text/plain payload]
```

Pese a que la línea 11 contiene la Cookie destinada para el contenido en `http://bar.other`, si bar.other no responde con `Access-Control-Allow-Credentials: true` (línea 19) la respuesta será ignorada y no puesta a disposición para el contenido web.

> **Nota:** cuando se responde a una solicitud con credeciales, el servidor **debe** especificar un dominio, y no puede usar comodines. El ejemplo de arriba fallará si la cabecera fuera un comodín como: `Access-Control-Allow-Origin:`. Dado que `Access-Control-Allow-Origin` menciona explícitamente `http://foo.example`, el contenido de credenciales competente es devuelto al contenido web invocador. Observe que, en la línea 22, se establece una cookie adicional.

Todos estos ejemplos pueden [verse funcionando aquí](http://arunranga.com/examples/access-control/). La siguiente sección se refiere a las verdaderas cabeceras HTTP.

## Las cabeceras HTTP de respuesta

Esta sección lista las cabeceras HTTP de respuesta que los servidores envían de vuelta para las solicitudes de acceso de control definidas por la especificación del Intercambio de Recursos de Origen Cruzado. La sección anterior da un resumen de estos en acción.

### Access-Control-Allow-Origin

Un recurso devuelto puede tener una cabecera `Access-Control-Allow-Origin`, con la siguiente sintaxis:

```
Access-Control-Allow-Origin: <origin> | *
```

El parámetro `origin` específica una URI que puede tener acceso al recurso. El explorador debe asegurar esto. Para solicitudes **sin** credenciales, el servidor debe especificar "\*" como un comodín permitiendo, de este modo, el acceso al recurso a cualquier origen.

Por ejemplo, para permitir a `http://mozilla.com` acceder al recurso, usted puede especificar:

```
Access-Control-Allow-Origin: http://mozilla.com
```

Si el servidor especifica un host de origen en vez de "\*", entonces se debe incluir Origin en el encabezado de respuesta Vary para indicar a los clientes que las respuestas del servidor difieren basándose en el valor del encabezado de respuesta Origin.

### Access-Control-Expose-Headers

Esta cabecera permite una _whitelist_ de cabeceras del servidor que los exploradores tienen permitido acceder. Por ejemplo:

```
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

Esto permite a las cabeceras `X-My-Custom-Header` y `X-Another-Custom-Header` ser expuestos al explorador.

### Access-Control-Max-Age

Esta cabecera indica durante cuánto tiempo los resultados de la solicitud verificada pueden ser capturados. Para un ejemplo de solicitudes verificadas, vea los ejemplos de arriba.

```
Access-Control-Max-Age: <delta-seconds>
```

El parámetro `delta-seconds` indica el número de segundos en que los resultados pueden ser capturados.

### Access-Control-Allow-Credentials

Indica si la respuesta puede ser expuesta cuando la bandera `credentials` es verdadera. Cuando se usa como parte de una respuesta para una solicitud verficada, este indica si la solicitud verdadera puede realizarse usando credenciales. Note que las solicitudes `GET` simples no son verificadas, y por lo que si una solicitud es hecha para un recurso con credenciales, si la cabecera no es devuelta con el recurso, la respuesta es ignorada por el explorador y no devuelta al contenido web.

```
Access-Control-Allow-Credentials: true | false
```

[Las Solicitudes con credenciales](/En/HTTP_access_control#Requests_with_credentials) son discutidas arriba.

### Access-Control-Allow-Methods

Específica el método o los métodos permitidos cuando se asigna un recurso. Es usado en respuesta a la solicitud verificada. Las condiciones sobre cuándo una solicitud es verificada se discuten arriba.

```
Access-Control-Allow-Methods: <method>[, <method>]*
```

Un ejemplo de una [solicitud verificada se muestra arriba](#Preflighted_requests), incluyendo un ejemplo donde se envía este encabezado al explorador.

### Access-Control-Allow-Headers

Usado en respuesta a una [solicitud verificada](#Preflighted_requests) para indicar qué encabezado HTTP puede ser usado cuando se realiza la solicitud real.

```
Access-Control-Allow-Headers: <field-name>[, <field-name>]*
```

## Los encabezados HTTP de solicitud

Esta sección lista las cabeceras que los clietnes deben utilizar cuando realizan solicitudes HTTP para usar la característica de intercambio de origen cruzado. Note que estas cabeceras son establecidas cuando se realizan realizan invocaciones a los servidores. Los desarrolladores usan la capacidad de sitios cruzados [`XMLHttpRequest`](/en/DOM/XMLHttpRequest) para no tener que establecer ninguna solicitud de intercambio de origen cruzado programada.

### Origin

Indica el origen de las solicitudes de acceso a sitios cruzados o solicitudes verificadas.

```
Origin: <origin>
```

El origen es una URI indicando al servidor dónde se ha iniciado la solicitud. Este no incluye ninguna información de recorrido, sólo el nombre del servidor.

> **Nota:** El `origin` puede ser un string vacío; esto es útil, por ejemplo, si el recurso es un `data` URL.

Observe que en cualquier solicitud de acceso de control, la cabecera `ORIGIN` **siempre** se envía.

### Access-Control-Request-Method

Se usa cuando se emite una solicitud verificada, para indicarle al servidor qué método HTTP será usado cuando se haga la solicitud real.

```
Access-Control-Request-Method: <method>
```

Ejemplos de esta utilización pueden ser encontrados [arriba.](#Preflighted_requests)

### Access-Control-Request-Headers

Usada cuando se emite una solicitud verificada para indicarle al servidor qué cabecera HTTP será usada cuando se haga la solicitud real.

```
Access-Control-Request-Headers: <field-name>[, <field-name>]*
```

Ejemplos de esta utilización pueden ser encontrados [arriba](/En/HTTP_access_control#Preflighted_requests).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- [Muestras de Código mostrando `XMLHttpRequest` e Intercambio de Recursos de Origen Cruzado](http://arunranga.com/examples/access-control/)
- [Intercambio de Recursos de Origen Cruzado desde una perspectiva de Servidor (PHP, etc.)](/es/docs/Web/HTTP/Server-Side_Access_Control)
- [Especificación del Intercambio de Recursos de Origen Cruzado](http://www.w3.org/TR/cors/)
- [`XMLHttpRequest`](/en/DOM/XMLHttpRequest)
- [Discusión adicional sobre el encabezado Origin](http://crypto.stanford.edu/websec/specs/origin-header/)
- [Usando CORS con todos los exploradores (modernos).](http://www.kendoui.com/blogs/teamblog/posts/11-10-03/using_cors_with_all_modern_browsers.aspx)
- [Usando CORS - HTML5 Rocks](http://www.html5rocks.com/en/tutorials/cors/)
