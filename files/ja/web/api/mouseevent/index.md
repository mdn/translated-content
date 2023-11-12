---
title: MouseEvent
slug: Web/API/MouseEvent
l10n:
  sourceCommit: a6390b5024f29bcd6bdab5eedade24e3b446b37b
---

{{APIRef("UI Events")}}

**`MouseEvent`** インターフェイスは、ポインティングデバイス (マウスなど) によるユーザーの操作によって発行されたイベントを表します。
このインターフェイスを使用する一般的なイベントとして {{domxref("Element/click_event", "click")}}, {{domxref("Element/dblclick_event", "dblclick")}}, {{domxref("Element/mouseup_event", "mouseup")}}, {{domxref("Element/mousedown_event", "mousedown")}} があります。

`MouseEvent` は {{domxref("UIEvent")}} から派生しており、これはさらに {{domxref("Event")}} から派生しています。後方互換性のために {{domxref("MouseEvent.initMouseEvent()")}} メソッドは維持されていますが、 `MouseEvent` オブジェクトを作成する際は {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}} コンストラクターを使用するべきです。

`MouseEvent` からは、 {{domxref("WheelEvent")}}、{{domxref("DragEvent")}}、{{domxref("PointerEvent")}} などの特定用途向けイベントが派生しています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}}
  - : `MouseEvent` オブジェクトを生成します。

## 静的プロパティ

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : 通常のクリックに必要な最小圧力。
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : 強めのクリック (force click)に必要な最小圧力。

## インスタンスプロパティ

_このインターフェイスは、親インターフェイスである {{domxref("UIEvent")}} および {{domxref("Event")}} のプロパティも継承しています。_

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : マウスイベントが発行されたときに <kbd>alt</kbd> キーが押下されていれば `true` を返します。
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : マウスイベントが発行されたときに押下されたボタンの番号 (もしあれば) です。
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : マウスイベントが発行されたときに離されていたボタンの番号 (もしあれば) です。
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : ローカル (DOM コンテンツ) 座標における、マウスポインターの X 座標です。
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : ローカル (DOM コンテンツ) 座標における、マウスポインターの Y 座標です。
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : マウスイベントが発行されたときに <kbd>control</kbd> キーが押下されていれば、 `true` を返します。
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 現在のレイヤーを基準としたイベントの水平座標を返します。
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 現在のレイヤーを基準としたイベントの垂直座標を返します。
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : マウスイベントが発行されたときに <kbd>meta</kbd> キーが押下されていれば、 `true` を返します。
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : 直前の {{domxref("Element/mousemove_event", "mousemove")}} イベントの位置から相対的な、マウスポインターの X 座標です。
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : 直前の {{domxref("Element/mousemove_event", "mousemove")}} イベントの位置から相対的な、マウスポインターの Y 座標です。
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : 対象ノードのパディング辺の位置に対して相対的なマウスポインターの X 座標です。
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : 対象ノードのパディング辺の位置に対して相対的なマウスポインターの Y 座標です。
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : 文書全体に対して相対的な、マウスポインターの X 座標です。
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : 文書全体に対して相対的な、マウスポインターの Y 座標です。
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : イベントのセカンダリターゲットがあれば、それを表します。
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : グローバル (スクリーン) 座標における、マウスポインターの X 座標。
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : グローバル (スクリーン) 座標における、マウスポインターの Y 座標。
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : マウスイベントが発行されたときに <kbd>shift</kbd> キーが押下されていれば、`true` を返します。
- {{domxref("MouseEvent.mozPressure")}} {{non-standard_inline()}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : イベントが発行されたとき、タッチ機器やタブレット機器に与えられた圧力の大きさです。この値の範囲は、`0.0` (最小圧力) から `1.0` (最大圧力) の間です。
    このプロパティは非推奨 (かつ標準外) であり、代わりに {{domxref("PointerEvent")}} を使用し、 {{domxref("PointerEvent.pressure", "pressure")}} プロパティを参照してください。
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : イベントを生成した機器の種類 (`MOZ_SOURCE_*` 定数のいずれか)。
    これにより、例えばマウスイベントが実際のマウスによって発行されたのか、あるいはタッチイベントによって発行されたのかを識別できます (これは、イベントに関連する座標を解釈する際の正確さに影響を与えるでしょう)。
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : クリック時に与えられた圧力。
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientX")}} の別名。
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientY")}} の別名。

## インスタンスメソッド

_このインターフェイスは、親インターフェイスである {{domxref("UIEvent")}} および {{domxref("Event")}} のメソッドも継承しています。_

- {{domxref("MouseEvent.getModifierState()")}}
  - : 指定した修飾キーの現在の状態を返します。詳しくは {{domxref("KeyboardEvent.getModifierState")}}() をご覧ください。
- {{domxref("MouseEvent.initMouseEvent()")}} {{deprecated_inline}}
  - : 作成した `MouseEvent` の値を初期化します。イベントがすでに発行されている場合は、何も行いません。

## 例

この例では、 DOM メソッドを使ってチェックボックスのクリック（プログラムによるクリックイベントの生成）をシミュレートしています。
イベントの状態（キャンセルされたかどうか）は、メソッド {{domxref("EventTarget.dispatchEvent", "EventTarget.dispatchEvent()")}} の返値で判断されます。

### HTML

```html
<p>
  <label><input type="checkbox" id="checkbox" /> チェック</label>
</p>
<p>
  <button id="button">
    クリックすると MouseEvent をチェックボックスに送信します
  </button>
</p>
```

### JavaScript

```js
function simulateClick() {
  // クリックイベントを送るために要素を取得
  const cb = document.getElementById("checkbox");

  // クリックイベントの MouseEvent を合成
  let evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  // イベントをチェックボックス要素に送信
  cb.dispatchEvent(evt);
}
document.getElementById("button").addEventListener("click", simulateClick);
```

### 結果

{{EmbedLiveSample('Example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 直近の親である {{domxref("UIEvent")}}
- {{domxref("PointerEvent")}}: マルチタッチを含む拡張されたポインターイベント
