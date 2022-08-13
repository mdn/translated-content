---
title: flex-wrap
slug: Web/CSS/flex-wrap
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Flexible Boxes
  - Layout
  - Referenz
translation_of: Web/CSS/flex-wrap
---
{{CSSRef}}

## Übersicht

Die `flex-wrap` [CSS](/de/docs/Web/CSS "CSS") Eigenschaft legt fest, ob die Elemente in einem Flexbox-Container auf einer Linie liegen, oder bei bedarf auf mehrere Zeilen verteilt werden können.

{{cssinfo}}

Siehe die [CSS flexible Boxen verwenden](/de/docs/Web/Guide/CSS/CSS_flexible_Boxen_verwenden "/en/CSS/Using_CSS_flexible_boxes") für mehr Informationen.

## Syntax

    Formale Syntax: {{csssyntax("flex-wrap")}}

<!---->

    flex-wrap: nowrap
    flex-wrap: wrap
    flex-wrap: wrap-reverse

    flex-wrap: inherit

### Werte

Die folgenden Werte können verwendet werden:

- `nowrap`
  - : Die flexiblen Elemente liegen alle in derselben Reihe, auch wenn dazu der Platz fehlt.
- `wrap`
  - : Die flexiblen Elemente können sich wenn nötig innerhalb des Containers in mehrere Zeilen aufteilen (nach unten).
- `wrap-reverse`
  - : Die flexiblen Elemente können sich wenn nötig innerhalb des Containers in mehrere Zeilen aufteilen (nach oben).

## Beispiele

```css
element {
  flex-wrap: nowrap;
}
```

## Spezifikationen

| Spezifikation                                                                | Status                               | Anmerkung |
| ---------------------------------------------------------------------------- | ------------------------------------ | --------- |
| {{ SpecName('CSS3 Flexbox', '#flex-wrap', 'flex-wrap') }} | {{ Spec2('CSS3 Flexbox') }} |           |

## Browser Kompatibilität

{{Compat("css.properties.flex-wrap")}}

## Siehe auch

- [CSS flexible Boxen verwenden](/de/docs/Web/Guide/CSS/CSS_flexible_Boxen_verwenden "/en/CSS/Using_CSS_flexible_boxes")
