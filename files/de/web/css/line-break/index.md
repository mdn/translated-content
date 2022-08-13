---
title: line-break
slug: Web/CSS/line-break
tags:
  - CSS
  - CSS Text
  - NeedsExample
  - Property
  - Referenz
translation_of: Web/CSS/line-break
---
{{CSSRef}}{{SeeCompatTable}}

## Übersicht

Die **`line-break`** [CSS](/de/docs/Web/CSS) Eigenschaft wird dazu verwendet, wie (oder ob) Zeilen umgebrochen werden sollen.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
line-break: auto;
line-break: loose;
line-break: normal;
line-break: strict;

/* Globale Werte */
line-break: inherit;
line-break: initial;
line-break: unset;
```

### Werte

- `auto`
  - : Text wird nach der Standardregel zum Umbrechen von Zeilen umgebrochen.
- `loose`
  - : Text wird umgebrochen, sodass die Zeile kürzer ist, wie bei einer Zeitung.
- `normal`
  - : Text wird nach der allgemeinen Regel zum Umbrechen von Zeilen umgebrochen.
- `strict`
  - : Text wird nach der strikten Regel zum Umbrechen von Zeilen umgebrochen.

### Formale Syntax

{{csssyntax}}

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar                |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------ |
| {{SpecName('CSS3 Text', '#line-break-property', 'line-break')}} | {{Spec2('CSS3 Text')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.line-break")}}
