---
title: "OfflineAudioContext: complete event"
slug: Web/API/OfflineAudioContext/complete_event
---

{{DefaultAPISidebar("Web Audio API")}}

`complete`当离线音频上下文的呈现完成时，将触发{{domxref("OfflineAudioContext")}}接口的事件。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">泡泡</th>
      <td>没有</td>
    </tr>
    <tr>
      <th scope="row">取消</th>
      <td>没有</td>
    </tr>
    <tr>
      <th scope="row">默认操作</th>
      <td>没有</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref( "OfflineAudioCompletionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">事件处理程序属性</th>
      <td>{{domxref( "OfflineAudioContext.oncomplete")}}</td>
    </tr>
  </tbody>
</table>

## 例子

处理完成后，您可能希望使用`oncomplete`处理程序提示用户现在可以播放音频，并启用播放按钮：

```js
offlineAudioCtx.addEventListener("complete", () => {
  console.log("Offline audio processing now complete");
  showModalDialog("Song processed and ready to play");
  playBtn.disabled = false;
});
```

You can also set up the event handler using the {{domxref("OfflineAudioContext.oncomplete")}} property:

```js
offlineAudioCtx.oncomplete = function () {
  console.log("Offline audio processing now complete");
  showModalDialog("Song processed and ready to play");
  playBtn.disabled = false;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref( "离线音频上下文.oncomplete")}}
- [Web Audio API](/zh-CN/docs/Web_Audio_API)
