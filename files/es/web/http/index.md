---
title: HTTP
slug: Web/HTTP
---

{{HTTPSidebar}}

**_Hypertext Transfer Protocol (HTTP)_** (o **_Protocolo de Transferencia de Hipertexto en español)_** es un protocolo de la [capa de aplicación](http://es.wikipedia.org/wiki/Capa_de_aplicaci%C3%B3n) para la transmisión de documentos hipermedia, como HTML. Fue diseñado para la comunicación entre los navegadores y servidores web, aunque se puede utilizar para otros propósitos también. Sigue el clásico [modelo cliente-servidor](http://es.wikipedia.org/wiki/Cliente-servidor), en el que un cliente establece una conexión con el servidor, realiza una petición y espera hasta que recibe una respuesta del mismo. Se trata de un [protocolo sin estado](http://es.wikipedia.org/wiki/Protocolo_sin_estado), lo cual significa que el servidor no guarda ningún dato (estado) entre dos peticiones. Aunque en la mayoría de casos se basa en una conexión del tipo TCP/IP, se puede usar sobre cualquier [capa de transporte](http://es.wikipedia.org/wiki/Capa_de_transporte) segura o de confianza, es decir, sobre cualquier protocolo que no pierda mensajes silenciosamente, tal como UDP.

## Tutoriales

Aprende cómo utilizar HTTP con guías y tutoriales.

- [Generalidades de HTTP](/es/docs/Web/HTTP/Overview)
  - : Se presentan las características básicas del protocolo y su estructura cliente-servidor: qué puede hacer y cuáles son sus usos.
- [Caché HTTP](/es/docs/Web/HTTP/Caching)
  - : La gestión de la Caché es fundamental para la eficiencia de sitios Web. Este artículo presenta los distintos tipos de caché y cómo usar las cabeceras HTTP para su configuración y control.
- [Cookies HTTP](/es/docs/Web/HTTP/Cookies)
  - : El funcionamiento de las _cookies_ se define en [RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265). Al recibir una petición HTTP, un servidor puede enviar una cabecera `Set-Cookie` junto con la respuesta. Posteriormente el cliente devuelve el valor de la _cookie_ en cada petición al mismo servidor en forma de cabecera de solicitud `Cookie`. La _cookie_ también puede determinar una fecha de caducidad, o puede estar restringida a un dominio y ruta específica.
- [Intercambio de recursos de origen cruzado (CORS)](/es/docs/Web/HTTP/CORS)
  - : Las **Solicitudes Inter-Sitio HTTP** (_Cross-site HTTP requests_ en inglés), son peticiones HTTP por recursos pertenecientes a un dominio distinto al dominio del recurso que está haciendo la petición. Por ejemplo, una página HTML de un dominio A (`http://dominioa.ejemplo/`) hace una solicitud por una imagen en un dominio B (`http://dominiob.foo/imagen.jpg`) a través del elemento `img`. Hoy día, las webs utilizan recursos de otros orígenes muy a menudo, incluyendo hojas de estilo CSS, imágenes, scripts y otros recursos. El Control de Acceso HTTP posibilita a los desarrolladores web a controlar cómo su sitio web responde a solicitudes de otros orígenes.
- [Sugerencias de cliente HTTP](/es/docs/Web/HTTP/Client_hints)
  - : **Sugerencias de cliente** son un conjunto de encabezados de respuesta que un servidor puede usar para solicitar de manera proactiva información de un cliente sobre el dispositivo, la red, el usuario y las preferencias específicas del agente de usuario.
    Luego, el servidor puede determinar qué recursos enviar, según la información que el cliente elija proporcionar.
- [Evolución de HTTP](/es/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : Una breve descripción de los cambios del protocolo HTTP desde sus primeras versiones hasta el moderno HTTP/2 y más allá.
- [Consejos de Seguridad Web de Mozilla](https://infosec.mozilla.org/guidelines/web_security)
  - : Una colección de tips para ayudar a equipos de desarrollo con la creación de aplicaciones web seguras.
- [Mensajes HTTP](/es/docs/Web/HTTP/Messages)
  - : Describe los tipos de mensajes y distintas estructuras de los mensajes del protocolo HTTP/1.X y HTTP/2
- [La típica sesión HTTP](/es/docs/Web/HTTP/Session)
  - : Muestra y explica cómo es una sesión HTTP típica.
- [Manejo de conexión en HTTP/1.X](/es/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : Describe los tres tipos de gestión posibles en una sesión HTTP/1.x, sus principales ventajas e inconvenientes.

## Referencias

Explora la detallada documentación de referencia HTTP.

- [Cabeceras HTTP](/es/docs/Web/HTTP/Headers)
  - : Las cabeceras de mensaje HTTP se usan para describir un recurso, o el comportamiento del servidor o del cliente. Se pueden agregar cabeceras personalizadas usando el prefijo 'X-'; otras en un [registro IANA](https://www.iana.org/assignments/message-headers/message-headers.xhtml#perm-headers), cuyo contenido fue inicialmente definido en [RFC 4229](https://tools.ietf.org/html/rfc4229). IANA también mantiene un [registro de nuevas cabeceras de mensaje HTTP propuestas](https://www.iana.org/assignments/message-headers/message-headers.xhtml#prov-headers).
- [Métodos de Petición HTTP](/es/docs/Web/HTTP/Methods)
  - : Las distintas operaciones que se pueden realizar con HTTP: {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, y solicitudes menos comunes como {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("DELETE")}}, o {{HTTPMethod("TRACE")}}.
- [Códigos de Respuesta de Estado HTTP](/es/docs/Web/HTTP/Status)
  - : Los códigos de respuesta HTTP indican si una determinada petición HTTP se ha completado correctamente o no. Las respuestas se clasifican en cinco clases: respuestas informativas, respuestas de petición correcta, redirecciones, error del cliente y error del servidor.
- [Directivas CSP](/es/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : Los campos de respuesta en la cabecera {{HTTPHeader("Content-Security-Policy")}} permiten a los administradores de sitios web controlar los recursos que el agente de usuario tiene permitido cargar en cierta página. Con unas pocas excepciones, las políticas implican origenes específicos del servidor y los puntos finales de los scripts.

## Herramientas y recursos

Herramientas útiles para usar y revisar conexiones HTTP.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Network monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [Mozilla Observatory](https://observatory.mozilla.org/)
  - : Proyecto diseñado para ayudar a desarrolladores, administradores de sistemas y profesionales de la seguridad a configurar sus sitios web de forma segura y protegida.
- [RedBot](https://redbot.org/)
  - : Una herramienta para comprobar el estado de las cabeceras de caché.
- [Cómo trabajan los navegadores](https://web.dev/howbrowserswork/)
  - : Artículo muy exhaustivo sobre el trabajo interno de los navegadores y el flujo de las peticiones a través del protocolo HTTP. Una lectura OBLIGATORIA para cualquier desarrollador web.
