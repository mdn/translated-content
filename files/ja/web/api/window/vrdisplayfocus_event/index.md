---
title: 'Window: vrdisplayfocus event'
slug: Web/API/Window/vrdisplayfocus_event
tags:
  - Reference
  - WebVR
  - events
  - onvrdisplayfocus
  - vrdisplayfocus
translation_of: Web/API/Window/vrdisplayfocus_event
---
{{APIRef("Window")}}

[WebVR API](/ja/docs/Web/API/WebVR_API) の **`vrdisplayfocus`** イベントは VR ディスプレイへのプレゼンテーションがぼやけた後に再開されたときに発生します。

| Bubbles                | No                                                             |
| ---------------------- | -------------------------------------------------------------- |
| Cancelable             | No                                                             |
| Interface              | {{domxref("VRDisplayEvent")}}                       |
| Event handler property | [`onvrdisplayfocus`](/ja/docs/Web/API/Window/onvrdisplayfocus) |

## 例

[`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで `vrdisplayfocus` イベントを使用できます:

```js
window.addEventListener('vrdisplayfocus', function() {
  info.textContent = 'Display focused.';
  reportDisplays();
});
```

または、 [`onvrdisplayfocus`](/ja/docs/Web/API/Window/onvrdisplayfocus) イベントハンドラープロパティを使用します:

```js
window.onvrdisplayfocus = function() {
  info.textContent = 'Display focused.';
  reportDisplays();
};
```

## 仕様

| 仕様                                                                                                 | ステータス                   | 備考     |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('WebVR 1.1', '#dom-window-onvrdisplayfocus', 'vrdisplayfocus')}} | {{Spec2('WebVR 1.1')}} | 初回定義 |

## ブラウザー実装状況

{{Compat("api.Window.vrdisplayfocus_event")}}

## 関連項目

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — demos, downloads, and other resources from the Mozilla VR team.
