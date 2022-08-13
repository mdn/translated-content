---
title: CanvasRenderingContext2D.getImageData()
slug: Web/API/CanvasRenderingContext2D/getImageData
translation_of: Web/API/CanvasRenderingContext2D/getImageData
---
{{APIRef}}

Die **`CanvasRenderingContext2D.getImageData()`** Methode der Canvas 2D API gibt ein Objekt des Types {{domxref("ImageData")}} zurück. Dieses Objekt repräsentiert die jeweiligen Pixel-Daten im Bereich des Rechtecks mit den Startkoordinaten _(**sx**,**sy**)_ und den Dimensionen _sw_ in der Breite und _sy_ in der Höhe.

## Syntax

    ImageData ctx.getImageData(sx, sy, sw, sh);

### Parameters

- `sx`
  - : Die x Koordinate der oberen linken Ecke des Rechtecks, aus welchem die Pixel-Daten gelesen werden.
- `sy`
  - : Die y Koordinate der oberen linken Ecke des Rechtecks, aus welchem die Pixel-Daten gelesen werden.
- `sw`
  - : Die Breite des Rechtecks aus dem die Pixel-Daten gelesen werden.
- `sh`
  - : Die Höhe des Rechtecks aus dem die Pixel-Daten gelesen werden.

### Rückgabewerte

Ein Objekt vom Typ {{domxref("ImageData")}} das die Pixeldaten im angegeben bereich des Canvas-Elements beinhaltet.

### Fehlertypen

- `IndexSizeError`
  - : Tritt ein, wenn entweder das Höhen oder das Breiten Argument null ist.

## Beispiele

### Benutzung der `getImageData` Funktion

Das ist ein einfaches Code-Beispiel zur Benutzung der `getImageData` Funktion. Für mehr Informationen siehe [Pixel manipulation with canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas) und die Referenz zum {{domxref("ImageData")}} Objekt.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.rect(10, 10, 100, 100);
ctx.fill();

console.log(ctx.getImageData(50, 50, 100, 100));
// ImageData { width: 100, height: 100, data: Uint8ClampedArray[40000] }
```

## Specifications

| Specification                                                                                                                                            | Status                           | Comment |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-getimagedata", "CanvasRenderingContext2D.getImageData")}} | {{Spec2('HTML WHATWG')}} |         |

## Browser Kompatibilität

{{Compat}}

\[1] Ab {{GeckoRelease("5.0")}} unterstützt `getImageData()` die Angabe von Rechtecken, die die Ränder des \_Canvas-\_Elements überschreiten. Die Pixel, die außerhalb des Elementes liegen, werden als transparentes Schwarz zurückgegeben. Auch wenn die größe des Rechtecks kleiner als eins ist wird jetzt mindestens ein Pixel als Pixel-Daten zurückgegeben.

## Sehen Sie auch

- Das Interface zur Definition, {{domxref("CanvasRenderingContext2D")}}.
- {{domxref("ImageData")}}
- [Pixel manipulation with canvas](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
