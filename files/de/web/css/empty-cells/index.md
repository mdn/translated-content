---
title: empty-cells
slug: Web/CSS/empty-cells
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Tabellen
  - Layout
  - NeedsLiveSample
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/empty-cells
---
{{CSSRef}}

## Übersicht

Die `empty-cells` [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Hintergründe und Rahmen leerer Tabellenzellen angezeigt werden sollen.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
empty-cells: show;
empty-cells: hide;

/* Globale Werte */
empty-cells: inherit;
empty-cells: initial;
empty-cells: unset;
```

### Werte

- `show`
  - : Ist ein Schlüsselwort, das angibt, dass Ränder und Hintergründe wie in normalen Zellen dargestellt werden sollen.
- `hide`
  - : Ist ein Schlüsselwort, das angibt, dass keine Ränder oder Hintergründe dargestellt werden sollen.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
.contentbox td {
  empty-cells: show;
}
```

## Spezifikationen

| Spezifikation                                                                        | Status                   | Kommentar                |
| ------------------------------------------------------------------------------------ | ------------------------ | ------------------------ |
| {{SpecName('CSS2.1', 'tables.html#empty-cells', 'empty-cells')}} | {{Spec2('CSS2.1')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.empty-cells")}}
