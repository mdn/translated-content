---
title: Navigator.getUserMedia()
slug: Web/API/Navigator/getUserMedia
---

{{APIRef("Media Capture and Streams")}}{{deprecated_header}}

The deprecated **`Navigator.getUserMedia()`** method prompts the user for permission to use up to one video input device (such as a camera or shared screen) and up to one audio input device (such as a microphone) as the source for a {{domxref("MediaStream")}}.

If permission is granted, a `MediaStream` whose video and/or audio tracks come from those devices is delivered to the specified success callback. If permission is denied, no compatible input devices exist, or any other error condition occurs, the error callback is executed with a {{domxref("MediaStreamError")}} object describing what went wrong. If the user instead doesn't make a choice at all, neither callback is executed.

> **Примечание:** Это устаревший метод. Вместо этого используйте более новую версию {{domxref ("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia ()")}}. Хотя технически не рекомендуется, эта старая версия колбэка помечена как таковая, поскольку спецификация настоятельно рекомендует использовать более новую версию, возвращающую промис.

## Синтаксис

```
navigator.getUserMedia(constraints, successCallback, errorCallback);
```

### Параметры

- `constraints`
  - : {{domxref("MediaStreamConstraints")}} объект, определяющий типы запрашиваемых медиа, а также любые требования для каждого типа. Подробнее см. В разделе ограничений современного метода {{domxref ("MediaDevices.getUserMedia ()")}}, а также в статье [Возможности, ограничения и настройки.](/ru/docs/Web/API/Media_Streams_API/Constraints)
- `successCallback`

  - : Функция, которая вызывается при утверждении запроса на доступ к мультимедиа. Функция вызывается с одним параметром: объектом {{domxref ("MediaStream")}}, который содержит медиапоток. Затем колбэк может назначить поток желаемому объекту (например, элементу {{HTMLElement ("audio")}} или {{HTMLElement ("video")}}), как показано в следующем примере:

    ```js
    function(stream) {
       var video = document.querySelector('video');
       video.srcObject = stream;
       video.onloadedmetadata = function(e) {
          // Do something with the video here.
       };
    }
    ```

- `errorCallback`
  - : When the call fails, the function specified in the `errorCallback` is invokedwith a {{domxref("MediaStreamError")}} object as its sole argument; this object is is modeled on {{domxref("DOMException")}}. See [Ошибки](#ошибки) below for a list of the errors which can occur.

### Возвращающееся значение

{{domxref("undefined")}}.

### Ошибки

{{page("/en-US/docs/Web/API/MediaDevices/getUserMedia", "Errors")}}

## Примеры

### Width and height (Ширина и высота)

Это пример использования `getUserMedia()` , включая код для работы с префиксами различных браузеров. Обратите внимание, что это устаревший способ сделать это: современные примеры см. В разделе «Примеры» в разделе {{domxref ("MediaDevices.getUserMedia ()")}}.

```js
navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia(
    { audio: true, video: { width: 1280, height: 720 } },
    function (stream) {
      var video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    },
    function (err) {
      console.log("The following error occurred: " + err.name);
    },
  );
} else {
  console.log("getUserMedia not supported");
}
```

## Разрешения

Чтобы использовать `getUserMedia()` в устанавливаемом приложении (например, приложении Firefox OS), вам необходимо указать одно или оба из следующих полей внутри файла манифеста:

```js
"permissions": {
  "audio-capture": {
    "description": "Required to capture audio using getUserMedia()"
  },
  "video-capture": {
    "description": "Required to capture video using getUserMedia()"
  }
}
```

См. Разрешение: аудио-захват и разрешение: видео-захват для получения дополнительной информации.

> **Предупреждение:** New code should use {{domxref("Navigator.mediaDevices.getUserMedia()")}} instead.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- {{domxref("MediaDevices.getUserMedia()")}} that replaces this deprecated method.
- [WebRTC](/ru/docs/WebRTC) - the introductory page to the API
- [MediaStream API](/ru/docs/WebRTC/MediaStream_API) - the API for the media stream objects
- [Taking webcam photos](/ru/docs/WebRTC/taking_webcam_photos) - a tutorial on using `getUserMedia() for taking photos rather than video.`
