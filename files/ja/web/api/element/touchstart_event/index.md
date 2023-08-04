---
title: "Element: touchstart イベント"
short-title: touchstart
slug: Web/API/Element/touchstart_event
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef}}

`touchstart` イベントは、タッチ平面上に 1 つ以上のタッチ点が配置されたときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("touchstart", (event) => {});

ontouchstart = (event) => {};
```

## イベント型

{{domxref("TouchEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("TouchEvent")}}

## イベントプロパティ

_このインターフェイスは {{domxref("UIEvent")}} および {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("TouchEvent.altKey")}} {{ReadOnlyInline}}
  - : 論理値で、タッチイベントが発行されたときに alt キーが押されていたかどうかを示します。
- {{domxref("TouchEvent.changedTouches")}} {{ReadOnlyInline}}
  - : 前回のタッチイベントと今回のタッチイベントの間で状態が変化した、個々の接点を表すすべての {{domxref("Touch")}} オブジェクトの {{domxref("TouchList")}} です。
- {{domxref("TouchEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : 論理値で、タッチイベントが発行されたときにコントロールキーが押されていたかどうかを示します。
- {{domxref("TouchEvent.metaKey")}} {{ReadOnlyInline}}
  - : 論理値で、タッチイベントが発行されたときにメタキーが押されていたかどうかを示します。
- {{domxref("TouchEvent.shiftKey")}} {{ReadOnlyInline}}
  - : 論理値で、タッチイベントが発行されたときにシフトキーが押されていたかどうかを示します。
- {{domxref("TouchEvent.targetTouches")}} {{ReadOnlyInline}}
  - : 現在タッチ面に接触してしており、**かつ**イベントのターゲット要素と同じ要素で開始された、すべての {{domxref("Touch")}} オブジェクトの {{domxref("TouchList")}} です。
- {{domxref("TouchEvent.touches")}} {{ReadOnlyInline}}
  - : 対象や、変更されたステータスに関係なく、表面との現在の接点をすべて表す {{domxref("Touch")}} オブジェクトの {{domxref("TouchList")}} です。
- {{domxref("TouchEvent.rotation")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : イベント開始時からの角度の変化（度）。正の値は時計回りの回転を示し、負の値は反時計回りの回転を示します。初期値は `0.0` です。
- {{domxref("TouchEvent.scale")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : イベント開始時からの 2 つの指間の距離の変化です。イベント開始時の初期指間距離からの倍率を、浮動小数点数で表します。1.0 未満の値は、内側へのピンチ（ズームアウト）を示します。1.0 以上の値は、外側へのピンチ解除（ズームイン）を示します。初期値は `1.0` です。

## 例

これらのイベントのコード例は、専用のページ「[タッチイベント](/ja/docs/Web/API/Touch_events)」にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [タッチイベント](/ja/docs/Web/API/Touch_events)
