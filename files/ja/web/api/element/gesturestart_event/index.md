---
title: "Element: gesturestart イベント"
short-title: gesturestart
slug: Web/API/Element/gesturestart_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}{{Non-standard_header}}

**`gesturestart`** イベントは、複数の指がタッチ面に接触したとき、新しいジェスチャーを開始したとき に発生します。ジェスチャー中は {{domxref("Element/gesturechange_event", "gesturechange")}} イベントが発生します。ジェスチャーが終了すると、{{domxref("Element/gestureend_event", "gestureend")}} イベントが発生します。

これは WebKit 固有のイベントです。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("gesturestart", (event) => {});

ongesturestart = (event) => {};
```

## イベント型

{{domxref("GestureEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("GestureEvent")}}

## イベントプロパティ

_このインターフェイスには、親である {{domxref("UIEvent")}} および {{domxref("Event")}} から継承したプロパティがあります。_

- {{domxref("GestureEvent.rotation")}} {{ReadOnlyInline}}
  - : イベント開始時からの回転の変化（度単位）。正の値は時計回りの回転を示し、負の値は反時計回りの回転を示します。初期値は `0.0` です。
- {{domxref("GestureEvent.scale")}} {{ReadOnlyInline}}
  - : イベント開始時からの 2 桁間の距離。ジェスチャー開始時の桁間距離の浮動小数点倍数で表します。1.0 未満の値は、内側へのピンチ（ズームアウト）を示します。1.0 より大きい値は外向きのピンチ解除（ズームイン）を示します。初期値は `1.0` です。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [GestureEventClassReference at the Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
