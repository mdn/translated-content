---
title: grid-template-areas
slug: Web/CSS/grid-template-areas
---

{{CSSRef}}

`La propiedad CSS grid-template-areas` especifica nombres para cada una de las {{glossary("grid areas")}}.

```css
/* Keyword value */
grid-template-areas: none;

/* <string> values */
grid-template-areas: "a b";
grid-template-areas:
  "a b b"
  "a c d";

/* Global values */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: unset;
```

Estas áreas no están asociadas a ningún elemento particular de la cuadrícula, pero pueden referenciarse desde otras propiedades de posicionamiento en la cuadrícula: {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, y sus formas abreviadas {{cssxref("grid-row")}}, {{cssxref("grid-column")}}, and {{cssxref("grid-area")}}.

{{cssinfo}}

## Sintaxis

### Valores

- `none`
  - : El contenedor de la cuadrícula no define ningún nombre para las áreas de la cuadrícula.
- `<string>+`
  - : Las filas se crean listando líneas de cadenas separadas, mientras que las columnas se reflejan en cada una de las celdas que aparecen en la cadena. Multiple named cell tokens within and between rows create a single named grid area that spans the corresponding grid cells. Unless those cells form a rectangle, the declaration is invalid.

### Formal syntax

{{csssyntax}}

## Example

### HTML

```html
<section id="page">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main area</main>
  <footer>Footer</footer>
</section>
```

### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas:
    "head head"
    "nav  main"
    "nav  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```

### Result

_{{EmbedLiveSample("Example", "100%", "250px")}}_

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- Related CSS properties: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template")}}
- Grid Layout Guide: _[Grid template areas](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_
- Video tutorial: _[Grid Template Areas](http://gridbyexample.com/video/grid-template-areas/)_
