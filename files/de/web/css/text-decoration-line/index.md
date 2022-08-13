---
title: text-decoration-line
slug: Web/CSS/text-decoration-line
tags:
  - CSS
  - CSS Eigenschaft
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/text-decoration-line
---
{{ CSSRef() }}

## Übersicht

Die `text-decoration-line` CSS Eigenschaft repräsentiert die Art der Liniendekoration eines Elements.

Unter- und Überstreichungsdekorationen werden hinter dem Text dargestellt, während Durchstreichungen über dem Text dargestellt werden.

{{cssinfo}}

## Syntax

{{csssyntax("/de/docs/CSS/Wertdefinitionssyntax")}}

    text-decoration-line: none /* This is the only keyword that cannot be mixed with other */

    text-decoration-line: underline
    text-decoration-line: overline
    text-decoration-line: line-through
    text-decoration-line: underline overline
    text-decoration-line: overline underline line-through

    text-decoration-line: inherit

### Werte

Akzeptiert entweder `none` als Wert oder einen oder mehrere durch Leerzeichen getrennte Werte:

- `none`
  - : Erzeugt keine Textdekoration.
- `underline`
  - : Jede Zeile des Texts wird unterstrichen.
- `overline`
  - : Über jeder Zeile des Texts wird eine Linie dargestellt.
- `line-through`
  - : Jede Zeile des Texts wird durchgestrichen.
- `blink {{deprecated_inline}}`
  - : Der Text blinkt (wechselt zwischen sichtbar und unsichtbar). Dem Standard folgende User Agents können das Blinken ignorieren. Dieser Wert ist **missbilligt** und es sollten stattdessen [Animationen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen) verwendet werden.
- `-moz-anchor-decoration`
  - : [Mozilla CSS Erweiterung](/de/docs/Web/CSS/CSS_Referenz/Mozilla_CSS_Erweiterungen "CSS_Reference/Mozilla_Extensions"), nicht geeignet für Webinhalte.

## Beispiel

### HTML

```html
<p>Hier steht Text mit einer roten Unterkringelung!</p>
```

### CSS

```css
p {
  -moz-text-decoration-line: underline;
  -moz-text-decoration-style: wavy;
  -moz-text-decoration-color: red;
}
```

{{ EmbedLiveSample('Beispiel') }}

## Spezifikation

| Spezifikation                                                                                                        | Status                                           | Comment |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------- |
| {{ SpecName('CSS3 Text-decoration', '#text-decoration-line', 'text-decoration-line') }} | {{ Spec2('CSS3 Text-decoration') }} |         |

## Browser Kompatibilität

{{Compat("css.properties.text-decoration-line")}}
