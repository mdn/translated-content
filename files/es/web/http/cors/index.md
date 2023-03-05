---
title: Intercambio de recursos entre orígenes (CORS)
slug: Web/HTTP/CORS
l10n:
  sourceCommit: eb9eef29f1ccdaf1c8a464dbe4483c78f7a13b2a
---

{{HTTPSidebar}}

**El uso compartido de recursos entre orígenes** ({{Glossary("CORS")}}) es un mecanismo basado en cabeceras {{Glossary("HTTP")}} que permite a un servidor indicar cualquier dominio, esquema o puerto {{Glossary("origin", "origins")}} distinto del suyo desde el que un navegador debería permitir la carga de recursos. CORS también se basa en un mecanismo por el cual los navegadores realizan una solicitud de "verificación previa" al servidor que aloja el recurso de origen cruzado, con el fin de comprobar que el servidor permitirá la solicitud real. En esa comprobación previa, el navegador envía cabeceras que indican el método HTTP y las cabeceras que se utilizarán en la solicitud real.

Un ejemplo de solicitud de origen cruzado: el código JavaScript del front-end servido desde `https://domain-a.com` utiliza {{domxref("XMLHttpRequest")}} para realizar una solicitud a `https://domain-b.com/data.json` .

Por razones de seguridad, los navegadores restringen las peticiones HTTP de origen cruzado iniciadas desde scripts. Por ejemplo, `XMLHttpRequest` y la [API Fetch](/es/docs/Web/API/Fetch_API) siguen la [Política Same-origin](/es/docs/Web/Security/Same-origin_policy). Esto significa que una aplicación web que utilice esas API solo puede solicitar recursos del mismo origen desde el que se cargó la aplicación, a menos que la respuesta de otros orígenes incluya las cabeceras CORS adecuadas.

![Representación diagramática del mecanismo CORS](cors_principle.png)

El mecanismo CORS soporta peticiones seguras de origen cruzado y trasferencias de datos entre navegadores y servidores. Los navegadores modernos utilizan CORS en API como `XMLHttpRequest` o [Fetch](/es/docs/Web/API/Fetch_API) para mitigar los riesgos de las peticiones HTTP de origen cruzado.

## ¿Qué solicitudes utilizan CORS?

Este [estándar para recursos compartidos desde origen cruzado](https://fetch.spec.whatwg.org/#http-cors-protocol) puede permitir peticiones HTTP de origen cruzado para:

- Invocaciones del {{domxref("XMLHttpRequest")}} o de [API Fetch](/es/docs/Web/API/Fetch_API) como se ha comentado anteriormente.
- Web Fonts (para el uso de fuentes entre dominios en `@font-face` dentro de CSS), [para que los servidores puedan desplegar fuentes TrueType que solo puedan cargarse entre orígenes y ser utilizadas por sitios web autorizados para ello](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [Texturas WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- Imágenes / cuadros de vídeo dibujados en un _canvas_ utilizando {{domxref("CanvasRenderingContext2D.drawImage()", "drawImage()")}}.
- [Formas CSS a partir de imágenes](/es/docs/Web/CSS/CSS_Shapes/Shapes_From_Images)

Este es un artículo general sobre la compartición de recursos entre orígenes e incluye un análisis de las cabeceras HTTP necesarias.

## Resumen funcional

El estándar para recursos compartidos de origen cruzado funciona añadiendo nuevas [Cabeceras HTTP](/es/docs/Web/HTTP/Headers) que permiten a los servidores describir qué orígenes tienen permiso para leer esa información de un navegador web. Además, para los métodos de petición HTTP que pueden causar efectos secundarios en los datos del servidor (en particular los métodos HTTP distintos de {{HTTPMethod("GET")}} o {{HTTPMethod("POST")}} con determinados [tipos MIME](es/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), la especificación exige que los navegadores "comprueben previamente" la petición, solicitando al servidor los métodos admitidos con el método de solicitud HTTP {{HTTPMethod("OPTIONS")}}, y entonces, tras la "aprobación" del servidor, enviando la solicitud real. Los servidores también pueden informar a los clientes de si deben enviar "credenciales" (como [cookies](/es/docs/Web/HTTP/Cookies) y [Autenticación HTTP](/es/docs/Web/HTTP/Authentication)) con las solicitudes.

Los fallos de CORS provocan errores, pero por razones de seguridad, los detalles del error _no están disponibles para JavaScript_. Todo lo que el código sabe es que se ha producido un error. La única forma de determinar específicamente qué salió mal, es mirar en la consola del navegador para obtener más detalles. 

En las secciones siguientes se analizan los escenarios y se desglosan las cabeceras HTTP utilizadas.

## Ejemplos de escenarios de control de acceso

Presentamos tres escenarios que demuestran cómo funciona el uso compartido de recursos entre orígenes. Todos estos ejemplos utilizan {{domxref("XMLHttpRequest")}}, que puede realizar peticiones cruzadas entre orígenes en cualquier navegador compatible.

### Solicitudes simples

Algunas peticiones no activan un {{Glossary("preflight_request","CORSpreflight")}}. Son las llamadas _solicitudes simples_ de la obsoleta [Especificación CORS](https://www.w3.org/TR/2014/REC-cors-20140116/#terminology), aunque la [Especificación Fetch](https://fetch.spec.whatwg.org/) (que ahora define CORS) no utiliza ese término.

El motivo de esto es que el elemento {{HTMLElement("form")}} de HTML4(que es anterior al cruzamiento de sitios web {{domxref"XMLHttpRequest"}} y {{domxref"fetch"}}) pueda enviar peticiones simples a cualquier origen, por lo que cualquiera que escriba un servidor ya debe estar protegiéndose contra {{Glossary("CSRF", "cross-site request forgery")}} (CSRF). Bajo este supuesto, el servidor no tiene que aceptar (respondiendo a una solicitud de verificación previa) recibir cualquier solicitud que parezca un envío de formulario, ya que la amenaza de CSRF no es peor que la del envío de formulario. Sin embargo, el servidor aún debe optar por usar {{HTTPHeader("Access-Control-Allow-Origin")}} para compartir  la respuesta con el script.  

Una petición simple es aquella que cumple todas las siguientes condiciones:

- Uno de los métodos permitidos:
  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- 
Aparte de las cabeceras establecidas automáticamente por el agente de usuario (por ejemplo {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}}), o [las demás cabeceras definidas en la especificación Fetch como _nombre de cabecera prohibido_](https://fetch.spec.whatwg.org/#forbidden-header-name), las únicas cabeceras que se pueden configurar manualmente son [las que la especificación Fetch define como cabecera de solicitud CORS-safelisted](https://fetch.spec.whatwg.org/#cors-safelisted-request-header), las cuales son:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (Por favor, tenga en cuenta los siguientes requisitos adicionales)
  - {{HTTPHeader("Range")}} (solo con un[valor de cabecera de rango simple](https://fetch.spec.whatwg.org/#simple-range-header-value); e.g., `bytes=256-` or `bytes=127-255`)

> **Nota:** Firefox aún no ha implementado `Range` como una cabecera de solicitud CORS-safeliste. Véase el [error 1733981](https://bugzil.la/1733981).  
- Las únicas combinaciones de tipo/subtipo permitidas para el {{Glossary("MIME type","media type")}} especificado en la cabecera {{HTTPHeader("Content-Type")}} son:

- `application/x-www-form-urlencoded`
- `multipart/form-data`
- `text/plain`

- Si la petición se realiza utilizando un objeto {{domxref("XMLHttpRequest")}}, no se registran oyentes de eventos en el objeto devuelto por la propiedad {{domxref("XMLHttpRequest.upload")}} utilizada en la petición; Es decir, dada una instancia {{domxref("XMLHttpRequest")}} `xhr`, ningún código ha llamado a `xhr.upload.addEventListener()` para añadir un oyente de eventos para monitorizar la subida.
- No se utiliza ningún objeto {{domxref("ReadableStream")}} en la solicitud.

 > **Nota:** _WebKit Nightly_ y _Safari Technology Preview_ imponen restricciones adicionales a lo valores permitidos en las cabeceras {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}} y {{HTTPHeader("Content-Language")}}. Si alguna de esas cabeceras tiene valores "no estándar", WebKit/Safari no consideran que la petición sea una "solicitud simple". Los valores que WebKit/Safari consideran "no estándar" no están documentados, excepto en los siguientes errores de WebKit:
 >
 > - [Comprobación previa requerida para cabeceras de solicitud CORS-safelisted no estándar: Accept, Accept-Language y Content-Language](https://webkit.org/b/165178)
 > - [Permitir comas en las cabeceras para CORS simple en Accept, Accept-Language y Content-Language](https://webkit.org/b/165566)
 > - [Cambio a un modelo de lista negra para cabeceras Accept restringidas en peticiones CORS simples](https://webkit.org/b/166363)
 >
 > Ningún otro navegador aplica estas restricciones adicionales porque no forman parte de la especificación.

Por ejemplo, supongamos que el contenido web en `https://foo.example` desea invocar contenido en `https://bar/other`. Código del siguiente tipo podría ser utilizado en el JavaScript desplegado en `foo.example`:

```js
const xhr = new XMLHttpRequest();
const url = "https://bar.other/resources/public-data/";

xhr.open("GET", url);
xhr.onreadystatechange = someHandler;
xhr.send();
```

Esta operación realiza un intercambio sencillo entre el cliente y el servidor, utilizando cabeceras CORS para gestionar los privilegios:

![Diagram of simple CORS GET request](simple-req.png)

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

> **Nota:** Al responder a una petición con [solicitud con credenciales](#requests_with_credentials), el servidor debe especificar un origen en el valor de la cabecera `Access-Control-Allow-Origin`, en lugar de especificar el comodín "*".

### Solicitudes verificadas previamente
#### Solicitudes y redireccionamientos controlados previamente
### Solicitudes con credenciales
#### Solicitudes de verificación previa y credenciales
#### Solicitudes con credenciales y comodines
#### Cookies de terceros
## Las cabeceras de respuesta HTTP
### Control de acceso - Permitir origen
### Control de Acceso-Exponer Cabeceras
### Control de acceso-Edad máxima
### Control de Acceso-Permitir Credenciales
### Control de acceso-Permitir métodos
### Control de acceso-permitir cabeceras
## Las cabeceras de solicitud HTTP
### Origen
### Control de acceso-Método de solicitud
### Control de acceso-Cabeceras de solicitud
## Especificaciones
## Compatibilidad con navegadores
## Véase también

