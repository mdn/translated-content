---
title: text-align-last
slug: Web/CSS/text-align-last
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Text
  - Experimentell
  - Referenz
translation_of: Web/CSS/text-align-last
---
{{CSSRef}}

Die CSS Eigenschaft** `text-align-last`** beschreibt, wie die letzte Zeile eines Blocks, oder die letzte Zeile unmittelbar vor einem erzwungenem Umbruch, ausgerichtet ist

{{EmbedInteractiveExample("pages/css/text-align-last.html")}}

## Syntax

```css
/* Keyword values */
text-align-last: auto;
text-align-last: start;
text-align-last: end;
text-align-last: left;
text-align-last: right;
text-align-last: center;
text-align-last: justify;

/* Global values */
text-align-last: inherit;
text-align-last: initial;
text-align-last: unset;
```

### Values

- `auto`
  - : Die Ausrichtung der Zeile ist gleich dem Wert von {{cssxref("text-align")}}, außer wenn {{cssxref("text-align")}} den Wert `justify` hat; in diesem Fall entspricht der Wert von `text-align-last` der Einstellung `start`.
- `start`
  - : Das Gleiche wie `left`, wenn die Leserichtung links-nach-rechts ist, und `right`, wenn die Leserichtung rechts-nach-links ist.
- `end`
  - : Das Gleiche wie `right`, wenn die Leserichtung links-nach-rechts ist, und `left`, wenn die Leserichtung rechts-nach-links ist.
- `left`
  - : Die Inhalte werden an der linken Kante des inline-Elements ausgerichtet.
- `right`
  - : Die Inhalte werden an der rechten Kante des inline-Elements ausgerichtet.
- `center`
  - : Die Inhalte werden innerhalb des inline-Elements zentriert.
- `justify`
  - : Der Text wird im Blocksatz angezeigt, d.h. der Text schließt sowohl links als auch rechts mit der Kante des inline-Elements ab.

### Formal syntax

{{csssyntax}}

## Beispiel

```html hidden
<p>Integer elementum massa at nulla placerat varius. Suspendisse in libero risus, in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque. Nullam est eros, suscipit sed dictum quis, accumsan a ligula.</p>
```

```css
p {
  font-size: 1.4em;
  text-align: justify;
  text-align-last: center;
}
```

{{EmbedLiveSample('Example','560')}}

## Spezifikationen

| Specification                                                                                    | Status                       | Comment            |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------ |
| {{SpecName('CSS3 Text', '#text-align-last-property', 'text-align-last')}} | {{Spec2('CSS3 Text')}} | Initial definition |

{{cssinfo}}

## Browserkompatibilität

{{Compat("css.properties.text-align-last")}}

## Siehe auch

- {{cssxref("text-align")}}
