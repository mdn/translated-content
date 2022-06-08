---
title: 'HTMLMediaElement: ended 事件'
slug: Web/API/HTMLMediaElement/ended_event
translation_of: Web/API/HTMLMediaElement/ended_event
---
{{APIRef("HTMLMediaElement")}}

`ended` 事件会在媒体回放或者媒体流因达到了媒体的未尾或者没有更多可用的数据而停止时被触发。

该事件会在回放或媒体文件播放结束时，在{{domxref("HTMLMediaElement", "媒体元素")}}（{{HTMLElement("audio")}} 和 {{HTMLElement("video")}}）上触发。

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
      <td>{{domxref("GlobalEventHandlers.onended")}}</td>
    </tr>
  </tbody>
</table>

> **备注：** 该事件也在 [Media Capture and Streams](/zh-CN/docs/Web/API/Media_Streams_API) 和 [Web Audio](/zh-CN/docs/Web/API/Web_Audio_API) 这两个 API 中定义。

## 示例

以下示例展示了如何为媒体元素的 `ended` 事件添加一个事件监听器，以在该事件触发时发送一条消息。

使用 `addEventListener()`：

```js
const video = document.querySelector('video');

video.addEventListener('ended', (event) => {
  console.log('Video stopped either because 1) it was over, ' +
      'or 2) no further data is available.');
});
```

使用 `onended` 事件处理器属性：

```js
const video = document.querySelector('video');

video.onended = (event) => {
  console.log('Video stopped either because 1) it was over, ' +
      'or 2) no further data is available.');
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
- [Media Capture and Streams](/zh-CN/docs/Web/API/Media_Streams_API)

  - [Media Capture and Streams](/zh-CN/docs/Web/API/Media_Streams_API)[: ended 事件](/zh-CN/docs/Web/API/MediaStreamTrack/ended_event)

- [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)

  - [Web audio API: ended 事件](/zh-CN/docs/Web/API/AudioScheduledSourceNode/ended_event)
