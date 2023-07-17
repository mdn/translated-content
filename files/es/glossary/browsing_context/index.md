---
title: Contexto de navegación
slug: Glossary/Browsing_context
---

Un **contexto de navegación** es el entorno en el que un {{glossary("navegador")}} muestra un {{domxref("Documento")}} (normalmente una pestaña, pero posiblemente también una ventana o un marco (_frame_) dentro de una página).

Cada contexto de navegación tiene un {{glossary("origen")}} específico, el origen del documento activo y un historial que enumera todos los documentos mostrados en orden.

La comunicación entre contextos de navegación está severamente restringida. Entre un contexto de navegación del mismo origen, se puede abrir y utilizar un {{domxref("BroadcastChannel")}}}.

## Aprende más

### Referencia técnica

- [Browsing context on WHATWG](https://html.spec.whatwg.org/multipage/browsers.html#windows)
- [Browsing context on W3C](http://w3c.github.io/html/browsers.html#sec-browsing-contexts)

{{QuickLinksWithSubpages("/es/docs/Glossary")}}
