---
title: "HTMLMediaElement: play event"
slug: Web/API/HTMLMediaElement/play_event
---

{{APIRef("HTMLMediaElement")}}

当 `paused` 属性由 `true` 转换为 `false` 时触发 `play` 事件，事件触发原因一般为 `play()` 方法调用，或者 `autoplay` 标签设置。

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
      <td>{{domxref("GlobalEventHandlers.onplay")}}</td>
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

## Examples

下方的例子监听了 HTMLMediaElement 标签的 `play` 事件，并且在事件触发后在控制台打印相应的信息。

Using `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("play", (event) => {
  console.log(
    "The Boolean paused property is now false. Either the " +
      "play() method was called or the autoplay attribute was toggled.",
  );
});
```

Using the `onplay` event handler property:

```js
const video = document.querySelector("video");

video.onplay = (event) => {
  console.log(
    "The Boolean paused property is now false. Either the " +
      "play() method was called or the autoplay attribute was toggled.",
  );
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Related Events

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

## See Also

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
