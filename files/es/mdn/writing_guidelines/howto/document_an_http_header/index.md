---
title: Cómo documentar una cabecera HTTP
short-title: Documentar una cabecera HTTP
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

La [referencia de cabeceras HTTP](/es/docs/Web/HTTP/Reference/Headers) documenta la sección de cabecera de los mensajes de solicitud y respuesta en el Protocolo de Transferencia de Hipertexto ([HTTP](/es/docs/Web/HTTP)).
Este artículo explica cómo crear una nueva página de referencia para una cabecera HTTP.

## Paso 1: Determinar la cabecera HTTP a documentar

- Hay muchas cabeceras HTTP definidas en varios estándares IETF.
- IANA mantiene un [registro de campos de cabecera HTTP](https://www.iana.org/assignments/http-fields/http-fields.xhtml) y Wikipedia enumera los [campos de cabecera conocidos](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields), pero no todos son relevantes para las desarrolladoras web o son parte de un estándar oficial.
- Si hay **enlaces rojos** en la [página de descripción general de referencia de cabeceras HTTP](/es/docs/Web/HTTP/Reference/Headers), estas cabeceras son una buena opción para documentar.
- En caso de duda, [pregunte al equipo de MDN Web Docs](/es/docs/MDN/Community/Communication_channels) si tiene o no sentido escribir sobre la cabecera que ha elegido.

## Paso 2: Verificar las páginas de cabeceras HTTP existentes

- Las cabeceras HTTP existentes se documentan [en la referencia de HTTP](/es/docs/Web/HTTP/Reference/Headers).
- Hay diferentes categorías de cabeceras: {{Glossary("Request header")}}, {{Glossary("Response header")}} y {{Glossary("Representation header")}}.
- Encuentre la categoría de la cabecera que está a punto de documentar (note que algunas cabeceras pueden ser tanto cabeceras de solicitud como de respuesta, según el contexto).
- Vaya a una página de referencia de cabecera existente que tenga la misma categoría.

## Paso 3: Crear la página de cabecera HTTP

- Todas las páginas de cabecera viven en este árbol: [`files/en-us/web/http/reference/headers`](https://github.com/mdn/content/tree/main/files/en-us/web/http/reference/headers)
- Para crear una nueva página, consulte las instrucciones en nuestra guía [cómo crear una página](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Paso 4: Escribir el contenido

- Comience desde nuestra [plantilla de página de cabecera HTTP](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) o use una estructura copiada de uno de los documentos de cabecera HTTP existentes que encontró en el paso 2. Es su elección.
- Escriba sobre la nueva cabecera HTTP.
- Asegúrese de tener estas secciones:
  - Texto introductorio donde la primera oración menciona el nombre de la cabecera (negrita) y resume su propósito.
  - Cuadro de información que contiene al menos el tipo de cabecera y si la cabecera es un {{Glossary("Forbidden request header")}}.
  - Un cuadro de sintaxis que contiene todas las directivas/parámetros/valores posibles de la cabecera HTTP.
  - Una sección que explica estas directivas/valores.
  - Una sección de ejemplo que contiene un caso de uso práctico para esta cabecera o muestra dónde y cómo ocurre usualmente.
  - Una sección de especificaciones que enumera los documentos estándar RFC relevantes.
  - Una sección "Véase también" que enumera recursos relevantes.

## Paso 5: Agregar información de compatibilidad con navegadores

- Si ha mirado otras páginas de cabecera HTTP, verá que hay una macro `\{{Compat}}` que llenará una tabla de navegadores por usted.
- La página de la tabla de compatibilidad se genera a partir de datos estructurados. Si desea contribuir con los datos, consulte las instrucciones en <https://github.com/mdn/browser-compat-data/blob/main/README.md> y envíenos una solicitud de extracción.

## Paso 6: Actualizar la lista de cabeceras HTTP

Asegúrese de que su cabecera esté listada en una categoría apropiada en la [página de descripción general de referencia de cabeceras HTTP](/es/docs/Web/HTTP/Reference/Headers).

## Paso 7: Obtener revisión del contenido

Después de haber creado la página de cabecera, envíela como una solicitud de extracción. Se asignará automáticamente un miembro de nuestro equipo de revisión para revisar su página.
