---
title: row-gap (grid-row-gap)
slug: Web/CSS/row-gap
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Grid
  - CSS-Eigenschaften
  - Referenz
  - row-gab
translation_of: Web/CSS/row-gap
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-gap`** legt die Größe der Zwischenräume ({{glossary("gutters","gutter")}}) zwischen den Grid-Reihen eines Elements fest.

{{EmbedInteractiveExample("pages/css/row-gap.html")}}

> **Note:** CSS Grid Layout definierte zunächst die Eigenschaft {{CSSxRef('grid-row-gap')}}}. Diese vorangestellte Eigenschaft wird durch `row-gap` ersetzt. Um jedoch Browser zu unterstützen, die `grid-row-gap` und nicht `row-gap` für grid implementiert haben, müssen Sie die Eigenschaft mit Präfix verwenden, wie im obigen interaktiven Beispiel.

## Syntax

```css
/* <length> Längen-Werte */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* <percentage> Prozent-Werte*/
row-gap: 10%;

/* Globale Werte */
row-gap: inherit;
row-gap: initial;
row-gap: unset;
```

### Values

- `<length-percentage>`
  - : Ist die Breite des Abstands (`gutter`) zwischen den Reihen. {{CSSxRef("&lt;percentage&gt;")}} Werte sind relativ zur Dimension des Elements.

### Formal syntax

{{CSSSyntax}}

## Examples

### Flex layout

{{SeeCompatTable}}

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  row-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### Result

{{EmbedLiveSample('Flex_layout', "auto", "120px")}}

### Grid layout

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Result

{{EmbedLiveSample('Grid_layout', 'auto', 120)}}

## Specifications

| Spezifikation                                                                            | Status                                   | Bemerkung      |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------- |
| {{SpecName("CSS3 Box Alignment", "#propdef-row-gap", "row-gap")}} | {{Spec2("CSS3 Box Alignment")}} | Erstdefinition |

{{CSSInfo}}

## Browser-Kompatibilität

### Support in Flex layout

{{Compat("css.properties.row-gap.flex_context")}}

### Support in Grid layout

{{Compat("css.properties.row-gap.grid_context")}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{CSSxRef("column-gap")}}, {{CSSxRef("gap")}}
- Grid Layout Anleitung: _[Basic concepts of grid layout - Gutters](/de/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Gutters)_
