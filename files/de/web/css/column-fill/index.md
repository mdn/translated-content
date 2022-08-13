---
title: column-fill
slug: Web/CSS/column-fill
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Mehrspalten
  - NeedsBrowserCompatibility
  - Referenz
translation_of: Web/CSS/column-fill
---
{{CSSRef}}

## Übersicht

Die [CSS](/de/docs/Web/CSS) Eigenschaft `column-fill` bestimmt die Aufteilung von Inhalten auf Spalten. Inhalte können entweder gleichmäßig verteilt werden, damit alle Spalten dieselbe Höhe haben, oder sie nehmen den Raum ein, den der Inhalt benötigt, sofern `auto` verwendet wird.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
column-fill: auto;
column-fill: balance;

/* Globale Werte */
column-fill: inherit;
column-fill: initial;
column-fill: unset;
```

### Werte

- `auto`
  - : Die Spalten werden fortlaufend gefüllt.
- `balance`
  - : Der Inhalt wird gleichmäßig aufgeteilt.

### {{csssyntax}}

## Beispiel

```css
.content-box {
  column-count: 4;
  column-rule: 1px solid black;
  column-fill: balance;
  height: 200px;
}
```

## Spezifikationen

| Spezifikation                                                                    | Status                               | Kommentar                |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS3 Multicol', '#column-fill', 'column-fill')}} | {{Spec2('CSS3 Multicol')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.column-fill")}}
