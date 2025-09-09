---
title: margin-inline
slug: Web/CSS/margin-inline
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

La [propiedad abreviada](/es/docs/Web/CSS/CSS_cascade/Shorthand_properties) de [CSS](/es/docs/Web/CSS) **`margin-inline`** es una propiedad abreviada que define los márgenes lógicos de inicio y final en línea de un elemento, que se asignan a márgenes físicos según el modo de escritura, la direccionalidad y la orientación del texto del elemento.

{{InteractiveExample("CSS Demo: margin-inline")}}

```css interactive-example-choice
margin-inline: 5% 10%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-inline: 10px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-inline: 5% 10%;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="col">One</div>
    <div class="col transition-all" id="example-element">Two</div>
    <div class="col">Three</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
}

.col {
  width: 33.33%;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: white;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
  unicode-bidi: bidi-override;
}
```

## Propiedades constituyentes

Esta propiedad es una abreviatura de las siguientes propiedades de CSS:

- {{cssxref("margin-inline-start")}}
- {{cssxref("margin-inline-end")}}

## Sintaxis

```css
/* Valores <length> */
margin-inline: 10px 20px; /* Una longitud absoluta */
margin-inline: 1em 2em; /* relativa al tamaño del texto */
margin-inline: 5% 2%; /* relativa al ancho del contenedor del bloque más cercano */
margin-inline: 10px; /* establece los valores al inicio y al final */

/* Valores de palabras clave */
margin-inline: auto;

/* Valores globales */
margin-inline: inherit;
margin-inline: initial;
margin-inline: revert;
margin-inline: revert-layer;
margin-inline: unset;
```

Esta propiedad corresponde a las propiedades {{CSSxRef("margin-top")}} y {{CSSxRef("margin-bottom")}}, o {{CSSxRef("margin-right")}} y {{CSSxRef("margin-left")}}, dependiendo de los valores definidos para {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} y {{CSSxRef("text-orientation")}}.

La propiedad `margin-inline` se puede especificar usando uno o dos valores.

- Cuando **un** valor es especificado, se aplica el mismo margen al **inicio** y al **final**.
- Cuando **dos** valores son especificados, el primer margen aplica al **inicio** y el segundo al **final**.

### Valores

La propiedad `margin-inline` toma los mismos valores que la propiedad {{CSSxRef("margin", "", "#values")}}.

## Definición formal

{{cssinfo}}

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Configuración de márgenes iniciales y finales en línea

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: auto;
  border: 1px solid green;
}

p {
  margin: 0;
  margin-inline: 20px 40px;
  background-color: tan;
}

.verticalExample {
  writing-mode: vertical-rl;
}
```

#### HTML

```html
<div>
  <p>Texto de ejemplo</p>
</div>
<div class="verticalExample">
  <p>Texto de ejemplo</p>
</div>
```

#### Resultado

{{EmbedLiveSample("Configuración_de_márgenes_iniciales_y_finales_en_línea", 140, 240)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Propiedades y valores lógicos de CSS](/es/docs/Web/CSS/CSS_logical_properties_and_values)
- Las propiedades físicas asignadas: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} y {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
