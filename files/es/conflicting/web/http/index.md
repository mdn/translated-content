---
title: Conceptos básicos de HTTP
slug: conflicting/Web/HTTP
original_slug: Web/HTTP/Basics_of_HTTP
---

El protocolo HTTP es un protocolo ampliable, es decir se puede añadir "vocabulario". HTTP está basado en unos pocos conceptos básicos como el concepto de recursos y URIs, una estructura sencilla de mensajes, y una arquitectura de cliente-servidor para ordenar el flujo de las comunicaciones. A demás de estos conceptos, a lo largo de su desarrollo han aparecido otros nuevos y se han añadido funcionalidades y reglas semánticas, creando nuevos métodos y cabeceras.

## Artículos

- [Generalidades del HTTP](/es/docs/Web/HTTP/Guides/Overview)
  - : Descripción de qué es el protocolo HTTP y su función en la arquitectura de la Web.
- [Evolución del HTTP](/es/docs/Web/HTTP/Guides/Evolution_of_HTTP)
  - : HTTP fue creado a comienzos de la década de 1990s y ha sido ampliado con nuevas versiones varias veces. En este artículo se expone la evolución de su desarrollo y las versiones HTTP/0.9, HTTP/1.0, HTTP/1.1 y la última versión HTTP/2 así como detalles de las funciones que se han ido incluyendo.
- [Negociación de la versión de HTTP](/es/docs/Web/HTTP/Basics_of_HTTP/Negotiating_an_HTTP_version)
  - : Se explica como un cliente y un servidor pueden negociar una versión específica de HTTP y eventualmente actualizar la version usada.
- [Recursos y URIs](/es/docs/Web/HTTP/Guides/MIME_types)
  - : Una breve descripción sobre qué son los recursos, identificadores y localidades en la Web.
- [Identificación de recursos en la Web](/es/docs/orphaned/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
  - : Descripción de como se referencian recursos en la Web, como son referenciados y como localizarlos.
- [URIs de datos](/es/docs/Web/URI/Reference/Schemes/data)
  - : Hay un tipo de URIs que permiten integrar directamente el recurso al que señalan. Los URIs de datos, son muy ventajosos, pero también tienen algunas desventajas.
- [URLs de recursos](/es/docs/Web/URI/Schemes/resource)

  - : Los recursos URL, prefijados con `resource:` en vez de `http` son usados por Firefox y algunas extensiones del navegador para cargar recursos internamente, pero parte de la información también está disponible para los sitios a los que se conecta el navegador.

- Separación de la identidad y la localización de un recurso: la cabecera Alt-Svc
  - : En la mayoría de los casos, la identidad y localización de un recurso Web, son compartidos, esto se puede modificar con la cabecera de HTTP: {{HTTPHeader("Alt-Svc")}}.
- [Tipos MIME](/es/docs/Web/HTTP/Guides/MIME_types)
  - : Desde la versión HTTP/1.0, es posible trasmitir distintos formatos de recursos. En este artículo se explica como se hace, usando la cabecera: {{HTTPHeader("Content-Type")}}, y el estándar MIME.
- [Elección de URLs: www y no-www](/es/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
  - : Recomendación sobre el uso de dominios con prefijo www o no. En este artículo se explican los resultados de la elección y cómo hacerla.
- [Flujo de comunicación en una sesión HTTP](/es/docs/Web/URI/Schemes/resource)
  - : En este artículo se describe una comunicación típica de una sesión HTTP, y lo que sucede internamente cuando se hace click en un hiper-vínculo.
- [Mensajes HTTP](/es/docs/Web/HTTP/Guides/Messages)
  - : Los mensajes HTTP, sean peticiones o respuestas, siguen una estructura muy concreta; en este artículo se describe su estructura, su propósito y posibilidades.
- [Tramas y estructura de los mensajes en HTTP/2](/es/docs/Web/HTTP/Frame%20and%20message%20structure%20in%20HTTP_2)
  - : La versión HTTP/2 encapsula y representa los mensajes de HTTP/1.x pero en tramas binarias. En este artículo se explica la estructura y los campos de las tramas, su finalidad y cómo se codifica.
- [Proceso de conexión en HTTP/1.x](/es/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 fue la primera versión de HTTP que soportó las conexiones persistentes y el _pipelining_. En este artículo se explican estos dos conceptos.
- [Proceso de conexión en HTTP/2](/es/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
  - : HTTP/2 revisó completamente, los métodos de negociación, creación y mantenimiento de conexiones: en este artículo se explica como se puede conseguír la multiplexación de las tramas y resolver el problema de 'head-of-line', que tenían las versiones anteriores de HTTP.
- [Negociación de contenidos](/es/docs/Web/HTTP/Content_negotiation)
  - : HTTP presenta una serie de cabeceras que comienzan con `Accept-` como medio para notificar al navegador, el formato, lenguaje, o codificación que prefiere. En este artículo se explica el este proceso, como debe actuar el servidor, y como se elige la respuesta más apropiada.
