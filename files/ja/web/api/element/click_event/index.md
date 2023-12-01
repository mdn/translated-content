---
title: "Element: click イベント"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: b965392d6e4f2c897e914a3b69dec3e2a4212782
---

{{APIRef}}

**`click`** イベントは、ポインターが要素の中にある状態で、ポインティングデバイスのボタン (マウスの第一ボタンなど) が押されて離されたときに要素に送られます。

ある要素でボタンが押され、ボタンが離される前にポインターが要素の外に移動した場合、イベントは両方の要素を含む最も具体的な祖先の要素で発生します。

`click` は {{domxref("Element/mousedown_event", "mousedown")}} および {{domxref("Element/mouseup_event", "mouseup")}} イベントの後、順番通りに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("MouseEvent")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

> **メモ:** この仕様書の以前のバージョンでは、このイベントのイベント型は {{domxref("MouseEvent")}} でした。 Firefox と Safari では今でもこの型で渡されます。

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
- {{ domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : イベントの原因となっているポインターの一意の識別子。
- {{ domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : ポインターの接触形状の幅（X 軸上の大きさ、CSS ピクセル単位）。
- {{ domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : ポインターの接触形状の高さ（Y 軸上の大きさ、CSS ピクセル単位）。
- {{ domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : 0 から 1 の範囲のポインター入力の正規化された圧力。 ここで、0 と 1 は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。
- {{ domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : ポインター入力の正規化された接線圧力（バレル圧力またはシリンダー応力（[cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)）とも呼ばれます）は `-1` から `1` の範囲で、 `0` はコントロールの中立位置です。
- {{ domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Y-Z 平面と、ポインター（ペン/スタイラスなど）軸と Y 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{ domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : X-Z 平面と、ポインター（ペン/スタイラスなど）軸と X 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{ domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : ポインター（ペン/スタイラスなど）の長軸を中心とした時計回りの回転の度数（`0` から `359` の範囲の値）。
- {{ domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : イベントの原因となった機器の種類（マウス、ペン、タッチなど）を示します。
- {{ domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : ポインターがこのポインターの種類の主ポインターを表しているかどうかを示します。

## 使用上の注意

`click` のイベントハンドラーに渡される {{domxref("PointerEvent")}} オブジェクトの {{domxref("UIEvent/detail", "detail")}} プロパティには、 {{domxref("Event.target", "target")}} がクリックされた回数が設定されています。言い換えれば、ダブルクリックの場合は `detail` が 2 になり、トリプルクリックの場合は 3 になります。このカウンターは、クリックが発生しない短い間隔の後にリセットされます。この間隔の長さの詳細は、ブラウザーやプラットフォームによって異なります。この間隔は、ユーザーの設定によっても影響を受ける可能性があります。例えば、アクセシビリティのオプションは、適応性のあるインターフェイスで複数回のクリックを簡単に実行できるように、この間隔を延長することができます。

## 例

この例は {{HtmlElement("button")}} を連続してクリックした数を表示します。

### HTML

```html
<button>Click</button>
```

### JavaScript

```js
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});
```

### 結果

ボタンを素早く何度もクリックしてみて、クリックカウントを増やしましょう。クリックの間に休憩を挟むと、カウントがリセットされます。

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントの紹介](/ja/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
