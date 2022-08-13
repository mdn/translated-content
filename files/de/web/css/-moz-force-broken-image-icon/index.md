---
title: '-moz-force-broken-image-icon'
slug: Web/CSS/-moz-force-broken-image-icon
tags:
  - CSS
  - CSS Referenz
  - NeedsContent
  - Non-standard
translation_of: Web/CSS/-moz-force-broken-image-icon
---
{{Non-standard_header}}{{CSSRef}}

## Übersicht

`-moz-force-broken-image-icon` ist eine erweiterte CSS Eigenschaft. Der Wert `1` erzwingt ein Symbol für nicht ladbare Bilder auch wenn das Bild ein {{HTMLElement("img", "<code>alt</code>", "#attr-alt")}} Attribut hat. Wenn der Wert `0` verwendet wird, wird sich das Bild wie gewohnt verhalten und nur das `alt` Attribut anzeigen.

> **Hinweis:** Sogar wenn der Wert auf `1` gesetzt wird, wird das `alt` Attribut immer noch angezeigt. Mehr Informationen sind weiter unten verfügbar.

{{cssinfo}}

## Syntax

{{csssyntax}}

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Ein Wert von `1` bedeutet, dass ein Symbol für nicht ladbare Bilder angezeigt wird, auch wenn das Bild ein {{HTMLElement("img", "<code>alt</code>", "#attr-alt")}} Attribut hat. Ein Wert von `0` zeigt nur das `alt` Attribut an.

## Beispiele

```css
img {
  -moz-force-broken-image-icon: 1;
  height:100px;
  width:100px;
}
```

```html
<img src='/broken/image/link.png' alt='Broken image link'>
```

{{EmbedLiveSample('Beispiele','125','125','/files/4619/broken%20image%20link.png')}}

> **Hinweis:** Sofern das Bild keine definierte Höhe und Breite hat, wird das Symbol für nicht ladbare Bilder nicht angezeigt, aber das `alt` Attribut wird ebenfalls versteckt, wenn `-moz-force-broken-image-icon` auf `1` gesetzt wird.

## Hinweise

- Diese Eigenschaft funktioniert nur in gecko-basierten Browsern.
- Die Verwendung dieser Eigenschaft wird nicht empfohlen. Stattdessen sollte ein passendes `alt` Attribut verwendet werden.

## Siehe auch

- {{Bug(58646)}}
