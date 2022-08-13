---
title: ':-moz-drag-over'
slug: Web/CSS/:-moz-drag-over
tags:
  - CSS
  - CSS Referenz
  - NeedsCompatTable
  - Non-standard
translation_of: Web/CSS/:-moz-drag-over
---
{{Non-standard_header}}{{CSSRef}}

## Übersicht

Die `:-moz-drag-over` [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird dazu verwendet, um ein Element zu stylen, wenn das drag-over Ereignis für es ausgelöst wird.

## Syntax

    element:-moz-drag-over { Stileigenschaften }

## Beispiel

### CSS

```css
td:-moz-drag-over {
  color: red;
}
```

### HTML

```html
<table border="1">
  <tr>
    <td width="100px" height="100px">Hierüber ziehen</td>
  </tr>
</table>
```

### Ergebnis

{{EmbedLiveSample("Example")}}
