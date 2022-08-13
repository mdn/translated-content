---
title: 'Window: orientationchange イベント'
slug: Web/API/Window/orientationchange_event
tags:
  - API
  - Event
  - Reference
  - Sensors
  - Window
  - onorientationchange
  - イベント
translation_of: Web/API/Window/orientationchange_event
---
{{APIRef}}

`orientationchange` イベントは、端末の向きが変化した時に発生します。

| バブリング         | なし                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------ |
| キャンセル         | 不可                                                                                 |
| インターフェイス   | {{domxref("Event")}}                                                         |
| イベントハンドラー | {{domxref("Window/onorientationchange", "onorientationchange")}} |

## 例

`orientationchange` イベントは {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッドで使用することができます。

```js
window.addEventListener("orientationchange", function() {
  console.log("端末の向きが " + screen.orientation.angle + "になりました。");
});
```

または、 {{domxref("Window/onorientationchange", "onorientationchange")}} イベントハンドラープロパティを使用します。

```js
window.onorientationchange = function() {
  console.log("端末の向きが " + screen.orientation.angle + "になりました。");
};
```

## 仕様書

| Specification                                                                                    | Status                   |
| ------------------------------------------------------------------------------------------------ | ------------------------ |
| {{SpecName('Compat', '#event-orientationchange', 'orientationchange')}} | {{Spec2('Compat')}} |

## ブラウザーの対応

{{Compat("api.Window.orientationchange_event")}}
