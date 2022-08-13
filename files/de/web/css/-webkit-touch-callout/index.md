---
title: '-webkit-touch-callout'
slug: Web/CSS/-webkit-touch-callout
tags:
  - CSS
  - CSS Eigenschaft
  - Layout
  - NeedsBrowserCompatibility
  - NeedsLiveSample
  - Referenz
translation_of: Web/CSS/-webkit-touch-callout
---
{{CSSRef}}{{Non-standard_header}}

## Übersicht

Die `-webkit-touch-callout` [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Anzeige der Standard-Textbox, die angezeigt wird, wenn das Touchziel berührt und gehalten wird.

Wenn das Ziel in iPhone OS berührt und gehalten wird, zeigt Safari eine Textbox-Information über den Link an. Diese Eigenschaft erlaubt es, dieses Verhalten zu deaktivieren.

## Syntax

```css
/* Schlüsselwortwerte */
-webkit-touch-callout: default;
-webkit-touch-callout: none;

/* Globale Werte */
-webkit-touch-callout: initial;
-webkit-touch-callout: inherit;
-webkit-touch-callout: unset;
```

### Werte

- `default`
  - : Die Standard-Textbox wird angezeigt.
- `none`
  - : Die Textbox ist deaktiviert.

### Formale Syntax

{{csssyntax}}

## Beispiel

```css
.example {
  -webkit-touch-callout: none;
}
```

## Spezifikationen

Nicht Teil einer Spezifikation.

Apple hat eine [Beschreibung in der Safari CSS Referenz](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout).

## Browser Kompatibilität

{{Compat}}

\[1] Die `-webkit-touch-callout` Eigenschaft wurde [in iOS 2.0 implementiert](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout) und später zu WebKit hinzugefügt ({{webkitbug(121507)}}).
