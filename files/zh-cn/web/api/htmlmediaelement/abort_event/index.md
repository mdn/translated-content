---
title: "HTMLMediaElement: abort event"
slug: Web/API/HTMLMediaElement/abort_event
---

{{APIRef}}

资源没有被完全加载时就会触发 **`abort`** 事件，但错误不会触发该事件。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/onabort", "onabort")}}
      </td>
    </tr>
  </tbody>
</table>

## 示例

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
