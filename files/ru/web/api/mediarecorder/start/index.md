---
title: MediaRecorder.start()
slug: Web/API/MediaRecorder/start
---

{{APIRef("Media Recorder API")}}

Метод **`MediaRecorder.start()`** (часть [MediaRecorder API](/ru/docs/Web/API/MediaRecorder_API)) используется для начала захвата медиа {{domxref("Blob")}}.

When the `start()` method is invoked, the UA queues a task that runs the following steps:

1. If the {{domxref("MediaRecorder.state")}} is not "inactive", raise a DOM `InvalidState` error and terminate these steps. if the {{domxref("MediaRecorder.state")}} is "inactive", continue on to the next step.
2. Set the {{domxref("MediaRecorder.state")}} to "recording" and wait until media becomes available from the `stream` passed into {{domxref("Navigator.getUserMedia")}}.
3. Once data becomes available, raise a {{domxref("MediaRecorder.start")}} event and start gathering the data into a {{domxref("Blob")}} (see [FILE-API](https://dvcs.w3.org/hg/dap/raw-file/default/media-stream-capture/MediaRecorder.html#bib-FILE-API)).
4. If the `timeSlice` argument has been provided, once that many milliseconds of data have been collected — or a minimum time slice imposed by the UA, whichever is greater — raise a {{domxref("MediaRecorder.dataavailable")}} event containing the Blob of collected data, and start gathering a new Blob of data. If `timeSlice` has not been provided, continue gathering data into the original Blob.
5. When the `stream` is ended, set {{domxref("MediaRecorder.state")}} to "inactive" and stop gathering data.
6. Raise a {{domxref("MediaRecorder.dataavailable")}} event containing the Blob of data.
7. Raise a {{domxref("MediaRecorder.stop")}} event.

> **Примечание:** If the browser is unable to start recording or continue recording, it _will_ raise a {{domxref("DOMError")}} event, followed by a {{domxref("MediaRecorder.dataavailable")}} event containing the Blob it has gathered, followed by the {{domxref("MediaRecorder.stop")}} event.

## Синтаксис

```
MediaRecorder.start(timeslice)
```

### Параметры

- `timeslice` {{optional_inline}}
  - : Этот параметр принимает значение в миллисекундах, и переопределяет длину куска захвата медиа для возвращения в каждом Blob. Если не указан, то все медиа данные будут занесены в один Blob, только если не был вызван метод {{domxref("MediaRecorder.requestData")}}.

### Ошибки

An `InvalidState` error is raised if the `start()` method is called while the `MediaRecorder` object's {{domxref("MediaRecorder.state")}} is not "inactive" — it makes no sense to start media capture if it is already happening.

## Пример

```js
...

  record.onclick = function() {
    mediaRecorder.start();
    console.log("рекордер запущен");
  }

...
```

## Specifications

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование MediaRecorder API](/ru/docs/Web/API/MediaRecorder_API/Using_the_MediaRecorder_API)
- [Веб-диктофон](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API от [Chris Mills](https://twitter.com/chrisdavidmills) ([исходники на Github](https://github.com/mdn/web-dictaphone/).)
- [simpl.info Пример использования MediaStream](http://simpl.info/mediarecorder/) от [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
