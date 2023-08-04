---
title: Grid Areas
slug: Glossary/Grid_Areas
---

Un **grid area** es una o más {{glossary("grid cell", "grid cells")}} que forman un área rectangular en la cuadrícula. Los grid areas se crean cuando se coloca un elemento usando [disposición basada en líneas](/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid) o cuando se definen áreas usando [grid areas con nombre](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas).

![Imagen mostrando una grid area resaltada](1_grid_area.png)

Las Grid areas _deben_ ser de naturaleza rectangular; no es posible crear, por ejemplo, un grid area en forma de T o L.

En el siguiente ejemplo, tengo un contenedor de cuadrícula con dos elementos. Los he nombrado con la propiedad {{cssxref ("grid-area")}} y luego los he distribuido en la cuadrícula usando {{cssxref ("grid-template-areas")}}. Esto crea dos áreas de cuadrícula, una que cubre cuatro celdas de la cuadrícula, la otra dos.

## Ejemplo

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "a a b"
    "a a b";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
```

```html
<div class="wrapper">
  <div class="item1">Item</div>
  <div class="item2">Item</div>
</div>
```

{{ EmbedLiveSample('ejemplo', '300', '280') }}

## Aprenda más

### Referencia de propiedad

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-area")}}

### Otras lecturas

- Guía de diseño Grid CSS: _[Conceptos básicos de grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- Guía de diseño Grid CSS: _[Grid template areas](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_
- [Definición de Grid Areas en la especificación de Grid Layout CSS](https://drafts.csswg.org/css-grid/#grid-area-concept)
