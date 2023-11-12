---
title: Box alignment in CSS Grid Layout
slug: Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout
---

Si estás familiarizado con [flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout) Entonces ya habrás encontrado la forma en que los items flexibles pueden ser alineados correctamente dentro de un contendor flex. Estas propiedades de alineación que encontramos por primera vez en la especificación de flexbox se han trasladado a una nueva especificación llamada [Box Alignment Level 3](https://drafts.csswg.org/css-align/). Esta especificación tiene detalles de cómo debería funcionar la alineación en todos los diferentes métodos de diseño.

Cada método de diseño que implemente Box Alignment tendrá algunas diferencias debido a que cada método tiene características y restricciones diferentes (y acciones heredadas), por lo que es imposible hacer la alineación exactamente de la misma forma en todos los ámbitos. La especificación Box Alignment tiene detalles para cada método, sin embargo, te decepcionaría si intentaras alinear en muchos métodos en este momento, pues el soporte aún no está disponible para todos los navegadores. Donde sí tenemos soporte de navegador para las propiedades de alineación y distribución de espacio de la especificación Box Alignment es en grid layout.

Esta guía muestra la forma cómo funciona la alineación de cajas (box alignment) en el diseño de cuadriculas (Grid Layout). Verás mucha similitud en cómo funcionan estás propiedades y valores en flexbox. Debido a que la cuadrícula (grid) es bidimensional y flexbox es unidimensional, existen algunas pequeñas diferencias con las que debes tener cuidado. Así que comenzaremos mirando los dos ejes con los que tratamos cuando alineamos cosas en una cuadricula.

## Los 2 ejes de un diseño Grid

Al trabajar con el diseño de cuadrícula, tienes dos ejes disponibles para alinear las cosas: el eje del bloque (block axis) y el eje en línea (inline axis). El eje de bloque es el eje sobre el cual se disponen los bloques en el diseño del bloque. Si tienes dos párrafos en tu página, se mostrara uno debajo del otro, entonces es ésta la dirección que describimos como el eje de bloque (también llamadas columnas, eje "y", eje vertical).

![](block_axis.png)

El eje en línea (inline axis) se ejecuta a través del eje del bloque, es la dirección en la que se ejecuta el texto en el flujo regular en línea (también llamadas filas, Eje "x", eje horizontal).

![](7_inline_axis.png)

Podemos alinear el contenido dentro de las áreas de la cuadrícula o rejilla , y los tracks en estos dos ejes.

## Alineación de elementos en el Eje de Bloque

Las propiedades {{cssxref("align-self")}} y {{cssxref("align-items")}} controlan la alineación en el eje de bloque. Cuando usamos estas propiedades, estamos cambiando la alineación del elemento dentro del área de la cuadricula (grid) que se ha colocado.

En el siguiente ejemplo, tengo 4 áreas dentro de mi cuadricula (grid). Puedo usar la propiedad {{cssxref("align-items")}} en el contenedor de la cuadricula (grid container), para alinear los elementos usando uno de los siguientes valores:

- `auto`
- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `baseline`
- `first baseline`
- `last baseline`

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
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
  align-items: start;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_1', '500', '450') }}

Ten en mente que una vez establezcas `align-self: start`, la altura de cada hijo `<div>` será determinada por el contenido del `<div>`. Esto está en contraste de omitir [`align-self`](/es/docs/Web/CSS/align-self) completamente, en el cual la altura de cada `<div>` se extendería hasta llenar el área de la cuadricula.

La propiedad {{cssxref("align-items")}} establece la propiedad {{cssxref("align-self")}} para todos los elementos hijos de la cuadricula. Esto significa que puedes establecer la propiedad individualmente, usando `align-self` en cada elemento de la cuadricula.

En el siguiente ejemplo, estoy usando la propiedad `align-self` para demostrar los diferentes valores de alineación. La primer área está mostrando la acción por defecto de `align-self`, el cual es extenderse. El segundo elemento tiene un valor en `align-self` de `start`, el tercero `end` y el cuarto `center`.

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
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
  align-self: start;
}
.item3 {
  grid-area: c;
  align-self: end;
}
.item4 {
  grid-area: d;
  align-self: center;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_2', '500', '450') }}

### Elementos con una relación de aspecto intrínseco

La especificación determina que la acción por defecto en {{cssxref("align-self")}} es estirarse, excepto para los elementos que tienen una relación de aspecto intrínseco, en este caso ellos funcionan como `start`. La razón para esto, es que si elemento con una relación de aspecto intrínseco es establecido para estirarse, este por defecto pueda distorsionarlo.

Esta acción ahora ha sido clarificada en la especificación, con navegadores aún hay que implementar la acción correcta. Hasta que eso pase, te puedes asegurar de que los elementos no se extiendan, como en imagenes, las cuales son hijos directos de la cuadricula, estableciendo {{cssxref("align-self")}} y {{cssxref("justify-self")}} al empezar. Esto se asemejará a la acción correcta una vez implementado.

## Justifying Items on the Inline Axis

As {{cssxref("align-items")}} and {{cssxref("align-self")}} deal with the alignment of items on the block axis, {{cssxref("justify-items")}} and {{cssxref("justify-self")}} do the same job on the inline axis. The values you can choose from are the same as for `align-self`.

- `auto`
- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `baseline`
- `first baseline`
- `last baseline`

You can see the same example as used for {{cssxref("align-items")}}, below. This time we are applying the {{cssxref("justify-self")}} property.

Once again the default is `stretch`, other than for items with an intrinsic aspect ratio. This means that by default, grid items will cover their grid area, unless you change that by setting alignment. The first item in the example demonstrates this default alignment:

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
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
  justify-self: start;
}
.item3 {
  grid-area: c;
  justify-self: end;
}
.item4 {
  grid-area: d;
  justify-self: center;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_3', '500', '450') }}

As with {{cssxref("align-self")}} and {{cssxref("align-items")}}, you can apply {{cssxref("justify-items")}} to the grid container, to set the {{cssxref("justify-self")}} value for all items.

The {{cssxref("justify-self")}} and {{cssxref("justify-items")}} properties are not implemented in flexbox. This is due to the one-dimensional nature of [flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout), and that there may be multiple items along the axis, making it impossible to justify a single item. To align items along the main, inline axis in flexbox you use the {{cssxref("justify-content")}} property.

## Center an item in the area

By combining the align and justify properties we can easily center an item inside a grid area.

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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 200px;
  grid-template-areas:
    ". a a ."
    ". a a .";
}
.item1 {
  grid-area: a;
  align-self: center;
  justify-self: center;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
</div>
```

{{ EmbedLiveSample('alignment_4', '500', '480') }}

## Aligning the grid tracks on the block axis

If you have a situation where your grid tracks use an area that is smaller than the grid container, then you can align the grid tracks themselves, inside that container. Once again, this operates on the block and inline axes, with {{cssxref("align-content")}} aligning tracks on the block axis, and {{cssxref("justify-content")}} performing alignment on the inline axis. The values for {{cssxref("align-content")}} and {{cssxref("justify-content")}} are:

- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `space-around`
- `space-between`
- `space-evenly`
- `baseline`
- `first baseline`
- `last baseline`

In the below example I have a grid container of 500 pixels by 500 pixels. I have defined 3 row and column tracks each of 100 pixels with a 10 pixel gutter. This means that there is space inside the grid container both in the block and inline directions.

The `align-content` property is applied to the grid container as it works on the entire grid. The default behavior in grid layout is `start`, which is why our grid tracks are in the top left corner of the grid, aligned against the start grid lines:

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
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  grid-gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_5', '500', '520') }}

If I add `align-content` to my container, with a value of `end`, the tracks all move to the end line of the grid container in the block dimension:

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
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  grid-gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
  align-content: end;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_6', '500', '520') }}

We can also use values for this property that you may be familiar with from flexbox; the space distribution values of `space-between`, `space-around` and `space-evenly`. If we update {{cssxref("align-content")}} to `space-between`, you can see how the elements on our grid space out:

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
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  grid-gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
  align-content: space-between;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_7', '500', '520') }}

It is worth noting, that using these space distribution values may cause items on your grid to become larger. If an item spans more than one grid track, as further space is added between the tracks, that item needs to become large to absorb the space. We're always working in a strict grid. Therefore, if you decide to use these values, ensure that the content of your tracks can cope with the extra space, or that you have used alignment properties on the items, to cause them to move to the start rather than stretch.

In the below image I have placed the grid with `align-content`, with a value of `start` alongside the grid when `align-content` has a value of `space-between`. You can see how items 1 and 2, which span two row tracks have taken on extra height as they gain the additional space added to the gap between those two tracks:

![Demonstrating how items become larger if we use space-between.](7_space-between.png)

## Justifying the grid tracks on the row axis

On the inline axis, we can use {{cssxref("justify-content")}} to perform the same type of alignment that we used {{cssxref("align-content")}} for in the block axis.

Using the same example, I am setting {{cssxref("justify-content")}} to `space-around`. This once again causes tracks which span more than one column track to gain extra space:

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
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  grid-gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
  align-content: space-between;
  justify-content: space-around;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_8', '500', '500') }}

## Alignment and auto margins

Another way to align items inside their area, is to use auto margins. If you have ever centered your layout in the viewport, by setting the right and left margin of the container block to `auto`, you know that an auto margin absorbs all of the available space. By setting the margin to `auto` on both sides, it pushes the block into the middle as both margins attempt to take all of the space.

In this next example, I have given item 1 a left margin of `auto`. You can see how the content is now pushed over to the right side of the area, as the auto margin takes up remaining space, after room for the content of that item has been assigned:

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
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  grid-gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  grid-area: a;
  margin-left: auto;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('alignment_9', '500', '500') }}

You can see how the item is aligned by using the [Firefox Grid Highlighter](/es/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts):

![Image showing auto-margins using the Grid Highlighter.](7_auto_margins.png)

## Alignment and Writing Modes

In all of these examples I have been working in English, which is a left-to-right language. This means that our start lines are top and left of our grid when thinking in physical directions.

CSS Grid Layout, and the Box Alignment specification are designed to work with writing modes in CSS. This means that if you are working in a right to left language, such as Arabic, the start of the grid would be the top and right, so the default of `justify-content: start` would be for grid tracks to start on the right hand side of the grid.

Setting auto margins, using `margin-right` or `margin-left` however, or absolutely positioning items using the `top`, `right`, `bottom` and `left` offsets would not honor writing modes. In the next guide, we will look further into this interaction between CSS grid layout, box alignment and writing modes. This will be important to understand, if you develop sites that are then displayed in multiple languages, or if you want to mix languages or writing modes in a design.

1. [**CSS**](/es/docs/Web/CSS)
2. [**CSS Reference**](/es/docs/Web/CSS/Reference)
3. [CSS Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout)
4. **Guides**

   1. [Basics concepts of grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
   2. [Relationship to other layout methods](/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
   3. [Line-based placement](/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
   4. [Grid template areas](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
   5. [Layout using named grid lines](/es/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
   6. [Auto-placement in grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
   7. [Box alignment in grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
   8. [Grids, logical values and writing modes](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
   9. [CSS Grid Layout and Accessibility](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
   10. [CSS Grid Layout and Progressive Enhancement](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
   11. [Realizing common layouts using grids](/es/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5. **Properties**

   1. [grid](/es/docs/Web/CSS/grid)
   2. [grid-area](/es/docs/Web/CSS/grid-area)
   3. [grid-auto-columns](/es/docs/Web/CSS/grid-auto-columns)
   4. [grid-auto-flow](/es/docs/Web/CSS/grid-auto-flow)
   5. [grid-auto-rows](/es/docs/Web/CSS/grid-auto-rows)
   6. [grid-column](/es/docs/Web/CSS/grid-column)
   7. [grid-column-end](/es/docs/Web/CSS/grid-column-end)
   8. [grid-column-gap](/es/docs/Web/CSS/grid-column-gap)
   9. [grid-column-start](/es/docs/Web/CSS/grid-column-start)
   10. [grid-gap](/es/docs/Web/CSS/grid-gap)
   11. [grid-row](/es/docs/Web/CSS/grid-row)
   12. [grid-row-end](/es/docs/Web/CSS/grid-row-end)
   13. [grid-row-gap](/es/docs/Web/CSS/grid-row-gap)
   14. [grid-row-start](/es/docs/Web/CSS/grid-row-start)
   15. [grid-template](/es/docs/Web/CSS/grid-template)
   16. [grid-template-areas](/es/docs/Web/CSS/grid-template-areas)
   17. [grid-template-columns](/es/docs/Web/CSS/grid-template-columns)
   18. [grid-template-rows](/es/docs/Web/CSS/grid-template-rows)

6. **Glossary**

   1. [Grid](/es/docs/Glossary/Grid)
   2. [Grid lines](/es/docs/Glossary/Grid_lines)
   3. [Grid tracks](/es/docs/Glossary/Grid_tracks)
   4. [Grid cell](/es/docs/Glossary/Grid_cell)
   5. [Grid areas](/es/docs/Glossary/Grid_areas)
   6. [Gutters](/es/docs/Glossary/Gutters)
   7. [Grid Axis](/es/docs/Glossary/Grid_Axis)
   8. [Grid row](/es/docs/Glossary/Grid_rows)
   9. [Grid column](/es/docs/Glossary/Grid_column)
