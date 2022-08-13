---
title: '-moz-user-modify'
slug: Web/CSS/user-modify
tags:
  - CSS
  - CSS Referenz
  - NeedsMobileBrowserCompatibility
  - Non-standard
translation_of: Web/CSS/user-modify
original_slug: Web/CSS/-moz-user-modify
---
{{Non-standard_header}}{{CSSRef}}

## Übersicht

Die `-moz-user-modify` Eigenschaft bestimmt, ob der Inhalt eines Elementes vom Benutzer bearbeitet werden kann oder nicht. Diese Eigenschaft ist ähnlich zum {{htmlattrxref("contenteditable")}} Attribut. Eine ähnliche Eigenschaft `user-focus` wurde in [frühen Entwürfen eines Vorläufers der CSS3 UI Spezifikation](http://www.w3.org/TR/2000/WD-css3-userint-20000216) vorgeschlagen, jedoch von der Arbeitsgruppe verworfen.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
-moz-user-modify: read-only;
-moz-user-modify: read-write;
-moz-user-modify: write-only;

/* Globale Werte */
-moz-user-modify: inherit;
-moz-user-modify: initial;
-moz-user-modify: unset;
```

### Werte

- read-only
  - : Standardwert. Inhalte sind nur lesbar.
- read-write
  - : Der Benutzer kann Inhalte lesen und schreiben.
- write-only
  - : Der Benutzer kann Inhalte bearbeiten, jedoch nicht lesen.

### Formale Syntax

{{csssyntax}}

## Beispiel

### CSS

```css
.readwrite {
  -moz-user-modify: read-write;
  -webkit-user-modify: read-write;
}
```

### HTML

```html
<div class="readwrite">Der Benutzer kann diesen Text ändern.</div>
```

### Ergebnis

{{EmbedLiveSample("Beispiel", 300, 30)}}

## Spezifikationen

`user-modify` in [einem frühen Entwurf der CSS 3 User Interface Spezifikation](http://www.w3.org/TR/2000/WD-css3-userint-20000216#user-modify) (Working Draft vom Februar 2000, jetzt überholt durch _CSS 3 Basic User Interface_).

## Browser Kompatibilität

{{Compat}}

\[1] Auch unterstützt: `-webkit-user-modify: read-write-plaintext-only` (Richtext geht verloren).
Diese Eigenschaft wird in Safari 2.0 `-khtml-user-modify` genannt.

## Siehe auch

- {{cssxref("-moz-user-focus")}}
- {{cssxref("-moz-user-input")}}
- {{cssxref("-moz-user-select")}}
