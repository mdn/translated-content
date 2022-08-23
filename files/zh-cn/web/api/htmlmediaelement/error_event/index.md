---
title: 'HTMLMediaElement: error event'
slug: Web/API/HTMLMediaElement/error_event
---
{{APIRef}}

事件 **`error`** 会在因为一些错误（如网络连接错误）导致无法加载资源的时候触发。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">起泡</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">可取消</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">事件处理器属性</th>
      <td>
        {{domxref("GlobalEventHandlers/onerror", "onerror")}}
      </td>
    </tr>
  </tbody>
</table>

## 示例

```js
const video = document.querySelector('video');
const videoSrc = 'https://path/to/video.webm';

video.addEventListener('error', () => {
  console.error(`Error loading: ${videoSrc}`);
});

video.setAttribute('src', videoSrc);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.HTMLMediaElement.error_event")}}

## 更多

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
