---
title: "HTMLMediaElement: abort event"
slug: Web/API/HTMLMediaElement/abort_event
---

{{APIRef}}

Событие **`abort`** запускается, когда ресурс не был полностью загружен, но не в результате ошибки.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Всплываемость</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Отменяемость</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Интерфейс</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Свойство обработчика событий</th>
      <td>
        {{domxref("GlobalEventHandlers/onabort", "onabort")}}
      </td>
    </tr>
  </tbody>
</table>

## Примеры

```js
const video = document.querySelector("video");
const videoSrc = "https://path/to/video.webm";

video.addEventListener("abort", () => {
  console.log(`Abort loading: ${videoSrc}`);
});

const source = document.createElement("source");
source.setAttribute("src", videoSrc);
source.setAttribute("type", "video/webm");

video.appendChild(source);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
