---
title: '-webkit-mask-origin'
slug: Web/CSS/mask-origin
tags:
  - CSS
  - Referenz
translation_of: Web/CSS/mask-origin
translation_of_original: Web/CSS/-webkit-mask-origin
original_slug: Web/CSS/-webkit-mask-origin
---
{{CSSRef}}{{Non-standard_header}}

Die `-webkit-mask-origin` [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt den Ursprungspunkt des Maskenbildes. Der Wert der {{cssxref("-webkit-mask-position")}} Eigenschaft wird relativ zum Wert dieser Eigenschaft interpretiert. Diese Eigenschaft wird nicht angewendet, wenn `-webkit-mask-attachment` `fixed` ist.

{{cssinfo}}

## Syntax

{{csssyntax}}

## Werte

- padding
  - : Standardwert. Die Position des Maskenbildes ist relativ zum Innenabstand. (Für einzelne Boxen ist `"0 0`" die linke obere Ecke des Randes des Innenabstands, "`100% 100%`" ist die untere rechte Ecke.)
- border
  - : Die Position des Maskenbildes ist relativ zum Rand.
- content
  - : Das Maskenbild ist relativ zum Inhalt.

## Beispiele

```css
.example {
  border: 10px double;
  padding: 10px;
  -webkit-mask-image: url('mask.png');

  /* Das Maskenbild ist innerhalb des Innenabstands. */
  -webkit-mask-origin: content;
}
```

```css
div {
  -webkit-mask-image: url('mask1.png'), url('mask2.png');
  -webkit-mask-origin: padding, content;
}
```

## Browser Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("-webkit-mask")}}, {{cssxref("-webkit-mask-box-image")}}, {{cssxref("-webkit-mask-attachment")}}, {{cssxref("-webkit-mask-image")}},{{cssxref("-webkit-mask-composite")}}, {{cssxref("-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-clip")}}
