---
title: flex-grow
slug: Web/CSS/flex-grow
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Flexible Boxes
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/flex-grow
---
{{ CSSRef("CSS Flexible Boxes") }}

Die `flex-grow` [CSS](/de/docs/Web/CSS) Eigenschaft gibt den Wachstumsfaktor eines flexiblen Elements in dem zur Verfügung stehenden Raum eines Flex Containers an. Wenn alle Schwesternelemente den gleichen flex-grow Wert haben, teilen sich diese Elemente den gleichen Platzanteil im Container auf. Andernfalls entscheidet der Platzanteil durch das Verhältnis, das sich aus den verschiedenen flex-grow Werten ergibt.

Verwendet wird flex-grow zusammen mit den anderen flex Eigenschaften {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}. Im Regelfall wird durch die {{cssxref("flex")}} Kurzschrift sichergestellt, dass alle Werte gesetzt werden.

{{cssinfo}}

Siehe die [Verwendung von CSS Flexible Boxes](/de/docs/Web/Guide/CSS/Flexible_boxes) für weitere Eigenschaften und Informationen.

{{EmbedInteractiveExample("pages/css/flex-grow.html")}}

## Syntax

{{csssyntax}}

    flex-grow: 3

    flex-grow: inherit

### Werte

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig.

## Beispiele

```css
element {
  flex-grow: 3;
}
```

## Spezifikationen

| Spezifikation                                                                     | Status                               | Kommentar                |
| --------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| [CSS Flexible Box Layout Module](http://dev.w3.org/csswg/css3-flexbox/#flex-grow) | {{ Spec2('CSS3 Flexbox') }} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.flex-grow")}}

\[1] Firefox unterstützt bis Version 28 nur einzeiliges Flexbox Layout. Um Flexbox Unterstützung für Firefox 18 und 19 zu aktivieren, muss die Einstellung `layout.css.flexbox.enabled` in `about:config` auf `true` gesetzt werden.

## Siehe auch

- [Verwendung von CSS Flexible Boxes](/de/docs/Web/Guide/CSS/Flexible_boxes "CSS/Using_CSS_flexible_boxes")
