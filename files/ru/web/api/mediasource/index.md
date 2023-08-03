---
title: MediaSource
slug: Web/API/MediaSource
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

**`MediaSource`** – это интерфейс [Media Source Extensions API](/ru/docs/Web/API/Media_Source_Extensions_API) для предоставления интерактивного источника медиаданных объектам типа {{domxref("HTMLMediaElement")}}.

## Конструктор

- {{domxref("MediaSource.MediaSource", "MediaSource()")}}
  - : Создаёт и возвращает новый объект `MediaSource` не имеющий подключённых буферов данных.

## Свойства

_Наследует свойства родительского интерфейса , {{domxref("EventTarget")}}._

- {{domxref("MediaSource.sourceBuffers")}} {{readonlyInline}}
  - : Возвращает объект типа {{domxref("SourceBufferList")}} содержащий список объектов типа {{domxref("SourceBuffer")}} , связанных непосредственно с текущим `MediaSource`.
- {{domxref("MediaSource.activeSourceBuffers")}} {{readonlyInline}}
  - : Возвращает объект типа {{domxref("SourceBufferList")}} содержащий подмножество объектов типа {{domxref("SourceBuffer")}} хранящих в себе другие объекты типа {{domxref("SourceBuffers")}} — список объектов, предоставляющих доступ к выбранному видео, доступным аудиодорожкам, текстовым данным и тд.
- {{domxref("MediaSource.readyState")}} {{readonlyInline}}
  - : Возвращает enum, отображающий состояние текущего `MediaSource-объекта`, будь то отсутствие подключения к медиа-элементу(`closed`), подключённый и готовый к передаче объектов типа {{domxref("SourceBuffer")}} (open), или подключённый, но с завершённым потоком {{domxref("MediaSource.endOfStream()")}} (`ended`.)
- {{domxref("MediaSource.duration")}}
  - : Возвращает или устанавливает продолжительность предоставляемых медиаданных.

<!---->

<!---->

## Методы

_Наследует свойства родительского интерфейса, {{domxref("EventTarget")}}._

- {{domxref("MediaSource.addSourceBuffer()")}}
  - : Создаёт новый объект типа {{domxref("SourceBuffer")}}, с указанным MIME-типом и добавляет в список `MediaSource`'s {{domxref("SourceBuffers")}}.
- {{domxref("MediaSource.removeSourceBuffer()")}}
  - : Удаляет указанный {{domxref("SourceBuffer")}} из списка {{domxref("SourceBuffers")}}, связанного с текущим `MediaSource-объектом`.
- {{domxref("MediaSource.endOfStream()")}}
  - : Сигнализирует об окончании потока.

## Статичные методы

- {{domxref("MediaSource.isTypeSupported()")}}

  - : Возвращает значение {{domxref("Boolean")}}, поясняющее, поддерживается ли клиентом полученный MIME-тип — если это так, то можно успешно создать объект типа {{domxref("SourceBuffer")}} для этого MIME-типа.

## Примеры

Нижеприведённый простой пример подгружает видео фрагмент за фрагментом так скоро, как может, воспроизводя их "как только так сразу". Этот пример был написан Nick Desaulniers и может быть [просмотрен здесь в виде демо](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html) (также вы можете [загрузить исходный код](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) для дальнейшего изучения.)

```js
var video = document.querySelector("video");

var assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
}

function sourceOpen(_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener("updateend", function (_) {
      mediaSource.endOfStream();
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

function fetchAB(url, cb) {
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.responseType = "arraybuffer";
  xhr.onload = function () {
    cb(xhr.response);
  };
  xhr.send();
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
