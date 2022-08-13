---
title: flex-flow
slug: Web/CSS/flex-flow
tags:
  - CSS
  - CSS Eigenschaften
  - CSS Flexible Boxen
  - Referenz
translation_of: Web/CSS/flex-flow
---
{{ CSSRef("CSS Flexible Boxes") }}

## Summary

Die Kurzschreibweise `flex-flow` fasst die Eigenschaften `{{cssxref("flex-direction")}}` und `{{cssxref("flex-wrap")}}` zusammen.

{{cssinfo}}

Siehe [Using CSS flexible boxes](/de/docs/CSS/Using_CSS_flexible_boxes) für mehr Information.

## Syntax

{{csssyntax}}

### Werte

Siehe [`flex-direction`](/de/docs/CSS/flex-direction "en-US/docs/CSS/flex-direction") und [`flex-wrap`](/de/docs/CSS/flex-wrap "flex-wrap").

## Beispiele

```css
element {
  /* Main-axis is the block direction with reversed main-start and main-end. Flex items are laid out in multiple lines */
  flex-flow: column-reverse wrap;
}
```

## Spezifikation

| Spezifikation                                                                     | Status                               | Anmerkung |
| --------------------------------------------------------------------------------- | ------------------------------------ | --------- |
| [CSS Flexible Box Layout Module](http://dev.w3.org/csswg/css3-flexbox/#flex-flow) | {{ Spec2('CSS3 Flexbox') }} |           |

## Browser Kompatibilität

{{Compat("css.properties.flex-flow")}}

## Siehe auch

- [Using CSS flexible boxes](/de/docs/CSS/Using_CSS_flexible_boxes)
