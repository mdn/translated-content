---
title: CORS
slug: Glossary/CORS
---

**CORS** (_Cross-Origin Resource Sharing_ o en español Intercambio de recursos de origen cruzado) es un sistema que consiste en transmitir {{Glossary("HTTP_header", "HTTP headers")}}, que determina si los navegadores bloquean el acceso del código JavaScript frontend a las respuestas de peticiones de origen cruzado.

La [política de seguridad del mismo origen](/es/docs/Web/Security/Same-origin_policy) prohíbe el acceso a los recursos de orígenes cruzados. Pero CORS brinda a los servidores web la capacidad de decir que desean optar por permitir el acceso de origen cruzado a sus recursos.

## Véase también

- [Intercambio de recursos de origen cruzado (CORS)](/es/docs/Web/HTTP/CORS) en MDN
- [Intercambio de recursos de origen cruzado](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) en Wikipedia
- [Obtén la especificación](https://fetch.spec.whatwg.org)

### Cabeceras CORS

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Indica si la respuesta se puede compartir.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : indica si la respuesta a la solicitud se puede exponer o no cuando el indicador de credenciales es `true`.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Se usa en respuesta a una solicitud de verificación previa para indicar qué encabezados HTTP se pueden usar al realizar la solicitud.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Especifica el método o los métodos permitidos al acceder al recurso en respuesta a una solicitud de verificación previa.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Indica qué encabezados se pueden exponer como parte de la respuesta enumerando sus nombres.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Indica cuánto tiempo se pueden almacenar en caché los resultados de una solicitud de verificación previa.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Se utiliza al emitir una solicitud de verificación previa para que el servidor sepa qué encabezados HTTP se utilizarán cuando se realice la solicitud.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Se utiliza al emitir una solicitud de verificación previa para que el servidor sepa qué [método HTTP](/es/docs/Web/HTTP/Methods) se utilizará cuando se realice la solicitud.
- {{HTTPHeader("Origin")}}
  - : Indica de dónde se origina una búsqueda.
