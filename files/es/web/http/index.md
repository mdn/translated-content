---
title: HTTP
slug: Web/HTTP
tags:
  - Desarrollo web
  - HTTP
  - Referencia
  - TCP/IP
  - TopicStub
  - Web
translation_of: Web/HTTP
---
{{ HTTPSidebar }}

**_Hypertext Transfer Protocol (HTTP)_** (o **_Protocolo de Transferencia de Hipertexto en español)_** es un protocolo de la [capa de aplicación](http://es.wikipedia.org/wiki/Capa_de_aplicaci%C3%B3n) para la transmisión de documentos hipermedia, como HTML. Fue diseñado para la comunicación entre los navegadores y servidores web, aunque puede ser utilizado para otros propósitos también. Sigue el clásico [modelo cliente-servidor](http://es.wikipedia.org/wiki/Cliente-servidor), en el que un cliente establece una conexión, realizando una petición a un servidor y espera una respuesta del mismo. Se trata de un [protocolo sin estado](http://es.wikipedia.org/wiki/Protocolo_sin_estado), lo que significa que el servidor no guarda ningún dato (estado) entre dos peticiones. Aunque en la mayoría de casos se basa en una conexión del tipo TCP/IP, puede ser usado sobre cualquier [capa de transporte](http://es.wikipedia.org/wiki/Capa_de_transporte) segura o de confianza, es decir, sobre cualquier protocolo que no pierda mensajes silenciosamente, tal como UDP.

## Tutoriales

Aprende cómo utilizar HTTP con guías y tutoriales.

- [Generalidades de HTTP](/es/docs/Web/HTTP/Overview)
  - : Se presentan las características básicas del protocolo y su estructura cliente-servidor: qué puede hacer y cuáles son sus usos.
- [HTTP Caché](/es/docs/Mozilla/HTTP_cache)
  - : La gestión de la Caché es fundamental para la eficiencia de sitios Web. En este artículo se presentan los distintos tipos de caché y cómo usar las cabeceras HTTP para su configuración y control.

<!---->

- [HTTP Cookies](/es/docs/Web/HTTP/Cookies)
  - : El funcionamiento de las cookies se define en [RFC 6265](http://tools.ietf.org/html/rfc6265). Al recibir una petición HTTP, un servidor puede enviar una cabecera `Set-Cookie` junto con la respuesta. Posteriormente el cliente devuelve el valor de la cookie en cada petición al mismo servidor en forma de cabecera de solicitud `Cookie`. La cookie también puede tener una fecha de expiración determinada, o puede estar restringida a un dominio y path específico.
- [Control de Acceso HTTP (CORS)](/es/docs/HTTP/Access_control_CORS)
  - : Las **Solicitudes Inter-Sitio HTTP** (Cross-site HTTP requests en inglés), son peticiones HTTP por recursos pertenecientes a un dominio distinto al dominio del recurso que está haciendo la petición. Por ejemplo, una página HTML de un dominio A (http\://dominioa.ejemplo/) hace una solicitud por una imagen en un dominio B (http\://dominiob.foo/imagen.jpg) a través del elemento `img`. Hoy en día, las webs utilizan recursos de otros orígenes muy a menudo, incluyendo hojas de estilo CSS, imágenes, scripts y otros recursos. El Control de Acceso HTTP posibilita a los desarrolladores web a controlar cómo su sitio web responde a solicitudes de otros orígenes.

<!---->

- [Evolución de HTTP](/es/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : Una breve descripción de los cambios del protocolo HTTP desde sus primeras versiones hasta el moderno HTTP/2 y más allá.
- [Consejos de Seguridad Web de Mozilla](https://wiki.mozilla.org/Security/Guidelines/Web_Security)
  - : Una colección de tips para ayudar a equipos de desarrollo con la creación de aplicaciones web seguras.
- [Mensajes HTTP](/es/docs/Web/HTTP/Messages)
  - : Se describen los tipos de mensajes y distintas estructuras de los mensajes del protocolo HTTP/1.X y HTTP/2
- [La típica sesión HTTP](/es/docs/Web/HTTP/Session)
  - : Se muestra y explica cómo es una sesión HTTP típica.
- [Manejo de conexión en HTTP/1.X](/es/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : Se describen los tres tipos de gestiones posibles en una sesión HTTP/1.x, sus principales ventajas e inconvenientes.

## Referencias

Navega la documentación detallada del protocolo HTTP.

- [Cabeceras HTTP](/es/docs/Web/HTTP/Headers)
  - : Las cabeceras de mensaje HTTP se usan para describir un recurso, o el comportamiento del servidor o del cliente. Pueden agregarse cabeceras personalizadas usando el prefijo 'X-'; otras en un [registro IANA](http://www.iana.org/assignments/message-headers/perm-headers.html), cuyo contenido fue inicialmente definido en [RFC 4229](http://tools.ietf.org/html/rfc4229). IANA mantiene también un [registro de nuevas cabeceras de mensaje HTTP propuestas](http://www.iana.org/assignments/message-headers/prov-headers.html).
- [Métodos de Petición HTTP](/es/docs/Web/HTTP/Methods)
  - : Las distintas operaciones que se pueden realizar con HTTP: {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, y solicitudes menos comunes como {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("DELETE")}}, o {{HTTPMethod("TRACE")}}.
- [Códigos de Respuesta de Estado HTTP](/es/docs/Web/HTTP/Response_codes)
  - : Los códigos de respuesta HTTP indican si una determinada petición HTTP se ha completado correctamente o no. Las respuestas se clasifican en cinco clases: respuestas informativas, respuestas de petición correcta, redirecciones, error del cliente y error del servidor.
- [CSP directives](/es/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : Los campos de respuesta en la cabecera {{HTTPHeader("Content-Security-Policy")}} permiten a los administradores de sitios web controlar los recursos que el agente de usuario tiene permitido cargar en cierta página. Con unas pocas excepciones, las políticas implican origenes específicos del servidor y los puntos finales de los scripts.

## Herramientas y recursos

Herramientas útiles para usar y revisar conexiones HTTP.

- [Firefox Developer Tools](/es/docs/Tools)
  - : [Network monitor](/es/docs/Tools/Network_Monitor) (monitor de red)
- [Mozilla Observatory](https://observatory.mozilla.org/) (observatorio de Mozilla)
  - : Proyecto diseñado para ayudar a desarrolladores, adminitradores de sistemas y profesionales de la seguridad a configurar sus sitios web de forma segura y protegida.
- [RedBot](https://redbot.org/)
  - : Una herramienta para comprobar el estado de las cabeceras de caché.
- [Cómo trabajan los navegadores](https://www.html5rocks.com/es/tutorials/internals/howbrowserswork/)
  - : Artículo muy exhaustivo sobre el trabajo interno de los navegadores y el flujo de las peticiones a través del protocólo HTTP. Una lectura OBLIGATORIA para cualquier desarrollador web.
