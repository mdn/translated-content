---
title: Grid
slug: Glossary/Grid
---

_CSS grid_ es definido usando el valor grid en la propiedad `display`; puedes definir columnas y filas en tu diseño grid, con las propiedades {{cssxref("grid-template-rows")}} y {{cssxref("grid-template-columns")}} .

El grid que configures usando estas propiedades es definido como la grilla explícita (_explicit grid_).

Si colocas contenido fuera de esta cuadrícula explícita, o si confías en la ubicación automática y el algoritmo de cuadrícula necesita crear {{glossary("grid tracks", "tracks")}} de filas o columnas adicionales para contener {{glossary("grid item", "grid items")}}, luego se crearán pistas adicionales en la cuadrícula implícita. La _cuadrícula implícita_ es la cuadrícula creada automáticamente debido al contenido que se agrega fuera de las pistas definidas.

En el siguiente ejemplo, he creado una _grilla explícita_ de tres columnas y dos filas. La _tercera_ fila en la cuadrícula es una pista de la fila de la _grilla implícita_, formada debido a que son más de seis los elementos que llenan las pistas explícitas.

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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

{{ EmbedLiveSample('ejemplo', '500', '330') }}

## Aprende Más

### Referencia de propiedades

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### Otras lecturas

- Guía de diseño CSS Grid: _[Conceptos Básicos de Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
