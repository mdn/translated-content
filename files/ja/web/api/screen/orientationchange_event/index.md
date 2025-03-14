---
title: "Screen: orientationchange イベント"
slug: Web/API/Screen/orientationchange_event
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}

`orientationchange` イベントは、端末の向きが変化したときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("orientationchange", (event) => {});

onorientationchange = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 仕様書

この機能は、どの仕様にも含まれていません。標準化の予定はありません。

代わりに {{domxref("ScreenOrientation.onchange")}} を使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [画面の向きの管理](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
