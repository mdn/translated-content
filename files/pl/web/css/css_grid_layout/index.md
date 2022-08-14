---
title: CSS Grid Layout
slug: Web/CSS/CSS_Grid_Layout
tags:
  - CSS
translation_of: Web/CSS/CSS_Grid_Layout
---
**CSS Grid Layout** jest najlepszą metodą aby podzielić strone na części lub definiowanie relacji takich jak rozmiar, pozycja i warstwa, pomiędzy podstawowymi elementami HTML.

Podobnie do tabel (ang. "tables"), rozmieszczenie grid _(ang. "siatka")_ pozwala autorowi wyrównać elementy w kolumny i wiersze. Jednakowoż grid pozwala na wiele więcej ułożeń niż tabele. Na przykład kontener grid potrafi spozycjonować elementy wewnątrz siebie w taki sposób aby na siebie nachodziły oraz używały warstw, podobnie jak elementy pozycjonowane przy użyciu CSS.

## Przykład

Przykład poniżej pokazuje trzy kolumnową ścieżkę siatki z utworzonymi nowymi wierszami z ustawioną własnością minimalną na 100 pikseli i wartością maksymalną ustawioną na auto. Elementy zostały ustawione na siatce przy pomocy miejsc opartych na liniach siatki.

```css hidden
* {box-sizing: border-box;}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233,171,88);
  border-radius: 5px;
  background-color: rgba(233,171,88,.5);
  padding: 1em;
  color: #d9480f;
}
```

### HTML

```html
<div class="wrapper">
  <div class="one">Jeden</div>
  <div class="two">Dwa</div>
  <div class="three">Trzy</div>
  <div class="four">Cztery</div>
  <div class="five">Pięć</div>
  <div class="six">Sześć</div>
</div>
```

### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 2 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
```

{{ EmbedLiveSample('example', '500', '440') }}

## Reference

### Własności CSS

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("grid")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-area")}}
- {{cssxref("grid-row-gap")}}
- {{cssxref("grid-column-gap")}}
- {{cssxref("grid-gap")}}

### CSS functions

- {{cssxref("repeat", "repeat()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("fit-content", "fit-content()")}}

### CSS data types

- {{cssxref("&lt;flex&gt;")}}

### Glossary entries

- [Grid](/pl/docs/Glossary/Grid)
- [Grid Lines](/pl/docs/Glossary/Grid_Lines)
- [Grid Tracks](/pl/docs/Glossary/Grid_Tracks)
- [Grid Cell](/pl/docs/Glossary/Grid_Cell)
- [Grid Area](/pl/docs/Glossary/Grid_Areas)
- [Gutters](/pl/docs/Glossary/Gutters)
- [Grid Axis](/pl/docs/Glossary/Grid_Axis)
- [Grid row](/pl/docs/Glossary/Grid_Rows)
- [Grid column](/pl/docs/Glossary/Grid_Column)

## Poradniki

- [Basic concepts of Grid Layout](/pl/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Relationship of Grid Layout to other layout methods](/pl/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Layout using line-based placement](/pl/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Grid template areas](/pl/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Layout using named grid lines](/pl/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Auto-placement in CSS Grid Layout](/pl/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Box alignment in CSS Grid Layout](/pl/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [CSS Grid, Logical Values and Writing Modes](/pl/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- [CSS Grid Layout and accessibility](/pl/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid and progressive enhancement](/pl/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Realising common layouts using CSS Grid](/pl/docs/Web/CSS/CSS_Grid_Layout/Realising_common_layouts_using_CSS_Grid_)

## Zewnętrzne źródła

- [Examples from Jen Simmons](http://labs.jensimmons.com/)
- [Grid by Example - a collection of usage examples and video tutorials](http://gridbyexample.com/)
- [Codrops Grid Reference](https://tympanus.net/codrops/css_reference/grid/)
- [Firefox DevTools CSS Grid Inspector](/pl/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)
- [CSS Grid Playground](https://mozilladevelopers.github.io/playground/)

## Specyfikacja

| Specyfikacja                         | Status                           | Komentarz           |
| ------------------------------------ | -------------------------------- | ------------------- |
| {{ SpecName('CSS3 Grid') }} | {{ Spec2('CSS3 Grid') }} | Initial definition. |

1.  [**CSS**](/pl/docs/Web/CSS)
2.  [**CSS Reference**](/pl/docs/Web/CSS/Reference)
3.  [CSS Grid Layout](/pl/docs/Web/CSS/CSS_Grid_Layout)
4.  **Guides**

    1.  [Basics concepts of grid layout](/pl/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
    2.  [Relationship to other layout methods](/pl/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
    3.  [Line-based placement](/pl/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
    4.  [Grid template areas](/pl/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
    5.  [Layout using named grid lines](/pl/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
    6.  [Auto-placement in grid layout](/pl/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
    7.  [Box alignment in grid layout](/pl/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
    8.  [Grids, logical values and writing modes](/pl/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
    9.  [CSS Grid Layout and Accessibility](/pl/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
    10. [CSS Grid Layout and Progressive Enhancement](/pl/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    11. [Realizing common layouts using grids](/pl/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5.  **Properties**

    1.  [grid](/pl/docs/Web/CSS/grid)
    2.  [grid-area](/pl/docs/Web/CSS/grid-area)
    3.  [grid-auto-columns](/pl/docs/Web/CSS/grid-auto-columns)
    4.  [grid-auto-flow](/pl/docs/Web/CSS/grid-auto-flow)
    5.  [grid-auto-rows](/pl/docs/Web/CSS/grid-auto-rows)
    6.  [grid-column](/pl/docs/Web/CSS/grid-column)
    7.  [grid-column-end](/pl/docs/Web/CSS/grid-column-end)
    8.  [grid-column-gap](/pl/docs/Web/CSS/grid-column-gap)
    9.  [grid-column-start](/pl/docs/Web/CSS/grid-column-start)
    10. [grid-gap](/pl/docs/Web/CSS/grid-gap)
    11. [grid-row](/pl/docs/Web/CSS/grid-row)
    12. [grid-row-end](/pl/docs/Web/CSS/grid-row-end)
    13. [grid-row-gap](/pl/docs/Web/CSS/grid-row-gap)
    14. [grid-row-start](/pl/docs/Web/CSS/grid-row-start)
    15. [grid-template](/pl/docs/Web/CSS/grid-template)
    16. [grid-template-areas](/pl/docs/Web/CSS/grid-template-areas)
    17. [grid-template-columns](/pl/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/pl/docs/Web/CSS/grid-template-rows)

6.  **Glossary**

    1.  [Grid](/pl/docs/Glossary/Grid)
    2.  [Grid lines](/pl/docs/Glossary/Grid_lines)
    3.  [Grid tracks](/pl/docs/Glossary/Grid_tracks)
    4.  [Grid cell](/pl/docs/Glossary/Grid_cell)
    5.  [Grid areas](/pl/docs/Glossary/Grid_areas)
    6.  [Gutters](/pl/docs/Glossary/Gutters)
    7.  [Grid Axis](/pl/docs/Glossary/Grid_Axis)
    8.  [Grid row](/pl/docs/Glossary/Grid_rows)
    9.  [Grid column](/pl/docs/Glossary/Grid_column)
