---
title: "Element: pointerdown イベント"
short-title: pointerdown
slug: Web/API/Element/pointerdown_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

`pointerdown` イベントは、ポインターがアクティブになったときに発生します。マウスでは、その機器のボタンが押されていない状態から 1 つ以上のボタンが押されている状態に遷移したときに発生します。タッチ操作では、デジタイザーに物理的な接触が行われたときに発生します。ペンでは、スタイラスがデジタイザーに物理的に接触したときに発生します。

この動作は {{domxref("Element/mousedown_event", "mousedown")}} イベントとは異なります。物理的なマウスを使用する場合、マウスのいずれかのボタンを押すたびに `mousedown` イベントが発生します。`pointerdown` イベントは最初のボタンを押したときにのみ発生し、その後ボタンを押しても発生しません。

> [!NOTE]
> [直接操作](https://w3c.github.io/pointerevents/#dfn-direct-manipulation)ができるタッチ画面のブラウザーでは、 `pointerdown` イベントで[暗黙的なポインターキャプチャ](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture)が発生するため、ターゲットが以降のすべてのポインターイベントをキャプチャし、キャプチャターゲット上で発生したかのように扱います。そのため、 `pointerover`, `pointerenter`, `pointerleave`, `pointerout` はこのキャプチャーが発生している間は**発生しません**。このキャプチャはターゲット要素上で {{domxref('element.releasePointerCapture')}} を呼び出すことで手動で解除することができ、 `pointerup` または `pointercancel` イベントの後で暗黙的に解除されます。

## 構文

{{domxref("EventTarget/addEventListener", "addEventListener()")}} でこのイベント名を使用してください。

```js-nolint
addEventListener("pointerdown", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#using_onevent_properties)に代入します。

```js-nolint
onpointerdown = (event) => { }
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

## 例

`addEventListener()` を使用した例です。

```js
const para = document.querySelector("p");

para.addEventListener("pointerdown", (event) => {
  console.log("Pointer down event");
});
```

`onpointerdown` イベントハンドラープロパティを使用した例です（`onpointerdown` を使用して追加済みの他のイベントリスナーがある場合、それらは置き換えられます）。

```js
const para = document.querySelector("p");

para.onpointerdown = (event) => {
  console.log("Pointer down event");
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
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mousedown_event", "mousedown")}}
