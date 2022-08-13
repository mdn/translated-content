---
title: HTMLCanvasElement.captureStream()
slug: Web/API/HTMLCanvasElement/captureStream
translation_of: Web/API/HTMLCanvasElement/captureStream
---
{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}} Metoda **`HTMLCanvasElement`\*\***`.captureStream()`\*\* zwraca {{domxref("CanvasCaptureMediaStream")}} który jest wideo w czasie rzeczywistym z powierzchni elementu [`<canvas>`](/pl/docs/Web/HTML/Element/canvas "The documentation about this has not yet been written; please consider contributing!").

## Składnia

    MediaStream = canvas.captureStream(frameRate);

### Parametry

- `frameRate` {{optional_inline}}
  - : Liczba zmiennoprzecinkowa podójnej precyzji wskazuje na częstotliwość przechwytywania każdej klatki. W przypadku braku parametru nowa klatka będzie przechwytywana przy każdej zmianie {{HTMLElement("canvas")}}; jeśli ustawiona na `0`, przechwycona zostanie pojedyńcza klatka.

### Wartość zwrtona

Odniesienie do obiektu {{domxref("MediaStream")}}.

## Przykład

```js
// Zlokalizuj element canvas do przechwycenia
var canvasElt = document.querySelector('canvas');

// Rozpocznij stream
var stream = canvasElt.captureStream(25); // 25 FPS

// Wykonuj na nim czynności
// Np. Prześlij stream na inny komputer używając RTCPeerConnection
innyKomputer.addStream(stream);
```

## Specyfikacja

| Specification                                                                                                                                                                                                            | Status                                               | Comment              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | -------------------- |
| {{SpecName('Media Capture DOM Elements', '#widl-HTMLCanvasElement-captureStream-CanvasCaptureMediaStream-double-frameRate', 'HTMLCanvasElement.captureStream()')}} | {{Spec2('Media Capture DOM Elements')}} | Definicja początkowa |

## Zgodność przeglądarek

{{Compat("api.HTMLCanvasElement.captureStream")}}

## Zobacz też

- {{domxref("CanvasCaptureMediaStream")}}, interfejs do którego należy.
- {{domxref("HTMLMediaElement.captureStream()")}}, pozwala na przechwytywanie stream-u z  elementu HTML.
- {{domxref("MediaStream")}}
- {{domxref("Media Capture and Streams API")}}
