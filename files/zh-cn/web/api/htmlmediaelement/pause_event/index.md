---
title: "HTMLMediaElement: pause event"
slug: Web/API/HTMLMediaElement/pause_event
---

{{APIRef("HTMLMediaElement")}}

当暂停媒体播放时 `pause` 事件触发，并且媒体进入暂停状态，最常见的是通过`pause()`方法来触发。当`pause()` 触发时`pause`状态只改变 1 次，并且媒体的`pause`变成 `true`。

## General info

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
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Target</th>
      <td>Element</td>
    </tr>
    <tr>
      <th scope="row">Default Action</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("GlobalEventHandlers.onpause")}}</td>
    </tr>
    <tr>
      <th scope="row">Specification</th>
      <td>
        <a
          href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-playing"
          >HTML5 media</a
        >
      </td>
    </tr>
  </tbody>
</table>

## 例子

下面例子给媒体添加 `pause` 事件监听 handler，然后事件发生时会给 handler 发送一个提醒信息

使用 `addEventListener()：`

```js
const video = document.querySelector("video");

video.addEventListener("pause", (event) => {
  console.log(
    "The Boolean paused property is now true. Either the " +
      "pause() method was called or the autoplay attribute was toggled.",
  );
});
```

使用 `onpause` 事件监听属性：

```js
const video = document.querySelector("video");

video.onpause = (event) => {
  console.log(
    "The Boolean paused property is now true. Either the " +
      "pause() method was called or the autoplay attribute was toggled.",
  );
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关事件

- {{domxref("HTMLMediaElement.playing_event", 'HTMLMediaElement: playing event')}}
- {{domxref("HTMLMediaElement.waiting_event", 'HTMLMediaElement: waiting event')}}
- {{domxref("HTMLMediaElement.seeking_event", 'HTMLMediaElement: seeking event')}}
- {{domxref("HTMLMediaElement.seeked_event", 'HTMLMediaElement: seeked event')}}
- {{domxref("HTMLMediaElement.ended_event", 'HTMLMediaElement: ended event')}}
- {{domxref("HTMLMediaElement.loadedmetadata_event", 'HTMLMediaElement: loadedmetadata event')}}
- {{domxref("HTMLMediaElement.loadeddata_event", 'HTMLMediaElement: loadeddata event')}}
- {{domxref("HTMLMediaElement.canplay_event", 'HTMLMediaElement: canplay event')}}
- {{domxref("HTMLMediaElement.canplaythrough_event", 'HTMLMediaElement: canplaythrough event')}}
- {{domxref("HTMLMediaElement.durationchange_event", 'HTMLMediaElement: durationchange event')}}
- {{domxref("HTMLMediaElement.timeupdate_event", 'HTMLMediaElement: timeupdate event')}}
- {{domxref("HTMLMediaElement.play_event", 'HTMLMediaElement: play event')}}
- {{domxref("HTMLMediaElement.pause_event", 'HTMLMediaElement: pause event')}}
- {{domxref("HTMLMediaElement.ratechange_event", 'HTMLMediaElement: ratechange event')}}
- {{domxref("HTMLMediaElement.volumechange_event", 'HTMLMediaElement: volumechange event')}}
- {{domxref("HTMLMediaElement.suspend_event", 'HTMLMediaElement: suspend event')}}
- {{domxref("HTMLMediaElement.emptied_event", 'HTMLMediaElement: emptied event')}}
- {{domxref("HTMLMediaElement.stalled_event", 'HTMLMediaElement: stalled event')}}

## See also

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- {{domxref("SpeechSynthesisUtterance")}}
