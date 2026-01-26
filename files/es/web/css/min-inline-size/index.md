---
title: min-inline-size
slug: Web/CSS/min-inline-size
---

{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`min-inline-size`** define el tamaño mínimo horizontal o vertical de los elementos en bloque, dependiendo del modo de escritura. Esto corresponde ya sea a la propiedad {{cssxref("min-width")}} o la propiedad {{cssxref("min-height")}}, dependiendo del valor de {{cssxref("writing-mode")}}.

{{InteractiveExample("CSS Demo: min-inline-size")}}

```css interactive-example-choice
min-inline-size: 200px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-inline-size: 200px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
min-inline-size: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-inline-size: 75%;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Change min-inline-size</div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: #ffffff;
}
```

## Sintaxis

```css
/* <length> values */
min-inline-size: 100px;
min-inline-size: 5em;

/* <percentage> values */
min-inline-size: 10%;

/* Keyword values */
min-inline-size: max-content;
min-inline-size: min-content;
min-inline-size: fit-content;
min-inline-size: fill-available;

/* Global values */
min-inline-size: inherit;
min-inline-size: initial;
min-inline-size: unset;
```

Si el modo de escritura es verticalmente orientado, el valor de `min-inline-size` se relaciona con el mínimo alto del elemento; de otra manera, se relaciona al mínimo ancho del elemento. Una propiedad relacionada es {{cssxref("min-block-size")}}, que define la otra dimensión del elemento.

{{cssinfo}}

### Valores

La propiedad `min-inline-size` toma los mismos valores de las propiedades {{cssxref("min-width")}} y {{cssxref("min-height")}}.

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
  block-size: 5%;
  min-inline-size: 200px;
}
```

{{EmbedLiveSample("Ejemplo")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Las propiedades físicas mapeadas: {{cssxref("min-width")}} y {{cssxref("min-height")}}
- {{cssxref("writing-mode")}}
