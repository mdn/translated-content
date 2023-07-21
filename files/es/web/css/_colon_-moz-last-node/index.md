---
title: ":-moz-last-node"
slug: Web/CSS/:-moz-last-node
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) [CSS](/es/docs/Web/CSS) `:-moz-last-node` selecciona un elemento si es el último nodo hijo de algún otro elemento. Se diferencia de {{cssxref(":last-child")}} en que no selecciona el último elemento hijo si tiene texto (sin contar espacios en blanco) después de él.

> **Nota:** Cualquier espacio en blanco al final de un elemento se ignora al usar `:-moz-last-node`.

## Síntaxis

```
span:-moz-last-node {propiedades del estilo }
```

## Ejemplo

### CSS

```css
span:-moz-last-node {
  background-color: lime;
}
```

### HTML

```html
<div>
  <span>:-moz-first-node</span>
  <span>:-moz-last-node</span>
</div>
```

{{EmbedLiveSample("Example", "220", "20")}}

## Ver además

- {{cssxref(":-moz-first-node")}}
- {{cssxref(":last-child")}}
