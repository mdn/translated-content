---
title: '-webkit-overflow-scrolling'
slug: Web/CSS/-webkit-overflow-scrolling
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Referenz
  - NeedsBrowserCompatibility
  - NeedsLiveSample
  - NeedsMobileBrowserCompatibility
  - Non-standard
translation_of: Web/CSS/-webkit-overflow-scrolling
---
{{CSSRef}}{{Non-standard_header}}

## Übersicht

Die `-webkit-overflow-scrolling` CSS Eigenschaft bestimmt, ob Touchgeräte impulsbasiertes Scrolling für ein Element verwenden oder nicht.

## Werte

- `auto`
  - : "Reguläres" Scrolling wird verwendet, wobei der Inhalt sofort aufhört zu scrollen, wenn der Finger vom Touchscreen entfernt wird.
- `touch`
  - : Impulsbasiertes Scrolling wird verwendet, wobei der Inhalt für einen Moment weiterscrollt nachdem die Scrollgeste beendet und der Finger vom Touchscreen entfernt wurde. Die Geschwindigkeit und Dauer des Weiterscrollens ist proportional zur Stärke der Scrollgeste. Erzeugt auch einen neuen Stackingkontext.

## Beispiele

```css
-webkit-overflow-scrolling: touch; /* lets it scroll lazy */

-webkit-overflow-scrolling: auto; /* stop scrolling immediately */
```

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Tricks Artikel mit Demo](http://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/)
- [`-webkit-overflow-scrolling` Eintrag in Safari CSS-Referenz](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/css/property/-webkit-overflow-scrolling)
