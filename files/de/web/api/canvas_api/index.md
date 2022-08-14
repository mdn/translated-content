---
title: Canvas
slug: Web/API/Canvas_API
tags:
  - API
  - Canvas
  - HTML5
translation_of: Web/API/Canvas_API
original_slug: Web/HTML/Canvas
---
{{CanvasSidebar}}

Mit der Einführung von [HTML5 ](/de/docs/HTML/HTML5)wurde ein neues "Leinwand" Element zum Zeichnen von Grafiken mittels [JavaScript](/de/docs/Web/JavaScript)-API vorgestellt: **{{HTMLElement("canvas")}}**. Die Anwendungsgebiete sind äußerst flexibel, so ist es möglich, mit Canvas Diagramme zu zeichnen, Bilder zu bearbeiten, Animationen zu erstellen oder sogar Videos zu bearbeiten und zu rendern.

Der Support für `<canvas>` in Mozilla-Anwendungen wurde ab Gecko 1.8 (sprich ab [Firefox 1.5](/de/docs/Mozilla/Firefox/Releases/1.5)) implementiert. Canvas stammt ursprünglich von Apple und wurde für das OS X [Dashboard ](https://en.wikipedia.org/wiki/Dashboard_%28Mac_OS%29)und den Safari-browser entwickelt. Der Internet Explorer unterstützt Canvas ab Version 9, wobei es durch ein Skript von Google's [Explorer Canvas Projekt](http://excanvas.sourceforge.net/) auch in früheren Versionen des IE lauffähig ist. Google Chrome und Opera ab Version 9 unterstützen `<canvas>` ebenfalls problemlos.

Das `<canvas>` Element wird zudem von [WebGL ](/de/docs/Web/WebGL)für die hardwarebeschleunigte Darstellung von 3D-Grafiken auf Webseiten eingesetzt.

## Beispiel

Dies ist ein einfacher Code-Ausschnitt mit der {{domxref("CanvasRenderingContext2D.fillRect()")}} Methode.

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
```

Bearbeite den untenstehenden Code und sieh live Updates im Canvas: (Funktion kaputt auf Deutsch, die Englische Seite funktioniert, bitte oben umschalten auf Englisch )

{{ EmbedLiveSample('Playable_code', 700, 360) }}

## Referenzen

- {{domxref("HTMLCanvasElement")}}
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("TextMetrics")}}
- {{domxref("Path2D")}} {{experimental_inline}}

Die Schnittstellen, die sich auf `WebGLRenderingContext` beziehen, werden unter [WebGL](/de/docs/Web/WebGL) zusammengefasst.

## Leitfäden und Anleitungen

- [Canvas Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)
  - : Eine ausführliche Anleitung, die sowohl grundlegende Nutzung als auch fortgeschrittene Funktionen umfasst
- [Code-Ausschnitte: Canvas](/en-US/Add-ons/Code_snippets/Canvas)
  - : Einige Entwickler-orientierte Code-Ausschnitte, die `<canvas>` enthalten.
- [Demo: A basic ray-caster](/de/docs/Web/API/Canvas_API/A_basic_ray-caster)
  - : A demo of ray-tracing animation using canvas.
- [DOM-Objekte in ein canvas zeichnen](/de/docs/Web/API/Canvas_API/Drawing_DOM_objects_into_a_canvas)
  - : Wie man DOM Inhalt, wie zum Beispiel HTML-Elemente, in ein canvas zeichnet.
- [Videos mit canvas manipulieren](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : {{HTMLElement("video")}} und {{HTMLElement("canvas")}} kombinieren, um Videos in Echtzeit zu manipulieren.

## Quellen

### Allgemeines

- [HTML5 Canvas Deep Dive](http://joshondesign.com/p/books/canvasdeepdive/title.html)
- [Canvas Handbook](http://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)

### Libraries

- [Fabric.js](http://fabricjs.com) is an open-source canvas library with SVG parsing capabilities.
- [Kinetic.js](https://github.com/ericdrowell/KineticJS) is an open-source canvas library focused on interactivity for desktop and mobile applications.
- [Paper.js](http://paperjs.org/) is an open source vector graphics scripting framework that runs on top of the HTML5 Canvas.
- [libCanvas](http://libcanvas.github.com/) is powerful and lightweight canvas framework.
- [Processing.js](http://processingjs.org) is a port of the Processing visualization language.
- [PlayCanvas](https://playcanvas.com/) is an open source game engine.
- [Pixi.js](http://www.pixijs.com/) is an open source game engine.
- [PlotKit](http://www.liquidx.net/plotkit/) is a charting and graphing library.
- [Rekapi](https://github.com/jeremyckahn/rekapi) is an animation key-framing API for Canvas.
- [PhiloGL](http://senchalabs.github.com/philogl/) is a WebGL framework for data visualization, creative coding and game development.
- [JavaScript InfoVis Toolkit](http://thejit.org/) creates interactive 2D Canvas data visualizations for the Web.

## Spezifikationen

| Spezifikation                                                                        | Status                           | Kommentar |
| ------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', "the-canvas-element.html", "Canvas")}} | {{Spec2('HTML WHATWG')}} |           |

## Siehe auch

- [WebGL](/de/docs/Web/WebGL)
