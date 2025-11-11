---
title: Media Session API
slug: Web/API/Media_Session_API
---

{{DefaultAPISidebar("Media Session API")}}

API Media Session даёт разработчику возможность настроить уведомление о медиа. С помощью него можно предоставить метаданные о проигрываемых приложением медиа, а также позволяет приложению реагировать на команды управления воспроизведением. Смысл данного интерфейса в том, чтобы пользователь мог просматривать и управлять медиаконтентом, не переходя на страницу, где происходит воспроизведение.

## Принципы и использование Media Session

Интерфейс {{domxref("MediaMetadata")}} позволяет приложению передавать метаданные о воспроизводимом контенте браузеру и ОС. Примеры таких метаданных: название, исполнитель, альбом и обложка. Данная информация может отображаться в медиацентре, блоке уведомлений или на экране блокировки.

Интерфейс {{domxref("MediaSession")}} позволяет пользователям контролировать воспроизведение с помощью элементов управления браузера. Взаимодействие с этими элементами также вызывает события в приложении. Так как этот API может использоваться сразу несколькими страницами, браузер контролирует, какая страница получит события. Браузер предоставляет поведение по умолчанию, если оно не было переопределено страницами.

## Работа с Media Session API

Главный интерфейс Media Session API — {{domxref("MediaSession")}}. Не нужно создавать собственный экземпляр `MediaSession`, доступ к API осуществляется через свойство {{domxref("navigator.mediaSession")}}. Например, следующий код укажет, что страница воспроизводит медиа в данный момент:

```js
navigator.mediaSession.playbackState = "playing";
```

## Интерфейсы

- {{domxref("MediaMetadata")}}
  - : Позволяет веб-странице предоставить метаданные о воспроизведении для показа в интерфейсе платформы.
- {{domxref("MediaSession")}}
  - : Позволяет странице определить собственные обработчики стандартных медиа-событий.

## Объекты

- {{domxref("MediaImage")}}
  - : Объект `MediaImage` содержит информацию об отображаемой картинке. Чаще всего этим изображением является обложка или постер.
- {{domxref("MediaPositionState")}}
  - : Содержит информацию о длине трека, месте и скорости воспроизведения, передаваемую с помощью метода {{domxref("MediaSession.setPositionState", "setPositionState()")}}.
- {{domxref("MediaSessionActionDetails")}}
  - : Предоставляет информацию, необходимую для выполнения запрошенного действия, например тип действия или позицию перемотки.

## Примеры

Данный пример демонстрирует работу и определение доступности Media Session API. Также, он передаёт метаданные и определяет собственные обработчики событий:

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Unforgettable",
    artist: "Nat King Cole",
    album: "The Ultimate Collection (Remastered)",
    artwork: [
      {
        src: "https://dummyimage.com/96x96",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/128x128",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/256x256",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/384x384",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  });

  navigator.mediaSession.setActionHandler("play", function () {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("pause", function () {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekbackward", function () {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekforward", function () {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("previoustrack", function () {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("nexttrack", function () {
    /* Code excerpted. */
  });
}
```

Некоторые браузеры отключают автовоспроизведение медиаэлементов на мобильных устройствах и требуют действий пользователя для начала воспроизведения. Этот пример добавит обработчик события `pointerup` для кнопки воспроизведения на странице, который начнёт работу с медиасессией:

```js
playButton.addEventListener("pointerup", function (event) {
  var audio = document.querySelector("audio");

  // Пользователь нажал кнопку, начинаем воспроизведение...
  audio
    .play()
    .then((_) => {
      /* Настройка элементов управления (показана выше). */
    })
    .catch((error) => {
      console.log(error);
    });
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
