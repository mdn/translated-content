---
title: HTMLCanvasElement.captureStream()
slug: Web/API/HTMLCanvasElement/captureStream
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

**`HTMLCanvasElement.captureStream()`** метод возвращает {{domxref("CanvasCaptureMediaStream")}}, который является видеозахватчиком (оцифровщиком) в реальном времени на поверхности canvas.

## Синтаксис

```
MediaStream = canvas.captureStream(frameRate);
```

### Параметры

- `frameRate` {{optional_inline}}
  - : Число двойной точности с плавающей точкой, указывающее частоту захвата каждого фрейма. Если не установлено, новый фрейм будет захватываться каждый раз, как canvas изменится; `если установлено в 0`, будет захвачен один фрейм.

### Возвращаемое значение

Ссылка на {{domxref("MediaStream")}} объект.

### Исключения

- **NotSupportedError**
  - : Параметр `frameRate` имеет отрицательное значение.

## Пример

```js
// Поиск элемента canvas для захвата
var canvasElt = document.querySelector("canvas");

// Получение потока
var stream = canvasElt.captureStream(25); // 25 FPS

// Делать что-то с потоком
// например, отправить что-то другому компьютеру, используя RTCPeerConnection
//      pc это RTCPeerConnection, созданное где-то ещё
pc.addStream(stream);
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("CanvasCaptureMediaStream")}}, the interface it belongs to.
- {{domxref("HTMLMediaElement.captureStream()")}}, which allows capturing a stream from a media element.
- {{domxref("MediaStream")}}
- {{domxref("Media Capture and Streams API")}}
