---
title: MediaRecorder.MediaRecorder()
slug: Web/API/MediaRecorder/MediaRecorder
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder()`** конструктор {{domxref("MediaRecorder")}} объекта который будет делать запись переданного {{domxref("MediaStream")}}.

## Синтаксис

```
var mediaRecorder = new MediaRecorder(stream[, options]);
```

### Параметры

- **`stream`**
  - : Объект потока {{domxref("MediaStream")}} источника из которого будет производиться запись. Может быть потоком, созданным {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} или {{HTMLElement("audio")}}, {{HTMLElement("video")}} или {{HTMLElement("canvas")}} элементами.
- **`options`** {{optional_inline}}

  - : Объект, содержащий следующие свойства:

    - `mimeType`: `mime` тип, определяет формат результата записи, который нужно использовать в качестве контейнера для создаваемого объекта `MediaRecorder`. Можно просто указать формат контейнера, а браузер сам выберет нужный кодек для записи аудио/видео, или используйте [параметр codecs](/ru/docs/Web/Media/Formats/codecs_parameter) или параметр `profiles` для расширения информации об использовании и тонкой конфигурации кодеков. Приложения, предварительно, могут проверять поддержку браузерами определённого типа из свойства `mimeType` , вызывая метод {{domxref("MediaRecorder.isTypeSupported()")}}.
    - `audioBitsPerSecond`: Скорость записи медиа данных аудио.
    - `videoBitsPerSecond`: Скорость записи медиа данных видео.
    - `bitsPerSecond`: Скорость записи медиаданных аудио и видео. Может определяться вместо верхних двух. Если определяется вместе с одним из свойств выше, имеет меньший приоритет, и используется вместо отсутствующей настройки выше..

    > **Примечание:** Если значения битов в секунду не указаны для видео и / или аудио, для видео по умолчанию принимается значение 2,5 Мбит / с, а для аудио по умолчанию используется адаптивный режим, в зависимости от частоты дискретизации и количества каналов.

### Исключения

- `NotSupportedError`
  - : Определяет MIME тип, не поддерживающийся браузером.

## Пример

В этом примере показано, как создать медиа рекордер для указанного потока, чья скорость передачи звука составляет 128 Кбит / с, а скорость передачи видео - 2,5 Мбит / с. Записанные мультимедийные данные будут храниться в контейнере MP4 (поэтому, если вы соберёте порции мультимедийных данных и сохраните их на диск, они будут в файле с разрешением MP4).

```js
...

if (navigator.mediaDevices.getUserMedia) {
  var constraints = { audio: true, video: true };
  var chunks = [];

  var onSuccess = function(stream) {
    var options = {
      audioBitsPerSecond : 128000,
      videoBitsPerSecond : 2500000,
      mimeType : 'video/mp4'
    }
    var mediaRecorder = new MediaRecorder(stream,options);
    m = mediaRecorder;

...
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование MediaRecorder API](/ru/docs/Web/API/MediaRecorder_API/Using_the_MediaRecorder_API)
- [Веб диктофон](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on Github](https://github.com/mdn/web-dictaphone/).)
- [simpl.info MediaStream Recording demo](http://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.mediaDevices.getUserMedia()")}}
