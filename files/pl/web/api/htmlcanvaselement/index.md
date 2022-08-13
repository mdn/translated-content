---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
translation_of: Web/API/HTMLCanvasElement
---
{{APIRef("Canvas API")}}

Interfejs HTMLCanvasElement zapewnia własności i metody pozwalające na manipulację wygladem i prezentacją elementów canvas. Dodatkowo HTMLCanvasElement dziedziczy własności i metody interfejsu HTMLElement.

{{InheritanceDiagram(600, 120)}}

## Własności

_Własności dziedziczone są od rodzica, {{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.height")}}
  - : Wyrażany w dodatniej `liczbie całkowitej `odpowiada za atrybut {{htmlattrxref("height", "canvas")}} elemetu HTML {{HTMLElement("canvas")}} i jest interpretowany w pikselach CSS. Jeśli atrybut nie został określony, lub została przypisana do niego nieprawidłowa wartość, np. negatywna, zostanie użyta domyślna wartość `150`.
- {{domxref("HTMLCanvasElement.width")}}
  - : Wyrażany w dodatniej `liczbie całkowitej `odpowiada za atrybut {{htmlattrxref("width", "canvas")}} elemetu HTML {{HTMLElement("canvas")}} i jest interpretowany w pikselach CSS. Jeśli atrybut nie został określony, lub została przypisana do niego nieprawidłowa wartość, np. negatywna, zostanie użyta domyślna wartość `300`.

## Metody

_Metody dziedziczone są od rodzica, _{{domxref("HTMLElement")}}.\_\_

- {{domxref("HTMLCanvasElement.captureStream()")}} {{experimental_inline}}
  - : Zwraca {{domxref("CanvasCaptureMediaStream")}}, który jest wideo w czasie rzeczywistym z powierzchni elementu {{HTMLElement("canvas")}}.
- {{domxref("HTMLCanvasElement.getContext()")}}
  - : Zwraca pole robocze elementu {{HTMLElement("canvas")}}, lub null jeśli kontekst nie jest wspierany. Pole robocze pozwala na rysowanie na {{HTMLElement("canvas")}}. Wywołanie getContext z atrybutem `"2d"` zwraca obiekt {{domxref("CanvasRenderingContext2D")}}, natomiast wywołanie z `"webgl"` (lub `"experimental-webgl"`) zwróci obiekt {{domxref("WebGLRenderingContext")}}. Ten kontekst jest dostepny tylko w przeglądarkach obsługujących WebGL.

<!---->

- {{domxref("HTMLCanvasElement.toDataURL()")}}
  - : Zwraca data-URL reprezentujacy obraz w formacie określonym przez parametr `type` (domyślnie `png`). Zwracany obraz jest w rozdzielczości 96dpi.
- {{domxref("HTMLCanvasElement.toBlob()")}}
  - : Tworzy obiekt {{domxref("Blob")}} reprezentujący obraz zawierający się w {{HTMLElement("canvas")}}; ten plik może być buforowany z dysku lub przechowywany w pamięci wedle uznania `user agent`.
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} {{experimental_inline}}
  - : Przenosi kontrolę do obiektu {{domxref ("OffscreenCanvas")}}, w głównym wątku lub w module roboczym.
- {{domxref("HTMLCanvasElement.mozGetAsFile()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Zwraca obiekt {{domxref("File")}} reprezentujący obraz zawarty w {{HTMLElement("canvas")}}; plik oparty jest na pamięci, posiada określoną `nazwę`. Jeśli `typ` nie został okreslony, domyslnie jest to `image/png`.

## Specyfikacja

| Specyfikacja                                                                                                                                         | Status                                               | Komentarz                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Media Capture DOM Elements', '#html-media-element-media-capture-extensions', 'HTMLCanvasElement')}} | {{Spec2('Media Capture DOM Elements')}} | Dodano metodę `captureStream()`.                                                                                                                           |
| {{SpecName('HTML WHATWG', "#the-canvas-element", "HTMLCanvasElement")}}                                                     | {{Spec2('HTML WHATWG')}}                     | Metoda `getContext()` zwraca teraz {{domxref("RenderingContext")}} zamiast obiektu nieprzeźroczystegoDodano metodę `transferControlToOffscreen()` |
| {{SpecName('HTML5.1', "scripting-1.html#the-canvas-element", "HTMLCanvasElement")}}                                     | {{Spec2('HTML5.1')}}                         |                                                                                                                                                            |
| {{SpecName('HTML5 W3C', "scripting-1.html#the-canvas-element", "HTMLCanvasElement")}}                                     | {{Spec2('HTML5 W3C')}}                         | Definicja początkowa.                                                                                                                                      |

## Zgodność przegladarek

{{Compat("api.HTMLCanvasElement")}}

## Zobacz też

- HTML element implementing this interface: {{HTMLElement("canvas")}}.
