---
title: ':has'
slug: Web/CSS/:has
tags:
  - CSS
  - Experimental
  - Pseudo clase
  - Referencia
  - Selectores CSS
translation_of: Web/CSS/:has
---
{{ CSSRef() }}{{SeeCompatTable}}

## Resumen

La [pseudo-class](/es/docs/Web/CSS/Pseudo-classes) CSS **`:has()`** representa un elemento si cualquiera de los selectores, en relación con el {{cssxref(":scope")}} del elemento dado, que se pasa como parámetro, coincide con al menos un elemento. La pseudo clase `:has()` tomo un selector como argumento.

## Síntaxis

```
:has(selector_list) { propiedades de estilo }
```

## Ejemplos

El siguiente selector selecciona únicamente los elementos {{HTMLElement("a")}} que contienen {{HTMLElement("img")}} hijo:

```css
a:has(> img)
```

## Especificaciones

| Especificación                                                               | Estado                                   | Comentario         |
| ---------------------------------------------------------------------------- | ---------------------------------------- | ------------------ |
| {{ SpecName('CSS4 Selectors', '#relational', ':has()') }} | {{ Spec2('CSS4 Selectors') }} | Definición Inicial |

## Compatibilidad entre los distintos navegadores

{{Compat("css.selectors.has")}}
