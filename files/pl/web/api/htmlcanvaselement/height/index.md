---
title: HTMLCanvasElement.height
slug: Web/API/HTMLCanvasElement/height
translation_of: Web/API/HTMLCanvasElement/height
---
{{APIRef("Canvas API")}} Własność **`HTMLCanvasElement.height` **wyrażana jest w dodatniej `liczbie całkowitej `odpowiada za atrybut [`height`](https://developer.mozilla.org/pl/docs/Web/HTML/Element/canvas#attr-height) elemetu HTML [`<canvas>`](/pl/docs/Web/HTML/Element/canvas "The documentation about this has not yet been written; please consider contributing!") i jest interpretowany w pikselach CSS. Jeśli atrybut nie został określony, lub została przypisana do niego nieprawidłowa wartość, np. negatywna, zostanie użyta domyślna wartość `150`. To jedna z dwóch własności kontrolujących wielkość {{HTMLElement("canvas")}}, druga z nich to {{domxref("HTMLCanvasElement.width")}}.

## Składnia

    var pxl = canvas.height;
    canvas.height = pxl;

## Przykłady

Biorąc pod uwagę element {{HTMLElement("canvas")}}:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Można sprawdzić jego wysokość za pomocą kodu:

```js
var canvas = document.getElementById('canvas');
console.log(canvas.height); // 300
```

## Specyfikacja

| Specification                                                                                                                | Status                           | Comment                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "scripting.html#attr-canvas-height", "HTMLCanvasElement.height")}} | {{Spec2('HTML WHATWG')}} | Brak zmian od ostatniego snapshota, {{SpecName('HTML5 W3C')}}            |
| {{SpecName('HTML5.1', "scripting-1.html#attr-canvas-height", "HTMLCanvasElement.height")}}     | {{Spec2('HTML5.1')}}     |                                                                                 |
| {{SpecName('HTML5 W3C', "scripting-1.html#attr-canvas-height", "HTMLCanvasElement.height")}} | {{Spec2('HTML5 W3C')}}     | Snapshot {{SpecName('HTML WHATWG')}} zawierający początkową definicje. |

## Zgodność przeglądarek

{{Compat("api.HTMLCanvasElement.height")}}

## Zobacz też

- Interfejs definiujący tą własność, {{domxref("HTMLCanvasElement")}}.
- Inna własność kontrolujaca wielkość {{HTMLElement("canvas")}}, {{domxref("HTMLCanvasElement.width")}}.
