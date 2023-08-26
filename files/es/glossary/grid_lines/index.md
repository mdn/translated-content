---
title: Líneas de Cuadrícula
slug: Glossary/Grid_Lines
---

Las **Líneas de Cuadrícula** se crean cuando defines las {{glossary("tracks", "Pistas de Cuadrícula")}} esto sucede dentro de un contenedor que este usando [CSS Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout).

En el siguiente ejemplo hay una cuadrícula con tres pistas de columna y dos pistas de filas. Esto nos da **4 Líneas de Columnas** y **3 Líneas de Fila**.

```css hidden
* {
  box-sizing: border-box;
}

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

Podemos referenciar a **Las Líneas** de nuestra plantilla usando su número de línea. De manera izquierda-a-derecha y de arriba-a-abajo; la línea 1 de la columna 1 estará en la izquierda de la cuadrícula, la línea 1 de la fila 1 estará al inicio de la cuadrícula. Los números de líneas siguen el tipo de "[modo de escritura](/es/docs/Web/CSS/CSS_Writing_Modes)" de el documento, por ejemplo, si es de derecha-a-izquierda, la columna 1 estará a la derecha de la cuadrícula. La imagen de abajo muestra, en fondo gris los números de línea, asumiendo que el "modo de escritura" es de izquierda-a-derecha.

![Diagrama mostrando la cuadrícula con líneas numeradas.](1_diagram_numbered_grid_lines.png)

Las líneas también se crean en la cuadrícula _implícita_ cuando se crean pistas implícitas para mantener el contenido posicionado fuera de la _cuadrícula explícita_, sin embargo, estas líneas no se pueden abordar mediante un número.

## Ubicar elementos en la cuadrícula usando el número de línea

Al crear una cuadrícula usted puede ubicar los elementos dentro de ésta, usando los números de líneas.

En el siguiente ejemplo, el elemento está posicionado desde la línea de columna 1 hasta la línea de columna 3 y desde la línea de fila 1 hasta la línea de fila 3.

```css hidden
* {
  box-sizing: border-box;
}

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

## Nombrando las líneas

Las líneas creadas _en la cuadrícula explícita_, pueden ser nombradas, asignándoles un nombre dentro de corchetes antes o después de la información del tamaño de pistas. Así podemos utlizar estos nombres como referencia para cada línea en vez de utilizar los números de línea.

```css hidden
* {
  box-sizing: border-box;
}

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

## Aprende Más

### Propiedades de referencia

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-row")}}

### Otras lecturas

- Guía de Grid Layout CSS: _[Conceptos básicos de grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- Guía de Grid Layout CSS: _[Colocación basada en línea con Grid CSS](/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Guía de Grid Layout CSS: _[Diseño usando líneas de cuadrícula con nombre](/es/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)_
- Guía de Grid Layout CSS: _[Cuadrículas CSS, Valores Lógicos y Modos de Escritura](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)_
- [Definición de Línea de Cuadrícula en la especificación de Grid Layout CSS](https://drafts.csswg.org/css-grid/#grid-line-concept)
