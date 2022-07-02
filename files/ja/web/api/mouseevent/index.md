---
title: MouseEvent
slug: Web/API/MouseEvent
tags:
  - API
  - DOM
  - DOM イベント
  - インターフェイス
  - MouseEvent
  - リファレンス
  - イベント
  - マウス
browser-compat: api.MouseEvent
translation_of: Web/API/MouseEvent
---
{{APIRef("DOM Events")}}

**`MouseEvent`** インターフェイスは、ポインティングデバイス (マウスなど) によるユーザーの操作によって発行されたイベントを表します。
このインターフェイスを使用する一般的なイベントとして {{domxref("Element/click_event", "click")}}, {{domxref("Element/dblclick_event", "dblclick")}}, {{domxref("Element/mouseup_event", "mouseup")}}, {{domxref("Element/mousedown_event", "mousedown")}} があります。

`MouseEvent` は {{domxref("UIEvent")}} から派生しており、これはさらに {{domxref("Event")}} から派生しています。後方互換性のために {{domxref("MouseEvent.initMouseEvent()")}} メソッドは維持されていますが、 `MouseEvent` オブジェクトを作成する際は {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}} コンストラクターを使用するべきです。

`MouseEvent` からは、 {{domxref("WheelEvent")}}, {{domxref("DragEvent")}} などの特定用途向けイベントが派生しています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}}
  - : `MouseEvent` オブジェクトを生成します。

## プロパティ

_このインターフェイスは、親インターフェイスである {{domxref("UIEvent")}} および {{domxref("Event")}} のプロパティも継承しています。_

- {{domxref("MouseEvent.altKey")}} {{readonlyinline}}
  - : マウスイベントが発行されたときに <kbd>alt</kbd> キーが押下されていれば `true` を返します。
- {{domxref("MouseEvent.button")}} {{readonlyinline}}
  - : マウスイベントが発行されたときに押下されたボタンの番号 (もしあれば) です。
- {{domxref("MouseEvent.buttons")}} {{readonlyinline}}
  - : マウスイベントが発行されたときに離されていたボタンの番号 (もしあれば) です。
- {{domxref("MouseEvent.clientX")}} {{readonlyinline}}
  - : ローカル (DOM コンテンツ) 座標における、マウスポインターの X 座標です。
- {{domxref("MouseEvent.clientY")}} {{readonlyinline}}
  - : ローカル (DOM コンテンツ) 座標における、マウスポインターの Y 座標です。
- {{domxref("MouseEvent.ctrlKey")}} {{readonlyinline}}
  - : マウスイベントが発行されたときに <kbd>control</kbd> キーが押下されていれば、 `true` を返します。
- {{domxref("MouseEvent.metaKey")}} {{readonlyinline}}
  - : マウスイベントが発行されたときに <kbd>meta</kbd> キーが押下されていれば、 `true` を返します。
- {{domxref("MouseEvent.movementX")}} {{readonlyinline}}
  - : 直前の {{domxref("Element/mousemove_event", "mousemove")}} イベントの位置から相対的な、マウスポインターの X 座標です。
- {{domxref("MouseEvent.movementY")}} {{readonlyinline}}
  - : 直前の {{domxref("Element/mousemove_event", "mousemove")}} イベントの位置から相対的な、マウスポインターの Y 座標です。
- {{domxref("MouseEvent.offsetX")}} {{readonlyinline}}
  - : 対象ノードのパディング辺の位置に対して相対的なマウスポインターの X 座標です。
- {{domxref("MouseEvent.offsetY")}} {{readonlyinline}}
  - : 対象ノードのパディング辺の位置に対して相対的なマウスポインターの Y 座標です。
- {{domxref("MouseEvent.pageX")}} {{readonlyinline}}
  - : 文書全体に対して相対的な、マウスポインターの X 座標です。
- {{domxref("MouseEvent.pageY")}} {{readonlyinline}}
  - : 文書全体に対して相対的な、マウスポインターの Y 座標です。
- {{domxref("MouseEvent.region")}} {{readonlyinline}}
  - : イベントの影響を受けたヒット領域の ID を返します。影響を受けたヒット領域がない場合は、`null` を返します。
- {{domxref("MouseEvent.relatedTarget")}} {{readonlyinline}}
  - : イベントのセカンダリターゲットがあれば、それを表します。
- {{domxref("MouseEvent.screenX")}} {{readonlyinline}}
  - : グローバル (スクリーン) 座標における、マウスポインターの X 座標。
- {{domxref("MouseEvent.screenY")}} {{readonlyinline}}
  - : グローバル (スクリーン) 座標における、マウスポインターの Y 座標。
- {{domxref("MouseEvent.shiftKey")}} {{readonlyinline}}
  - : マウスイベントが発行されたときに <kbd>shift</kbd> キーが押下されていれば、`true` を返します。
- {{domxref("MouseEvent.mozPressure")}} {{non-standard_inline()}} {{deprecated_inline}} {{readonlyinline}}
  - : イベントが発行されたとき、タッチ機器やタブレット機器に与えられた圧力の大きさです。この値の範囲は、`0.0` (最小圧力) から `1.0` (最大圧力) の間です。
    このプロパティは非推奨 (かつ標準外) であり、代わりに {{domxref("PointerEvent")}} を使用し、 {{domxref("PointerEvent.pressure", "pressure")}} プロパティを参照してください。
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{readonlyinline}}
  - : イベントを生成した機器の種類 (`MOZ_SOURCE_*` 定数のいずれか)。
    これにより、例えばマウスイベントが実際のマウスによって発行されたのか、あるいはタッチイベントによって発行されたのかを識別できます (これは、イベントに関連する座標を解釈する際の正確さに影響を与えるでしょう)。
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{readonlyinline}}
  - : クリック時に与えられた圧力。
- {{domxref("MouseEvent.x")}} {{readonlyinline}}
  - : {{domxref("MouseEvent.clientX")}} の別名。
- {{domxref("MouseEvent.y")}} {{readonlyinline}}
  - : {{domxref("MouseEvent.clientY")}} の別名。

## 定数<

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}
  - : 通常のクリックに必要な最小圧力。
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}
  - : 強めのクリック (force click)に必要な最小圧力。

## メソッド

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
<p><label><input type="checkbox" id="checkbox"> チェック</label></p>
<p><button id="button">クリックすると MouseEvent をチェックボックスに送信します</button></p>
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
    view: window
  });

// イベントをチェックボックス要素に送信
cb.dispatchEvent(evt);
}
document.getElementById("button").addEventListener('click', simulateClick);
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
