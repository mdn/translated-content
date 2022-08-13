---
title: text-underline-position
slug: Web/CSS/text-underline-position
tags:
  - CSS
  - CSS Eigenschaft
  - NeedsMobileBrowserCompatibility
  - Referenz
translation_of: Web/CSS/text-underline-position
---
{{CSSRef}}

## Übersicht

Die `text-underline-position` [CSS](/de/docs/Web/CSS) Eigenschaft legt die Position der Linie einer Unterstreichung, die über die {{cssxref("text-decoration")}}-Eigenschaft mit dem Wert `underline` gesetzt wurde, fest.

Diese Eigenschaft wird vererbt und nicht von {{cssxref("text-decoration")}} zurückgesetzt, wodurch sie auch für das gesamte Dokument festgelegt werden kann:

```css
:root { /* nützlich für Dokumente mit vielen chemischen Formeln */
  text-underline-position: under;
}
```

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
text-underline-position: auto;
text-underline-position: under;
text-underline-position: left;
text-underline-position: right;
text-underline-position: under left;
text-underline-position: right under;

/* Globale Werte */
text-underline-position: inherit;
text-underline-position: initial;
text-underline-position: unset;
```

### Werte

- `auto`
  - : Der Browser verwendet einen Algorithmus, um zwischen `under` und der Grundlinie zu unterscheiden.
- `under`
  - : Die Linie wird _unterhalb_ der Grundlinie, wo keine Unterlängen berührt werden, gesetzt. Dies ist nützlich, um zu verhindern, dass chemische oder mathematische Formeln, die oft Tiefstellungen enthalten, schwer lesbar werden.
- `left`
  - : In vertikalen Schreibrichtungen wird die Linie auf der _linken_ Seite der Zeichen platziert. In horizontalen Schreibrichtungen ist dies ein Synonym für `under`.
- `right`
  - : In vertikalen Schreibrichtungen wird die Linie auf der _rechten_ Seite der Zeichen platziert. In horizontalen Schreibrichtungen ist dies ein Synonym für `under`.
- `auto-pos`{{non-standard_inline}}
  - : Dies ist ein Synonym für `auto` und sollte nicht verwendet werden.
- `above`{{non-standard_inline}}
  - : Die Linie wird _über_ dem Text gesetzt. In ostasiatischem Text führt der Wert `auto` zum gleichen Ergebnis.
- `below`{{non-standard_inline}}
  - : Die Linie wird _unter_ dem Text gesetzt. In aus Buchstaben bestehendem Text führt der Wert `auto` zum gleichen Ergebnis.

### Formale Syntax

{{csssyntax}}

## Spezifikationen

| Spezifikation                                                                                                            | Status                                       | Kommentar                |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------------------------ |
| {{SpecName('CSS3 Text-decoration', '#text-underline-position', 'text-underline-position')}} | {{Spec2('CSS3 Text-decoration')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.text-underline-position")}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{cssxref("text-decoration")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("text-decoration-color")}}.
- [Microsoft-Dokumentation der nicht-standardisierten Werte](https://msdn.microsoft.com/en-us/library/ie/ms531176%28v=vs.85%29.aspx) (englisch).
