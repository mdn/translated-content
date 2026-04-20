---
title: Registro de cambios de MDN Web Docs
slug: MDN/Writing_guidelines/Changelog
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Este documento proporciona un registro de los procesos, constructos y mejores prácticas de contenido de MDN que han cambiado y cuándo cambiaron. Es útil para permitir que los colaboradores regulares ver qué ha cambiado sobre el proceso de creación de contenido para MDN.

## Octubre 2022

La [documentación del proyecto MDN](/es/docs/MDN) se actualiza y organiza bajo dos categorías principales:

- **Escritura:** La documentación sobre cómo escribir para MDN, qué documentamos, definiciones de experimental, directrices de estilo, etc. se encuentra en las páginas [Directrices de escritura](/es/docs/MDN/Writing_guidelines).
- **Comunidad:** La información sobre etiquiqueta de código abierto, discusiones, procesos para solicitudes de extracción e issues, usuarios y equipos, y sugerencias generales para los contribuyentes se encuentra en las páginas [Comunidad](/es/docs/MDN/Community).

Para obtener más detalles sobre lo que ha cambiado, consulte la publicación de blog [Actualización de los documentos de contribución de MDN Web Docs](https://hacks.mozilla.org/2022/10/revamp-of-mdn-web-docs-contribution-docs/) publicada en Mozilla Hacks.

## Noviembre de 2021

La conversión a Markdown está completa, así que elimine la guía de estilo CSS anterior y redirija a la página Markdown en MDN.

## Julio de 2021

### Actualizaciones de la guía de estilo de CSS para Markdown

Múltiples actualizaciones de la guía de estilo de CSS para reflejar el movimiento hacia Markdown, y alentar a los autores a escribir HTML de manera compatible con Markdown.

- Las cajas de notas y advertencias ya no tienen un encabezado `<h4>` separado para el título (por ejemplo, `<h4>Advertencia</h4>`).

  Consulte nuestra guía [Markdown en MDN](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) para la sintaxis correcta.

- La clase `seoSummary` ya no debe usarse.
- La clase `standard-table` ya no debe usarse. El estilo proporcionado por esta clase ahora se aplica a las tablas de forma predeterminada.
- El elemento {{HTMLElement("details")}} ya no debe usarse.
- Las clases `hidden`, `example-good` y `example-bad` se usaban principalmente para bloques de código pero podrían usarse en otros elementos. Ahora solo se pueden usar en bloques de código.

## Febrero de 2021

### Bloques de sintaxis de JavaScript y API de varias líneas

Anteriormente, los bloques de sintaxis de métodos integrados de JavaScript y WebAPI que se pueden usar de múltiples formas diferentes (es decir, varios parámetros son opcionales) comúnmente se escribían usando [notación de sintaxis formal BNF](https://es.wikipedia.org/wiki/Backus%E2%80%93Naur_form). Lo más notable es que se usaban corchetes para signify parámetros opcionales.

Esto fue problemático: muchos desarrolladores estaban confundidos por esto, y entra en conflicto con formas de sintaxis válidas en otros lenguajes de programación (por ejemplo, `[]` también es una matriz en JavaScript).

Como resultado, de ahora en adelante escribimos las formas de sintaxis múltiples de un método en líneas separadas dentro del bloque de sintaxis. Consulte [Secciones de sintaxis > Múltiples líneas/Parámetros opcionales](/es/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#multiple_linesoptional_parameters) para más información y ejemplos.

### Documentar mixins

Los [mixins de interfaz](https://heycam.github.io/webidl/#idl-interface-mixins) en Web IDL se usan en especificaciones para definir APIs web.
Para los desarrolladores web, no son observables directamente; actúan como ayudantes para evitar repeticiones en las definiciones de API.

Anteriormente comúnmente definíamos una página de aterrizaje para una clase mixin en sí misma, y colocábamos los miembros definidos en subpáginas debajo,
antes de vincular a esos desde las páginas de aterrizaje de las interfaces que implementan esos mixins.
Esto era confuso para los lectores porque los mixins son constructos de especificación: nunca se accede a los miembros definidos usando las clases mixin.
Para evitar esta confusión, en su lugar pusimos las páginas para los miembros definidos en mixins directamente bajo las páginas de clases que los implementan.
Para más detalles, consulte la página de la guía sobre
[cómo escribir una referencia de API](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins)
y la discusión que llevó a este cambio en [mdn/content#1940](https://github.com/mdn/content/issues/1940).

## Enero de 2021

### Marcado para cajas de notas y advertencias

Anteriormente en MDN, las cajas de notas y advertencias estarían envueltas por elementos `<div>` con las clases `note` y `warning`, respectivamente. Muy a menudo, sus primeros párrafos comenzarían con texto `note` o `warning` envuelto en `<strong>`.

En enero esto cambió: el atributo `class` ahora debe incluir una clase adicional `notecard`, y el texto en negrita se incluye en su lugar en un encabezado en la parte superior del bloque.

Consulte nuestra guía [Markdown en MDN](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) para más información y guías de sintaxis.
