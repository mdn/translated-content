---
title: CSS Grid Layout
slug: Web/CSS/CSS_Grid_Layout
tags:
  - CSS
  - Grid Layout
  - Grids
  - Layout
  - NeedsTranslation
  - Raster
  - Referenz
  - Überblick
translation_of: Web/CSS/CSS_Grid_Layout
---
**CSS Grid Layout** zeichnet sich dadurch aus, dass eine Seite in Hauptbereiche unterteilt wird oder die Beziehung zwischen Teilen eines Steuerelements, das aus HTML-Grundelementen besteht, in Bezug auf Größe, Position und Layer definiert wird.

Grid Layout ermöglicht es, Elemente in Spalten und Reihen auszurichten, ähnlich wie in Tabellen. Jedoch gibt es viel mehr Gestaltungsmöglichkeiten und diese sind einfacher umzusetzen mit CSS Grid als es mit Tabellen der Fall war. Beispielsweise kann das Kindelement eines Grid-Container-Elements so positioniert werden, dass es andere überlappt und überlagert, ähnlich wie bei mit CSS positionierten Elementen.

## Einfaches Beispiel

Das folgende Beispiel zeigt ein dreispaltiges Raster mit neuen Zeilen, die mit mindestens 100 Pixeln und einem Maximum von auto erstellt wurden. Die Elemente wurden mithilfe von zeilenbasierten Platzierungen im Raster positioniert.

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
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
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

## Referenz

### CSS Eigenschaften

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

### CSS Funktionen

- {{cssxref("repeat", "repeat()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("fit-content", "fit-content()")}}

### CSS Datentypen

- {{cssxref("&lt;flex&gt;")}}

### Glossar Einträge

- [Grid](/de/docs/Glossary/Grid)
- [Grid Lines](/de/docs/Glossary/Grid_Lines)
- [Grid Tracks](/de/docs/Glossary/Grid_Tracks)
- [Grid Cell](/de/docs/Glossary/Grid_Cell)
- [Grid Area](/de/docs/Glossary/Grid_Areas)
- [Gutters](/de/docs/Glossary/Gutters)
- [Grid Axis](/de/docs/Glossary/Grid_Axis)
- [Grid row](/de/docs/Glossary/Grid_Rows)
- [Grid column](/de/docs/Glossary/Grid_Column)

## Anleitungen

- [Basic concepts of Grid Layout](/de/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Relationship of Grid Layout to other layout methods](/de/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Layout using line-based placement](/de/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Grid template areas](/de/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Layout using named grid lines](/de/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Auto-placement in CSS Grid Layout](/de/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Box alignment in CSS Grid Layout](/de/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [CSS Grid, Logical Values and Writing Modes](/de/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- [CSS Grid Layout and accessibility](/de/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid and progressive enhancement](/de/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Realising common layouts using CSS Grid](/de/docs/Web/CSS/CSS_Grid_Layout/Realising_common_layouts_using_CSS_Grid_)

## Externe Quellen

- [Beispiele von Jen Simmons](http://labs.jensimmons.com/)
- [Grid by Example - eine Sammlung von Anwendungsbeispielen und Video-Tutorials](http://gridbyexample.com/)
- [Codrops Grid Referenz](https://tympanus.net/codrops/css_reference/grid/)
- [Firefox DevTools CSS Grid Inspector](/de/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)
- [CSS Grid Playground](https://mozilladevelopers.github.io/playground/)

## Spezifikationen

| Spezifikation                        | Status                           | Bemerkung           |
| ------------------------------------ | -------------------------------- | ------------------- |
| {{ SpecName('CSS3 Grid') }} | {{ Spec2('CSS3 Grid') }} | Initial definition. |

1.  [**CSS**](/de/docs/Web/CSS)
2.  [**CSS Reference**](/de/docs/Web/CSS/Reference)
3.  [CSS Grid Layout](/de/docs/Web/CSS/CSS_Grid_Layout)
4.  **Guides**

    1.  [Basics concepts of grid layout](/de/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
    2.  [Relationship to other layout methods](/de/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
    3.  [Line-based placement](/de/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
    4.  [Grid template areas](/de/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
    5.  [Layout using named grid lines](/de/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
    6.  [Auto-placement in grid layout](/de/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
    7.  [Box alignment in grid layout](/de/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
    8.  [Grids, logical values and writing modes](/de/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
    9.  [CSS Grid Layout and Accessibility](/de/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
    10. [CSS Grid Layout and Progressive Enhancement](/de/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    11. [Realizing common layouts using grids](/de/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5.  **Properties**

    1.  [grid](/de/docs/Web/CSS/grid)
    2.  [grid-area](/de/docs/Web/CSS/grid-area)
    3.  [grid-auto-columns](/de/docs/Web/CSS/grid-auto-columns)
    4.  [grid-auto-flow](/de/docs/Web/CSS/grid-auto-flow)
    5.  [grid-auto-rows](/de/docs/Web/CSS/grid-auto-rows)
    6.  [grid-column](/de/docs/Web/CSS/grid-column)
    7.  [grid-column-end](/de/docs/Web/CSS/grid-column-end)
    8.  [grid-column-gap](/de/docs/Web/CSS/grid-column-gap)
    9.  [grid-column-start](/de/docs/Web/CSS/grid-column-start)
    10. [grid-gap](/de/docs/Web/CSS/grid-gap)
    11. [grid-row](/de/docs/Web/CSS/grid-row)
    12. [grid-row-end](/de/docs/Web/CSS/grid-row-end)
    13. [grid-row-gap](/de/docs/Web/CSS/grid-row-gap)
    14. [grid-row-start](/de/docs/Web/CSS/grid-row-start)
    15. [grid-template](/de/docs/Web/CSS/grid-template)
    16. [grid-template-areas](/de/docs/Web/CSS/grid-template-areas)
    17. [grid-template-columns](/de/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/de/docs/Web/CSS/grid-template-rows)

6.  **Glossary**

    1.  [Grid](/de/docs/Glossary/Grid)
    2.  [Grid lines](/de/docs/Glossary/Grid_lines)
    3.  [Grid tracks](/de/docs/Glossary/Grid_tracks)
    4.  [Grid cell](/de/docs/Glossary/Grid_cell)
    5.  [Grid areas](/de/docs/Glossary/Grid_areas)
    6.  [Gutters](/de/docs/Glossary/Gutters)
    7.  [Grid Axis](/de/docs/Glossary/Grid_Axis)
    8.  [Grid row](/de/docs/Glossary/Grid_rows)
    9.  [Grid column](/de/docs/Glossary/Grid_column)
