---
title: <canvas>
slug: Web/HTML/Element/canvas
translation_of: Web/HTML/Element/canvas
---
## Übersicht

Das Canvas Element ist ein großer Fortschritt in der Entwicklung des HTML, bietet es doch die Möglichkeit zur dynamischen Darstellung grafischer Informationen. Dazu wird eine Canvas (engl. Leinwand) definiert und mittels JavaScript verschiedene Methoden zur Anwendung gebracht und Attribute gesetzt (siehe [Canvas Attribute](http://www.selfhtml5.org/2010-html5-features/canvas-attribute-table/)). Es sollte ein Fallbackinhalt in den `<canvas>Tag` eingefügt werden, welcher nur angezeigt wird, wenn Browser das `<canvas>` Element nicht unterstützt oder Javascript deaktiviert ist.

## Attribute

Dieses Element unterstützt die globalen Attribute.

- {{htmlattrdef("width")}}
  - : Die Breite in Pixel. Standard ist 300px.
- {{htmlattrdef("height")}}
  - : Die Höhe in Pixel. Standard ist 150px.

{{Note("Die Größe des <code>canvas</code> kann auch via CSS geändert werden. Das Bild wird hierzu gestreckt um die per CSS definierte Größe zu erreichen.")}}

## Beispiele

```html
<canvas id="canvas" width="300" height="300">
  Dein Browser unterstützt das &lt;canvas&gt; Element anscheinend nicht.
</canvas>
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'the-canvas-element.html#the-canvas-element', '&lt;canvas&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'the-canvas-element.html#the-canvas-element', '&lt;canvas&gt;')}} | {{Spec2('HTML5 W3C')}}     |           |

## Browserkompatibilität

{{Compat}}

### Browserspezifische Hinweise

#### Firefox (Gecko)

- Before Gecko 5.0 {{geckoRelease("5.0")}}, the canvas width and height were signed integers instead of unsigned integers.
- Prior to Gecko 6.0 {{geckoRelease("6.0")}}, a {{HTMLElement("canvas")}} element with a zero width or height would be rendered as if it had default dimensions.
- Before Gecko 12.0 {{geckoRelease("12.0")}}, if JavaScript is disabled, the `<canvas>` element was being rendered instead of showing the fallback content as per the [specification](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html). Now the fallback content is rendered instead.

## See also

- [MDN canvas portal](/de/docs/HTML/Canvas "https://developer.mozilla.org/en-US/docs/HTML/Canvas")
- A [canvas tutorial](/de/docs/Canvas_tutorial "Canvas tutorial")
- [Canvas cheat sheet](http://blog.nihilogic.dk/2009/02/html5-canvas-cheat-sheet.html)
- [Canvas-related demos](/en-US/demos/tag/tech:canvas "demos/tag/tech:canvas/")

{{HTMLRef}}

{{ languages( { "de": "de/HTML/Element/canvas", "en": "en/HTML/Element/canvas", "es": "es/HTML/Elemento/canvas", "ja": "ja/HTML/Element/canvas", "ko": "ko/HTML/Element/canvas", "nl": "nl/HTML/HTML_Tags/canvas", "pl": "pl/HTML/Element/canvas", "ru": "Ru/HTML/Element/canvas", "zh-cn": "cn/HTML/Element/canvas", "fr": "fr/HTML/Element/canvas" } ) }}
