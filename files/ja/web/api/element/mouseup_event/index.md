---
title: "Element: mouseup イベント"
short-title: mouseup
slug: Web/API/Element/mouseup_event
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef}}

**`mouseup`** イベントは、ポインターが要素の中にあるときに、ポインティングデバイス（マウスやトラックパッドなど）のボタンが離されるとその要素 ({{domxref("Element")}}) に発行されます。

`mouseup` イベントは {{domxref("Element.mousedown_event", "mousedown")}} イベントに対応します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("mouseup", (event) => {});

onmouseup = (event) => {};
```

## イベント型

{{domxref("MouseEvent")}} です。 {{domxref("UIEvent")}} および {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("MouseEvent")}}

## イベントプロパティ

_親である {{domxref("UIEvent")}} および {{domxref("Event")}} から継承したプロパティもあります_。

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに <kbd>alt</kbd> キーが押されていた場合は `true` を返します。
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに押されていたボタンの番号です（もしあれば）。
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに押されていたボタンです（もしあれば）。
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : [ビューポート座標](/ja/docs/Web/CSS/CSSOM_view/Coordinate_systems#ビューポート)におけるマウスポインターの X 座標です。
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : [ビューポート座標](/ja/docs/Web/CSS/CSSOM_view/Coordinate_systems#ビューポート)におけるマウスポインターの Y 座標です。
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに <kbd>control</kbd> キーが押されていた場合は `true` を返します。
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : このイベントの現在のレイヤーにおける相対の水平座標を返します。
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : このイベントの現在のレイヤーにおける相対の垂直座標を返します。
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに <kbd>meta</kbd> キーが押されていた場合は `true` を返します。
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : 前回の {{domxref("Element/mousemove_event", "mousemove")}} イベントの位置から相対的なマウスポインターの X 座標です。
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : 前回の {{domxref("Element/mousemove_event", "mousemove")}} イベントの位置から相対的なマウスポインターの Y 座標です。
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : 対象ノードのパディング辺からの相対的なマウスポインターの X 座標です。
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : 対象ノードのパディング辺からの相対的なマウスポインターの Y 座標です。
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : 文書全体からの相対的なマウスポインターの X 座標です。
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : 文書全体からの相対的なマウスポインターの Y 座標です。
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : もしあれば、イベントの副ターゲットです。
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : [スクリーン座標](/ja/docs/Web/CSS/CSSOM_view/Coordinate_systems#スクリーン)におけるマウスポインターの X 座標です。
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : [スクリーン座標](/ja/docs/Web/CSS/CSSOM_view/Coordinate_systems#スクリーン)におけるマウスポインターの Y 座標です。
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに <kbd>shift</kbd> キーが押されていた場合は `true` を返します。
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : イベントを発生させた機器の種類（`MOZ_SOURCE_*` 定数のいずれか）。
    これにより、例えばマウスイベントが実際のマウスによって生成されたのか、タッチイベントによって生成されたのかを判断することができます（これはイベントに関連付けられた座標を解釈する精度に影響するかもしれません）。
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : クリックしたときに適用された圧力です。
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientX")}} の別名です。
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientY")}} の別名です。

## 例

サンプルコードは [`mousemove` イベント](/ja/docs/Web/API/Element/mousemove_event#examples)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: イベント入門](/ja/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
