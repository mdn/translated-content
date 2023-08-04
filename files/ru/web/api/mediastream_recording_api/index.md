---
title: MediaStream Recording API
slug: Web/API/MediaStream_Recording_API
---

{{DefaultAPISidebar("MediaStream Recording")}}

**MediaStream Recording API**, иногда просто называемый _Media Recording API_ или _MediaRecorder API_, тесно связан с [Media Capture and Streams API](/ru/docs/Web/API/Media_Streams_API) и [WebRTC API](/ru/docs/Web/API/WebRTC_API). MediaStream Recording API делает возможным захват данных, сгенерированных {{domxref("MediaStream")}} или {{domxref("HTMLMediaElement")}} объектом для анализа, обработки или сохранения на дисковое пространство. С ним так же удивительно легко работать.

## Базовая концепция

MediaStream Recording API состоит из единого интерфейса, {{domxref("MediaRecorder")}}, который делает всю работу, принимая данные из {{domxref("MediaStream")}} и доставляя их обработчику. Данные поставляются с помощью серии {{event("dataavailable")}} событий, уже в том формате, который был указан, когда `MediaRecorder` был создан. Процесс записи потока прост:

1. Установите {{domxref("MediaStream")}} или {{domxref("HTMLMediaElement")}} (в виде {{HTMLElement("audio")}} или {{HTMLElement("video")}} элемента), чтобы тот служил в качестве источника медиа-данных.
2. Установите {{domxref("MediaRecorder.ondataavailable")}} обработчик событий для {{event("dataavailable")}} событий; он будет вызываться каждый раз, как данные будут доступны.
3. Создайте {{domxref("MediaRecorder")}} объект, указав исходный поток и любые опции по желанию (такие как MIME-тип контейнера или желаемый битрейт его треков).
4. Как только исходная медиа запустится и будет достигнута точка, где вы будете готовы записать видео, вызовите {{domxref("MediaRecorder.start()")}} для начала записи.
5. Ваш {{event("dataavailable")}} обработчик будет вызываться каждый раз, как появляются данные, готовые для выполнения вами над ними ожидаемых операций; событие имеет дата-атрибут, чьё значение {{domxref("Blob")}}, который содержит медиа-данные. Вы можете принудительно вызвать `dataavailable` событие, доставляя тем самым последние данные, чтобы вы могли отфильтровать их, сохранить и тд.
6. Запись останавливается автоматически, когда исходное медиа закончит проигрываться.
7. Вы можете остановить запись в любое время, вызвав {{domxref("MediaRecorder.stop()")}}.

Вы можете так же использовать свойства MediaRecorder объекта для определения состояния процесса записи и его {{domxref("MediaRecorder.pause", "pause()")}} и {{domxref("MediaRecorder.resume", "resume()")}} методы, чтобы остановить и возобновить запись исходной медиа.

Если вам нужно или вы хотите проверить, поддерживается ли определённый MIME-тип, это так же возможно. Просто вызовите {{domxref("MediaRecorder.isMimeTypeSupported()")}}.

Чтобы узнать больше о MediaStream Recording API, смотрите [Using the MediaStream Recording API](/ru/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API), который показывает, как использовать API для записи аудио клипов. Другая статья, [Recording a media element](/ru/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element), описывает, как получить поток из {{HTMLElement("audio")}} или {{HTMLElement("video")}} элементов и использовать захватывающие потоки (в этом случае, запись и сохранение их на локальный диск).

## Ссылки

{{domxref("BlobEvent")}}

{{domxref("MediaRecorder")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using the MediaStream Recording API](/ru/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Recording a media element](/ru/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12)
- {{domxref("navigator.mediaDevices.getUserMedia()")}}
- [HTML5's Media Recorder API in Action on Chrome and Firefox](https://addpipe.com/blog/mediarecorder-api/)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): HTML5 video capture/playback/download using getUserMedia and the MediaRecorder API ([source on GitHub](https://github.com/chrisjohndigital/TutorRoom))
- [FingerSpell](https://www.fingerspell.org/): Sign Language Fingerspelling practice using getUserMedia and the MediaRecorder API to create and download recordings, MediaRecorder API supported desktop browsers only [(source on GitHub](https://github.com/chrisjohndigital/CameraCaptureJS))
- [Simple video recording demo](http://codepen.io/anon/pen/gpmPzm)
- [Advanced media stream recorder sample](https://quickblox.github.io/javascript-media-recorder/sample/)
