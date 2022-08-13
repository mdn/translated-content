---
title: CanvasRenderingContext2D.canvas
slug: Web/API/CanvasRenderingContext2D/canvas
translation_of: Web/API/CanvasRenderingContext2D/canvas
---
{{APIRef}}

Die **`CanvasRenderingContext2D.canvas`** Eigenschaft, Teil der [Canvas API](/de/docs/Web/API/Canvas_API), ist eine Nurlese-Referenz auf das {{domxref("HTMLCanvasElement")}} Objekt, das mit einem gegebenen Kontext assoziiert ist. Sie kann {{jsxref("null")}} sein, wenn kein assoziiertes {{HTMLElement("canvas")}} Element existiert.

## Syntax

    ctx.canvas;

## Beispiele

Wenn dieses {{HTMLElement("canvas")}} Element gegeben ist:

```html
<canvas id="canvas"></canvas>
```

... kannst du eine Referenz auf das Canvas-Element innerhalb von `CanvasRenderingContext2D` herstellen, indem du die `canvas` Eigenschaft verwendest.

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.canvas // HTMLCanvasElement
```

## Spezifikationen

| Spezifikation                                                                                                                            | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-canvas", "CanvasRenderingContext2D.canvas")}} | {{Spec2('HTML WHATWG')}} |         |

## Browser-Kompatibilität

{{Compat("api.CanvasRenderingContext2D.canvas")}}

## Siehe auch

- {{domxref("CanvasRenderingContext2D")}} interface
- [Canvas API](/de/docs/Web/API/Canvas_API)
