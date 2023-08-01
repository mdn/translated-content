---
title: "HTMLMediaElement: playing"
slug: Web/API/HTMLMediaElement/playing_event
---

{{APIRef("HTMLMediaElement")}}

`playing` 事件在播放准备开始时（之前被暂停或者由于数据缺乏被暂缓）被触发。

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
      <td>{{domxref("GlobalEventHandlers.onplaying")}}</td>
    </tr>
  </tbody>
</table>

## 示例

以下示例展示了如何为媒体元素的 `playing` 事件添加一个事件监听器，以在该事件触发时发送一条消息。

使用 `addEventListener()`：

```js
const video = document.querySelector("video");

video.addEventListener("playing", (event) => {
  console.log("Video is no longer paused");
});
```

使用 `onplaying` 事件处理器属性：

```js
const video = document.querySelector("video");

video.onplaying = (event) => {
  console.log("Video is no longer paused.");
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
