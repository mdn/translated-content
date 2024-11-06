---
title: fit-content()
slug: Web/CSS/fit-content
---

{{CSSRef}}{{SeeCompatTable}}

La función [CSS](/es/docs/Web/CSS) **`fit-content()`** ajusta un tamaño dado a un tamaño disponible de acuerdo a la fórmula: `min(maximum size, max(minimum size, argument))`.

```css
/* <length> values */
fit-content(200px)
fit-content(5cm)
fit-content(30vw)
fit-content(100ch)

/* <percentage> value */
fit-content(40%)
```

La función se puede usar como un tamaño de track en las propiedades de [CSS Grid](/es/docs/Web/CSS/CSS_Grid_Layout), donde el tamaño máximo es definido por [`max-content`](/es/docs/Web/CSS/grid-template-columns#max-content) y el mínimo por [`auto`](/es/docs/Web/CSS/grid-template-columns#auto), el cual es calculado por "`auto"` (ej. [`minmax(auto, max-content)`](/es/docs/Web/CSS/minmax)), excepto que el tamaño del track se restringe al argumento si éste es mas grande que el "auto" mínimo .

También puede usarse como tamaño de caja disponible para {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} y {{cssxref("max-height")}}, donde el tamañó máximo se refiere al tamaño máximo contenido y el mínimo al tamaño mínimo contenido.

## Sintaxis

Función que acepta un `<length>` o un `<percentage>` como un argumento.

### Values

- {{cssxref("&lt;length&gt;")}}
  - : Una Longitud Absoluta.
- {{cssxref("&lt;percentage&gt;")}}

  - : Un porcentaje relativo al espacio disponible en los ejes dados.

    In grid properties it is relative to the inline size of the grid container in column tracks and to the block size of the grid container for row tracks. Otherwise it is relative to the available inline size or block size of the laid out box depending on the writing mode.

### Formal syntax

{{csssyntax}}

## Ejemplo

### CSS

```css
#container {
  display: grid;
  grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

### HTML

```html
<div id="container">
  <div>Item as wide as the content.</div>
  <div>
    Item con más texto en él. Porque el contenido que es mas grande que el ancho
    máximo, está restringido a los 300 pixeles.
  </div>
  <div>Flexible item</div>
</div>
```

### Result

{{EmbedLiveSample("Ejemplo", "100%", 200)}}

## Especificaciones

{{Specifications}}

## Browser compatibility

{{Compat}}
