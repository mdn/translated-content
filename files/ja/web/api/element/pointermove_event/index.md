---
title: "Element: pointermove イベント"
short-title: pointermove
slug: Web/API/Element/pointermove_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

`pointermove` イベントは、ポインターの座標が変化し、ブラウザーの [`touch-action`](/ja/docs/Web/CSS/Reference/Properties/touch-action) によってポインターが[キャンセル](/ja/docs/Web/API/Element/pointercancel_event)されていないときに発生します。また、別のポインターイベントを発生させない範囲でポインターのほかのプロパティが変化した場合にも発生します。これには、圧力、接線圧力、傾き、回転、接触ジオメトリー（幅と高さ）、[同時押しボタン](https://w3c.github.io/pointerevents/#dfn-chorded-buttons)の変化が含まれます。

イベントループ内で、同じポインター ID を持つ別の `pointermove` イベントがまだ配送されていない場合、このイベントには統合されたイベントが含まれることがあります。イベントが統合される場合、配送されたイベントの `target` は最後に統合されたイベントと同じです。イベントの統合については、{{domxref("PointerEvent.getCoalescedEvents()")}} の説明を参照してください。

このイベントは {{domxref("Element/mousemove_event", "mousemove")}} イベントとよく似ていますが、より多くの機能があります。ポインターボタンが押されているかどうかにかかわらず発生します。ユーザーがポインターを動かす速さ、マシンの速度、ほかに実行中のタスクやプロセスなどに応じて、非常に高い頻度で発生することがあります。

{{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}} と `pointermove` の違いは、発生頻度です。ブラウザーはパフォーマンスを向上させるために `pointermove` イベントの配送を遅らせることがありますが、`pointerrawupdate` イベントはブラウザーが生成できる限り速く、頻繁に配送されます。ほとんどの用途では、パフォーマンス上の問題を避けるために `pointermove` を使用してください。

## 構文

{{domxref("EventTarget/addEventListener", "addEventListener()")}} でこのイベント名を使用してください。

```js-nolint
addEventListener("pointermove", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#using_onevent_properties)に代入します。

```js-nolint
onpointermove = (event) => { }
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

## 使用上のメモ

このイベントは {{domxref("PointerEvent")}} 型で、位置、移動距離、ボタンの状態など、ユーザーとポインティングデバイスとの対話について知る必要のあるすべての情報を提供します。

## 例

`addEventListener()` を使用した例です。

```js
const para = document.querySelector("p");

para.addEventListener("pointermove", (event) => {
  console.log("Pointer moved");
});
```

`onpointermove` イベントハンドラープロパティを使用した例です（`onpointermove` を使用して追加済みの他のイベントリスナーがある場合、それらは置き換えられます）。

```js
const para = document.querySelector("p");

para.onpointermove = (event) => {
  console.log("Pointer moved");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント
  - {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}
  - {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}
  - {{domxref('Element/pointerover_event', 'pointerover')}}
  - {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mousemove_event", "mousemove")}}
