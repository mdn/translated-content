---
title: grid-template-columns
slug: Web/CSS/grid-template-columns
translation_of: Web/CSS/grid-template-columns
---
La propiedad CSS **`grid-template-columns`** define el nombre de las líneas y las funciones de tamaño de línea de {{glossary("grid column", "grid columns")}}.

```css
/* Keyword value */
grid-template-columns: none;

/* <track-list> values */
grid-template-columns: 100px 1fr;
grid-template-columns: [linename] 100px;
grid-template-columns: [linename1] 100px [linename2 linename3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);

/* <auto-track-list> values */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns: minmax(100px, max-content)
                       repeat(auto-fill, 200px) 20%;
grid-template-columns: [linename1] 100px [linename2]
                       repeat(auto-fit, [linename3 linename4] 300px)
                       100px;
grid-template-columns: [linename1 linename2] 100px
                       repeat(auto-fit, [linename1] 300px) [linename3];

/* Global values */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: unset;
```

{{cssinfo}}

## Sintaxis

### Valores

- `none`
  - : Es una palabra clave que significa que no hay una cuadrícula explícita. Cualquier columna será generada implicitamente y su tamaño sera determinado por la propiedad {{cssxref("grid-auto-columns")}}.
- {{cssxref("&lt;length&gt;")}}
  - : Es una longitud no negativa.
- {{cssxref("&lt;percentage&gt;")}}
  - : Es un valor no negativo {{cssxref("percentage", "&lt;percentage&gt;")}}, relativo al tamaño del bloque del contenedor grid. Si el tamaño del contenedor de la cuadrícula depende del tamaño de sus vías, entonces el porcentaje debe de tratarse como `auto`.
    Las contribuciones de tamaño intrínseco de la vía puede ser ajustado al tamaño del contenedor de la cuadrícula, e incrementar el tamaño final de la vía por la cantidad mínima que permita mantener el porcentaje.
- {{cssxref("&lt;flex&gt;")}}
  - : Es una dimensión no negativa con la unidad `fr` especificando el factor de flexibilidad de la vía. Cada vía de tamaño- `<flex>` toma un trozo del espacio restante en proporción a su factor de flexibilidad. Cuando aparece en una notación `minmax()`, implica un mínimo automático (es decir, `minmax(auto, <flex>)`).
- `max-content`
  - : Es una palabra clave representando la mayor contribución máxima de contenido de los elementos de la cuadrícula ocupando las vías de ésta.
- `min-content`
  - : Es una palabra clave representando la mayor contribución mínima de contenido de los elementos de la cuadrícula ocupando las vías de ésta.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Es una notación funcional que define un rango de tamaño, mayor o igual que _min_, y menor o igual que _max_. Si _max_ es menor a _min_, entonces _max_ es ignorado y la función es tratada como _min_. Como un máximo, un valor `<flex>` ajusta el factor de flexibilad de la vía. Es inválido utilizarlo como un mínimo.
- `auto`

  - : Es una palabra clave que es idéntica al contenido máximo si es un máximo. Como un mínimo representa el mínimo más grande (según lo especificado por {{cssxref("min-width")}}/{{cssxref("min-height")}}) de los elementos de la cuadrícula ocupando la vía.

    > **Nota:** Nota: Los tamaños de vía `auto` (y sólo los tamaños de vía `auto` ) pueden ser estirados por las propiedades {{cssxref("justify-content")}}.

- `{{cssxref("fit-content", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}`
  - : Representa la fórmula `min(max-content, max(auto, argument))`, que se calcula de forma similar a `auto` (es decir, `minmax(auto, max-content)`), excepto que el tamaño de la vía se fija a _argument_ si es mayor que el mínimo.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Representa un fragmento repetido de la lista de vías, permitiendo que un gran número de columnas que muestran un patrón recurrente se escriban de una manera más compacta.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### CSS

```css
#grid {
  display: grid;
  width: 100%;
  grid-template-columns: 50px 1fr;
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

### Resultado

{{EmbedLiveSample("Examples", "100%", "20px")}}

## Especificaciones

| Especificación                                                                                                   | Estado                       | Comentario        |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------- |
| {{SpecName("CSS3 Grid", "#propdef-grid-template-columns", "grid-template-columns")}} | {{Spec2("CSS3 Grid")}} | Condición inicial |

## Compatibilidad del navegador

{{Compat("css.properties.grid-template-columns")}}

## Ver también

- Propiedades CSS relacionadas: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-template")}}
- Guía de grid layout: _[Basic concepts of grid layout - Grid Tracks](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Grid_Tracks)_
- Video tutorial: _[Defining a Grid](http://gridbyexample.com/video/series-define-a-grid/)_

1.  [**CSS**](/es/docs/Web/CSS)
2.  [**Referencia CSS**](/es/docs/Web/CSS/Reference)
3.  [CSS Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout)
4.  **Guías**

    1.  [Conceptos básicos de grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
    2.  [Relación con otros métodos de layouts](/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
    3.  [Colocación en línea](/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
    4.  [Áreas de plantilla de cuadrícula](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
    5.  [Layout utilizando líneas de cuadrícula nombradas](/es/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
    6.  [Auto-colocacion en grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
    7.  [BAlineación de cajas en grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
    8.  [Grids, valores lógicos y modos de escritura](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
    9.  [CSS Grid Layout y Accesibilidad](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
    10. [CSS Grid Layout y Mejora Progresiva](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    11. [Realizando layouts comunes con grids](/es/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5.  **Propiedades**

    1.  [grid](/es/docs/Web/CSS/grid)
    2.  [grid-area](/es/docs/Web/CSS/grid-area)
    3.  [grid-auto-columns](/es/docs/Web/CSS/grid-auto-columns)
    4.  [grid-auto-flow](/es/docs/Web/CSS/grid-auto-flow)
    5.  [grid-auto-rows](/es/docs/Web/CSS/grid-auto-rows)
    6.  [grid-column](/es/docs/Web/CSS/grid-column)
    7.  [grid-column-end](/es/docs/Web/CSS/grid-column-end)
    8.  [grid-column-gap](/es/docs/Web/CSS/grid-column-gap)
    9.  [grid-column-start](/es/docs/Web/CSS/grid-column-start)
    10. [grid-gap](/es/docs/Web/CSS/grid-gap)
    11. [grid-row](/es/docs/Web/CSS/grid-row)
    12. [grid-row-end](/es/docs/Web/CSS/grid-row-end)
    13. [grid-row-gap](/es/docs/Web/CSS/grid-row-gap)
    14. [grid-row-start](/es/docs/Web/CSS/grid-row-start)
    15. [grid-template](/es/docs/Web/CSS/grid-template)
    16. [grid-template-areas](/es/docs/Web/CSS/grid-template-areas)
    17. [grid-template-columns](/es/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/es/docs/Web/CSS/grid-template-rows)

6.  **Glosario**

    1.  [Grid lines](/es/docs/Glossary/Grid_lines)
    2.  [Grid tracks](/es/docs/Glossary/Grid_tracks)
    3.  [Grid cell](/es/docs/Glossary/Grid_cell)
    4.  [Grid areas](/es/docs/Glossary/Grid_areas)
    5.  [Gutters](/es/docs/Glossary/Gutters)
    6.  [Grid row](/es/docs/Glossary/Grid_rows)
    7.  [Grid column](/es/docs/Glossary/Grid_column)
