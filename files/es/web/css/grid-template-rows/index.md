---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
---

{{CSSRef}}

La propiedad CSS **`grid-template-rows`** define el nombre de las líneas y las funciones de tamaño de línea de {{glossary("grid rows", "grid rows")}}.

{{EmbedInteractiveExample("pages/css/grid-template-rows.html")}}

## Sintaxis

```css
/* Keyword value */
grid-template-rows: none;

/* <track-list> values */
grid-template-rows: 100px 1fr;
grid-template-rows: [linename] 100px;
grid-template-rows: [linename1] 100px [linename2 linename3];
grid-template-rows: minmax(100px, 1fr);
grid-template-rows: fit-content(40%);
grid-template-rows: repeat(3, 200px);
grid-template-rows: subgrid;

/* <auto-track-list> values */
grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
grid-template-rows:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-rows:
  [linename1] 100px [linename2]
  repeat(auto-fit, [linename3 linename4] 300px)
  100px;
grid-template-rows:
  [linename1 linename2] 100px
  repeat(auto-fit, [linename1] 300px) [linename3];

/* Global values */
grid-template-rows: inherit;
grid-template-rows: initial;
grid-template-rows: unset;
```

Esta propiedad puede especificarse como:

- el valor de la palabra clave `none`
- o un valor de `<track-list>`
- o un valor de `<auto-track-list>`.

### Valores

- `none`
  - : Es una palabra clave que significa que no hay una cuadrícula explícita. Cualquier fila será generada implicitamente y su tamaño sera determinado por la propiedad {{cssxref("grid-auto-rows")}}.
- {{cssxref("&lt;length&gt;")}}
  - : Es una longitud no negativa.
- {{cssxref("&lt;percentage&gt;")}}
  - : Es un valor no negativo {{cssxref("percentage", "&lt;percentage&gt;")}}, relativo al tamaño del bloque del contenedor grid. Si el tamaño del contenedor de la cuadrícula depende del tamaño de sus vías, entonces el porcentaje debe de tratarse como `auto`.
    Las contribuciones de tamaño intrínseco de la vía puede ser ajustado al tamaño del contenedor de la cuadrícula, e incrementar el tamaño final de la vía por la cantidad mínima que permita mantener el porcentaje.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Es una dimensión no negativa con la unidad `fr` especificando el factor de flexibilidad de la vía. Cada vía de tamaño- `<flex>` toma un trozo del espacio restante en proporción a su factor de flexibilidad. Cuando aparece en una notación `minmax()`, implica un mínimo automático (i.e. `minmax(auto, <flex>)`).
- `max-content`
  - : Es una palabra clave representando la mayor contribución máxima de contenido de los elementos de la cuadrícula ocupando las vías de ésta.
- `min-content`
  - : Es una palabra clave representando la mayor contribución mínima de contenido de los elementos de la cuadrícula ocupando las vías de ésta.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Es una notación funcional que define un rango de tamaño, mayor o igual que _min_, y menor o igual que _max_. Si _max_ es menor a _min_, entonces _max_ es ignorado y la función es tratada como _min_. Como un máximo, un valor `<flex>` ajusta el factor de flexibilad de la vía. Es inválido utilizarlo como un mínimo.
- `auto`

  - : Es una palabra clave que es idéntica al contenido máximo si es un máximo. Como un mínimo representa el mínimo más grande (según lo especificado por {{cssxref("min-width")}}/{{cssxref("min-height")}}) de los elementos de la cuadrícula ocupando la vía.

    > **Nota:** Nota: Los tamaños de vía `auto` (y sólo los tamaños de vía `auto` ) pueden ser estirados por las propiedades {{cssxref("align-content")}} and {{cssxref("justify-content")}}.

- {{cssxref("fit-content", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Representa la fórmula `min(max-content, max(auto, argument))`, que se calcula de forma similar a `auto` (es decir, `minmax(auto, max-content)`), excepto que el tamaño de la vía se fija a _argument_ si es mayor que el mínimo `auto`.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Representa un fragmento repetido de la lista de vías, permitiendo que un gran número de filas que muestran un patrón recurrente se escriban de una manera más compacta.
- [subgrid](/es/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
  - : El valor `subgrid` indica que la cuadrícula adoptara la porción que ocupa su cuadrícula principal (padre) en ese eje. En lugar de ser indicado de forma explícita, los tamaños de la las filas y columnas de la cuadrícula se tomarán de la definición de la cuadrícula superior.

> **Advertencia:** El valor subgrid es del Nivel 2 de la especificación Grid y actualmente sólo tiene implementaciones en Firefox 71 y posteriores.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-rows: 30px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

### HTML

```html
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

### Result

{{EmbedLiveSample("Examples", "40px", "100px")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Propiedades CSS relacionadas: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-template")}}
- Guía de grid layout: _[Basic concepts of grid layout - Grid Tracks](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Grid_Tracks)_
- Video tutorial: _[Defining a Grid](http://gridbyexample.com/video/series-define-a-grid/)_
