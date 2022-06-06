---
title: 'HTMLMediaElement: loadeddata'
slug: Web/API/HTMLMediaElement/loadeddata_event
translation_of: Web/API/HTMLMediaElement/loadeddata_event
---
{{APIRef("HTMLMediaElement")}}

**`loadeddata`** 事件在媒体当前播放位置的视频帧（通常是第一帧）加载完成后触发。

<h2 id="基本信息">基本信息</h2>

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
      <td>{{domxref("GlobalEventHandlers.onloadeddata")}}</td>
    </tr>
  </tbody>
</table>

> **备注：** 若在移动/平板设备的浏览器设置中开启了流量节省（data-saver）模式，该事件则不会被触发。

## 示例

以下示例展示了如何为媒体元素（HTMLMediaElement）的 `loadeddata` 事件添加一个事件监听器，以在该事件触发时发送一条消息。

使用 `addEventListener()`：

```js
const video = document.querySelector('video');

video.addEventListener('loadeddata', (event) => {
  console.log('Yay! readyState just increased to  ' +
      'HAVE_CURRENT_DATA or greater for first time.');
});
```

使用 `onloadeddata` 事件处理器属性：

```js
const video = document.querySelector('video');

video.onloadeddata = (event) => {
  console.log('Yay! readyState just increased to  ' +
      'HAVE_CURRENT_DATA or greater for first time.');
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
