---
title: grid-auto-columns
slug: Web/CSS/grid-auto-columns
---

{{CSSRef}}

La propiedad de css **`grid-auto-columns`** especifíca el tamaño de una columna de cuadrícula creada implícitamente {{glossary("grid tracks", "track")}}.

{{EmbedInteractiveExample("pages/css/grid-auto-columns.html")}}

La version original interactiva de este artículo se guarda en un repositorio GitHub . If you'd like to contribute to the interactive examples project, please clone <https://github.com/mdn/interactive-examples> and send us a pull request.

Si un item grid se posiciona dentro de una columna que no tenga un tamaño explícito para {{cssxref("grid-template-columns")}}, implícito{{glossary("grid", "grid")}}las pistan se crean para sostenerlo. Esto puede suceder posicionándose explícitamente en una columna que está fuera de rango, o mediante el algoritmo de auto colocación creando columnas adicionales.

## Sintaxis

```css
/* Keyword values */
grid-auto-columns: min-content;
grid-auto-columns: max-content;
grid-auto-columns: auto;

/* <length> values */
grid-auto-columns: 100px;
grid-auto-columns: 20cm;
grid-auto-columns: 50vmax;

/* <percentage> values */
grid-auto-columns: 10%;
grid-auto-columns: 33.3%;

/* <flex> values */
grid-auto-columns: 0.5fr;
grid-auto-columns: 3fr;

/* minmax() values */
grid-auto-columns: minmax(100px, auto);
grid-auto-columns: minmax(max-content, 2fr);
grid-auto-columns: minmax(20%, 80vmax);

/* fit-content() values */
grid-auto-columns: fit-content(400px);
grid-auto-columns: fit-content(5cm);
grid-auto-columns: fit-content(20%);

/* multiple track-size values */
grid-auto-columns: min-content max-content auto;
grid-auto-columns: 100px 150px 390px;
grid-auto-columns: 10% 33.3%;
grid-auto-columns: 0.5fr 3fr 1fr;
grid-auto-columns: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);
grid-auto-columns: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Global values */
grid-auto-columns: inherit;
grid-auto-columns: initial;
grid-auto-columns: unset;
```

### Values

- `<length>`
  - : Es una longitud no negativa.
- `<percentage>`
  - : Es un valor no negativo {{cssxref("percentage", "&lt;percentage&gt;")}} en relación con el tamaño del bloque del contenedor de la grilla. Si el tamaño de bloque del contenedor de cuadrícula es indefinido, el valor porcentual se trata como automático.
- `<flex>`

  - : Es una dimensión -valor- no negativa con la unidad `fr` especificando el 'factor flex' del espacio entre dos celdas. Si el espacio entre dos celdas está designado como `<flex>` tomará una porción del espacio remanente entre celdas en proporción a su 'factor flex' - o flex factor `fr`-.

    Si aparece en una función `minmax()` implica un mínimo automático (ejemplo: `minmax(auto, <flex>)`).

- `max-content`
  - : Es una keyword o palabra clave que representa el contenido máximo de los items que ocupan el espacio de la grid o cuadrilla.
- `min-content`
  - : Es una keyword o palabra clave que representa el contenido mínimo de los items que ocupan el espacio de la grid o cuadrilla.
- `minmax(min, max)`
  - : Es una notación funcional (una función) que define un rango de tamaño mayor que o igual a _min_ y menor que o igual a _max_. Si _max_ es menor que _min_, entonces _max_ será ignorado y la función será tratada como un _min_. Si establecemos un valor máximo como `<flex>`, se define el 'factor flex' del espacio entre las celdas del grid. Si establecemos el valor mínimo como `<flex>`, se tratará como cero, o contenido mínimo si el contenedor de la grid/cuadrilla tiene la restricción de valor mínimo (min-content).
- `fit-content(argument)`
  - : Representa la fórmula `min(max-content, max(auto, argument))`, que se calcula similar a `auto` (por ejemplo: `minmax(auto, max-content)`), excepto que el _track size_ o espacio entre celdas es mayor que el auto mínimo.
- `auto`

  - : Es una palabra reservada -o keyword- que es idéntica a contenido máximo si es un máximo. Como mínimo representa el máximo valor mínimo aceptado (según lo especificado por{{cssxref("min-width")}}/{{cssxref("min-height")}}) de los elementos de la cuadrícula que ocupan el espacio de la cuadrícula.

    > **Nota:** Note: Los valores de tamaño `auto` (y solo los `auto`) pueden ser estirados por las propiedades {{cssxref("align-content")}} y {{cssxref("justify-content")}} .

### Sintaxis Formal

{{csssyntax}}

## Ejemplo

### Contenido HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### Contenido CSS

```css
#grid {
  height: 100px;
  display: grid;
  grid-template-areas: "a a";
  grid-gap: 10px;
  grid-auto-columns: 200px;
}

#grid > div {
  background-color: lime;
}
```

### Resultado

{{EmbedLiveSample("Example", "410px", "100px")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- Propiedades CSS relacionadas: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}, {{cssxref("grid")}}
- Guía de Layout tipo Grid (en inglés): _[Auto-placement in grid layout - sizing rows in the implicit grid](/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout#Sizing_rows_in_the_implicit_grid)_
- Video tutorial (inglés): _[Introducing Grid auto-placement and order](http://gridbyexample.com/video/series-auto-placement-order/)_
