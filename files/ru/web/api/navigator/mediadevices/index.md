---
title: Navigator.mediaDevices
slug: Web/API/Navigator/mediaDevices
---

{{APIRef("Media Capture and Streams")}}

Свойство **`Navigator.mediaDevices`** только для чтения, возвращает объект {{domxref("MediaDevices")}}, который предоставляет доступ к подключённым медиа-устройствам ввода, таким как камера и микрофон, а также совместное использование экрана.

## Синтаксис

```
var mediaDevices = navigator.mediaDevices;
```

### Возвращаемое значение

{{domxref("MediaDevices")}} объект синглтон. Как правило, вы просто используете элементы этого объекта напрямую, например с помощью вызова {{domxref("navigator.mediaDevices.getUserMedia()")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- [Media Capture and Streams API](/ru/docs/Web/API/Media_Streams_API): The entry point to the documentation about the entire media stream API.
- [WebRTC API](/ru/docs/Web/API/WebRTC_API): Documentation about the WebRTC API, which is closely related.
