---
title: "Window: orientationchange イベント"
short-title: orientationchange
slug: Web/API/Window/orientationchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{Deprecated_Header}}

`orientationchange` イベントは、端末の向きが変化した時に発生します。

このイベントはキャンセル不可で、バブリングもしません。

このイベントは非推奨です。代わりに、{{domxref("ScreenOrientation")}} インターフェイスの {{domxref("ScreenOrientation.change_event", "change")}} イベントを待ち受けしてください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("orientationchange", (event) => { })

onorientationchange = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

`orientationchange` イベントは {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッドで使用することができます。

```js
window.addEventListener("orientationchange", (event) => {
  console.log(
    `端末の向きが ${event.target.screen.orientation.angle} になりました。`,
  );
});
```

または、 `onorientationchange` イベントハンドラープロパティを使用します。

```js
window.onorientationchange = (event) => {
  console.log(
    `端末の向きが ${event.target.screen.orientation.angle} になりました。`,
  );
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
