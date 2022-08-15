---
title: Lineas de Cuadricula
slug: Glossary/Grid_Lines
translation_of: Glossary/Grid_Lines
---
Las **Lineas de Cuadricula** se crean cuando defines las {{glossary("tracks", "Pistas de Cuadricula")}} esto sucede dentro de un contenedor que este usando [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout).

En el siguiente ejemplo hay una cuadricula con tres pistas de columna y dos pistas de filas. Esto nos da **4 Lineas de Columnas** y **3 Lineas de Fila**.

```css hidden
* {box-sizing: border-box;}

.wrapper {
border: 2px solid #f76707;
border-radius: 5px;
background-color: #fff4e6;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
border: 2px solid #ffa94d;
border-radius: 5px;
background-color: #ffd8a8;
padding: 1em;
color: #d9480f;
}
```

```html
<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
```

Podemos referenciar a **Las Lineas** de nuestra plantilla usando su numero de linea. De manera izquierda-a-derecha y de arriba-a-abajo; la linea 1 de la columna 1 estará en la izquierda de la cuadricula, la linea 1 de la fila 1 estara al inicio de la cuadricula. Los numeros de lineas siguen el tipo de "[writing mode](/en-US/docs/Web/CSS/CSS_Writing_Modes)" de el documento, por ejemplo, si es de derecha-a-izquierda, la columna 1 estara a la derecha de la cuadricula. La imagen de abajo muestra, en fondo gris los numeros de linea, asumiendo que el "modo de escritura" es de izquierda-a-derecha.

![Diagram showing the grid with lines numbered.](https://mdn.mozillademos.org/files/14763/1_diagram_numbered_grid_lines.png)

Las líneas también se crean en la cuadrícula _implícita_ cuando se crean pistas implícitas para mantener el contenido posicionado fuera de la _cuadrícula explícita_, sin embargo, estas líneas no se pueden abordar mediante un número.

## Ubicar elementos en la cuadrícula usando el número de línea

Al crear una cuadricula usted puede ubicar los elementos dentro de ésta, usando los numeros de lineas.

En el siguiente ejemplo, el elemento esta posicionado desde la linea de columna 1 hasta la linea de columna 3 y desde la linea de fila 1 hasta la linea de fila 3.

```css hidden
* {box-sizing: border-box;}

.wrapper {
border: 2px solid #f76707;
border-radius: 5px;
background-color: #fff4e6;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
border: 2px solid #ffa94d;
border-radius: 5px;
background-color: #ffd8a8;
padding: 1em;
color: #d9480f;
}
```

```html
<div class="wrapper">
   <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
```

{{ EmbedLiveSample('example_2', '500', '250') }}

## Nombrando las lineas

Las lineas creadas _en la cuadricula explicita_, pueden ser nombradas, asignándoles un nombre dentro de corchetes antes ó después de la información del tamaño de pistas. Asi podemos utlizar estos nombres como referencia para cada línea en vez de utilizar los numeros de linea.

<div class="hidden"><pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
border: 2px solid #f76707;
border-radius: 5px;
background-color: #fff4e6;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
border: 2px solid #ffa94d;
border-radius: 5px;
background-color: #ffd8a8;
padding: 1em;
color: #d9480f;
}

</pre></div>

```html
<div class="wrapper">
   <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: [col1-start] 1fr [col2-start] 1fr [col3-start] 1fr [cols-end];
  grid-template-rows: [row1-start] 100px [row2-start] 100px [rows-end];
}
.item {
  grid-column-start: col1-start;
  grid-column-end: col3-start;
  grid-row-start: row1-start;
  grid-row-end: rows-end;
}
```

{{ EmbedLiveSample('example_3', '500', '250') }}

## Learn more

### Property reference

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-row")}}

### Further reading

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- CSS Grid Layout Guide: _[Line-based placement with CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- CSS Grid Layout Guide: _[Layout using named grid lines](/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)_
- CSS Grid Layout Guide: _[CSS Grids, Logical Values and Writing Modes](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)_
- [Definition of Grid Lines in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-line-concept)
