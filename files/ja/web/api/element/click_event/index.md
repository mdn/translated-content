---
title: "Element: click イベント"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: ab65140829d7c4df540fd859c0a97a78b3b1fd33
---

{{APIRef}}

要素は以下のような場面で **`click`** イベントを受け取ります。

- ポインターが要素内に位置している間、ポインティングデバイスのボタン（マウスの第一ボタンなど）が押され、離されたとき。
- 要素上でタッチジェスチャーが実行されたとき。
- クリックと同等のユーザー操作が行われたとき。例えば要素にフォーカスがあるときに <kbd>Space</kbd> キーや <kbd>Enter</kbd> キーが押されたとき。 なお、これは既定でキーイベントハンドラーを持つ要素のみに適用されるため、[`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性を指定してフォーカス可能にした他の要素は対象外となります。

ある要素上でボタンが押され、ボタンが離される前にポインターが要素の外に移動された場合、両方の要素を含む最も詳細な祖先要素上でイベントが発生します。

`click` は {{domxref("Element/mousedown_event", "mousedown")}} および {{domxref("Element/mouseup_event", "mouseup")}} イベントの後、順番通りに発生します。

このイベントは機器に依存しないイベントです。つまり、タッチ、キーボード、マウス、支援技術などで指定された方法でも起動できるということです。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("MouseEvent")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> この仕様書の以前のバージョンでは、このイベントのイベント型は {{domxref("MouseEvent")}} でした。 Firefox と Safari では今でもこの型で渡されます。

## イベントプロパティ

_このインターフェイスは、{{domxref("MouseEvent")}} および {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}}
  - : トランスデューサー（ポインターまたはスタイラス）の軸と機器の画面の X-Y 平面のなす角度を表します。
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}}
  - : Y-Z 平面と、トランスデューサー（ポインターまたはスタイラス）の軸と Y 軸の両方を格納する平面との間の角度を表します。
- {{domxref('PointerEvent.persistentDeviceId')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : `PointerEvent` を生成するポインティングデバイス用の固有の識別子。
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : イベントの原因となっているポインターの一意の識別子。
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : ポインターの接触形状の幅（X 軸上の大きさ、CSS ピクセル単位）。
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : ポインターの接触形状の高さ（Y 軸上の大きさ、CSS ピクセル単位）。
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : 0 から 1 の範囲のポインター入力の正規化された圧力。 ここで、0 と 1 は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : ポインター入力の正規化された接線圧力（バレル圧力またはシリンダー応力（[cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)）とも呼ばれます）は `-1` から `1` の範囲で、 `0` はコントロールの中立位置です。
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Y-Z 平面と、ポインター（ペン/スタイラスなど）軸と Y 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : X-Z 平面と、ポインター（ペン/スタイラスなど）軸と X 軸の両方を含む平面との間の平面角度（度単位、`-90` から `90` の範囲）。
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : ポインター（ペン/スタイラスなど）の長軸を中心とした時計回りの回転の度数（`0` から `359` の範囲の値）。
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : イベントの原因となった機器の種類（マウス、ペン、タッチなど）を示します。
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : ポインターがこのポインターの種類の主ポインターを表しているかどうかを示します。

## 使用上の注意

`click` のイベントハンドラーに渡される {{domxref("PointerEvent")}} オブジェクトの {{domxref("UIEvent/detail", "detail")}} プロパティには、 {{domxref("Event.target", "target")}} がクリックされた回数が設定されています。言い換えれば、ダブルクリックの場合は `detail` が 2 になり、トリプルクリックの場合は 3 になります。このカウンターは、クリックが発生しない短い間隔の後にリセットされます。この間隔の長さの詳細は、ブラウザーやプラットフォームによって異なります。この間隔は、ユーザーの設定によっても影響を受ける可能性があります。例えば、アクセシビリティのオプションは、適応性のあるインターフェイスで複数回のクリックを簡単に実行できるように、この間隔を延長することができます。

## 例

この例は {{HtmlElement("button")}} を連続してクリックした数を表示します。

### HTML

```html
<button>クリック</button>
```

### JavaScript

```js
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `クリック回数: ${event.detail}`;
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

- [学習: イベント入門](/ja/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
