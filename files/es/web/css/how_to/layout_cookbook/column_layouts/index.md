---
title: Diseños de columnas
slug: Web/CSS/How_to/Layout_cookbook/Column_layouts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

A menudo necesitarás crear un diseño con varias columnas, y CSS ofrece varias formas de hacerlo. Usar el diseño [multicolumna](/es/docs/Web/CSS/Guides/Multicol_layout), [flexbox](/es/docs/Web/CSS/Guides/Flexible_box_layout) o [grid](/es/docs/Web/CSS/Guides/Grid_layout) dependerá de lo que quieras lograr, y en esta receta exploramos estas opciones.

![Tres estilos distintos de diseño con dos columnas en el contenedor.](cookbook-multiple-columns.png)

## Requisitos

Hay varios patrones de diseño que podrías querer lograr con tus columnas:

- [Un flujo continuo de contenido dividido en columnas al estilo de un periódico](#un_flujo_continuo_de_contenido_—_diseño_multicolumna).
- [Una sola fila de elementos dispuestos como columnas, todos con la misma altura](#una_sola_fila_de_elementos_con_la_misma_altura_—_flexbox).
- [Varias filas de columnas alineadas por fila y por columna](#alinear_elementos_en_filas_y_columnas_—_diseño_de_cuadrícula).

## Las recetas

Tienes que elegir distintos métodos de maquetación según lo que necesites lograr.

### Un flujo continuo de contenido — diseño multicolumna

Si creas columnas con el diseño multicolumna, tu texto seguirá siendo un flujo continuo que va llenando cada columna por turnos. Todas las columnas deben tener el mismo tamaño, y no puedes seleccionar una columna concreta ni el contenido de una columna concreta.

Puedes controlar el espacio entre columnas con las propiedades {{cssxref("column-gap")}} o {{cssxref("gap")}}, y añadir una línea entre columnas con {{cssxref("column-rule")}}.

Haz clic en "Play" en los bloques de código de abajo para editar el ejemplo en el MDN Playground:

```html live-sample___multi-column-layout-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
  </p>
</div>
```

```css live-sample___multi-column-layout-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px;
  font: 1.2em sans-serif;

  column-width: 10em;
  column-rule: 1px solid rgb(75 70 74);
}
```

{{EmbedLiveSample("multi-column-layout-example", "", "350px")}}

En este ejemplo, usamos la propiedad {{cssxref("column-width")}} para establecer el ancho mínimo que deben tener las columnas antes de que el navegador añada una columna más. La propiedad abreviada {{cssxref("columns")}} permite establecer las propiedades `column-width` y {{cssxref("column-count")}}, y cualquiera de ellas puede definir el número máximo de columnas permitido.

Usa el diseño multicolumna cuando:

- Quieras que tu texto se muestre en columnas como las de un periódico.
- Tengas un conjunto de elementos pequeños que quieras dividir en columnas.
- No necesites seleccionar cajas de columna concretas para darles estilo.

### Una sola fila de elementos con la misma altura — flexbox

Flexbox permite dividir el contenido en columnas estableciendo {{cssxref("display", "display: flex;")}} para convertir un elemento padre en un contenedor flexible. Con solo añadir esta propiedad, todos los hijos (elementos hijos, pseudoelementos y nodos de texto) se convierten en elementos flexibles dispuestos en una sola línea. Si se establece la misma propiedad abreviada {{cssxref("flex")}} con un único valor numérico, todo el espacio disponible se reparte a partes iguales, lo que suele hacer que todos los elementos flexibles tengan el mismo tamaño, siempre que ninguno tenga contenido que no se ajuste y obligue a que el elemento sea más grande.

Se pueden usar márgenes o la propiedad `gap` para crear espacios entre los elementos, pero por ahora no hay ninguna propiedad CSS que añada líneas entre los elementos flexibles.

```html live-sample___columns-flexbox-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___columns-flexbox-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px 10px;
  font: 1.2em sans-serif;

  display: flex;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;

  margin: 0 10px;
  flex: 1;
}
```

{{EmbedLiveSample("columns-flexbox-example", "", "400px")}}

Para crear un diseño con elementos flexibles que pasen a nuevas filas, establece la propiedad {{cssxref("flex-wrap")}} del contenedor en `wrap`. Ten en cuenta que cada línea flexible reparte el espacio solo para esa línea. Los elementos de una línea no se alinearán necesariamente con los de otras líneas, como verás en el ejemplo siguiente. Por eso se dice que flexbox es unidimensional: está pensado para controlar el diseño como una fila o como una columna, pero no ambas a la vez.

```html live-sample___columns-flexbox-wrapping-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___columns-flexbox-wrapping-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px 10px;
  width: 500px;
  font: 1.2em sans-serif;

  display: flex;
  flex-wrap: wrap;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;

  margin: 0 10px;
  flex: 1 1 200px;
}
```

{{EmbedLiveSample("columns-flexbox-wrapping-example", "", "450px")}}

Usa flexbox:

- Para filas o columnas únicas de elementos.
- Cuando quieras alinear en el eje transversal después de disponer los elementos.
- Cuando te parezca bien que los elementos que pasan a otra línea repartan el espacio solo en su propia línea y no se alineen con los elementos de otras líneas.

### Alinear elementos en filas y columnas — diseño de cuadrícula

Si quieres una cuadrícula bidimensional en la que los elementos se alineen en filas _y_ columnas, deberías elegir el diseño de cuadrícula CSS. Al igual que flexbox actúa sobre los hijos directos del contenedor flexible, el diseño de cuadrícula actúa sobre los hijos directos del contenedor de cuadrícula. Solo tienes que establecer {{cssxref("display", "display: grid;")}} en el contenedor. Las propiedades que se establecen en este contenedor, como {{cssxref("grid-template-columns")}} y {{cssxref("grid-template-rows")}}, definen cómo se reparten los elementos en filas y columnas.

Haz clic en "Play" en los bloques de código de abajo para editar el ejemplo en el MDN Playground:

```html live-sample___grid-layout-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens.
  </p>

  <p>
    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong
    celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
    parsnip. .
  </p>
</div>
```

```css live-sample___grid-layout-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px;
  width: 500px;
  font: 1.2em sans-serif;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  margin: 0;
}
```

{{EmbedLiveSample("grid-layout-example", "", "450px")}}

Usa grid:

- Para varias filas o columnas de elementos.
- Cuando quieras poder alinear los elementos en los ejes de bloque y en línea.
- Cuando quieras que los elementos se alineen en filas y columnas.

## Recursos en MDN

- [Guía del diseño multicolumna](/es/docs/Web/CSS/Guides/Multicol_layout)
- [Guía de flexbox](/es/docs/Web/CSS/Guides/Flexible_box_layout)
- [Guía del diseño de cuadrícula CSS](/es/docs/Web/CSS/Guides/Grid_layout)
