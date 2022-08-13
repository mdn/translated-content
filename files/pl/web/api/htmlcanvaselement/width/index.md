---
title: HTMLCanvasElement.width
slug: Web/API/HTMLCanvasElement/width
translation_of: Web/API/HTMLCanvasElement/width
---
{{APIRef("Canvas API")}}

Własność **`HTMLCanvasElement.width `**wyrażana jest w dodatniej `liczbie całkowitej `odpowiada za atrybut {{htmlattrxref("width", "canvas")}} elemetu HTML {{HTMLElement("canvas")}} i jest interpretowana w pikselach CSS. Jeśli atrybut nie został określony, lub została przypisana do niego nieprawidłowa wartość, np. negatywna, zostanie użyta domyślna wartość `300`.

To jedna z dwóch własności kontrolujących wielkość {{HTMLElement("canvas")}}, druga z nich to {{domxref("HTMLCanvasElement.height")}}.

## Składnia

    var pxl = canvas.width;
    canvas.width = pxl;

## Przykłady

Wykorzystując element {{HTMLElement("canvas")}}:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

You can get the width of the canvas with the following code:

Informacje o szerokości {{HTMLElement("canvas")}} można uzyskać za pomocą kodu:

```js
var canvas = document.getElementById('canvas');
console.log(canvas.width); // 300
```

## Specyfikacja

| Specification                                                                                                            | Status                           | Comment                                                                         |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "scripting.html#attr-canvas-width", "HTMLCanvasElement.width")}} | {{Spec2('HTML WHATWG')}} | Brak zmian od ostatniego snapshota, {{SpecName('HTML5 W3C')}}            |
| {{SpecName('HTML5.1', "scripting-1.html#attr-canvas-width", "HTMLCanvasElement.width")}}     | {{Spec2('HTML5.1')}}     |                                                                                 |
| {{SpecName('HTML5 W3C', "scripting-1.html#attr-canvas-width", "HTMLCanvasElement.width")}} | {{Spec2('HTML5 W3C')}}     | Snapshot {{SpecName('HTML WHATWG')}} zawierający początkową definicje. |

## Zgodność przegladarek

{{Compat("api.HTMLCanvasElement.width")}}

## Zobacz też

- Interfejs definiujący tą własność, {{domxref("HTMLCanvasElement")}}.
- Inna własność kontrolujaca wielkość {{HTMLElement("canvas")}}, {{domxref("HTMLCanvasElement.height")}}.
