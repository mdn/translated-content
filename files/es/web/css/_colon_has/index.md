---
title: ":has"
slug: Web/CSS/:has
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
a:has(> img) {
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
