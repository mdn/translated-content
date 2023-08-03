---
title: CanvasCaptureMediaStreamTrack
slug: Web/API/CanvasCaptureMediaStreamTrack
---

{{APIRef ("захват мультимедиа и потоки")}}

**`CanvasCaptureMediaStreamTrack`** Интерфейс представляет собой видеодорожку, содержащуюся в {{domxref ("MediaStream")}}, генерируемую из {{HTMLElement ("canvas")}} после вызова {{domxref ("HTMLCanvasElement.captureStream ()")}}.

Часть [API захвата мультимедиа и потоков](/ru/docs/Web/API/Media_Streams_API).

## Свойства

_Этот интерфейс наследует свойства своего родителя, {{domxref ("MediaStreamTrack")}}._

- {{domxref ("CanvasCaptureMediaStreamTrack.холст")}} {{readonlyInline}}
  - : Возвращает объект {{domxref ("HTMLCanvasElement")}}, поверхность которого захватывается в режиме реального времени.

## Методы

_Этот интерфейс наследует методы своего родителя, {{domxref ("MediaStreamTrack")}}._

- {{domxref ("CanvasCaptureMediaStreamTrack.requestFrame()")}}
  - : Вручную заставляет кадр быть захваченным и отправленным в поток. Это позволяет приложениям, которые хотят непосредственно указать время захвата кадра, сделать это, если они указали a `frameRate` из 0 при вызове {{domxref ("HTMLCanvasElement.captureStream", "captureStream()")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотреть также

- {{domxref ("HTMLCanvasElement.captureStream ()")}} чтобы начать захват кадров с холста
