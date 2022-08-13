---
title: flex-shrink
slug: Web/CSS/flex-shrink
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Flexible Boxes
  - Layout
  - Referenz
translation_of: Web/CSS/flex-shrink
---
{{CSSRef}}

## Übersicht

Die `flex-shrink` [CSS](/de/docs/Web/CSS) Eigenschaft gibt den Schrumpffaktor eines Flexelements an.

{{cssinfo}}

Siehe die [Verwendung von CSS Flexible Boxes](/de/docs/Web/Guide/CSS/Flexible_boxes) für weitere Eigenschaften und Informationen.

## Syntax

    Formale Syntax: {{csssyntax("flex-shrink")}}

    flex-shrink: 2

    flex-shrink: inherit

### Werte

- `<number`>
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig.

## Beispiele

```css
element {
  flex-shrink: 3;
}
```

## Spezifikationen

| Spezifikation                                                                    | Status                               | Kommentar |
| -------------------------------------------------------------------------------- | ------------------------------------ | --------- |
| {{ SpecName('CSS3 Flexbox', '#flex-shrink', 'flex-shrink') }} | {{ Spec2('CSS3 Flexbox') }} |           |

## Browser Kompatibilität

{{Compat("css.properties.flex-shrink")}}

\[1] Firefox unterstützt bis Version 28 nur einzeiliges Flexbox Layout. Um Flexbox Unterstützung für Firefox 18 und 19 zu aktivieren, muss die Einstellung `layout.css.flexbox.enabled` in `about:config` auf `true` gesetzt werden.

## Siehe auch

- [Verwendung von CSS Flexible Boxes](/de/docs/Web/Guide/CSS/Flexible_boxes "CSS/Using_CSS_flexible_boxes")
