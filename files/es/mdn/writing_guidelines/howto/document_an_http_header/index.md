---
title: Cómo documentar una cabecera HTTP
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: aa66311219951396e7305df61eb31831360d2c79
---

{{MDNSidebar}}

La [referencia de cabeceras HTTP](/es/docs/Web/HTTP/Headers) en los campos de cabeceras HTTP de los documentos de MDN Web Docs. Son componentes de la sección de cabecera de los mensajes de solicitud y respuesta en el Protocolo de Transferencia de Hipertexto ([HTTP](/es/docs/Web/HTTP)). Definen los parámetros operativos de una transacción HTTP. Este artículo explica cómo crear una nueva página de referencia para una cabecera HTTP.

Necesitarás saber o poder sumergirte en algo de [HTTP](/es/docs/Web/HTTP).

## Paso 1: Determina la cabecera HTTP para documentar

- Hay muchas cabeceras HTTP definidas en varios estándares IETF.
- IANA mantiene un [registro de cabeceras](https://www.iana.org/assignments/message-headers/message-headers.xhtml) y Wikipedia enumera los [campos de cabeceras conocidos](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields), pero no todos son relevantes para los desarrolladores web o son parte de un estándar oficial.
- Si hay **enlaces rojos** en la [página de descripción general de referencia de cabeceras HTTP](/es/docs/Web/HTTP/Headers) actual, estas cabeceras son una buena opción para documentar.
- En caso de duda, [pregunta al equipo de MDN Web Docs](/es/docs/MDN/Community/Communication_channels) si tiene o no sentido escribir sobre el encabezado que has elegido.

## Paso 2: Verifica las páginas de cabeceras HTTP existentes

- Las cabeceras HTTP existentes se documentan [aquí](/es/docs/Web/HTTP/Headers).
- Hay diferentes categorías de cabeceras: {{Glossary("Request header")}}, {{Glossary("Response header")}} y {{Glossary("Representation header")}}.
- Busque la categoría de la cabcera que está a punto de documentar (tenga en cuenta que algunas cabeceras pueden ser tanto de solicitud como de respuesta, según el contexto).
- Vaya a una página de referencia de cabecera existente que tenga la misma categoría.

## Paso 3: Crea la página de cabecera HTTP

- Todas las páginas de cabecera están bajo esta estructura: [/docs/Web/HTTP/Headers/](/es/docs/Web/HTTP/Headers)
- Para crear una nueva página, consulta las instrucciones en nuestra guía [cómo crear una página](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Paso 4 – Escribe el contenido

- Comienza desde nuestra [plantilla de página de cabecera HTTP](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) o usa una estructura copiada de uno de los documentos de cabecera HTTP existentes que encontraste en el paso 2. Es tu elección.
- Escriba sobre la nueva cabecera HTTP.
- Asegúrate de tener estas secciones:

  - Texto introductorio donde la primera oración menciona el nombre de la cabecera (negrita) y resume su propósito.
  - Cuadro de información que contiene al menos el tipo de cabecera y si la cabecera es un {{Glossary("Forbidden header name","Nombre de cabecera prohibido")}}.
  - Un cuadro de sintaxis que contiene todas las directivas/parámetros/valores posibles de la cabecera HTTP.
  - Una sección que explica estas directivas/valores.
  - Una sección de ejemplo que contiene un caso de uso práctico para esta cabecera o muestra dónde y cómo ocurre normalmente.
  - Una sección de especificaciones que enumera los documentos estándar RFC relevantes.
  - Una sección "Véase también" que enumera recursos relevantes.

## Paso 5: Agrega información de compatibilidad con los navegadores

- Si has mirado otras páginas de cabecera HTTP, verás que hay una macro `\{{Compat}}` que completará una tabla del navegador por ti.
- La página de la tabla de compatibilidad se genera a partir de datos estructurados. Si desea contribuir con los datos, consulte las instrucciones en <https://github.com/mdn/browser-compat-data/blob/main/README.md> y envíenos una solicitud de incorporación de cambios (Pull request, en Inglés).

## Paso 6: Actualiza la lista de cabeceras HTTP

Asegúrate de que tu cabecera está incluida en una categoría adecuada en la [página de resumen de referencia de cabeceras HTTP](/es/docs/Web/HTTP/Headers).

## Paso 7: Haz que se revise el contenido

Una vez que hayas creado la página de cabecera, envíala como una solicitud de incorporación de cambios (Pull request). Se asignará automáticamente a un miembro de nuestro equipo de revisión para que revise su página.
