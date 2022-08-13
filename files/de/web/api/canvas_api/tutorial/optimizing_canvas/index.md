---
title: Canvas optimieren
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
tags:
  - Canvas
  - Fortgeschritten
  - Grafik
  - HTML
  - HTML5
  - Tutorial
translation_of: Web/API/Canvas_API/Tutorial/Optimizing_canvas
original_slug: Web/Guide/HTML/Canvas_Tutorial/Canvas_optimieren
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}

Das {{HTMLElement("canvas")}}-Element ist einer der am meisten verbreiteten Standards, um 2D-Grafiken im Web zu erzeugen. Es wird oft für Spiele und komplexe Visualisierungen eingesetzt. Reizen Webseiten und Apps das Canvas jedoch zu sehr aus, lässt die Performance nach. Dieser Artikel soll Hilfestellung für die Optimierung der Nutzung des Canvas-Elements geben, um sicherzustellen, dass Ihre Webseite oder App performant ist.

## Tipps zur Performance

Dies ist eine Sammlung von Tipps, die Helfen, die Performance zu verbessern.

### Vorrendern von ähnlichen oder sich wiederholenden Objekten auf einem Offscreen-Canvas

Falls Sie komplexe Zeichenoperationen in jedem Frame ausführen, ziehen Sie in Betracht, ein Offscreen-Canvas zu erzeugen. Damit können Sie Objekte einmal (oder wann immer Änderungen stattfinden) auf dem Offscreen-Canvas zeichnen und in jedem Frame das Offscreen-Canvas zeichnen.

```js
myEntity.offscreenCanvas = document.createElement('canvas');
myEntity.offscreenCanvas.width = myEntity.width;
myEntity.offscreenCanvas.height = myEntity.height;
myEntity.offscreenContext = myEntity.offscreenCanvas.getContext('2d');

myEntity.render(myEntity.offscreenContext);
```

### Vermeiden Sie Gleitkomma-Koordinaten

Falls Sie Objekte auf dem Canvas mit Gleitkommazahlen als Koordinaten zeichnen, müssen Subpixel gerendert werden.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

Dadurch muss der Browser zusätzliche Berechnungen durchführen, um eine Kantenglättung zu erzielen. Um dies zu verhindern, stellen Sie sicher, dass Sie alle Koordinaten in Aufrufen von {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} runden, zum Beispiel mit Hilfe von {{jsxref("Math.floor()")}}.

### Skalieren Sie keine Bilder in `drawImage`

Laden Sie mehrere Größen Ihrer Bilder auf ein Offscreen-Canvas, anstatt sie andauernd in {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} zu skalieren.

### Benutzen Sie mehrere Canvas-Ebenen für komplexe Szenen

Möglicherweise haben Sie einige Elemente, die sich oft ändern oder bewegen, während andere Dinge (wie zum Beispiel die UI) sich nie ändern. Diese Situation können Sie optimieren, indem Sie durch die Erzeugung mehrerer Canvas-Elemente Ebenen erzeugen.

Zum Beispiel können Sie eine UI-Ebene erzeugen, die über allen anderen Ebenen liegt und nur während Benutzereingaben gezeichnet wird. Zusätzlich kann es eine Spiel-Ebene geben, die alle oft veränderten Objekte enthält, sowie eine Hintergrund-Ebene, deren Objekte sich selten ändern.

```html
<div id="stage">
  <canvas id="ui-layer" width="480" height="320"></canvas>
  <canvas id="game-layer" width="480" height="320"></canvas>
  <canvas id="background-layer" width="480" height="320"></canvas>
</div>

<style>
  #stage {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black
  }
  canvas { position: absolute; }
  #ui-layer { z-index: 3 }
  #game-layer { z-index: 2 }
  #background-layer { z-index: 1 }
</style>
```

### Nutzen Sie CSS für große Hintergrundbilder

Falls Sie wie die meisten Spiele ein statisches Hintergrundbild haben, nutzen Sie ein simples {{HTMLElement("div")}}-Element mit der CSS-Eigenschaft {{cssxref("background")}} und positionieren Sie es unter dem Canvas. Dadurch verhindern Sie ein permanentes Neuzeichnen des Bildes in jedem Frame.

### Skalieren Sie das Canvas mit CSS-Transformationen

[CSS-Transformationen](/de/docs/Web/Guide/CSS/Using_CSS_transforms) sind schneller, da sie die Grafikkarte nutzen. Im besten Fall skalieren Sie das Canvas nicht, oder haben ein kleineres Canvas, das Sie hochskalieren, als dass Sie ein großes Canvas herunterskalieren. Für Firefox OS ist die Zielgröße 480 x 320 px.

```js
var scaleX = window.innerWidth / canvas.width;
var scaleY = window.innerHeight / canvas.height;

var scaleToFit = Math.min(scaleX, scaleY);
var scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = '0 0'; //scale from top left
stage.style.transform = 'scale(' + scaleToFit + ')';
```

### Nutzen Sie das `moz-opaque` Attribut (nur Gecko)

Falls Ihr Spiel ein Canvas nutzt, das nicht transparent sein muss, setzen Sie das `moz-opaque` Attribut im Canvas-Tag. Diese Information kann intern genutzt werden, um das Zeichnen zu optimieren.

```html
<canvas id="myCanvas" moz-opaque></canvas>
```

### Weitere Tipps

- Bündeln Sie Canvas-Aufrufe (Zeichnen Sie zum Beispiel eine Linie mit mehreren Knotenpunkten, anstatt einzelne Linien).
- Vermeiden Sie unnötige Zustandsänderungen des Canvas.
- Rendern Sie nur die Unterschiede, nicht den ganzen neuen Zustand.
- Vermeiden Sie die {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}-Eigenschaft, soweit möglich.
- Vermeiden Sie [das Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text), falls möglich.
- Versuchen Sie verschiedene Wege, das Canvas zu leeren ({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}}, {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} oder Größenänderung des Canvas)
- Bei Animationen, nutzen Sie {{domxref("window.requestAnimationFrame()")}} anstatt {{domxref("window.setInterval()")}} .
- Seien Sie vorsichtig mit schwergewichtigen Physik-Bibliotheken.

## Siehe auch

- [Improving HTML5 Canvas Performance – HTML5 Rocks](http://www.html5rocks.com/en/tutorials/canvas/performance/#toc-ref)
- [Optimizing your JavaScript game for Firefox OS – Mozilla Hacks](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}
