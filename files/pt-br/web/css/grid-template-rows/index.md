---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
---

A propriedade **`grid-template-rows`** do CSS define o nome das linhas e funções de dimensionamento (track sizing) do {{glossary("grid rows", "grid rows")}}.

{{EmbedInteractiveExample("pages/css/grid-template-rows.html")}}

## Syntax

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

/* Valores globais */
grid-template-rows: inherit;
grid-template-rows: initial;
grid-template-rows: unset;
```

Esta propriedade pode ser especificada como:

- com a palavra-chave `none`
- ou um valor `<track-list>`
- ou um valor `<auto-track-list>`

### Valores

- `none`
  - : É uma palavra-chave que indica que não há uma grid explícita. Qualquer linha irá ser implicitamente gerada e seu tamanho será determinado pela a propriedade {{cssxref("grid-auto-rows")}} .
- {{cssxref("&lt;length&gt;")}}
  - : É um comprimento não negativo.
- {{cssxref("percentage", "&lt;percentagem&gt;")}}
  - : É um valor de {{cssxref("percentage", "&lt;percentagem&gt;")}} não negativo, relativo ao tamanho do bloco do grid contêiner. Se o tamanho do grid contêiner depender do tamanho de suas tracks, então a percentagem deve ser tratada como `auto`.
    As contribuições de tamanho inerentes da track podem ser ajustados ao tamanho do grid contêiner, e aumentar o tamanho final da track pelo o valor mínimo que respeitará a percentagem.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Is a non-negative dimension with the unit `fr` specifying the track's flex factor. Each `<flex>`-sized track takes a share of the remaining space in proportion to its flex factor. When appearing outside a `minmax()` notation, it implies an automatic minimum (i.e. `minmax(auto, <flex>)`).
- `max-content`
  - : Is a keyword representing the largest maximal content contribution of the grid items occupying the grid track.
- `min-content`
  - : Is a keyword representing the largest minimal content contribution of the grid items occupying the grid track.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Is a functional notation that defines a size range, greater than or equal to _min_, and less than or equal to _max_. If _max_ is smaller than _min_, then _max_ is ignored and the function is treated as _min_. As a maximum, a `<flex>` value sets the track's flex factor. It is invalid as a minimum.
- `auto`

  - : Is a keyword that is identical to maximal content if it's a maximum. As a minimum it represents the largest minimum size (as specified by {{cssxref("min-width")}}/{{cssxref("min-height")}}) of the grid items occupying the grid track.

    > **Nota:**: `auto` track sizes (and only `auto` track sizes) can be stretched by the {{cssxref("align-content")}} and {{cssxref("justify-content")}} properties.

- {{cssxref("fit-content", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Represents the formula `min(max-content, max(auto, argument))`, which is calculated similar to `auto` (i.e. `minmax(auto, max-content)`), except that the track size is clamped at _argument_ if it is greater than the `auto` minimum.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Represents a repeated fragment of the track list, allowing a large number of rows that exhibit a recurring pattern to be written in a more compact form.

### Formal syntax

{{csssyntax}}

## Examples

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

## Specifications

| Specification                                                                  | Status                 | Comment            |
| ------------------------------------------------------------------------------ | ---------------------- | ------------------ |
| {{SpecName("CSS3 Grid", "#propdef-grid-template-rows", "grid-template-rows")}} | {{Spec2("CSS3 Grid")}} | Initial definition |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat("css.properties.grid-template-rows")}}

## See also

- Related CSS properties: {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-template")}}
- Grid Layout Guide: _[Basic concepts of grid layout - Grid Tracks](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Grid_Tracks)_
- Video tutorial: _[Defining a Grid](http://gridbyexample.com/video/series-define-a-grid/)_

1. [**CSS**](/pt-BR/docs/Web/CSS)
2. [**CSS Reference**](/pt-BR/docs/Web/CSS/Reference)
3. [CSS Grid Layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout)
4. **Guides**

   1. [Basics concepts of grid layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
   2. [Relationship to other layout methods](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
   3. [Line-based placement](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
   4. [Grid template areas](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
   5. [Layout using named grid lines](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
   6. [Auto-placement in grid layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
   7. [Box alignment in grid layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
   8. [Grids, logical values and writing modes](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
   9. [CSS Grid Layout and Accessibility](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
   10. [CSS Grid Layout and Progressive Enhancement](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
   11. [Realizing common layouts using grids](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5. **Properties**

   1. [grid](/pt-BR/docs/Web/CSS/grid)
   2. [grid-area](/pt-BR/docs/Web/CSS/grid-area)
   3. [grid-auto-columns](/pt-BR/docs/Web/CSS/grid-auto-columns)
   4. [grid-auto-flow](/pt-BR/docs/Web/CSS/grid-auto-flow)
   5. [grid-auto-rows](/pt-BR/docs/Web/CSS/grid-auto-rows)
   6. [grid-column](/pt-BR/docs/Web/CSS/grid-column)
   7. [grid-column-end](/pt-BR/docs/Web/CSS/grid-column-end)
   8. [grid-column-gap](/pt-BR/docs/Web/CSS/grid-column-gap)
   9. [grid-column-start](/pt-BR/docs/Web/CSS/grid-column-start)
   10. [grid-gap](/pt-BR/docs/Web/CSS/grid-gap)
   11. [grid-row](/pt-BR/docs/Web/CSS/grid-row)
   12. [grid-row-end](/pt-BR/docs/Web/CSS/grid-row-end)
   13. [grid-row-gap](/pt-BR/docs/Web/CSS/grid-row-gap)
   14. [grid-row-start](/pt-BR/docs/Web/CSS/grid-row-start)
   15. [grid-template](/pt-BR/docs/Web/CSS/grid-template)
   16. [grid-template-areas](/pt-BR/docs/Web/CSS/grid-template-areas)
   17. [grid-template-columns](/pt-BR/docs/Web/CSS/grid-template-columns)
   18. [grid-template-rows](/pt-BR/docs/Web/CSS/grid-template-rows)

6. **Glossary**

   1. [Grid lines](/pt-BR/docs/Glossary/Grid_lines)
   2. [Grid tracks](/pt-BR/docs/Glossary/Grid_tracks)
   3. [Grid cell](/pt-BR/docs/Glossary/Grid_cell)
   4. [Grid areas](/pt-BR/docs/Glossary/Grid_areas)
   5. [Gutters](/pt-BR/docs/Glossary/Gutters)
   6. [Grid row](/pt-BR/docs/Glossary/Grid_rows)
   7. [Grid column](/pt-BR/docs/Glossary/Grid_column)
