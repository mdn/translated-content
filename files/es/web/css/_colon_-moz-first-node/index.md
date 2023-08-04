---
title: ":-moz-first-node"
slug: Web/CSS/:-moz-first-node
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) [CSS](/es/docs/Web/CSS) `:-moz-first-node` representa cualquier elemento que sea el primer nodo hijo de algún otro elemento. Se diferencia de {{Cssxref(":first-child")}} en que no selecciona al primer hijo si tiene texto (que no sea espacios en blanco) detrás de él.

> **Nota:** Cualquier espacion en blanco al principio del elemento se ignora a la hora de determina cual elemento es `:-moz-first-node`.

## Síntaxis

```
span:-moz-first-node { propiedades del estilo }
```

## Ejemplo

### CSS

```css
span:-moz-first-node {
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

- {{cssxref(":-moz-last-node")}}
- {{cssxref(":first-child")}}
