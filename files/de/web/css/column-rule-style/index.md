---
title: column-rule-style
slug: Web/CSS/column-rule-style
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Mehrspaltiges Layout
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/column-rule-style
---
{{ CSSRef("CSS Multi-columns") }}

## Übersicht

Die `column-rule-style` CSS Eigenschaft definiert den Stil der Linie, die zwischen den Spalten in mehrspaltigen Layouts gezeichnet wird.

{{cssinfo}}

## Syntax

{{csssyntax("/de/docs/Web/CSS/Wertdefinitionssyntax")}}

    column-rule-style: none
    column-rule-style: hidden
    column-rule-style: dotted
    column-rule-style: dashed
    column-rule-style: solid
    column-rule-style: double
    column-rule-style: groove
    column-rule-style: ridge
    column-rule-style: inset
    column-rule-style: outset

    column-rule-style: inherit

### Werte

- \<br-style>
  - : Ist ein Schlüsselwort, das durch {{ cssxref("border-style") }} definiert wird und der den Stil der Linie angibt, die die Spalten trennt. Die Gestaltung muss wie im zusammenfallenden Border Model interpretiert werden.

## Beispiel

```css
#header {-moz-column-rule-style: inset;}
```

## Spezifikation

| Spezifikation                                                                    | Status                               | Kommentar |
| -------------------------------------------------------------------------------- | ------------------------------------ | --------- |
| {{ SpecName('CSS3 Multicol', '#crs', 'column-rule-style') }} | {{ Spec2('CSS3 Multicol') }} |           |

## Browser Kompatibilität

{{Compat("css.properties.column-rule-style")}}
