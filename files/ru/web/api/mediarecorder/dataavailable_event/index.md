---
title: MediaRecorder.ondataavailable
slug: Web/API/MediaRecorder/dataavailable_event
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.ondataavailable`** обработчик события (часть [MediaStream Recording API](/ru/docs/Web/API/MediaStream_Recording_API)) обрабатывает {{event("dataavailable")}} событие, позволяет выполнить код, когда тип данных {{domxref("Blob")}}, представляющий обработанные данные становиться доступным для использования.

Событие `dataavailable` вызывается когда MediaRecorder доставляет медиа данные в ваше приложение для использования. Они представляются в виде объекта типа {{domxref("Blob")}}, содержащего данные. Это происходит в четырёх ситуациях:

- Когда медиа поток завершается, любые мультимедийные данные ещё не доставленные в обработчик `ondataavailable` немедленно передаются в объект {{domxref("Blob")}}.
- При вызове метода {{domxref("MediaRecorder.stop()")}} , порция медиаданных, объем которых был захвачен с момента начала записи или после последнего вызова события `dataavailable` помещаются в объект {{domxref("Blob")}}; после этого захват завершается.
- При вызове метода {{domxref("MediaRecorder.requestData()")}} порция медиаданных, объем которых был захвачен с момента начала записи, или после последнего вызова события `dataavailable` помещаются в вновь созданный объект типа `Blob` , и захват порций медиаданных продолжается уже в этот новый объект `blob`.
- Если свойство `timeslice` передаётся в метод {{domxref("MediaRecorder.start()")}}, который запускает захват порций медиаданных, событие `dataavailable` запускается каждые `timeslice` миллисекунд. Это значит, что каждый объект типа `blob` будет иметь специфический размер (за исключением последнего, который может быть короче, содержащий все, что осталось с момента последнего события ). Поэтому, если метод выглядит так : `recorder.start(1000);` то событие `dataavailable` будет запускаться каждую секунду общего потока медиа захвата, и обработчик события будет вызываться каждую секунду, содержащий в параметре объект типа `blob` , который будет содержать объем порции записи медиаданных продолжительностью в одну секунду. Можно использовать свойство `timeslice` вместе с {{domxref("MediaRecorder.stop()")}} и {{domxref("MediaRecorder.requestData()")}} для создания нескольких объектов типа `blob` одинакового объёма данных , плюс последние короткие объекты типа `blob.`

> **Примечание:** Медиаданные, содержащиеся в объекте типа {{domxref("Blob")}} доступны в свойстве `data` , возвращаемого в параметре объекта события {{event("dataavailable")}}.

## Синтаксис

```
MediaRecorder.ondataavailable = function(event) { ... }
MediaRecorder.addEventListener('dataavailable', function(event) { ... })
```

## Пример

```js
...

  mediaRecorder.onstop = function(e) {
    console.log("data available after MediaRecorder.stop() called.");

    var audio = document.createElement('audio');
    audio.controls = true;
    var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
    var audioURL = window.URL.createObjectURL(blob);
    audio.src = audioURL;
    console.log("recorder stopped");
  }

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }

...
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование интерфейса записи медиапотока](/ru/docs/Web/API/MediaStream_Recording_API)
- [Веб диктофон](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API пример визуализации, от [Chris Mills](https://twitter.com/chrisdavidmills) ([source on Github](https://github.com/mdn/web-dictaphone/).)
- [Демонстрационный пример записи медиапотока](http://simpl.info/mediarecorder/), от [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
