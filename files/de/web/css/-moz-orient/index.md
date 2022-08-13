---
title: '-moz-orient'
slug: Web/CSS/-moz-orient
tags:
  - CSS
  - CSS Referenz
  - Non-standard
translation_of: Web/CSS/-moz-orient
---
{{CSSRef}}{{Non-standard_header}}

Die `-moz-orient` CSS Eigenschaft bestimmt die Orientierung des Elements, auf das sie angewendet wird.

{{cssinfo}}

## Syntax

{{csssyntax}}

### Werte

- `inline`
  - : Das Element wird in der gleichen Richtung wie die Textachse dargestellt: horizontal für horizontale Schreibmodi, vertikal für vertikale Schreibmodi.
- `block`
  - : Das Element wird in der gleichen Richtung wie die Textachse dargestellt: horizontal für horizontale Schreibmodi, vertikal für vertikale Schreibmodi.
- `horizontal`
  - : Das Element wird horizontal dargestellt.
- `vertical`
  - : Das Element wird vertikal dargestellt.

## Beispiele

### HTML

```html
<p>
  The following progress meter
  is horizontal (the default):
</p>
<progress max="100" value="75"></progress>

<p>
 The following progress meter
 is vertical:
</p>
<progress class="vert" max="100" value="75"></progress>
```

### CSS

```css
.vert {
  -moz-orient: vertical;
  width: 16px;
  height: 150px;
}
```

### Beispiele

{{EmbedLiveSample("Beispiele","200","360")}}

## Spezifikationen

Obwohl für das W3C mit anfänglichem positivem Feedback [eingereicht](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html), ist diese Eigenschaft noch nicht Teil einer Spezifikation; aktuell ist sie daher eine Mozilla spezifische Erweiterung (d. h. `-moz-orient`).

## Browser Kompatibilität

{{Compat("css.properties.-moz-orient")}}

## Siehe auch

- {{cssxref("box-orient")}}
