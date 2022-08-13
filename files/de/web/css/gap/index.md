---
title: grid-gap
slug: Web/CSS/gap
translation_of: Web/CSS/gap
translation_of_original: Web/CSS/grid-gap
original_slug: Web/CSS/grid-gap
---
**`grid-gap`** ist die [shorthand](/de/docs/Web/CSS/Shorthand_properties) CSS Eigenschaft für {{cssxref("grid-row-gap")}} und {{cssxref("grid-column-gap")}} , welche die Spalten (gutter) zwischen Rasterreihen und Rasterspalten festlegt.

```css
/* Ein <Länge> Wert */
grid-gap: 20px;
grid-gap: 1em;
grid-gap: 3vmin;
grid-gap: 0.5cm;

/* Ein <Prozent> Wert */
grid-gap: 16%;
grid-gap: 100%;

/* Zwei <Länge> Werte */
grid-gap: 20px 10px;
grid-gap: 1em 0.5em;
grid-gap: 3vmin 2vmax;
grid-gap: 0.5cm 2mm;

/* Ein or zwei <Prozent> Werte */
grid-gap: 16% 100%;
grid-gap: 21px 82%;

/* Globale Werte */
grid-gap: inherit;
grid-gap: initial;
grid-gap: unset;
```

{{cssinfo}}

## Syntax

Dieser Eigenschaft wird ein Wert für `<'grid-row-gap'>` zugeordnet, gefolgt von einem optionalen Wert für `<'grid-column-gap'>`. Falls `<'grid-column-gap'>` ausgelassen wird, wird diesem der gleiche Wert zugeordnet wie `<'grid-row-gap'>`.

`<'grid-row-gap'>` und `<'grid-column-gap'>` werden jeweils angegeben als `<Länge>` or als `<Prozent>`.

### Werte

- `<Länge>`
  - : Gibt die Breite der Spalte an, welche die Grid-Linien trennt.
- `<Prozent>`
  - : Ist die prozentuale Breite der Lücke zwischen zwei Rasterlinien im Verhältnis zu der Gesamtgröße des Elements.

### Formale Syntax

{{csssyntax}}

## Beispiel

### HTML Inhalt

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### CSS Inhalt

```css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  grid-gap: 20px 5px;
}

#grid > div {
  background-color: lime;
}
```

{{EmbedLiveSample("Example", "100%", "200px")}}

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar        |
| ---------------------------------------------------------------------------- | ---------------------------- | ---------------- |
| {{SpecName("CSS3 Grid", "#propdef-grid-gap", "grid-gap")}} | {{Spec2("CSS3 Grid")}} | Erste Definition |

## Browserkompatibilität

{{Compat("css.properties.grid-gap")}}

## Siehe auch

- Related CSS properties: {{cssxref("grid-row-gap")}}, {{cssxref("grid-column-gap")}}
- Grid Layout Guide: _[Basic concepts of grid layout - Gutters](/de/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Gutters)_

1. [**CSS**](/de/docs/Web/CSS)
2. [**CSS Reference**](/de/docs/Web/CSS/Reference)
3. [CSS Grid Layout](/de/docs/Web/CSS/CSS_Grid_Layout)
4. **Guides**

    1. [Basics concepts of grid layout](/de/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
    2. [Relationship to other layout methods](/de/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
    3. [Line-based placement](/de/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
    4. [Grid template areas](/de/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
    5. [Layout using named grid lines](/de/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
    6. [Auto-placement in grid layout](/de/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
    7. [Box alignment in grid layout](/de/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
    8. [Grids, logical values and writing modes](/de/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
    9. [CSS Grid Layout and Accessibility](/de/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
    10. [CSS Grid Layout and Progressive Enhancement](/de/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    11. [Realizing common layouts using grids](/de/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5. **Properties**

    1. [grid](/de/docs/Web/CSS/grid)
    2. [grid-area](/de/docs/Web/CSS/grid-area)
    3. [grid-auto-columns](/de/docs/Web/CSS/grid-auto-columns)
    4. [grid-auto-flow](/de/docs/Web/CSS/grid-auto-flow)
    5. [grid-auto-rows](/de/docs/Web/CSS/grid-auto-rows)
    6. [grid-column](/de/docs/Web/CSS/grid-column)
    7. [grid-column-end](/de/docs/Web/CSS/grid-column-end)
    8. [grid-column-gap](/de/docs/Web/CSS/grid-column-gap)
    9. [grid-column-start](/de/docs/Web/CSS/grid-column-start)
    10. [grid-gap](/de/docs/Web/CSS/grid-gap)
    11. [grid-row](/de/docs/Web/CSS/grid-row)
    12. [grid-row-end](/de/docs/Web/CSS/grid-row-end)
    13. [grid-row-gap](/de/docs/Web/CSS/grid-row-gap)
    14. [grid-row-start](/de/docs/Web/CSS/grid-row-start)
    15. [grid-template](/de/docs/Web/CSS/grid-template)
    16. [grid-template-areas](/de/docs/Web/CSS/grid-template-areas)
    17. [grid-template-columns](/de/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/de/docs/Web/CSS/grid-template-rows)

6. **Glossary**

    1. [Grid lines](/de/docs/Glossary/Grid_lines)
    2. [Grid tracks](/de/docs/Glossary/Grid_tracks)
    3. [Grid cell](/de/docs/Glossary/Grid_cell)
    4. [Grid areas](/de/docs/Glossary/Grid_areas)
    5. [Gutters](/de/docs/Glossary/Gutters)
    6. [Grid row](/de/docs/Glossary/Grid_rows)
    7. [Grid column](/de/docs/Glossary/Grid_column)
