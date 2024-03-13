---
title: Intercambio de recursos de origen cruzado (CORS)
slug: Web/HTTP/CORS
l10n:
  sourceCommit: 726efed289eb9d62eef723bdc506dc39e4abcbb3
---

{{HTTPSidebar}}

**El intercambio de recursos de origen cruzado** ({{Glossary("CORS")}}, por sus siglas en inglés), es un mecanismo basado en cabeceras {{Glossary("HTTP")}} que permite a un servidor indicar cualquier dominio, esquema o puerto con un {{Glossary("origin", "origen")}} distinto del suyo desde el que un navegador debería permitir la carga de recursos. CORS también se basa en un mecanismo por el cual los navegadores realizan una solicitud de "verificación previa" al servidor que aloja el recurso de origen cruzado, con el fin de comprobar que el servidor permitirá la solicitud real. En esa comprobación previa, el navegador envía cabeceras que indican el método HTTP y las cabeceras que se utilizarán en la solicitud real.

Un ejemplo de solicitud de origen cruzado: el código JavaScript del front-end servido desde `https://domain-a.com` utiliza {{domxref("XMLHttpRequest")}} para realizar una solicitud a `https://domain-b.com/data.json` .

Por razones de seguridad, los navegadores restringen las peticiones HTTP de origen cruzado iniciadas desde scripts. Por ejemplo, `XMLHttpRequest` y la [API Fetch](/es/docs/Web/API/Fetch_API) siguen la [Política Same-origin](/es/docs/Web/Security/Same-origin_policy). Esto significa que una aplicación web que utilice esas API solo puede solicitar recursos del mismo origen desde el que se cargó la aplicación, a menos que la respuesta de otros orígenes incluya las cabeceras CORS adecuadas.

![Representación diagramática del mecanismo CORS](cors_principle.png)

El mecanismo CORS soporta peticiones seguras de origen cruzado y trasferencias de datos entre navegadores y servidores. Los navegadores modernos utilizan CORS en API como `XMLHttpRequest` o [Fetch](/es/docs/Web/API/Fetch_API) para mitigar los riesgos de las peticiones HTTP de origen cruzado.

## ¿Qué solicitudes utilizan CORS?

Este [estándar para el intercambio de recursos de origen cruzado](https://fetch.spec.whatwg.org/#http-cors-protocol) puede permitir peticiones HTTP de origen cruzado para:

- Invocaciones de las API {{domxref("XMLHttpRequest")}} o [Fetch](/es/docs/Web/API/Fetch_API), como se explicó anteriormente.
- Web Fonts (para el uso de fuentes entre dominios en `@font-face` dentro de CSS), [para que los servidores puedan desplegar fuentes TrueType que solo puedan cargarse entre orígenes y ser utilizadas por sitios web autorizados para ello](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [Texturas WebGL](/es/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- Imágenes / cuadros de vídeo dibujados en un _canvas_ utilizando {{domxref("CanvasRenderingContext2D.drawImage()", "drawImage()")}}.
- [Formas CSS a partir de imágenes](/es/docs/Web/CSS/CSS_Shapes/Shapes_From_Images)

Este es un artículo general sobre el uso compartido de recursos de origen cruzado e incluye una discusión sobre las cabeceras HTTP necesarias.

## Resumen funcional

El estándar para recursos compartidos de origen cruzado funciona añadiendo nuevas [Cabeceras HTTP](/es/docs/Web/HTTP/Headers) que permiten a los servidores describir qué orígenes tienen permiso para leer esa información de un navegador web. Además, para los métodos de petición HTTP que pueden causar efectos secundarios en los datos del servidor (en particular los métodos HTTP distintos de {{HTTPMethod("GET")}} o {{HTTPMethod("POST")}} con determinados [tipos MIME](/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), la especificación exige que los navegadores "comprueben previamente" la petición, solicitando al servidor los métodos admitidos con el método de solicitud HTTP {{HTTPMethod("OPTIONS")}}, y entonces, tras la "aprobación" del servidor, enviando la solicitud real. Los servidores también pueden informar a los clientes de si deben enviar "credenciales" (como [cookies](/es/docs/Web/HTTP/Cookies) y [Autenticación HTTP](/es/docs/Web/HTTP/Authentication)) con las solicitudes.

Los fallos de CORS provocan errores, pero por razones de seguridad, los detalles del error _no están disponibles para JavaScript_. Todo lo que el código sabe es que se ha producido un error. La única forma de determinar específicamente qué salió mal, es mirar en la consola del navegador para obtener más detalles.

En las secciones siguientes se analizan los escenarios y se desglosan las cabeceras HTTP utilizadas.

## Ejemplos de escenarios de control de acceso

Presentamos tres escenarios que demuestran cómo funciona el uso compartido de recursos entre orígenes. Todos estos ejemplos utilizan {{domxref("XMLHttpRequest")}}, que puede realizar peticiones cruzadas entre orígenes en cualquier navegador compatible.

### Solicitudes simples

Algunas peticiones no activan una {{Glossary("preflight_request","petición verificada previamente de CORS")}}. Son las llamadas _solicitudes simples_ de la obsoleta [Especificación CORS](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology), aunque la [Especificación Fetch](https://fetch.spec.whatwg.org/) (que ahora define CORS) no utiliza ese término.

El motivo de esto es que el elemento {{HTMLElement("form")}} de HTML4 (que es anterior a {{domxref("XMLHttpRequest")}} y {{domxref("fetch")}} entre sitios) pueda enviar peticiones simples a cualquier origen, por lo que cualquiera que escriba un servidor ya debe estar protegiéndose contra {{Glossary("CSRF", "cross-site request forgery")}} (CSRF). Bajo este supuesto, el servidor no tiene que aceptar (respondiendo a una solicitud de verificación previa) recibir cualquier solicitud que parezca un envío de formulario, ya que la amenaza de CSRF no es peor que la del envío de formulario. Sin embargo, el servidor aún debe optar por usar {{HTTPHeader("Access-Control-Allow-Origin")}} para compartir la respuesta con el _script_.

Una petición simple es aquella que cumple todas las siguientes condiciones:

- Uno de los métodos permitidos:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Además de las cabeceras establecidas automáticamente por el agente de usuario (por ejemplo {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}}), o [las demás cabeceras definidas en la especificación Fetch como _nombre de cabecera prohibido_](https://fetch.spec.whatwg.org/#forbidden-header-name), las únicas cabeceras que se pueden configurar manualmente son [las que la especificación Fetch define como cabecera de solicitud CORS-safelisted](https://fetch.spec.whatwg.org/#cors-safelisted-request-header), las cuales son:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (Por favor, tenga en cuenta los siguientes requisitos adicionales)
  - {{HTTPHeader("Range")}} (solo con un [valor de cabecera de rango simple](https://fetch.spec.whatwg.org/#simple-range-header-value); por ejemplo, `bytes=256-` o `bytes=127-255`)

> **Nota:** Firefox aún no ha implementado `Range` como una cabecera de solicitud en la lista segura. Véase el [error 1733981 en Firefox](https://bugzil.la/1733981).

- Las únicas combinaciones de tipo/subtipo permitidas para el {{Glossary("MIME type","media type")}} especificado en la cabecera {{HTTPHeader("Content-Type")}} son:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- Si la petición se realiza utilizando un objeto {{domxref("XMLHttpRequest")}}, no se registran detectores de eventos en el objeto devuelto por la propiedad {{domxref("XMLHttpRequest.upload")}} utilizada en la petición; Es decir, dada una instancia `xhr` de {{domxref("XMLHttpRequest")}}, ningún código ha llamado a `xhr.upload.addEventListener()` para añadir un detector de eventos para monitorizar la subida.
- No se utiliza ningún objeto {{domxref("ReadableStream")}} en la solicitud.

> **Nota:** _WebKit Nightly_ y _Safari Technology Preview_ imponen restricciones adicionales a lo valores permitidos en las cabeceras {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} y {{HTTPHeader("Content-Language")}}. Si alguna de esas cabeceras tiene valores "no estándar", WebKit/Safari no consideran que la petición sea una "solicitud simple". Los valores que WebKit/Safari consideran "no estándar" no están documentados, excepto en los siguientes errores de WebKit:
>
> - [Comprobación previa requerida para cabeceras de solicitud CORS-safelisted no estándar: Accept, Accept-Language y Content-Language](https://webkit.org/b/165178)
> - [Permitir comas en las cabeceras para CORS simple en Accept, Accept-Language y Content-Language](https://webkit.org/b/165566)
> - [Cambio a un modelo de lista negra para cabeceras Accept restringidas en peticiones CORS simples](https://webkit.org/b/166363)
>
> Ningún otro navegador aplica estas restricciones adicionales porque no forman parte de la especificación.

Por ejemplo, supongamos que el contenido web en `https://foo.example` desea invocar contenido en `https://bar/other`. El código del siguiente ejemplo podría ser utilizado en el JavaScript desplegado en `foo.example`:

```js
const xhr = new XMLHttpRequest();
const url = "https://bar.other/resources/public-data/";

xhr.open("GET", url);
xhr.onreadystatechange = someHandler;
xhr.send();
```

Esta operación realiza un intercambio sencillo entre el cliente y el servidor, utilizando cabeceras CORS para gestionar los privilegios:

![Diagrama de solicitud CORS GET simple](simple-req.png)

Veamos lo que el navegador enviará al servidor en este caso:

```http
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
```

La cabecera de la solicitud a destacar es {{HTTPHeader("Origin")}} que nos indica que la invocación procede de `https://foo.example`.

Ahora veamos como responde el servidor:

```http
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml

[…XML Data…]
```

En respuesta, el servidor devuelve una cabecera {{HTTPHeader("Access-Control-Allow-Origin")}} con `Access-Control-Allow-Origin: *`, lo que significa que se puede acceder al recurso desde **cualquier** origen.

```http
Access-Control-Allow-Origin: *
```

Este patrón de las cabeceras {{HTTPHeader("Origin")}} y {{HTTPHeader("Access-Control-Allow-Origin")}} es el uso más sencillo del protocolo de control de acceso. Si los propietarios del recurso en `https://bar.other` desearan restringir el acceso al recurso a las solicitudes procedentes únicamente de `https://foo.example` (es decir, ningún dominio distinto de `https://foo.example` puede acceder al recurso de forma cruzada entre orígenes), enviarían:

```http
Access-Control-Allow-Origin: https://foo.example
```

> **Nota:** Al responder a una petición con [solicitud con credenciales](#requests_with_credentials), el servidor debe especificar un origen en el valor de la cabecera `Access-Control-Allow-Origin`, en lugar de especificar el comodín "\*".

### Solicitudes verificadas previamente

A diferencia de las [solicitudes simples](#solicitudes-simples), para las "solicitudes verificadas previamente" el navegador envía primero una petición HTTP utilizando el método {{HTTPMethod("OPTIONS")}} al recurso en el otro origen, para determinar si la solicitud real es segura de enviar. Este tipo de solicitudes entre orígenes se verifican previamente porque pueden afectar a los datos del usuario.

A continuación se muestra un ejemplo de solicitud que se comprobará previamente:

```js
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://bar.other/doc");
xhr.setRequestHeader("X-PINGOTHER", "pingpong");
xhr.setRequestHeader("Content-Type", "text/xml");
xhr.onreadystatechange = handler;
xhr.send("<person><name>Arun</name></person>");
```

El ejemplo anterior crea un cuerpo para enviar con la solicitud `POST`. Además, se establece una cabecera de petición HTTP `X-PINGOTHER` no estándar. Dichas cabeceras no son parte de HTTP/1.1, pero suelen ser útiles para las aplicaciones web. Puesto que la petición utiliza un `Content-Type` de `text/xml` y puesto que se establece una cabecera personalizada, esta petición es "verificada previamente".

![Diagrama de una solicitud con verificación previa](preflight_correct.png)

> **Nota:** Como se describe a continuación, la solicitud `POST` real no incluye las cabeceras `Access-Control-Request-*`. Estas solo son necesarias para la solicitud `OPTIONS`.

Veamos el intercambio completo entre cliente y servidor. El primer intercambio es la solicitud/respuesta verificadas previamente:

```http
OPTIONS /doc HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type

HTTP/1.1 204 No Content
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

Las primeras diez líneas representan la solicitud de verificación previa con el método `OPTIONS`. El navegador determina que necesita enviar esto basándose en los parámetros de petición que el fragmento de código JavaScript de arriba ha usado, para que el servidor pueda responder si es aceptable enviar la petición con los parámetros de solicitud reales. OPTIONS es un método HTTP/1.1 que se utiliza para determinar con más detalle la información de los servidores y es un método seguro, lo que significa que no se puede utilizar para cambiar el recurso. Observe que junto con la solicitud OPTIONS, se envían otras dos cabeceras de solicitud (líneas nueve y diez respectivamente):

```http
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

La cabecera {{HTTPHeader("Access-Control-Request-Method")}} notifica al servidor, como parte de una solicitud de verificación previa, que cuando se envíe la solicitud real lo hará con un método `POST`. La cabecera {{HTTPHeader("Access-Control-Request-Headers")}} notifica al servidor que cuando se envíe la solicitud real, lo hará con las cabeceras personalizadas `X-PINGOTHER` and `Content-Type`. Ahora, el servidor tiene la oportunidad de determinar si puede aceptar una petición bajo estas condiciones.

Las líneas del código anterior que van desde la 12 hasta la 21, son la respuesta que devuelve el servidor, que indican que el método de solicitud `POST` y las cabeceras de solicitud `X-PINGOTHER` son aceptables. Echemos un vistazo más de cerca a las líneas que van desde las 15 a la 18:

```http
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

El servidor responde con `Access-Control-Allow-Origin: https://foo.example`, restringiendo el acceso únicamente al dominio de origen solicitante. También responde con `Access-Control-Allow-Methods`, que dice que `POST` y `GET` son métodos válidos para consultar el recurso en cuestión (esta cabecera es similar a la cabecera de respuesta {{HTTPHeader("Allow")}}), pero se utiliza estrictamente en el contexto del control de acceso.

El servidor también envía `Access-Control-Allow-Headers` con un valor de "`X-PINGOTHER, Content-Type`", confirmando que se trata de cabeceras permitidas que se utilizarán con la solicitud real. Al igual que `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers` es una lista de cabeceras aceptables separada por comas.

Por último, {{HTTPHeader("Access-Control-Max-Age")}} da un valor en segundos, indicando durante cuánto tiempo se puede almacenar en caché la respuesta a la solicitud de verificación previa sin tener que enviar otra solicitud de verificación previa. El valor por defecto es de cinco segundos. En este caso, la edad máxima es de 86400 segundos (lo que son 24 horas). Tenga en cuenta que cada navegador tiene un [Valor interno máximo](/es/docs/Web/HTTP/Headers/Access-Control-Max-Age) que tiene preferencia cuando el `Access-Control-Max-Age` lo supera.

Una vez comprobada la solicitud de verificación previa, se envía la solicitud real:

```http
POST /doc HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
X-PINGOTHER: pingpong
Content-Type: text/xml; charset=UTF-8
Referer: https://foo.example/examples/preflightInvocation.html
Content-Length: 55
Origin: https://foo.example
Pragma: no-cache
Cache-Control: no-cache

<person><name>Arun</name></person>

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:40 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 235
Keep-Alive: timeout=2, max=99
Connection: Keep-Alive
Content-Type: text/plain

[Some XML payload]
```

#### Solicitudes y redireccionamientos controlados previamente

Actualmente, no todos los navegadores admiten las redirecciones posteriores a una solicitud verificada previamente. Si se produce una redirección después de una solicitud de este tipo, algunos navegadores a día de hoy informarán con un mensaje de error como el siguiente:

> La solicitud ha sido redirigida a 'https://example.com/foo' lo cual no está permitido para las solicitudes de origen cruzado que requieren verificación previa.
> La solicitud requiere verificación previa, por lo que no tiene permitido seguir las redirecciones de origen cruzado.

El protocolo CORS originalmente requería ese comportamiento, pero [se modificó posteriormente para no exigirlo](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). Sin embargo, no todos los navegadores han implementado el cambio, por lo que todavía muestran el comportamiento requerido originalmente.

Hasta que los navegadores se pongan al día con la especificación, es posible que pueda evitar esta limitación realizando una o ambas de las siguientes acciones:

- Cambiar el comportamiento del servidor para evitar la comprobación previa y/o evitar la redirección.
- Cambiar la solicitud para que sea una [Solicitud simple](#solicitudes-simples) que no provoque una comprobación previa.

Si eso no es posible, otra forma es:

- Hacer una [Solicitud simple](#solicitudes-simples) (usando {{domxref("Response.url")}} para la API Fetch o {{domxref("XMLHttpRequest.responseURL")}}) para determinar en qué URL terminaría la petición real que será verificada previamente.
- Hacer otra solicitud (la solicitud _real_) utilizando la URL que obtuvo de `Response.url` o de `XMLHttpRequest.responseURL` en el primer paso.

Sin embargo, si se trata de una solicitud que desencadena una verificación previa, debido a la presencia de la cabecera de autorización en la solicitud, no podrá evitar la limitación siguiendo los pasos descritos anteriormente. Y no podrá evitarla en absoluto a menos que tenga control sobre el servidor al que se realiza la solicitud.

### Solicitudes con credenciales

> **Nota:** Cuando se realicen peticiones con credenciales a un dominio diferente, se seguirán aplicando las políticas de cookies de terceros. La política siempre se aplica independientemente de cualquier configuración en el servidor y el cliente, como se describe en este capítulo.

La capacidad más interesante expuesta por {{domxref("XMLHttpRequest")}} o [Fetch](/es/docs/Web/API/Fetch_API) y CORS es la capacidad de hacer peticiones "con credenciales" que son conscientes de las [cookies HTTP](/es/docs/Web/HTTP/Cookies) y de la información de autentificación HTTP. Por defecto, en las invocaciones `XMLHttpRequest` o [Fetch](/es/docs/Web/API/Fetch_API) de origen cruzado, los navegadores **no** enviarán credenciales. Debe establecerse un indicador específico en el objeto `XMLHttpRequest` o en el constructor {{domxref("Request")}} cuando se invoca.

En este ejemplo, el contenido cargado originalmente desde `https://foo.example` hace una simple petición GET a un recurso en `https://bar.other` que establece Cookies. El contenido en foo.example podría contener JavaScript como este:

```js
const invocation = new XMLHttpRequest();
const url = "https://bar.other/resources/credentialed-content/";

function callOtherDomain() {
  if (invocation) {
    invocation.open("GET", url, true);
    invocation.withCredentials = true;
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}
```

La línea 7 muestra la bandera en {{domxref("XMLHttpRequest")}} que debe establecerse para realizar la invocación con Cookies, concretamente el valor booleano en `withCredentials`. Por defecto, la invocación se realiza sin Cookies. Dado que se trata de uns simple petición GET, no se comprueba previamente, pero el navegador rechazará cualquier respuesta que no tenga la cabecera {{HTTPHeader("Access-Control-Allow-Credentials")}}`: true`, y **no** pondrá la respuesta a disposición del contenido web invocador.

![Diagrama de una solicitud GET simple con Access-Control-Allow-Credentials](cred-req-updated.png)

He aquí un ejemplo de intercambio entre cliente y servidor:

```http
GET /resources/credentialed-content/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Referer: https://foo.example/examples/credential.html
Origin: https://foo.example
Cookie: pageAccess=2

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:34:52 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
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

Aunque la línea 10 contiene la Cookie destinada al contenido en `https://bar.other`, si bar.other no respondiera con un {{HTTPHeader("Access-Control-Allow-Credentials")}}`: true` (línea 16), la respuesta sería ignorada y no se pondría a disposición del contenido web.

#### Solicitudes de verificación previa y credenciales

La solicitudes CORS de verificación previa nunca deben incluir credenciales. La respuesta a una solicitud de verificación previa debe especificar `Access-Control-Allow-Credentials: true` para indicar que la solicitud real se puede realizar con credenciales.

> **Nota:** Algunos servicios de autenticación de empresas exigen que se envíen certificados de cliente TLS en las solicitudes de verificación previa, lo que contraviene la especificación [Fetch](https://fetch.spec.whatwg.org/#cors-protocol-and-credentials).
>
> Firefox 87 permite habilitar este comportamiento no conforme configurando la preferencia: `network.cors_preflight.allow_client_cert` en `true` ([error 1511151 en Firefox](https://bugzil.la/1511151)). Actualmente, los navegadores basados en Chromium siempre envían certificados de cliente TLS en solicitudes de verificación previa de CORS ([error 775438 en Chrome](https://crbug.com/775438)).

#### Solicitudes con credenciales y comodines

Al responder a una solicitud con credenciales:

- El servidor **no debe** especificar el comodín "`*`" para el valor de respuesta de la cabecera `Access-Control-Allow-Origin`, sino que debe especificar un origen explícito, como por ejemplo `Access-Control-Allow-Origin: https://example.com`.

- El servidor **no debe** especificar el comodín "`*`" para el valor de respuesta de la cabecera `Access-Control-Allow-Headers`, sino que debe especificar una lista explícita de nombres de cabecera, como por ejemplo `Access-Control-Allow-Headers: X-PINGOTHER, Content-Type`

- El servidor **no debe** especificar el comodín "`*`" para el valor de la cabecera `Access-Control-Allow-Methods`, sino que debe especificar una lista explícita de nombres de métodos, como por ejemplo `Access-Control-Allow-Methods: POST, GET`

- El servidor **no debe** especificar el comodín "`*`" para el valor de respuesta de la cabecera `Access-Control-Expose-Headers`, sino que debe especificar una lista explícita de nombres de cabecera, como por ejemplo `Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision`

Si una solicitud incluye una credencial (comúnmente una cabecera `Cookie`) y la respuesta incluye una cabecera `Access-Control-Allow-Origin: *` (es decir, con el comodín), el navegador bloqueará el acceso a la respuesta e informará de un error CORS en la consola de las herramientas de desarrollo del navegador.

Pero si una petición incluye una credencial (como la cabecera `Cookie`) y la respuesta incluye un origen real en lugar de un comodín (como por ejemplo `Access-Control-Allow-Origin: https://example.com`), entonces el navegador permitirá el acceso a la respuesta desde el origen especificado.

También tenga en cuenta que cualquier cabecera de respuesta `Set-Cookie` en una respuesta no establecería una Cookie si el valor `Access-Control-Allow-Origin` en esa respuesta es el comodín "`*`" en lugar de un origen real.

#### Cookies de terceros

Tenga en cuenta que las Cookies establecidas en las respuestas CORS están sujetas a la políticas normales sobre Cookies de terceros. En el ejemplo anterior, la página se carga desde `foo.example` pero la Cookie de la línea 19 es enviada por `bar.other`, por lo que no se guardaría si el navegador del usuario está configurado para rechazar todas las Cookies de terceros.

La Cookie en la solicitud anterior (línea 10) también puede ser suprimida en las políticas normales sobre Cookies de terceros. Por lo tanto, la política de Cookies aplicada puede anular la capacidad descrita en este capítulo, impidiéndole realizar solicitudes con credenciales.

Se aplicaría la política de Cookies en torno al atributo [Cookies del mismo sitio](/es/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)

## Las cabeceras de respuesta HTTP

Esta sección enumera las cabeceras de respuesta HTTP que los servidores devuelven para las solicitudes de control de acceso, tal y como se definen en la especificación para el intercambio de recursos de origen cruzado. La sección anterior ofrece una visión general de las mismas en acción.

### Access-Control-Allow-Origin

Un recurso devuelto puede tener la cabecera {{HTTPHeader("Access-Control-Allow-Origin")}} con la siguiente sintaxis:

```http
Access-Control-Allow-Origin: <origin> | *
```

`Access-Control-Allow-Origin` especifica un único origen que indica a los navegadores que permitan a ese origen acceder al recurso; O bien - para solicitudes **sin** credenciales- el comodín "`*`" indica a los navegadores que permitan a cualquier origen acceder al recurso.

Por ejemplo, para permitir que el código del origen `https://mozilla.org` acceda al recurso Usted puede especificar:

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

Si el servidor especifica un único origen (que puede cambiar dinámicamente en función del origen solicitante como parte de una lista permitida) en lugar del comodín "`*`", el servidor también debe incluir `Origin` en la cabecera de respuesta {{HTTPHeader("Vary")}} para indicar a los clientes que las respuestas del servidor diferirán en función del valor de la cabecera de respuesta {{HTTPHeader("Origin")}}.

### Access-Control-Expose-Headers

La cabecera {{HTTPHeader("Access-Control-Expose-Headers")}} añade las cabeceras especificadas a las lista permitida a la que JavaScript (como {{domxref("XMLHttpRequest.getResponseHeader()","getResponseHeader()")}}) en los navegadores tiene permitido acceder.

```http
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```

Por ejemplo, lo siguiente:

```http
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

... permitiría al navegador exponer las cabeceras `X-My-Custom-Header` y `X-Another-Custom-Header`.

### Access-Control-Max-Age

La cabecera {{HTTPHeader("Access-Control-Max-Age")}} indica durante cuánto tiempo se pueden almacenar en caché los resultados de una solicitud de verificación previa. Para ver un ejemplo de solicitud de verificación previa, consulte los ejemplos anteriores.

```http
Access-Control-Max-Age: <delta-seconds>
```

El parámetro `delta-seconds` indica el número de segundos durante los cuales los resultados pueden permanecer almacenados en caché.

### Access-Control-Allow-Credentials

La cabecera {{HTTPHeader("Access-Control-Allow-Credentials")}} indica si la respuesta a la solicitud se puede exponer o no cuando el indicador `credentials` tiene el valor _true_ (verdadero). Cuando se utiliza como parte de una respuesta a una solicitud de verificación previa, indica si la solicitud real se puede realizar utilizando credenciales. Tenga en cuenta que las solicitudes `GET` simples no se verifican previamente, por lo que si se realiza una solicitud de un recurso con credenciales, si esta cabecera no se devuelve con el recurso, la respuesta es ignorada por el navegador y no se devuelve al contenido web.

```http
Access-Control-Allow-Credentials: true
```

Las [Solicitudes con credenciales](#Solicitudes_con_credenciales) se han tratado anteriormente.

### Access-Control-Allow-Methods

La cabecera {{HTTPHeader("Access-Control-Allow-Methods")}} especifica el método o métodos permitidos al acceder al recurso. Se utiliza en respuesta a una solicitud de verificación previa. las condiciones bajo las que una solicitud es verificada previamente se han explicado anteriormente.

```http
Access-Control-Allow-Methods: <method>[, <method>]*
```

Más arriba se ofrece un ejemplo de solicitud de {{Glossary("preflight request", "verificación previa")}}, incluido un ejemplo que envía esta cabecera al navegador.

### Access-Control-Allow-Headers

La cabecera {{HTTPHeader("Access-Control-Allow-Headers")}} se utiliza en respuesta a una solicitud de {{Glossary("preflight request", "verificación previa")}} para indicar qué cabeceras HTTP se pueden utilizar al realizar la solicitud real. Esta cabecera es la respuesta del servidor a la cabecera {{HTTPHeader("Access-Control-Request-Headers")}} del navegador.

```http
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

## Las cabeceras de solicitud HTTP

Esta sección enumera las cabeceras que los clientes pueden utilizar al emitir solicitudes HTTP para hacer uso de la función de intercambio de recursos de origen cruzado. Tenga en cuenta que estas cabeceras se establecen por usted cuando realiza invocaciones a servidores. Los desarrolladores que usan la funcionalidad {{domxref("XMLHttpRequest")}} de origen cruzado no tienen que establecer ninguna cabecera de solicitud de uso compartido entre orígenes mediante programación.

### Origin

La cabecera {{HTTPHeader("Origin")}} indica el origen de la solicitud de acceso de origen cruzado o de la solicitud de verificación previa.

```http
Origin: <origin>
```

El origen es una URL que indica el servidor desde el que se inicia la solicitud. No incluye ninguna información de ruta, sólo el nombre del servidor.

> **Nota:** El valor de `origin` puede ser `null`.

Tenga en cuenta que en cualquier solicitud de control de acceso, la cabecera {{HTTPHeader("Origin")}} **siempre** es enviada.

### Access-Control-Request-Method

La cabecera de solicitud {{HTTPHeader("Access-Control-Request-Method")}} se utiliza cuando se emite una solicitud de verificación previa para que el servidor sepa qué método HTTP se utilizará cuando se realice la solicitud real.

```http
Access-Control-Request-Method: <method>
```

Puede encontrar ejemplos de este uso [arriba](#Solicitudes_verificadas_previamente)

### Access-Control-Request-Headers

La cabecera {{HTTPHeader("Access-Control-Request-Headers")}} se utiliza cuando se emite una solicitud de verificación previa para que el servidor sepa qué cabeceras HTTP se utilizarán cuando se realice la solicitud real (como con {{domxref("XMLHttpRequest.setRequestHeader()","setRequestHeader()")}}). Esta cabecera del lado del navegador será respondida por la cabecera complementaria del lado del servidor {{HTTPHeader("Access-Control-Allow-Headers")}}.

```http
Access-Control-Request-Headers: <field-name>[, <field-name>]*
```

Puede encontrar ejemplos de este uso [arriba](#Solicitudes_verificadas_previamente)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Errores CORS](/es/docs/Web/HTTP/CORS/Errors)
- [Habilitar CORS: Quiero añadir soporte CORS a mi servidor](https://enable-cors.org/server.html)
- {{domxref("XMLHttpRequest")}}
- [API Fetch](/es/docs/Web/API/Fetch_API)
- [¿Será CORS?](https://httptoolkit.tech/will-it-cors/) - Explicador y generador de CORS interactivo
- [Cómo ejecutar el navegador Chrome sin CORS](https://alfilatov.com/posts/run-chrome-without-cors/)
- [Uso de CORS con todos los navegadores (modernos)](https://www.telerik.com/blogs/using-cors-with-all-modern-browsers)
- [Respuesta de Stack Overflow con información sobre cómo solucionar problemas comunes](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - Cómo evitar la verificación previa de CORS
  - Cómo utilizar un proxy CORS para evitar la cabecera "No Access-Control-Allow-Origin".
  - Cómo solucionar _"Access-Control-Allow-Origin header must not be the wildcard"_ ("El encabezado Access-Control-Allow-Origin no debe ser el comodín")
