---
title: "Element: pointerup イベント"
short-title: pointerup
slug: Web/API/Element/pointerup_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

`pointerup` イベントは、ポインターがアクティブではなくなったときに発生します。これは代わりに [`pointercancel`](/ja/docs/Web/API/Element/pointercancel_event) イベントを用いて取得できることを覚えておいてください。

この動作は {{domxref("Element/mouseup_event", "mouseup")}} イベントとは異なります。物理的なマウスを使用する場合、マウスのいずれかのボタンを離すたびに `mouseup` イベントが発生します。`pointerup` イベントは最後のボタンを離したときにのみ発生します。他のボタンを押したままそれ以前のボタンを離しても、`pointerup` イベントは発生しません。

## 構文

{{domxref("EventTarget/addEventListener", "addEventListener()")}} でこのイベント名を使用してください。

```js-nolint
addEventListener("pointerup", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#using_onevent_properties)に代入します。

```js-nolint
onpointerup = (event) => { }
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

## 例

`addEventListener()` を使用した例です。

```js
const para = document.querySelector("p");

para.addEventListener("pointerup", (event) => {
  console.log("Pointer up");
});
```

`onpointerup` イベントハンドラープロパティを使用した例です（`onpointerup` を使用して追加済みの他のイベントリスナーがある場合、それらは置き換えられます）。

```js
const para = document.querySelector("p");

para.onpointerup = (event) => {
  console.log("Pointer up");
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
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mouseup_event", "mouseup")}}
