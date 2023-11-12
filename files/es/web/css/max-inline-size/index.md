---
title: max-inline-size
slug: Web/CSS/max-inline-size
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`max-inline-size`** define el tamaño máximo horizontal o vertical de un elemento bloque dependiendo del modo de escritura. Esto corresponde a las propiedades {{cssxref("max-width")}} o {{cssxref("max-height")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}. Si el modo de escritura esta orientado verticalmente, el valor de `max-inline-size` relacionado al alto máximo del elemento, de lo contrario, se relaciona con el ancho máximo del elemento. Se relaciona con {{cssxref("max-block-size")}}, que define la otra dimensión del elemento.

{{EmbedInteractiveExample("pages/css/max-inline-size.html")}}

## Sintaxis

```css
/* <length> values */
max-inline-size: 300px;
max-inline-size: 25em;

/* <percentage> values */
max-inline-size: 75%;

/* Keyword values */
max-inline-size: none;
max-inline-size: max-content;
max-inline-size: min-content;
max-inline-size: fit-content;
max-inline-size: fill-available;

/* Global values */
max-inline-size: inherit;
max-inline-size: initial;
max-inline-size: unset;
```

{{cssinfo}}

### Valores

La propiedad `max-inline-size` toma los mismos valores como las propiedades {{cssxref("max-width")}} y {{cssxref("max-height")}}.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### Contenido HTML

```html
<p class="exampleText">Example text</p>
```

### Contenido CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 100%;
  max-inline-size: 200px;
}
```

{{EmbedLiveSample("Ejemplo")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Las propiedades físicas mapeadas: {{cssxref("max-width")}} y {{cssxref("max-height")}}
- {{cssxref("writing-mode")}}
