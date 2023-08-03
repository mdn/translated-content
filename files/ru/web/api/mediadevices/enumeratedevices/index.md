---
title: MediaDevices.enumerateDevices()
slug: Web/API/MediaDevices/enumerateDevices
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Метод **`MediaDevices.enumerateDevices()`** собирает информацию о медиа-устройствах ввода и вывода, доступных в системе.

## Синтаксис

```
navigator.mediaDevices.enumerateDevices()
.then(function(MediaDeviceInfo) { ... })
```

### Возвращаемое значение

Возвращает {{ domxref("Promise") }} который, если выполнится успешно, вернёт массив экземпляров {{domxref("MediaDeviceInfo")}} , которые содержат информацию о доступных медиа-устройствах ввода и вывода.

## Пример

Ниже, пример, использующий метод `mediaDevices.enumerateDevices()`.

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() не поддерживается.");
  return;
}

// Перечисление в цикле камер и микрофонов

navigator.mediaDevices
  .enumerateDevices()
  .then(function (devices) {
    devices.forEach(function (device) {
      console.log(
        device.kind + ": " + device.label + " id = " + device.deviceId,
      );
    });
  })
  .catch(function (err) {
    console.log(err.name + ": " + err.message);
  });
```

результат перечисления в цикле:

```
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

или, если один или более объектов {{domxref("MediaStream")}} активны, или получены постоянные разрешения:

```
videoinput: FaceTime HD Camera (Built-in) id=csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: default (Built-in Microphone) id=RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: Built-in Microphone id=r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

## Разрешения

Что бы использовать метод `enumerateDevices()` в устанавливаемом приложении (к примеру в [Firefox OS приложение](/en-US/Apps/Build/Building_apps_for_Firefox_OS/Firefox_OS_app_beginners_tutorial)), необходимо указать оба поля внутри файла манифеста приложения:

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

Смотрите также : [разрешение: аудио захват](/en-US/Apps/Developing/App_permissions#audio-capture) and [разрешение : видео захват](/en-US/Apps/Developing/App_permissions#video-capture) в продолжение темы.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [navigator.mediaDevices.getUserMedia](/ru/docs/Web/API/MediaDevices/getUserMedia)
- [WebRTC](/ru/docs/WebRTC) - the introductory page to the API
- [MediaStream API](/ru/docs/WebRTC/MediaStream_API) - the API for the media stream objects
- [Taking webcam photos](/ru/docs/WebRTC/taking_webcam_photos) - a tutorial on using `getUserMedia() for taking photos rather than video.`
