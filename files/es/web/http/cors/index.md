---
title: Intercambio de recursos entre orígenes (CORS)
slug: Web/HTTP/CORS
l10n:
  sourceCommit: c6dbc4ff96451887b908b46c8e70bcfec1c2c48c
---

{{HTTPSidebar}}

**El uso compartido de recursos entre orígenes** ({{Glossary("CORS")}}) es un mecanismo basado en cabeceras {{Glossary("HTTP")}} que permite a un servidor indicar cualquier {{Glossary("origin", "origins")}} (dominio, esquema o puerto) distinto del suyo desde el que un navegador debería permitir la carga de recursos. CORS también se basa en un mecanismo por el cual los navegadores realizan una solicitud de "verificación previa" al servidor que aloja el recurso de origen cruzado, con el fin de comprobar que el servidor permitirá la solicitud real. En esa comprobación previa, el navegador envía cabeceras que indican el método HTTP y las cabeceras que se utilizarán en la solicitud real.

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
### Peticiones sencillas
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

