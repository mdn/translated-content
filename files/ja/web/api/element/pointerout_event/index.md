---
title: "Element: pointerout イベント"
short-title: pointerout
slug: Web/API/Element/pointerout_event
l10n:
  sourceCommit: 6636dfb792a72346c68e44c9d042e3c2219e522b
---

{{APIRef}}

`pointerout` イベントはいくつかの理由で発生します。ポインティングデバイスが要素の*ヒットテスト*境界を出たとき、ホバーに対応していない端末で {{domxref("Element/pointerup_event", "pointerup")}} イベントが発生したとき ({{domxref("Element/pointerup_event", "pointerup")}} を参照)、 {{domxref("Element/pointercancel_event", "pointercancel")}} イベントが発生した後 ({{domxref("Element/pointercancel_event", "pointercancel")}} を参照)、スタイラスペンがデジタイザーで検出可能なホバー範囲を離れたとき、などです。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("pointerout", (event) => {});

onpointerout = (event) => {};
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

## イベントプロパティ

_このインターフェイスは {{domxref("MouseEvent")}} および {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : トランスデューサー（ポインターまたはスタイラス）の軸と端末画面の X-Y 平面との間の角度を表します。
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Y-Z 平面と、トランスデューサー（ポインターまたはスタイラス）の軸と Y 軸の両方を格納する平面との間の角度を表します。
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : イベントを発生させたポインターの固有の識別子です。
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : ポインターが接触するジオメトリーの幅（X 軸の大きさ、CSS ピクセル単位）。
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : ポインターが接触するジオメトリーの高さ（Y 軸の大きさ、CSS ピクセル単位）。
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : ポインター入力の正規化された圧力で、範囲は `0` から `1` です。ここで `0` と `1` は、それぞれハードウェアが検出可能な最小圧力と最大圧力を表します。
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : ポインター入力の正規化された接線圧力（バレル圧力またはシリンダー応力（[cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)）とも呼ばれます）で、 `-1` から `1` の範囲であり、 `0` はコントロールの中立位置です。
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Y-Z 平面と、ポインター（ペンスタイラスなど）の軸と Y 軸の両方を含む平面との間の平面角度（度単位、 `-90` から `90` の範囲）。
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : X-Z 平面と、ポインター（ペンスタイラスなど）の軸と X 軸の両方を含む平面との間の平面角度（度単位、 `-90` から `90` の範囲）。
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : ポインター（ペンスタイラスなど）の長軸を中心とした時計回りの回転の度数（`0` から `359` の範囲の値）。
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : イベントの原因となった機器の種類（マウス、ペン、タッチなど）を示します。
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : このポインターがこのポインター種別の主ポインターを表すかどうかを示します。

## 例

`addEventListener()` を使用した例です。

```js
const para = document.querySelector("p");

para.addEventListener("pointerout", (event) => {
  console.log("Pointer moved out");
});
```

`onpointerout` イベントハンドラープロパティを使用した例です。

```js
const para = document.querySelector("p");

para.onpointerout = (event) => {
  console.log("Pointer moved out");
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
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
