---
title: column-rule-color
slug: Web/CSS/column-rule-color
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Mehrspaltiges Layout
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/column-rule-color
---
{{CSSRef("CSS Multi-columns")}}

## Übersicht

Die `column-rule-color` CSS Eigenschaft definiert die Farbe der Linie, die zwischen den Spalten in mehrspaltigen Layouts gezeichnet wird.

{{cssinfo}}

## Syntax

{{csssyntax("/de/docs/Web/CSS/Wertdefinitionssyntax")}}

    column-rule-color: red
    column-rule-color: rgb(192, 56, 78)
    column-rule-color: transparent
    column-rule-color: hsla(0, 100%, 50%, 0.6)

    column-rule-color: inherit

### Werte

- \<color>
  - : Ist ein {{cssxref("&lt;color&gt;")}} Wert, der die Farbe der Linie angibt, die die Spalten trennt.

## Beispiel

```css
#header { column-rule-color: blue; }
```

## Spezifikation

| Spezifikation                                                                | Status                               | Kommentar |
| ---------------------------------------------------------------------------- | ------------------------------------ | --------- |
| {{SpecName('CSS3 Multicol', '#crc', 'column-rule-color')}} | {{Spec2('CSS3 Multicol')}} |           |

## Browser Kompatibilität

{{Compat("css.properties.column-rule-color")}}
