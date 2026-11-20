---
title: "Element: pointerleave イベント"
short-title: pointerleave
slug: Web/API/Element/pointerleave_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

`pointerleave` イベントは、ポインティングデバイスが要素のヒットテスト領域を出たときに発生します。ペンデバイスでは、このイベントはデジタイザーが検出可能なホバー範囲をスタイラスが離れたときに発生します。それ以外の場合、`pointerleave` は {{domxref("Element/mouseleave_event", "mouseleave")}} と同じように動作し、同時に発生します。また、該当する場合は {{domxref("Element/mouseout_event", "mouseout")}} および {{domxref("Element/pointerout_event", "pointerout")}} イベントとも同時に発生します。

## 構文

{{domxref("EventTarget/addEventListener", "addEventListener()")}} でこのイベント名を使用してください。

```js-nolint
addEventListener("pointerleave", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#using_onevent_properties)に代入します。

```js-nolint
onpointerleave = (event) => { }
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

## 例

`addEventListener()` を使用した例です。

```js
const para = document.querySelector("p");

para.addEventListener("pointerleave", (event) => {
  console.log("Pointer left element");
});
```

`onpointerleave` イベントハンドラープロパティを使用した例です（`onpointerleave` を使用して追加済みの他のイベントリスナーがある場合、それらは置き換えられます）。

```js
const para = document.querySelector("p");

para.onpointerleave = (event) => {
  console.log("Pointer left element");
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
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mouseleave_event", "mouseleave")}}
