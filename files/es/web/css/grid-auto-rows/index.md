---
title: grid-auto-rows
slug: Web/CSS/grid-auto-rows
---

La propiedad **`grid-auto-rows`** de CSS especifíca el tamaño de una nueva fila creada de forma implícita.

```css
/* Keyword values */
grid-auto-rows: min-content;
grid-auto-rows: max-content;
grid-auto-rows: auto;

/* <length> values */
grid-auto-rows: 100px;
grid-auto-rows: 20cm;
grid-auto-rows: 50vmax;

/* <percentage> values */
grid-auto-rows: 10%;
grid-auto-rows: 33.3%;

/* <flex> values */
grid-auto-rows: 0.5fr;
grid-auto-rows: 3fr;

/* minmax() values */
grid-auto-rows: minmax(100px, auto);
grid-auto-rows: minmax(max-content, 2fr);
grid-auto-rows: minmax(20%, 80vmax);

/* multiple track-size values */
grid-auto-rows: min-content max-content auto;
grid-auto-rows: 100px 150px 390px;
grid-auto-rows: 10% 33.3%;
grid-auto-rows: 0.5fr 3fr 1fr;
grid-auto-rows: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);
grid-auto-rows: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Global values */
grid-auto-rows: inherit;
grid-auto-rows: initial;
grid-auto-rows: unset;
```

Si el elemento de una grilla es ubicado en una fila que no tiene un tamaño explicitado en {{cssxref("grid-template-rows")}}, se crean filas implícitas en la {{glossary("grid", "grilla")}} para ubicarlas. Esto puede suceder al ubicar explícitamente un elemento en una fila que está fuera de rango o por el posicionamiento automático que utiliza el algoritmo para crear líneas adicionales.

{{cssinfo}}

## Syntax

### Values

- `<length>`
  - : Es una medida no negativa.
- `<percentage>`
  - : Es un {{cssxref("percentage", "&lt;percentage&gt;")}} no negativo relativo al tamaño del bloque del contenedor de la grilla. Si el tamaño del bloque del contenedor de la grilla es indefinido, el valor del porcentaje es tratado como `auto`.
- `<flex>`
  - : Es una dimensión no negativa con la unidad `fr` especificando el factor flex de la pista (track). Cada pista con valor `<flex>` toma una parte del espacio restante en proporción con su factor flex.

    Cuando aparece fuera de una notación `minmax()`, implica un mínimo automático (p.e. `minmax(auto, <flex>)`).

- `max-content`
  - : representa el largo maximo del contenido de cada uno de los items de la pista en la cuadricula(grid)
- `min-content`
  - : representa el largo minimo del contenido de cada uno de los items de la pista en la cuadricula(grid)
- `minmax(minimo, maximo)`
  - : es una notacion funcional que define el rango del tamano, dicho tamano debe ser mayor o igual al (minimo) y menor o igual al (maximo). si el parametro (maximo) es mas pequeno que el parametro (minimo), entonces el parametro (maximo) es ignorado y la funcion se tratara con el parametro (minimo). De otra manera si, a valor `<flex>` pone como minimo el factor flex de la pista, sera tratado como cero( or el contenido minimo, si el contenedor grid es inicializado con el tamano minimo permitido ).
- `auto`
  - : Es una palabra clave que es identica a contenido máximo si es un máximo. Como mínimo representa el valor mínimo más grande (como esté especificado por {{cssxref("min-width")}}/{{cssxref("min-height")}}) de los elementos de la grilla que ocupan la pista de la grilla.

    > [!NOTE]
    > Los tamaños de la pista `auto` (y sólo los tamaños de la pista `auto`) pueden ser estirados por las propiedades {{cssxref("align-content")}} y {{cssxref("justify-content")}}.

### Formal syntax

{{csssyntax}}

## Example

### HTML Content

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### CSS Content

```css
#grid {
  width: 200px;
  display: grid;
  grid-template-areas: "a a";
  grid-gap: 10px;
  grid-auto-rows: 100px;
}

#grid > div {
  background-color: lime;
}
```

{{EmbedLiveSample("Example", "210px", "210px")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Related CSS properties: {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-flow")}}, {{cssxref("grid")}}
- Grid Layout Guide: _[Auto-placement in grid layout - sizing rows in the implicit grid](/es/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout#sizing_rows_in_the_implicit_grid)_
- Video tutorial: _[Introducing Grid auto-placement and order](https://gridbyexample.com/video/series-auto-placement-order/)_
