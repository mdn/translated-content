---
title: "Element: pointercancel イベント"
short-title: pointercancel
slug: Web/API/Element/pointercancel_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

**`pointercancel`** イベントは、ブラウザーがもうポインターイベントが存在しないと判断したとき、または {{domxref("Element/pointerdown_event", "pointerdown")}} イベントが発生した後で、ポインターがビューポートのパン、ズーム、スクロールを操作するために使用されたときに発生します。

`pointercancel` イベントが発生する状況の例をいくつか示します。

- ポインターの操作を中止するハードウェアイベントが発生した場合。例えば、アプリケーション切り替えインターフェイスやモバイル端末の「ホーム」ボタンを使用して、ユーザーがアプリケーションを切り替えた場合などです。
- ポインターが活動中に端末の画面の向きが変化した場合。
- ユーザーが突然、ポインターの入力を始めたとブラウザーが判断した場合。これが発生するのは、例えば、スタイラスを使用中に画面上で手が反応するのを防ぐために掌を除外して予期せずイベントを起動することを防ぐことに、ハードウェアが対応している場合などです。
- CSS の {{cssxref("touch-action")}} プロパティが、入力の継続を防止している場合。
- ユーザーが同時に多くのポインターを操作すると、ブラウザーは既存のすべてのポインターに対してこのイベントを発生させる可能性があります（ユーザーがまだ画面に触れている場合でも）。

> [!NOTE]
> `pointercancel` イベントの発生後、ブラウザーは {{domxref("Element/pointerout_event", "pointerout")}} イベントと、続いて {{domxref("Element/pointerleave_event", "pointerleave")}} イベントを送信します。

## 構文

このイベント名を {{domxref("EventTarget/addEventListener", "addEventListener()")}} で使用します。

```js-nolint
addEventListener("pointercancel", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#onevent_プロパティの使用)に代入します。

```js-nolint
onpointercancel = (event) => { }
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

## 例

`addEventListener()` を使用した例です。

```js
const para = document.querySelector("p");

para.addEventListener("pointercancel", (event) => {
  console.log("Pointer event canceled");
});
```

`onpointercancel` イベントハンドラープロパティを使用した例です（ただし、これを使うと、`onpointercancel` で追加されていた他のイベントリスナーは置き換えられます）。

```js
const para = document.querySelector("p");

para.onpointercancel = (event) => {
  console.log("Pointer event canceled");
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
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
