---
title: Registro de cambios de MDN Web Docs
slug: MDN/Writing_guidelines/Changelog
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Este documento proporciona un registro de los procesos, constructos y mejores prácticas de contenido de MDN que han cambiado, y cuándo cambiaron. Es útil para que los colaboradores habituales puedan revisar y ver qué ha cambiado sobre el proceso de creación de contenido para MDN.

## Octubre 2022

La [documentación del proyecto MDN](/es/docs/MDN) se ha actualizado y organizado en dos categorías principales:

- **Escritura:** La documentación sobre cómo escribir para MDN, qué documentamos, definiciones de características experimentales, directrices de estilo, etc., se encuentra en las páginas [Directrices de escritura](/es/docs/MDN/Writing_guidelines).
- **Comunidad:** La información sobre etiquiqueta de código abierto, discusiones, procesos para pull requests e issues, usuarios y equipos, y consejos generales para colaboradores se encuentra en las páginas [Comunidad](/es/docs/MDN/Community).

Para más detalles sobre lo que ha cambiado, consulta la publicación del blog [Actualización de los documentos de contribución de MDN Web Docs](https://hacks.mozilla.org/2022/10/revamp-of-mdn-web-docs-contribution-docs/) en Mozilla Hacks.

## Noviembre 2021

La conversión a Markdown está completa, por lo que eliminamos la antigua guía de estilo de CSS y redirigimos a la página Markdown en MDN.

## Julio 2021

### Actualizaciones de la guía de estilo de CSS para Markdown

Múltiples actualizaciones de la guía de estilo de CSS para reflejar el cambio hacia Markdown y animar a los autores a escribir HTML de forma compatible con Markdown.

- Las cajas de notas y advertencias ya no tienen un encabezado `<h4>` separado para el título (por ejemplo, `<h4>Advertencia</h4>`).

  Consulta nuestra guía [Markdown en MDN](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notas_advertencias_y_observaciones) para obtener la sintaxis correcta.

- La clase `seoSummary` ya no debe usarse.
- La clase `standard-table` ya no debe usarse. El estilo proporcionado por esta clase ahora se aplica a las tablas por defecto.
- El elemento {{HTMLElement("details")}} ya no debe usarse.
- Las clases `hidden`, `example-good` y `example-bad` se usaban principalmente para bloques de código pero podían usarse en otros elementos. Ahora solo pueden usarse en bloques de código.

## Febrero 2021

### Bloques de sintaxis de JavaScript y API multilínea

Anteriormente, los bloques de sintaxis de métodos integrados de JavaScript y WebAPI que se pueden usar de múltiples formas diferentes (es decir, varios parámetros son opcionales) comúnmente se escribían usando [notación de sintaxis formal BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form). Lo más notable es que los corchetes se usaban para indicar parámetros opcionales.

Esto era problemático: muchos desarrolladores estaban confundidos por esto, y entra en conflicto con formas de sintaxis válidas en otros lenguajes de programación (por ejemplo, `[]` también es un array en JavaScript).

Como resultado, de ahora en adelante escribimos múltiples formas de sintaxis de un método en líneas separadas dentro del bloque de sintaxis. Consulta [Secciones de sintaxis > Múltiples líneas/Parámetros opcionales](/es/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#multiple_linesoptional_parameters) para obtener más información y ejemplos.

### Documentar mixins

Los [mixins de interfaz](https://heycam.github.io/webidl/#idl-interface-mixins) en Web IDL se usan en las especificaciones para definir Web APIs.
Para los desarrolladores web, no son directamente observables; actúan como ayudantes para evitar repeticiones en las definiciones de las APIs.

Anteriormente comúnmente definíamos una página de aterrizaje para una clase mixin en sí, y colocabamos los miembros definidos en subpáginas debajo de ella,
antes de enlazarlos desde las páginas de aterrizaje de las interfaces que implementan esos mixins.
Esto era confuso para los lectores porque los mixins son constructos de especificación: nunca accedes a los miembros definidos usando las clases mixin.
Para evitar esta confusión, en su lugar hemos puesto las páginas de los miembros definidos en mixins directamente debajo de las páginas de las clases que los implementan.
Para más detalles, consulta la página de la guía sobre
[cómo escribir una referencia de API](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins)
y la discusión que llevó a este cambio en [mdn/content#1940](https://github.com/mdn/content/issues/1940).

## Enero 2021

### Marcado para cajas de notas y advertencias

Anteriormente en MDN, las cajas de notas y advertencias se envolvían con elementos `<div>` con clases `note` y `warning`, respectivamente. Muy a menudo, sus primeros párrafos comenzarían con un texto `note` o `warning` envuelto en `<strong>`.

En enero esto cambió: el atributo `class` ahora debe incluir una clase adicional `notecard`, y el texto fuerte en su lugar se incluye en un encabezado en la parte superior del bloque.

Consulta nuestra guía [Markdown en MDN](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notas_advertencias_y_observaciones) para obtener más información y guías de sintaxis.
