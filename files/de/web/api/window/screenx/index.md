---
title: Window.screenX
slug: Web/API/Window/screenX
translation_of: Web/API/Window/screenX
---
{{APIRef}}Die schreibgeschützte Eigenschaft **`Window.screenX `**liefert den Abstand in CSS-Pixeln zwischen dem linken Bildschirmrand und dem linken Rand des Browsers.

## Syntax

    lLoc = window.screenX

- _`lLoc`_ enthält den Abstand in CSS-Pixeln vom linken Bildschirmrand.

## Spezifikationen

| Spezifikation                                                                                | Status                           | Kommentar            |
| -------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{ SpecName('CSSOM View', '#dom-window-screenx', 'Window.screenX') }} | {{ Spec2('CSSOM View') }} | Initiale Definition. |

## Browserkompatibilität

{{Compat}}

\[1] Vor Firefox 28 nutzte Gecko "device pixel" anstatt CSS-Pixel; anders gesagt nahm es für den Wert von `screenPixelsPerCSSPixel `für jedes Gerät "1" an.

## Siehe auch

- {{domxref("Window.screenY")}}
