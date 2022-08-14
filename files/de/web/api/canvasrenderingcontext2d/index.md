---
title: CanvasRenderingContext2D
slug: Web/API/CanvasRenderingContext2D
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Graphics
  - Image
  - Shape
translation_of: Web/API/CanvasRenderingContext2D
---
{{APIRef}}

Das **`CanvasRenderingContext2D`**-Interface stellt den 2D-Renderkontext für die Zeichenoberfläche eines {{ HTMLElement("canvas") }} zur Verfügung. Es wird zum Zeichnen von Formen, Text, Bildern und anderen Objekten benutzt.

Eigenschaften und Methoden finden Sie in der Sidebar und weiter unten. Das [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial "Canvas tutorial") bietet Ihnen außerdem weitere Informationen, Beispiele und Ressourcen.

## Ein einfaches Beispiel

Um eine `CanvasRenderingContext2D` Instanz zu erhalten, muss man erst ein HTML `<canvas>` Element haben, mit dem man arbeiten kann:

```html
<canvas id="my-house" width="300" height="300"></canvas>
```

Um ein Objekt dieses Interfaces zu erhalten, benutzen Sie die Methode {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} eines `<canvas>`, mit "2d" als Argument:

```js
const canvas = document.getElementById('my-house');
const ctx = canvas.getContext('2d');
```

Sobald Sie den Kontext der Zeichenoberfläche haben, können Sie darin zeichnen, was immer Sie möchten. Dieser Code zeichnet ein Haus:

```js
// Die Lininestärke festlegen
ctx.lineWidth = 10;

// Wand
ctx.strokeRect(75, 140, 150, 110);

// Tür
ctx.fillRect(130, 190, 40, 60);

// Dach
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
```

Die enstandene Zeichnung sieht so aus:

{{EmbedLiveSample("Basic_example", 700, 330)}}

## Referenz

### Rechtecke zeichnen

Es gibt drei Methoden, die sofort Rechtecke innerhalb des Canvas zu zeichnen.

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : Setzt alle Pixel im Rechteck mit Startpunkt _(x, y)_ und Größe _(width, height)_ auf schwarz und transparent wodurch jeglicher vorheriger Inhalt gelöscht wird.
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : Zeichnet ein gefülltes Rechteck mit Startpunkt _(x, y)_ und Größe _(width, height)_.
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : Zeichnet ein Rechteck mit Startpunkt _(x, y)_ und Größe _(width, height),_ verwendet dabei den aktuellem _stroke style_.

### Text darstellen

Die folgenden Methoden zeichnen Text auf dem Canvas. Siehe auch das {{domxref("TextMetrics")}} - Objekt für die Texteigenschaften.

- {{domxref("CanvasRenderingContext2D.fillText()")}}
  - : Zeichnet einen gegebenen Text (gefüllt) an die gegebene Position _(x, y)_.
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
  - : Zeichnet einen gegebenen Text (Umrisse) an die gegebene Position _(x, y)_.
- {{domxref("CanvasRenderingContext2D.measureText()")}}
  - : Gibt ein {{domxref("TextMetrics")}}-Objekt zurück.

### Linienstile

Die folgenden Methoden und Eigenschaften beeinflussen die Art und Weise, wie Linien gezeichnet werden.

- {{domxref("CanvasRenderingContext2D.lineWidth")}}
  - : Linienbreite. Standard: `1.0`
- {{domxref("CanvasRenderingContext2D.lineCap")}}
  - : Typ des Linienabschlusses. Mögliche Werte: `butt` (default), `round`, `square`.
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
  - : Definiert den Typ der Ecken, wo sich zwei Linien treffen. Mögliche Werte: `round`, `bevel`, `miter` (default).
- {{domxref("CanvasRenderingContext2D.miterLimit")}}
  - : Verbindungsecken-Größe. Standard: `10`.
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
  - : Gibt das aktuelle Linienstrich-Array zurück, welches eine gerade Anzahl positiver Zahlen enthält.
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
  - : Setzt das aktuelle Linienstrich-Array auf einen neuen Wert.
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
  - : Spezifiziert, wo auf einer Linie ein Strich-Array beginnt.

### Textstile

Die folgenden Eigenschaften bestimmen, wie Text dargestellt wird.

- {{domxref("CanvasRenderingContext2D.font")}}
  - : Font-Einstellung. Standard: `10px sans-serif`
- {{domxref("CanvasRenderingContext2D.textAlign")}}
  - : Ausrichtungs-Einstellung. Mögliche Werte: `start` (default), `end`, `left`, `right` oder `center`.
- {{domxref("CanvasRenderingContext2D.textBaseline")}}
  - : Ausrichtungseinstellung zur Basislinie. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic` (default), `ideographic`, `bottom`.
- {{domxref("CanvasRenderingContext2D.direction")}}
  - : Direktionalität. Mögliche Werte: ` ltr, rtl, ``inherit` (default).

### Füll- und Linienfarbe

Die Füllfarbe (`fillStyle`) wird innerhalb von Formen angewendet, die Linienfarbe (`strokeStyle`) auf die Randlinie von Formen. Beides kann statt einer Farbe auch ein Farbverlauf oder ein Muster sein.

- {{domxref("CanvasRenderingContext2D.fillStyle")}}
  - : Farbe oder Stil für innerhalb von Formen. Standardwert `#000` (schwarz).
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
  - : Farbe oder Stil für die Randlinie von Formen. Standardwert `#000` (schwarz).

### Farbverläufe und Muster

- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
  - : Erzeugt einen linearen Farbverlauf entlang der Linie gegeben durch die Koordinaten, die als Parameter übergeben werden.
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
  - : Erzeugt einen radialen (kreisförmigen) Farbverlauf entlang der Linie gegeben durch die Koordinaten, die als Parameter übergeben werden.
- {{domxref("CanvasRenderingContext2D.createPattern()")}}
  - : Erzeugt ein Muster aus dem angegebenen Bild (ein {{domxref("CanvasImageSource")}}). Es wiederholt das Bild in den Richtungen, die mit dem `repetition` Parameter definiert werden. Diese Methode gibt ein {{domxref("CanvasPattern")}} zurück.

### Schatten

- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
  - : Definiert den Unschärfe-Effekt. Standardwert `0`
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
  - : Farbe des Schattens. Standardwert: komplett transparentes Schwarz.
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
  - : Horizontale Entfernung des Schattens. Standardwert 0.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
  - : Vertikale Entfernung des Schattens. Standardwert 0.

### Pfade

Die folgende Methoden können verwendet werden, um Pfade von Objekten zu manipulieren.

- {{domxref("CanvasRenderingContext2D.beginPath()")}}
  - : Startet einen neuen Pfad, indem die Liste mit allen Unterpfaden geleert wird. Rufe diese Methode auf, wenn du einen neuen Pfad starten willst.
- {{domxref("CanvasRenderingContext2D.closePath()")}}
  - : Sorgt dafür, dass die Stiftspitze zum Start des aktuellen Unterpfades zurückwandert. Es wird versucht eine greade Linie von der aktuellen Position zum Beginn der Linie zu zeichen. Wenn die Form schon geschlossen wurde oder nur einen Punkt enthält, macht diese Funktion nichts.
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
  - : Bewegt den Anfangspunkt für einen neuen Unterpfad zu den übergebenen **(x, y)** Koordinaten.
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
  - : Verbindet den letzten Punkt im Unterpfad mit den übergebenen **(x, y)** Koordinaten in einer geraden Linie.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()")}}
  - : Fügt eine kubische Bézierkurve zum Pfad hinzu. Diese benötigt drei Punkte. Die ersten zwei sind Kontrollpunkte für die Krümmung, der dritte ist das Ende der Kurve. Die Kurve beginnt am letzten Punkt im aktuellen Pfad, dieser kann davor mit `moveTo()` geändert werden.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()")}}
  - : Fügt eine quadratische Bézierkurve zum aktuellen Pfad hinzu.
- {{domxref("CanvasRenderingContext2D.arc()")}}
  - : Fügt einen Kreisbogen zum Pfad hinzu, mit Kreismittelpunkt _(x, y)_ und Radius _r_. Der Startwinkel ist _startAngle_, der Endwinkel _endAngle_, Richtung gegen den Uhrzeigersinn.
- {{domxref("CanvasRenderingContext2D.arcTo()")}}
  - : Fügt einen Kreisbogen zum Pfad mit den gegebenen Kontrollpunkten und Radius hinzu, verbunden mit dem letzten Punkt im Pfad durch eine gerade Linie.
- {{domxref("CanvasRenderingContext2D.ellipse()")}} {{experimental_inline}}
  - : Fügt eine Ellipse zum Pfad hinzu, mit dem Zentrum _(x, y)_ und den Radien _radiusX_ und _radiusY_, beginnend bei _startAngle_ und endend bei _endAngle_, Richtung gegen den Uhrzeigersinn.
- {{domxref("CanvasRenderingContext2D.rect()")}}
  - : Erzeugt einen Pfad mit einem Rechteck an der Position _(x, y)_ und den Dimensionen _width_ und _height_.

### Pfade zeichnen

- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : Füllt den Unterpfad mit der aktuellen Füllfarbe (bzw. Farbverlauf, Muster).
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : Zeichnet die Linien des Unterpfades mit der aktuellen Linienfarbe (bzw. Farbverlauf, Muster).
- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : Wenn ein gegebenes Element fokussiert wird, zeichnet diese Methode einen Fokusring um den aktuellen Pfad.
- {{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}}
  - : Scrollt den aktuellen Pfad oder einen bestimmten Pfad in Sicht.
- {{domxref("CanvasRenderingContext2D.clip()")}}
  - : Erzeugt einen zugeschnittenen Pfad aus den aktuellen Unterpfaden. Alles, was nach `clip()` gezeichnet wird, erscheint nur im zugeschnittenen Pfad. Für ein Beispiel, siehe [Clipping paths](/de/docs/Web/API/Canvas_API/Tutorial/Compositing "Clipping paths") im Canvas Tutorial.
- {{domxref("CanvasRenderingContext2D.isPointInPath()")}}
  - : Gibt zurück, ob der angegebene Punkt im aktuellen Pfad enthalten ist oder nicht.
- {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}
  - : Gibt zurück, ob der angegebene Punkt innerhalb des bemalten Bereichs im Pfad ist oder nicht.

### Transformationen

Objekte im `CanvasRenderingContext2D`-Renderkontext haben eine aktuelle Transformationsmatrix und Methoden, um diese zu manipulieren. Die Transformationsmatrix wird angewendet, wenn der aktuelle Pfad erzeugt wird und wenn Text, Formen oder {{domxref("Path2D")}} Objekte gemalt werden. Folgende Methoden sind hier für historische und Kompatibilitätszwecke aufgelistet, da heutzutage meistens {{domxref("SVGMatrix")}} Objekte verwendet werden und in Zukunft diese Methoden ersetzen werden.

- {{domxref("CanvasRenderingContext2D.currentTransform")}} {{experimental_inline}}
  - : Die momentane Transformationsmatrix ({{domxref("SVGMatrix")}} object).
- {{domxref("CanvasRenderingContext2D.rotate()")}}
  - : Fügt eine Drehung zur Transformationsmatrix hinzu. Der _angle_-Parameter stellt einen Drehwinkel im Uhrzeigersinn dar und wird in radians ausgedrückt.
- {{domxref("CanvasRenderingContext2D.scale()")}}
  - : Fügt eine skalierende Transformation zu den Längeneinheiten des canvas hinzu (horizontal um Faktor _x_, vertikal um Faktor _y_). Was nach `scale()` auf das canvas gezeichnet wird, wird also dementsprechend gestaucht oder gestreckt.
- {{domxref("CanvasRenderingContext2D.translate()")}}
  - : Fügt eine übersetzende Transformation hinzu, die die Position des canvas relativ zu seinem Koordinatensystem verschiebt (horizontal um _x_, vertikal um _y_). Was nach `translate()` gezeichnet wird, ist also um **(x, y)** verschoben.
- {{domxref("CanvasRenderingContext2D.transform()")}}
  - : Multipliziert die aktuelle Transformationsmatrix mit der Matrix, die durch die Parameter dieser Funktion beschrieben wird.
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - : Setzt die aktuellen Transformationen zurück und ruft dann die `transform()` Methode mit den selben Parametern auf.
- {{domxref("CanvasRenderingContext2D.resetTransform()")}} {{experimental_inline}}
  - : Setzt die aktuellen Transformationen zurück.

### Compositing

- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
  - : Alpha-Wert bzw. Deckkraft, die auf alle Formen und Bilder angewendet wird, bevor diese auf dem canvas gezeichnet werden. Standardwert `1.0` (undurchsichtig).
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
  - : Zusammen mit `globalAlpha` legt dieser Wert fest, wie Formen und Bilder abhängig vom Hintergrund auf das canvas gezeichnet werden sollen.

### Bilder zeichnen

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
  - : Zeichnet das übergebene Bild. Diese Methode ist in diversen Formaten verfügbar, wodurch sie große Flexibilität in der Nutzung bietet.

### Pixelmanipulation

Siehe auch das {{domxref("ImageData")}} Objekt.

- {{domxref("CanvasRenderingContext2D.createImageData()")}}
  - : Erzeugt ein neues, leeres {{domxref("ImageData")}} Objekt mit den angegebenen Dimensionen. Alle Pixel in diesem Objekt sind transparent schwarz.
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
  - : Gibt ein {{domxref("ImageData")}} Objekt zurück, das die dem canvas zugrunde liegenden Pixeldaten enthält. Die Methode wird auf einen bestimmten Ausschnitt des canvas angewendet, beginnend bei _(sx, sy)_, mit Breite _sw_ und Höhe _sh_.
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
  - : Malt Pixeldaten des {{domxref("ImageData")}} Objekts auf das canvas. Wenn ein dreckiges Rechteck angegeben wird, werden nur die Pixel dieses Rechtecks gemalt.

### Bildglättung

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} {{experimental_inline}}
  - : Bildglättungsmodus; wenn deaktiviert, werden Bilder beim Skalieren nicht geglättet.

### Der Leinwand-Zustand

Der `CanvasRenderingContext2D`-Renderkontext enthält eine Vielzahl an Zeichnungszuständen (Attribute für Linienstile, Füllstile, Schattenstile, Textstile). Die folgenden Methoden helfen Ihnen mit diesen Zuständen zu arbeiten:

- {{domxref("CanvasRenderingContext2D.save()")}}
  - : Saves the current drawing style state using a stack so you can revert any change you make to it using `restore()`.
- {{domxref("CanvasRenderingContext2D.restore()")}}
  - : Restores the drawing style state to the last element on the 'state stack' saved by `save()`.
- {{domxref("CanvasRenderingContext2D.canvas")}}
  - : A read-only back-reference to the {{domxref("HTMLCanvasElement")}}. Might be {{jsxref("null")}} if it is not associated with a {{HTMLElement("canvas")}} element.

### Trefferregionen

- {{domxref("CanvasRenderingContext2D.addHitRegion()")}} {{experimental_inline}}
  - : Fügt eine Trefferregion (hit region) zur Leinwand hinzu.
- {{domxref("CanvasRenderingContext2D.removeHitRegion()")}} {{experimental_inline}}
  - : Entfernt eine Trefferregion mit gegebener `id` von der Leinwand.
- {{domxref("CanvasRenderingContext2D.clearHitRegions()")}} {{experimental_inline}}
  - : Entfernt alle Trefferregionen von der Leinwand.

### Filter

- {{experimental_inline}} {{domxref("CanvasRenderingContext2D.filter")}}
  - : Applies a CSS or SVG filter to the canvas, e.g., to change its brightness or bluriness.

## Unstandardisierte APIs

### Blink and WebKit

Die meisten dieser APIs sind [veraltet und wurden kurz nach Chrome 36 entfernt](https://code.google.com/p/chromium/issues/detail?id=363198).

- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.clearShadow()`
  - : Entfernt alle Schatteneinstellungen wie {{domxref("CanvasRenderingContext2D.shadowColor")}} und {{domxref("CanvasRenderingContext2D.shadowBlur")}}.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.drawImageFromRect()`
  - : Das ist redundant zum equivalenten Überladung von `drawImage`.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.setAlpha()`
  - : Verwenden Sie {{domxref("CanvasRenderingContext2D.globalAlpha")}} anstelle dieser Methode.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.setCompositeOperation()`
  - : Verwenden Sie {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}} anstelle dieser Methode.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.setLineWidth()`
  - : Verwenden Sie {{domxref("CanvasRenderingContext2D.lineWidth")}} anstelle dieser Methode.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.setLineJoin()`
  - : Verwenden Sie {{domxref("CanvasRenderingContext2D.lineJoin")}} anstelle dieser Methode.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.setLineCap()`
  - : Verwenden Sie {{domxref("CanvasRenderingContext2D.lineCap")}} anstelle dieser Methode.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.setMiterLimit()`
  - : Verwenden Sie {{domxref("CanvasRenderingContext2D.miterLimit")}} anstelle dieser Methode.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.setStrokeColor()`
  - : Verwenden Sie {{domxref("CanvasRenderingContext2D.strokeStyle")}} anstelle dieser Methode.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.setFillColor()`
  - : Verwenden Sie {{domxref("CanvasRenderingContext2D.fillStyle")}} anstelle dieser Methode.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.setShadow()`
  - : Verwenden Sie {{domxref("CanvasRenderingContext2D.shadowColor")}} und {{domxref("CanvasRenderingContext2D.shadowBlur")}} anstelle dieser Methode.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.webkitLineDash`
  - : Verwenden Sie {{domxref("CanvasRenderingContext2D.getLineDash()")}} und {{domxref("CanvasRenderingContext2D.setLineDash()")}} anstelle dieser Methode.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.webkitLineDashOffset`
  - : Verwenden Sie {{domxref("CanvasRenderingContext2D.lineDashOffset")}} anstelle dieser Methode.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.webkitImageSmoothingEnabled`
  - : Verwenden Sie {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} anstelle dieser Methode.

### Blink only

- {{non-standard_inline}} `CanvasRenderingContext2D.getContextAttributes()`
  - : Inspired by the same `WebGLRenderingContext` method it returns an `Canvas2DContextAttributes` object that contains the attributes "storage" to indicate which storage is used ("persistent" by default) and the attribute "alpha" (`true` by default) to indicate that transparency is used in the canvas.
- {{non-standard_inline}} `CanvasRenderingContext2D.isContextLost()`
  - : Inspired by the same `WebGLRenderingContext` method it returns `true` if the Canvas context has been lost, or `false` if not.

### WebKit only

- {{non-standard_inline}} `CanvasRenderingContext2D.webkitBackingStorePixelRatio`
  - : The backing store size in relation to the canvas element. See [High DPI Canvas](http://www.html5rocks.com/en/tutorials/canvas/hidpi/).
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitGetImageDataHD`
  - : Intended for HD backing stores, but removed from canvas specifications.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitPutImageDataHD`
  - : Intended for HD backing stores, but removed from canvas specifications.

<!---->

### Gecko only

- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.filter")}}
  - : CSS and SVG filters as Canvas APIs. Likely to be standardized in a new version of the specification.

#### Prefixed APIs

- {{non-standard_inline}} `CanvasRenderingContext2D.mozCurrentTransform`
  - : Sets or gets the current transformation matrix, see {{domxref("CanvasRenderingContext2D.currentTransform")}}. {{ gecko_minversion_inline("7.0") }}
- {{non-standard_inline}} `CanvasRenderingContext2D.mozCurrentTransformInverse`
  - : Sets or gets the current inversed transformation matrix. {{ gecko_minversion_inline("7.0") }}
- {{non-standard_inline}} `CanvasRenderingContext2D.mozFillRule`
  - : The [fill rule](http://cairographics.org/manual/cairo-cairo-t.html#cairo-fill-rule-t) to use. This must be one of `evenodd` or `nonzero` (default).
- {{non-standard_inline}} `CanvasRenderingContext2D.mozImageSmoothingEnabled`
  - : See {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozDash`
  - : An array which specifies the lengths of alternating dashes and gaps {{ gecko_minversion_inline("7.0") }}. Use {{domxref("CanvasRenderingContext2D.getLineDash()")}} and {{domxref("CanvasRenderingContext2D.setLineDash()")}} instead.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozDashOffset`
  - : Specifies where to start a dash array on a line. {{ gecko_minversion_inline("7.0") }}. Use {{domxref("CanvasRenderingContext2D.lineDashOffset")}} instead.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozTextStyle`
  - : Introduced in in Gecko 1.9, deprecated in favor of the {{domxref("CanvasRenderingContext2D.font")}} property.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.mozDrawText()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.strokeText()")}} or {{domxref("CanvasRenderingContext2D.fillText()")}} instead.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.mozMeasureText()`
  - : This method was introduced in Gecko 1.9 and is unimplemented starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.measureText()")}} instead.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.mozPathText()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.
- {{non-standard_inline}} {{obsolete_inline}} `CanvasRenderingContext2D.mozTextAlongPath()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.

#### Internal APIs (chrome-context only)

- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.asyncDrawXULElement()")}}
  - : Renders a region of a XUL element into the `canvas`.
- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.drawWindow()")}}
  - : Renders a region of a window into the `canvas`. The contents of the window's viewport are rendered, ignoring viewport clipping and scrolling.
- {{non-standard_inline}} `CanvasRenderingContext2D.demote()`
  - : This causes a context that is currently using a hardware-accelerated backend to fallback to a software one. All state should be preserved.

### Internet Explorer

- {{non-standard_inline}} `CanvasRenderingContext2D.msFillRule`
  - : The [fill rule](http://cairographics.org/manual/cairo-cairo-t.html#cairo-fill-rule-t) to use. This must be one of `evenodd` or `nonzero` (default).

## Specifications

| Specification                                                                                                                                    | Status                           | Comment |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "scripting.html#2dcontext:canvasrenderingcontext2d", "CanvasRenderingContext2D")}} | {{Spec2('HTML WHATWG')}} |         |

## Browser compatibility

{{Compat("api.CanvasRenderingContext2D")}}

- Starting with Gecko 5.0 {{geckoRelease("5.0")}}, specifying invalid values are now silently ignored for the following methods and properties: `translate()`, `transform()`, ` rotate(), ``scale(),` `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()`, `arc()`, `shadowOffsetX`, `shadowOffsetY`, `shadowBlur`.

## See also

- {{domxref("HTMLCanvasElement")}}
