---
title: MediaRecorder
slug: Web/API/MediaRecorder
---

{{APIRef("Media Recorder API")}}

The **`MediaRecorder`** это интерфейс [MediaStream Recording API](/ru/docs/Web/API/MediaStream_Recording_API) представляющий функциональность для простой записи медиа. Создаётся с использованием {{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}} конструктора.

## Конструктор

- {{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}}
  - : Создаёт новый объект `MediaRecorder`, получающий {{domxref("MediaStream")}} для записи. Доступны такие параметры, как установка типа MIME контейнера (`"video/webm","video/mp4"` и другие) и скорости передачи аудио-и видеодорожек или одной общей скорости.

## Свойства

- {{domxref("MediaRecorder.mimeType")}} {{readonlyInline}}
  - : Возвращает тип MIME, который был выбран в качестве контейнера записи для объекта MediaRecorder при его создании.
- {{domxref("MediaRecorder.state")}} {{readonlyInline}}
  - : Возвращает текущее состояние объекта `MediaRecorder` (`inactive`, `recording`, или `paused`.)
- {{domxref("MediaRecorder.stream")}} {{readonlyInline}}
  - : Возвращает поток который был передан конструктору при создании объекта `MediaRecorder`
- {{domxref("MediaRecorder.ignoreMutedMedia")}}
  - : Показывает записывает ли `MediaRecorder` дорожку {{domxref("MediaStreamTrack")}} если она отключена. Если атрибут равен `false`, `MediaRecorder` будет записывать тишину для аудио и чёрные кадры для видео. По умолчанию равно `false`
- {{domxref("MediaRecorder.videoBitsPerSecond")}} {{readonlyInline}}
  - : Возвращает скорость кодирования видео. Она может отличаться от скорости, определённой в конструкторе (если была предоставлена).
- {{domxref("MediaRecorder.audioBitsPerSecond;")}} {{readonlyInline}}
  - : Возвращает скорость кодирования аудио. Она может отличаться от скорости, определённой в конструкторе (если была предоставлена).

## Методы

- {{domxref("MediaRecorder.canRecordMimeType()", "MediaRecorder.isTypeSupported()")}}
  - : Возвращает {{domxref("Boolean")}} значение показывающее поддерживается ли MIME тип текущим user agent.
- {{domxref("MediaRecorder.pause()")}}
  - : Приостанавливает запись медиа.
- {{domxref("MediaRecorder.requestData()")}}
  - : Запрашивает {{domxref("Blob")}} содержащий сохранённые данные полученные с начала записи (или с последнего вызова `requestData()`). После вызова этого метода, запись продолжается, но в новый `Blob.`
- {{domxref("MediaRecorder.resume()")}}
  - : Возобновляет запись медиа после паузы.
- {{domxref("MediaRecorder.start()")}}
  - : Начинает запись медиа. В этот метод можно передать аргумент `timeslice` со значением в миллисекундах. Если он определён, то медиа будет записываться в отдельные блоки заданной продолжительности, вместо записи в один большой блок.
- {{domxref("MediaRecorder.stop()")}}
  - : Останавливает запись, после чего запускается событие {{event("dataavailable")}}, содержащее последний `Blob` сохранённых данных.

## Обработчики событий

- {{domxref("MediaRecorder.ondataavailable")}}
  - : Вызывает обработчик {{event("dataavailable")}} события, которое запускается раз в `timeslice` миллисекунд (или, если `timeslice` не был задан - по окончанию записи). Событие типа {{domxref("BlobEvent")}}, сдержит записанное медиа в {{domxref("BlobEvent.data", "data")}}. Вы можете использовать обработчик для сбора и других действий в зависимости от полученных данных.
- {{domxref("MediaRecorder.onerror")}}
  - : {{event("Event_handlers", "event handler")}} вызывается для обработки события {{event("recordingerror")}}, включающего отчёт об ошибках во время записи. Это фатальные ошибки, приводящие к остановке записи. Полученное событие основано на интерфейсе {{domxref("MediaRecorderErrorEvent")}}, свойство которого {{domxref("MediaRecorderErrorEvent.error", "error")}} содержит {{domxref("DOMException")}} описывающие произошедшие ошибки.
- {{domxref("MediaRecorder.onpause")}}
  - : {{event("Event_handlers", "event handler")}} вызывается для обработки события {{event("pause")}}, случившегося во время приостановки медиа.
- {{domxref("MediaRecorder.onresume")}}
  - : {{event("Event_handlers", "event handler")}} вызывается для обработки события {{event("resume")}}, случившегося во время возобновления записи.
- {{domxref("MediaRecorder.onstart")}}
  - : {{event("Event_handlers", "event handler")}}вызывается для обработки события {{event("start")}}, случившегося во время начала записи.
- {{domxref("MediaRecorder.onstop")}}
  - : {{event("Event_handlers", "event handler")}} вызывается для обработки события {{event("stop")}}, случившегося во время завершения записи, а так же при окончании {{domxref("MediaStream")}} — или после вызова {{domxref("MediaRecorder.stop()")}}

## Пример

```
navigator.getUserMedia = (navigator.getUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia ||
                          navigator.webkitGetUserMedia);


if (navigator.getUserMedia) {
  console.log('getUserMedia supported.');

  var constraints = { audio: true };
  var chunks = [];

  var onSuccess = function(stream) {
    var mediaRecorder = new MediaRecorder(stream);

    visualize(stream);

    record.onclick = function() {
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log("recorder started");
      record.style.background = "red";
      record.style.color = "black";
    }

    stop.onclick = function() {
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
      console.log("recorder stopped");
      record.style.background = "";
      record.style.color = "";
      // mediaRecorder.requestData();
    }

    mediaRecorder.onstop = function(e) {
      console.log("data available after MediaRecorder.stop() called.");

      var clipName = prompt('Enter a name for your sound clip');

      var clipContainer = document.createElement('article');
      var clipLabel = document.createElement('p');
      var audio = document.createElement('audio');
      var deleteButton = document.createElement('button');

      clipContainer.classList.add('clip');
      audio.setAttribute('controls', '');
      deleteButton.innerHTML = "Delete";
      clipLabel.innerHTML = clipName;

      clipContainer.appendChild(audio);
      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(deleteButton);
      soundClips.appendChild(clipContainer);

      audio.controls = true;
      var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      chunks = [];
      var audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;
      console.log("recorder stopped");

      deleteButton.onclick = function(e) {
        evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
      }
    }

    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    }
  }

  var onError = function(err) {
    console.log('The following error occured: ' + err);
  }

  navigator.getUserMedia(constraints, onSuccess, onError);
} else {
   console.log('getUserMedia not supported on your browser!');
}
```

> **Примечание:** Код выше был взят из демо Web Dictaphone. Некоторые строчки были пропущены для краткости. Полный код смотрите [здесь](https://github.com/mdn/web-dictaphone/)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Ещё по теме

- [Использование MediaRecorder API](/ru/docs/Web/API/MediaRecorder_API/Using_the_MediaRecorder_API)
- [Web Dictaphone](https://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on Github](https://github.com/mdn/web-dictaphone/).)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
