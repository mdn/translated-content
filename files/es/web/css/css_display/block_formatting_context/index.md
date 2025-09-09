---
title: Contexto de formato de bloque
slug: Web/CSS/CSS_display/Block_formatting_context
---

{{ CSSRef() }}

## Resumen

Un **contexto de formato de bloque** es parte del renderizado CSS visual de una página web. Es la región en que ocurre la disposición de las cajas de bloque y en la cuál los elementos flotantes interactúan los unos con los otros.

Un contexto de formato de bloque es creado por uno de los siguientes casos:

- El elemento raiz o algo que lo contiene
- flotantes (elementos donde {{ cssxref("float") }} es diferente de none)
- elementos con posición absoluta (elementos donde {{ cssxref("position") }} es absolute o fixed)
- bloques en línea (elementos con {{ cssxref("display") }}`: inline-block`)
- Celdas de tabla (elementos con {{ cssxref("display") }}`: table-cell`, que es la propiedad por defecto de las celdas de una tabla HTML)
- subtítulos de tabla (elementos con {{ cssxref("display") }}`: table-caption`, que es la propiedad por defecto de los subtítulos de tablas HTML)
- elementos donde {{ cssxref("overflow") }} tiene un valor distinto a `visible`
- cajas flexibles (elementos con {{ cssxref("display") }}`: flex` or `inline-flex`)

Un contexto de formato de bloque contiene todo dentro del elemento que lo crea que, al mismo tiempo, no se encuentra dentro de un elemento descendiente que crea un nuevo contexto de formato de bloque.

Los contextos de formato de bloque son importantes para el posicionamiento (revisa {{ cssxref("float") }} y {{ cssxref("clear") }}) de flotantes. Las reglas para el posicionamiento y limpiado de flotantes aplican solo a elementos dentro del mismo contexto de formato de bloque. Los flotantes no afectan la disposición de los elementos en otros contexto de formato de bloque, y clear solo limpia flotantes pasados en el mismo contexto de formato de bloque.

## Especificaciones

- [CSS 2.1](https://www.w3.org/TR/CSS21/visuren.html#block-formatting)

## También puedes ver

- {{ cssxref("float") }}, {{ cssxref("clear") }}
