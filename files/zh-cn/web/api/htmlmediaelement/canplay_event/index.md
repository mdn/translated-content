---
title: "HTMLMediaElement: canplay"
slug: Web/API/HTMLMediaElement/canplay_event
---

{{APIRef("HTMLMediaElement")}}

`canplay` 事件在终端可以播放媒体文件时（但估计还没有加载足够的数据来播放媒体直到其结束，即后续可能需要停止以进一步缓冲内容）被触发。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">是否冒泡</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">是否可取消</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">目标</th>
      <td>元素</td>
    </tr>
    <tr>
      <th scope="row">默认行为</th>
      <td>无</td>
    </tr>
    <tr>
      <th scope="row">事件处理器属性</th>
      <td>{{domxref("GlobalEventHandlers.oncanplay")}}</td>
    </tr>
  </tbody>
</table>

## 示例

以下示例展示了如何为媒体元素的 `canplay` 事件添加一个事件监听器，以在该事件触发时发送一条消息。

使用 `addEventListener()`：

```js
const video = document.querySelector("video");

video.addEventListener("canplay", (event) => {
  console.log("Video can start, but not sure it will play through.");
});
```

使用 `oncanplay` 事件处理器属性：

```js
const video = document.querySelector("video");

video.oncanplay = (event) => {
  console.log("Video can start, but not sure it will play through.");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关事件

- 媒体元素 {{domxref("HTMLMediaElement.playing_event", 'playing')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.waiting_event", 'waiting')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.seeking_event", 'seeking')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.seeked_event", 'seeked')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.ended_event", 'ended')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.canplay_event", 'canplay')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.play_event", 'play')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.pause_event", 'pause')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.suspend_event", 'suspend')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.emptied_event", 'emptied')}} 事件
- 媒体元素 {{domxref("HTMLMediaElement.stalled_event", 'stalled')}} 事件

## 参见

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
