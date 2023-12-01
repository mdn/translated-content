---
title: MediaDevices
slug: Web/API/MediaDevices
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Интерфейс **`MediaDevices`** предоставляет доступ к подключённым медиа-устройствам ввода, таким как камера, микрофон, а также к совместному использованию экрана. В сущности, он позволяет получать доступ к любому устройству медиа-данных.

## Свойства

_Наследует свойство родителя {{domxref("EventTarget")}}._

### Обработчики событий

- {{ domxref("MediaDevices.ondevicechange") }}
  - : Это обработчик события {{event("devicechange")}}. Это событие доставляется в объект `MediaDevices` когда медиа-устройство ввода или вывода подключается или отключается на компьютере пользователя.

## Методы

_Наследуемый метод родителя {{domxref("EventTarget")}}._

- {{ domxref("EventTarget.addEventListener()") }}
  - : Регистрирует обработчик событий для определённого типа событий.
- {{ domxref("MediaDevices.enumerateDevices()") }}
  - : Получает массив информации о медиа-устройстве ввода-вывода.
- {{domxref("MediaDevices.getSupportedConstraints()")}}
  - : Возвращает объект, соответствующий {{domxref("MediaTrackSupportedConstraints")}}, указывающий, какие ограничительные свойства поддерживаются в интерфейсе {{domxref("MediaStreamTrack")}}. Смотри [Capabilities and constraints](/ru/docs/Web/API/Media_Capture_and_Streams_API/Constraints), чтобы узнать больше об ограничениях и их использовании.
- {{ domxref("MediaDevices.getUserMedia()") }}
  - : С разрешения пользователя (у пользователя будет запрошено разрешение) включает камеру, микрофон или общий доступ к экрану и предоставляет {{domxref("MediaStream")}}, содержащий входящую видео- и/или звуковую дорожку.

<!---->

- {{ domxref("EventTarget.removeEventListener()") }}
  - : Удаляет обработчик событий.

## Пример

```js
"use strict";

// Помещаем переменные в глобальную область видимости, чтобы сделать их доступными для консоли браузера
var video = document.querySelector("video");
var constraints = (window.constraints = {
  audio: false,
  video: true,
});
var errorElement = document.querySelector("#errorMsg");

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (stream) {
    var videoTracks = stream.getVideoTracks();
    console.log("Получил поток с ограничениями:", constraints);
    console.log("Использую видео-устройство: " + videoTracks[0].label);
    stream.onended = function () {
      console.log("Трансляция закончилась");
    };
    window.stream = stream; // Делаем переменную доступной для консоли браузера
    video.srcObject = stream;
  })
  .catch(function (error) {
    if (error.name === "ConstraintNotSatisfiedError") {
      errorMsg(
        "Разрешение " +
          constraints.video.width.exact +
          "x" +
          constraints.video.height.exact +
          " px не поддерживается устройством.",
      );
    } else if (error.name === "PermissionDeniedError") {
      errorMsg(
        "Разрешения на использование камеры и микрофона не были предоставлены. " +
          "Вам нужно разрешить странице доступ к вашим устройствам," +
          " чтобы демо-версия работала.",
      );
    }
    errorMsg("getUserMedia error: " + error.name, error);
  });

function errorMsg(msg, error) {
  errorElement.innerHTML += "<p>" + msg + "</p>";
  if (typeof error !== "undefined") {
    console.error(error);
  }
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Media Capture and Streams API](/ru/docs/Web/API/Media_Streams_API): API, частью которого является этот интерфейс.
- [WebRTC API](/ru/docs/Web/API/WebRTC_API)
- {{domxref("Navigator.mediaDevices")}}: Возвращает ссылку на объект `MediaDevices`, который можно использовать для доступа к устройствам.
- [CameraCaptureJS:](https://github.com/chrisjohndigital/CameraCaptureJS) HTML5 захват и воспроизведение видео с помощью `MediaDevices` и MediaStream Recording API ([исходный код на GitHub](https://github.com/chrisjohndigital/CameraCaptureJS))
