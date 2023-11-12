---
title: block-size
slug: Web/CSS/block-size
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`block-size`** [CSS](/es/docs/Web/CSS) define el tamaño horizontal o vertical de los elementos en bloque, dependiendo de los modos de escritura. estos corresponden ya sea a la propiedad {{cssxref("width")}} o la propiedad {{cssxref("height")}}, dependiendo de los valores de {{cssxref("writing-mode")}}.

{{EmbedInteractiveExample("pages/css/block-size.html")}}

## Resumen

La propiedad de [CSS](/es/docs/Web/CSS) **`block-size`** define el tamaño horizontal y vertical del bloque de un elemento, dependiendo de su modo de escritura. Corresponde a la propiedad {{cssxref("width")}} o {{cssxref("height")}}, dependiendo del valor definido en {{cssxref("writing-mode")}}.

Si el modo de escritura está orientado verticalmente, el valor de `block-size` se relaciona con la anchura del elemento, de lo contrario, se relaciona con la altura del elemento. Está relacionada con {{cssxref("inline-size")}}, la cual define las otras dimensiones del elemento.

{{cssinfo}}

## Sintaxis

```css
/* <length> values */
block-size: 300px;
block-size: 25em;

/* <percentage> values */
block-size: 75%;

/* Keyword values */
block-size: 25em border-box;
block-size: 75% content-box;
block-size: max-content;
block-size: min-content;
block-size: available;
block-size: fit-content;
block-size: auto;

/* Global values */
block-size: inherit;
block-size: initial;
block-size: unset;
```

### Valores

La propiedad `block-size` toma los mismos valores que las propiedades {{cssxref("width")}} y {{cssxref("height")}}.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### Contenido HTML

```html
<p class="texto">Texto de ejemplo</p>
```

### Contenido CSS

```css
.texto {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

{{EmbedLiveSample("Ejemplo")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Las propiedades físicas asignadas: {{cssxref("width")}} y {{cssxref("height")}}
- {{cssxref("writing-mode")}}
