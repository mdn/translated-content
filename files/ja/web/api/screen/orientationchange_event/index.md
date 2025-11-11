---
title: "Screen: orientationchange イベント"
short-title: orientationchange
slug: Web/API/Screen/orientationchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}{{Non-standard_Header}}

`orientationchange` イベントは、端末の向きが変化したときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("orientationchange", (event) => { })

onorientationchange = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 仕様書

この機能は、どの仕様にも含まれていません。標準化の予定はありません。

代わりに `ScreenOrientation` の {{domxref("ScreenOrientation.change_event", "change")}} イベントを使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [画面の向きの制御](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
