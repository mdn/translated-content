---
title: MediaStream
slug: Web/API/MediaStream
---

{{APIRef("Media Capture and Streams")}}

Интерфейс **`MediaStream`** представляет поток медиа данных. Поток состоит из нескольких **треков**, таких как видео и аудио треки. Каждый трек является экземпляром {{domxref("MediaStreamTrack")}}. MediaStream можно получить либо с помощью конструктора, либо вызовом {{domxref("MediaDevices.getUserMedia()")}}.

Некоторые агенты предоставляют подклассы, чтобы привести более точную информацию или расширить функциональность, например {{domxref("CanvasCaptureMediaStream")}}.

## Конструктор

- {{domxref("MediaStream.MediaStream", "MediaStream()")}}
  - : Создаёт и возвращает новый объект MediaStream. Можно создать пустой поток, поток, основанный на существующем или содержащий указанный список треков (массив объектов {{domxref("MediaStreamTrack")}}).

## Свойства

_Этот интерфейс наследует свойства своего родителя,_ _{{domxref("EventTarget")}}._

<!---->

- {{domxref("MediaStream.active")}} {{readonlyinline}}
  - : Возвращает `true`, если `MediaStream` активен, иначе `false`.
- {{domxref("MediaStream.ended")}} {{readonlyInline}}
  - : Возвращает `true`, если достигнут конец потока. Это свойство удалено из спецификации; следует проверять свойство {{domxref("MediaStreamTrack.readyState")}}, которое имеет значение `"ended"` у завершённых треков.

<!---->

- {{domxref("MediaStream.id")}} {{readonlyInline}}
  - : Объект {{domxref("DOMString")}}, содержащий 36 символов универсального уникального идентификатора (UUID) потока.

### Обработчики событий

- {{domxref("MediaStream.onaddtrack")}}
  - : Объект {{event("Event_handlers", "event handler")}}, содержащий действие, которое должно выполняться, когда случается событие {{event("addtrack")}} при добавлении нового объекта {{domxref("MediaStreamTrack")}}.
- {{domxref("MediaStream.onremovetrack")}}
  - : Объект {{event("Event_handlers", "event handler")}}, содержащий действие, которое должно выполняться, когда случается событие {{event("removetrack")}} при удалении объекта {{domxref("MediaStreamTrack")}}.

## Методы

_Этот интерфейс наследует методы своего родителя,_ _{{domxref("EventTarget")}}._

- {{domxref("MediaStream.addTrack()")}}
  - : Сохраняет копию данного объекта {{domxref("MediaStreamTrack")}}. Если данный трек добавлялся в `MediaStream` ранее, ничего не происходит.

<!---->

- {{domxref("MediaStream.clone()")}}
  - : Возвращает точную копию объекта `MediaStream`. Исключение составляет значение {{domxref("MediaStream.id", "id")}}, которое изменится на новое уникальное.

<!---->

- {{domxref("MediaStream.getAudioTracks()")}}
  - : Возвращает список объектов {{domxref("MediaStreamTrack")}}, хранимых в объекте `MediaStream` с атрибутом `kind` имеющим значение `"audio"`. Порядок не определён и может меняться между браузерами, а также между вызовами.

<!---->

- {{domxref("MediaStream.getTrackById()")}}
  - : Возвращает трек с `trackid` соответствующем данному. Если в метод не передано аргументов или трека с данным ID нет, возвращает `null`. Если несколько треков имеют одинаковый ID, возвращает первый из них.
- {{domxref("MediaStream.getTracks()")}}
  - : Возвращает список всех объектов {{domxref("MediaStreamTrack")}}, сохранённых в объекте `MediaStream`, вне зависимости от значения их свойства `kind`. Порядок не определён и может меняться между браузерами, а также между вызовами.

<!---->

- {{domxref("MediaStream.getVideoTracks()")}}
  - : Возвращает список объектов {{domxref("MediaStreamTrack")}}, хранимых в объекте `MediaStream` с атрибутом `kind` имеющим значение `"video"`. Порядок не определён и может меняться между браузерами, а также между вызовами.

<!---->

- {{domxref("MediaStream.removeTrack()")}}
  - : Удаляет данный объект {{domxref("MediaStreamTrack")}}. Если данный трек не сохранён в объекте `MediaStream`, ничего не происходит.

## События

- [`addtrack`](/ru/docs/Web/API/MediaStream/addtrack_event)
  - : Вызывается при добавлении нового объекта {{domxref("MediaStreamTrack")}}.
    Также доступно как свойство [`onaddtrack`](/ru/docs/Web/API/MediaStream/onaddtrack).
- [`removetrack`](/ru/docs/Web/API/MediaStream/removetrack_event)
  - : Вызывается при удалении объекта {{domxref("MediaStreamTrack")}}.
    Также доступно как свойство [`onremovetrack`](/ru/docs/Web/API/MediaStream/onremovetrack).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Использование интерфейса MediaStream
- [WebRTC API](/ru/docs/Web/API/WebRTC_API)
- [Web Audio API](/ru/docs/Web/API/Web_Audio_API)
- {{domxref("MediaStreamTrack")}}
