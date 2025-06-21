---
title: "Element: touchcancel イベント"
short-title: touchcancel
slug: Web/API/Element/touchcancel_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

`touchcancel` イベントは、1 つ以上のタッチポイントが実装固有の理由で中断されたときに発生します。

`touchcancel` イベントを引き起こす状況の例としては、次のようなものがあります。

- タッチ操作が取り消される可能性のあるハードウェアでイベントが発生したとき。例えば、アプリケーションスイッチャーインターフェイスや、モバイル端末の「ホーム」ボタンを使用してユーザーがアプリケーションを切り替えたときなど。
- タッチがアクティブな間、端末の画面の方向が変更されたとき。
- ブラウザーが、ユーザーが誤ってタッチ入力を始めたと判断したとき。例えば、ハードウェアがパームリジェクションに対応している場合や、スタイラスを使用している際にディスプレイに手が触れて誤ってイベントを開始してしまうことを防ぐときなど。
- {{cssxref("touch-action")}} プロパティによって、入力の継続が中断されたとき。
- ユーザーが同時に操作する指の数が多すぎると、ブラウザーは（ユーザーが画面にタッチしている最中でも）すべての既存のポインターに対してこのイベントを発行します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("touchcancel", (event) => {});

ontouchcancel = (event) => {};
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

サンプルコードは[タッチイベント](/ja/docs/Web/API/Touch_events)の専用のページにあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
