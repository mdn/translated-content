---
title: '-webkit-print-color-adjust'
slug: Web/CSS/print-color-adjust
tags:
  - CSS
  - CSS Eigenschaft
  - Layout
  - NeedsExample
  - Non-standard
  - Web
translation_of: Web/CSS/-webkit-print-color-adjust
original_slug: Web/CSS/-webkit-print-color-adjust
---
{{CSSRef}}{{Non-standard_header}}

Die `-webkit-print-color-adjust` Eigenschaft ist eine nicht standardisierte CSS Erweiterung, die dazu verwendet werden kann, um das Drucken von Hintergrundfarben und -bildern in Browsern zu erzwingen, die auf der WebKit Engine basieren.

## Syntax

    -webkit-print-color-adjust: economy | exact

### Werte

- `economy`
  - : Normales Verhalten. Hintergrundfarben und -bilder werden nur gedruckt, falls der Benutzer dies explizit in den Druckeinstellungen seines Browsers erlaubt.
- `exact`
  - : Hintergrundfarben und -bilder des Elements, auf den die Regel zutrifft, werden immer gedruckt. Die Druckeinstellungen des Benutzers werden überschrieben.

## Vererbung

Diese Eigenschaft wird [vererbt](/de/docs/Web/Guide/CSS/Getting_started/Kaskadierung_und_vererbung).

## Browser Kompatibilität

{{Compat}}

\[1] Chrome druckt keine Hintergründe des {{HTMLElement("body")}} Elements. Falls diese Eigenschaft für das `<body>` Element auf `exact` gesetzt ist, wird sie nur auf dessen Unterknoten angewendet.

Wenn Hintergrundbilder zugeschnitten sind (zum Beispiel wenn Sprites als Hintergrundbilder verwendet werden), werden sie wegen[ Chromium Bug 131054](http://code.google.com/p/chromium/issues/detail?id=131054) verzerrt dargestellt, wenn sie im Chrome Browser mit `-webkit-print-color-adjust: exact` gedruckt werden. Einfarbige Hintergründe und Hintergrundbilder, die nicht zugeschnitten sind (d. h. sie haben eine kleinere Breite und Höhe als das Element, auf das sie angewendet werden), werden korrekt gedruckt.

\[2] Safari druckt keine Hintergründe des {{HTMLElement("body")}} Elements. Falls diese Eigenschaft für das `<body>` Element auf `exact` gesetzt ist, wird sie nur auf dessen Unterknoten angewendet.

## Siehe auch

- WebKit [Bug 64583](https://bugs.webkit.org/show_bug.cgi?id=64583): "WIP: Add CSS property to control printing of backgrounds for individual elements"
- CSSWG Wiki: "[print-backgrounds](http://wiki.csswg.org/ideas/print-backgrounds)" - Ein Vorschlag diese Eigenschaft zu standardisieren
- CSS Color Module Level 4: die [`color-adjust`](https://drafts.csswg.org/css-color-4/#color-adjust) Eigenschaft - ein neuerer Vorschlag, diese Eigenschaft zu standardisieren
