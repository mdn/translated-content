---
title: "MediaStreamTrack: overconstrained イベント"
slug: Web/API/MediaStreamTrack/overconstrained_event
---

{{ APIRef("Media Capture and Streams") }}{{deprecated_header}}

**`overconstrained`** イベントは、トラックに制約の競合が多く発生しすぎたときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("overconstrained", (event) => {});

onoverconstrained = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
dc.onoverconstrained = function () {
  alert("overconstrained event detected!");
};
```

## ブラウザーの互換性

{{Compat}}
