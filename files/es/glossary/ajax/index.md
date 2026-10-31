---
title: Ajax
slug: Glossary/AJAX
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

JavaScript asíncrono y XML (**Ajax** o **AJAX**, por sus siglas en inglés) es una técnica de desarrollo web en la que una aplicación web obtiene contenido del servidor mediante peticiones HTTP asíncronas, y usa ese contenido nuevo para actualizar las partes relevantes de la página, sin necesidad de recargarla por completo. Esto puede hacer que la página responda mejor, porque solo se solicitan las partes que hay que actualizar.

Ajax se puede usar para crear {{Glossary("SPA", "aplicaciones de una sola página")}} en las que toda la aplicación web consta de un único documento que usa Ajax para actualizar su contenido según sea necesario.

Inicialmente, Ajax se implementó usando la interfaz {{domxref("XMLHttpRequest")}}, pero la API {{domxref("Window/fetch", "fetch()")}} resulta más adecuada para las aplicaciones web modernas: es más potente, más flexible y se integra mejor con las tecnologías fundamentales de las aplicaciones web, como los [service workers](/es/docs/Web/API/Service_Worker_API). Los frameworks web modernos también ofrecen abstracciones para Ajax.

Esta técnica está tan extendida en el desarrollo web moderno que el término "Ajax" rara vez se usa.

## Véase también

- [Aprender: Realizar peticiones de red con JavaScript](/es/docs/Learn_web_development/Core/Scripting/Network_requests)
- [Fetch API](/es/docs/Web/API/Fetch_API)
- Términos relacionados del glosario:
  - {{Glossary("SPA", "Aplicación de una sola página")}}
- {{DOMxRef("XMLHttpRequest")}}
- [AJAX](https://es.wikipedia.org/wiki/AJAX) en Wikipedia
