---
title: Cómo documentar una cabecera HTTP
short-title: Documentar una cabecera HTTP
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

La [referencia de cabeceras HTTP](/es/docs/Web/HTTP/Reference/Headers) documenta la sección de cabeceras de los mensajes de solicitud y respuesta en el Protocolo de Transferencia de Hipertexto ([HTTP](/es/docs/Web/HTTP)).
Este artículo explica cómo crear una nueva página de referencia para una cabecera HTTP.

## Paso 1 – Determina la cabecera HTTP para documentar

- Hay muchas cabeceras HTTP definidas en varios estándares IETF.
- IANA mantiene un [registro de campos de cabecera HTTP](https://www.iana.org/assignments/http-fields/http-fields.xhtml) y Wikipedia enumera los [campos de cabecera conocidos](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields), pero no todos son relevantes para los desarrolladores web o forman parte de un estándar oficial.
- Si hay **enlaces rojos** en la [página de descripción general de referencia de cabeceras HTTP](/es/docs/Web/HTTP/Reference/Headers) actual, estas cabeceras son una buena opción para documentar.
- En caso de duda, [pregunta al equipo de MDN Web Docs](/es/docs/MDN/Community/Communication_channels) si tiene sentido o no escribir sobre la cabecera que has elegido.

## Paso 2 – Verifica las páginas de cabeceras HTTP existentes

- Las cabeceras HTTP existentes se documentan [en la referencia de HTTP](/es/docs/Web/HTTP/Reference/Headers).
- Existen diferentes categorías de cabeceras: {{Glossary("Request header", "Cabecera de solicitud")}}, {{Glossary("Response header", "Cabecera de respuesta")}} y {{Glossary("Representation header", "Cabecera de representación")}}.
- Busca la categoría de la cabecera que vas a documentar (ten en cuenta que algunas pueden ser tanto de solicitud como de respuesta, dependiendo del contexto).
- Busca una página de referencia de cabecera existente que pertenezca a la misma categoría.

## Paso 3 – Crea la página de la cabecera HTTP

- Todas las páginas de cabeceras residen bajo este árbol: [`files/en-us/web/http/reference/headers`](https://github.com/mdn/content/tree/main/files/en-us/web/http/reference/headers).
- Para crear una nueva página, consulta las instrucciones en nuestra guía sobre [cómo crear una página](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Paso 4 – Escribe el contenido

- Puedes comenzar desde nuestra [plantilla de página de cabecera HTTP](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) o usar una estructura copiada de uno de los documentos de cabeceras existentes que encontraste en el paso 2. Tú eliges.
- Escribe sobre la nueva cabecera HTTP.
- Asegúrate de incluir estas secciones:
  - Texto introductorio donde la primera oración mencione el nombre de la cabecera (en **negrita**) y resuma su propósito.
  - Cuadro de información que contenga al menos el tipo de cabecera y si es una {{Glossary("Forbidden request header", "Cabecera de solicitud prohibida")}}.
  - Un cuadro de sintaxis que contenga todas las directivas/parámetros/valores posibles de la cabecera HTTP.
  - Una sección que explique estas directivas/valores.
  - Una sección de ejemplos que contenga un caso de uso práctico para esta cabecera o muestre dónde y cómo ocurre normalmente.
  - Una sección de especificaciones que enumere los documentos estándar RFC relevantes.
  - Una sección "Véase también" con recursos relacionados.

## Paso 5 – Agrega información de compatibilidad con navegadores

- Si has observado otras páginas de cabeceras HTTP, verás que existe una macro `\{{Compat}}` que generará automáticamente una tabla de compatibilidad por ti.
- La tabla de compatibilidad se genera a partir de datos estructurados. Si deseas contribuir con los datos, consulta las instrucciones en <https://github.com/mdn/browser-compat-data/blob/main/README.md> y envíanos un pull request.

## Paso 6 – Actualiza la lista de cabeceras HTTP

Asegúrate de que tu cabecera aparezca en la categoría apropiada en la [página de descripción general de referencia de cabeceras HTTP](/es/docs/Web/HTTP/Reference/Headers).

## Paso 7 – Solicita una revisión del contenido

Después de crear la página de la cabecera, envíala mediante un pull request. Se asignará automáticamente a un miembro de nuestro equipo de revisión para que evalúe tu página.
