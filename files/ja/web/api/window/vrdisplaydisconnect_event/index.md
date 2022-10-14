---
title: vrdisplaydisconnected
slug: Web/API/Window/vrdisplaydisconnect_event
---

{{APIRef}}{{SeeCompatTable}}

[WebVR API](/ja/docs/Web/API/WebVR_API) の **`vrdisplaydisconnected`** イベントは，互換性のある VR デバイスがコンピュータから接続解除された時に発火します．

<table class="properties">
  <tbody>
    <tr>
      <td>Bubbles</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Cancelable</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Target objects</td>
      <td>{{domxref("Window")}}</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>{{domxref("Event")}}</td>
    </tr>
  </tbody>
</table>

## 例

You can use the `vrdisplaydisconnect` event in an [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) method:

```js
window.addEventListener('vrdisplaydisconnect', function() {
  info.textContent = 'Display disconnected.';
  reportDisplays();
});
```

Or use the [`onvrdisplaydisconnect`](/ja/docs/Web/API/Window/onvrdisplaydisconnect) event handler property:

```js
window.onvrdisplaydisconnect = function() {
  info.textContent = 'Display disconnected.';
  reportDisplays();
);
```

## 仕様

| Specification                                                                                                            | Status                       | Comment            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------ |
| {{SpecName('WebVR 1.1', '#dom-window-onvrdisplaydisconnected', 'vrdisplaydisconnected')}} | {{Spec2('WebVR 1.1')}} | Initial definition |

## ブラウザの互換性

{{Compat("api.Window.vrdisplaydisconnect_event")}}

## 参照

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
