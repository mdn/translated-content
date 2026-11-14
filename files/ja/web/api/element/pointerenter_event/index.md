---
title: "Element: pointerenter イベント"
short-title: pointerenter
slug: Web/API/Element/pointerenter_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

`pointerenter` イベントは、ポインティングデバイスが要素またはその子孫のヒットテスト領域に入ったときに発生します。ホバーに対応していない機器では {{domxref("Element/pointerdown_event", "pointerdown")}} イベントの結果として移動した場合も含みます（{{domxref("Element/pointerdown_event", "pointerdown")}} を参照）。それ以外の場合、`pointerenter` は {{domxref("Element/mouseenter_event", "mouseenter")}} と同じように動作し、同時に発生します。また、該当する場合は {{domxref("Element/mouseover_event", "mouseover")}} および {{domxref("Element/pointerover_event", "pointerover")}} イベントとも同時に発生します。

## 構文

{{domxref("EventTarget/addEventListener", "addEventListener()")}} でこのイベント名を使用してください。

```js-nolint
addEventListener("pointerenter", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#using_onevent_properties)に代入します。

```js-nolint
onpointerenter = (event) => { }
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

## 例

`addEventListener()` を使用した例です。

```js
const para = document.querySelector("p");

para.addEventListener("pointerenter", (event) => {
  console.log("Pointer entered element");
});
```

`onpointerenter` イベントハンドラープロパティを使用した例です（`onpointerenter` を使用して追加済みの他のイベントリスナーがある場合、それらは置き換えられます）。

```js
const para = document.querySelector("p");

para.onpointerenter = (event) => {
  console.log("Pointer entered element");
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
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mouseenter_event", "mouseenter")}}
