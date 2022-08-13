---
title: column-gap
slug: Web/CSS/column-gap
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Mehrspalten
  - NeedsMobileBrowserCompatibility
  - Referenz
translation_of: Web/CSS/column-gap
---
{{CSSRef}}

## Übersicht

Die CSS Eigenschaft `column-gap` bestimmt die Größe der Lücke zwischen den Spalten für Elemente, die als mehrspaltige Elemente dargestellt werden.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwert */
column-gap: normal;

/* <length> Werte */
column-gap: 3px;
column-gap: 2.5em;

/* Globale Werte */
column-gap: inherit;
column-gap: initial;
column-gap: unset;
```

### Werte

- `normal`
  - : Übernimmt den vom Browser vordefinierten Wert. Laut Spezifikation sollte dieser Wert `1em` entsprechen.
- `<length>`
  - : Ein {{cssxref("&lt;length&gt;")}} Wert, welcher den Abstand der Lücke festlegt. Der Wert darf nicht negativ sein, `0` ist jedoch zulässig.

### Formale Syntax

{{csssyntax}}

## Beispiel

```css
.content-box {
  border: 10px solid #000000;
  column-count: 3;
  column-gap: 20px;
}
```

## Spezifikationen

| Spezifikation                                                                | Status                               | Kommentar                |
| ---------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS3 Multicol', '#column-gap', 'column-gap')}} | {{Spec2('CSS3 Multicol')}} | Ursprüngliche Definition |

## Browser Kompatibilität

### Support im Flex Layout

{{Compat("css.properties.column-gap.flex_context")}}

### Support im Grid Layout

{{Compat("css.properties.column-gap.grid_context")}}

### Support im Multi-column Layout

{{Compat("css.properties.column-gap.multicol_context")}}

## Siehe auch

- [CSS Referenz](/de/docs/Web/CSS/CSS_Referenz)
