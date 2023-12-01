---
title: "Element: pointercancel イベント"
short-title: pointercancel
slug: Web/API/Element/pointercancel_event
l10n:
  sourceCommit: 9fb6c9e56c6db295967384730feeb941509ac743
---

{{APIRef}}

**`pointercancel`** イベントは、ブラウザーがもうポインターイベントが存在しないと判断したとき、または {{domxref("Element/pointerdown_event", "pointerdown")}} イベントが発生した後で、ポインターがビューポートのパン、ズーム、スクロールを操作するために使用されたときに発生します。

`pointercancel` イベントが発生する状況の例をいくつか示します。

- ポインターの操作を中止するハードウェアイベントが発生した場合。例えば、アプリケーション切り替えインターフェイスやモバイル端末の「ホーム」ボタンを使用して、ユーザーがアプリケーションを切り替えた場合などです。
- ポインターが活動中に端末の画面の向きが変化した場合。
- ユーザーが突然、ポインターの入力を始めたとブラウザーが判断した場合。これが発生するのは、例えば、スタイラスを使用中に画面上で手が反応するのを防ぐために掌を除外して予期せずイベントを起動することを防ぐことに、ハードウェアが対応している場合などです。
- CSS の {{cssxref("touch-action")}} プロパティが、入力の継続を防止している場合。

> **メモ:** `pointercancel` イベントの発生後、ブラウザーは {{domxref("Element/pointerout_event", "pointerout")}} イベントと、続いて {{domxref("Element/pointerleave_event", "pointerleave")}} イベントを送信します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("pointercancel", (event) => {});

onpointercancel = (event) => {};
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

## イベントプロパティ

_このインターフェイスは {{domxref("MouseEvent")}} および {{domxref("Event")}} からプロパティを継承しています。_

- {{ domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : イベントを発生させたポインターの固有の識別子です。
- {{ domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : ポインターが接触するジオメトリーの幅（X 軸の大きさ、CSS ピクセル単位）。
- {{ domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : ポインターが接触するジオメトリーの高さ（Y 軸の大きさ、CSS ピクセル単位）。
- {{ domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : ポインター入力の正規化された圧力で、範囲は `0` から `1` です。ここで `0` と `1` は、それぞれハードウェアが検出可能な最小圧力と最大圧力を表します。
- {{ domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : ポインタ入力の正規化された接線圧力（バレル圧力またはシリンダー応力（[cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)）とも呼ばれます）で、 `-1` から `1` の範囲であり、 `0` はコントロールの中立位置です。
- {{ domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Y-Z 平面と、ポインター（ペンスタイラスなど）の軸と Y 軸の両方を含む平面との間の平面角度（度単位、 `-90` から `90` の範囲）。
- {{ domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : X-Z 平面と、ポインター（ペンスタイラスなど）の軸と X 軸の両方を含む平面との間の平面角度（度単位、 `-90` から `90` の範囲）。
- {{ domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : ポインター（ペンスタイラスなど）の長軸を中心とした時計回りの回転の度数（`0` から `359` の範囲の値）。
- {{ domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : イベントの原因となった機器の種類（マウス、ペン、タッチなど）を示します。
- {{ domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : このポインターがこのポインター種別の主ポインターを表すかどうかを示します。

## 例

`addEventListener()` を使用した例です。

```js
const para = document.querySelector("p");

para.addEventListener("pointercancel", (event) => {
  console.log("Pointer event cancelled");
});
```

`onpointercancel` イベントハンドラープロパティを使用した例です。

```js
const para = document.querySelector("p");

para.onpointercancel = (event) => {
  console.log("Pointer event cancelled");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント

  - [`gotpointercapture`](/ja/docs/Web/API/Element/gotpointercapture_event)
  - [`lostpointercapture`](/ja/docs/Web/API/Element/lostpointercapture_event)
  - [`pointerover`](/ja/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/ja/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/ja/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/ja/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/ja/docs/Web/API/Element/pointerup_event)
  - [`pointerout`](/ja/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/ja/docs/Web/API/Element/pointerleave_event)
