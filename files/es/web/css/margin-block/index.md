---
title: margin-block
slug: Web/CSS/margin-block
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`margin-block`** define el bloque lógico de inicio y fin de las márgenes de un elemento, que se asigna a las márgenes físicas en función del modo de escritura del elemento, la direccionalidad y la orientación del texto.

```css
/* <length> values */
margin-block: 10px 20px; /* An absolute length */
margin-block: 1em 2em; /* relative to the text size */
margin-block: 5% 2%; /* relative to the nearest block container's width */
margin-block: 10px; /* sets both start and end values */

/* Keyword values */
margin-block: auto;

/* Global values */
margin-block: inherit;
margin-block: initial;
margin-block: unset;
```

Estos valores corresponden a {{CSSxRef("margin-top")}} y {{CSSxRef("margin-bottom")}}, o {{CSSxRef("margin-right")}}, y {{CSSxRef("margin-left")}} depende de los valores definidos para {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, y {{CSSxRef("text-orientation")}}.

## Propiedades que lo constituyen

Los valores se pueden establecer individualmente como {{CSSxRef("margin-block-start")}} y {{CSSxRef("margin-block-end")}}. La propiedad de dirección en línea es {{CSSxRef("margin-inline")}} que establece {{CSSxRef("margin-inline-start")}}, y {{CSSxRef("margin-inline-end")}}.

## Sintaxis

### Valores

La propiedad `margin-block` toma los mismos valores de la propiedad {{CSSxRef("margin-left")}}.

### Definición formal

{{cssinfo}}

### Sintaxis formal

{{CSSSyntax}}

## Ejemplo

### Definiendo el comienzo del bloque y el fin de los margenes

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  margin-block: 20px 40px;
  background-color: #c8c800;
}
```

#### Resultado

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Las propiedades físicas mapeadas: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, y {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
