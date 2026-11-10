---
title: "Element: pointerover イベント"
short-title: pointerover
slug: Web/API/Element/pointerover_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

`pointerover` イベントは、ポインティングデバイスが要素のヒットテスト境界内に移動したときに発生します。

`pointerover` イベントには {{domxref("Element/mouseover_event", "mouseover")}} と同じ問題があります。対象要素に子要素がある場合、ポインターがそれらの境界を移動したときにも `pointerout` および `pointerover` イベントが発生します。対象要素自体の境界を移動したときに限りません。通常は、{{domxref("Element/pointerenter_event", "pointerenter")}} および {{domxref("Element/pointerleave_event", "pointerleave")}} イベントの方が適切に動作します。子要素内への移動に影響されないためです。

## 構文

{{domxref("EventTarget/addEventListener", "addEventListener()")}} でこのイベント名を使用してください。

```js-nolint
addEventListener("pointerover", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#using_onevent_properties)に代入します。

```js-nolint
onpointerover = (event) => { }
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

## 例

`addEventListener()` を使用した例です。

```js
const para = document.querySelector("p");

para.addEventListener("pointerover", (event) => {
  console.log("Pointer moved in");
});
```

`onpointerover` イベントハンドラープロパティを使用した例です（`onpointerover` を使用して追加済みの他のイベントリスナーがある場合、それらは置き換えられます）。

```js
const para = document.querySelector("p");

para.onpointerover = (event) => {
  console.log("Pointer moved in");
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
  - {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mouseover_event", "mouseover")}}
