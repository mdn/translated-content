---
title: margin-inline
slug: Web/CSS/margin-inline
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`margin-inline`** define los márgenes lógicos de inicio y final en línea de un elemento, que se asignan a márgenes físicos según el modo de escritura, la direccionalidad y la orientación del texto del elemento.

```css
/* Valores <largo> */
margin-inline: 10px 20px; /* Un largo absoluto */
margin-inline: 1em 2em; /* relativo al tamaño del texto */
margin-inline: 5% 2%; /* relativo al ancho del container del bloque más cercano */
margin-inline: 10px; /* settear tanto el valor inicial como el final*/

/* Valores keyword */
margin-inline: auto;

/* Valores globales */
margin-inline: inherit;
margin-inline: initial;
margin-inline: unset;
```

Estos valores corresponden a las propiedades {{CSSxRef("margin-top")}} y {{CSSxRef("margin-bottom")}}, o {{CSSxRef("margin-right")}}, y {{CSSxRef("margin-left")}} dependiendo de los valores definidos por {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, y {{CSSxRef("text-orientation")}}.

Los valores pueden ser establecidos individualmente como {{CSSxRef("margin-inline-start")}} y {{CSSxRef("margin-inline-end")}}. La propiedad de dirección de bloque es {{CSSxRef("margin-block")}} que establece {{CSSxRef("margin-block-start")}}, y {{CSSxRef("margin-block-end")}}.

## Sintaxis

### Valores

La propiedad `margin-inline` toma los mismos valores de la propiedad {{CSSxRef("margin-left")}}.

### Sintaxis formal

{{CSSSyntax}}

## Ejemplo

### Contenido HTML

```html
<div>
  <p class="exampleText">Texto de ejemplo</p>
</div>
```

### Contenido CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  margin-inline: 20px 40px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Las propiedades físicas mapeadas: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, y {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
