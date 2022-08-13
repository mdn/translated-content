---
title: GlobalEventHandlers.onclick
slug: conflicting/Web/API/Element/click_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/onclick
original_slug: Web/API/GlobalEventHandlers/onclick
browser-compat: api.GlobalEventHandlers.onclick
---
{{ ApiRef("HTML DOM") }}

**`onclick`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、指定された要素の {{domxref("Element/click_event", "click")}} イベントを処理するための[イベントハンドラー](/ja/docs/Web/Events/Event_handlers)です。

`click` イベントは、ユーザーが要素をクリックしたときに発行されます。 {{domxref("Element/mousedown_event", "mousedown")}} イベントと {{domxref("Element/mouseup_event", "mouseup")}} イベントの後に、この順番で発行されます。

> **Note:** **注:** `click` イベントを使用してアクションを起動するときは、マウスやタッチ画面を使用していないユーザーが同じアクションを使用できるように、 {{domxref("Element/keydown_event", "keydown")}} イベントにも同じアクションを追加することを検討してください。

## 構文

```js
target.onclick = functionRef;
```

### 値

`functionRef` は、関数名または[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)です。この関数は、{{domxref("MouseEvent")}} オブジェクトを唯一の引数として受け取ります。関数内では、 {{jsxref("Operators/this", "this")}} は `onclick` が結びつけられたオブジェクトになります (`event.currentTarget` にも一致します)。

一度に 1 つのオブジェクトに割り当てることができる `onclick` ハンドラーは 1 つだけです。より柔軟性のある {{domxref("EventTarget.addEventListener()")}} メソッドを使用することをお勧めします。

## 例

### クリックの検出

この例では、要素の上でクリックが行われたときに要素の色を単純に変更します。

#### HTML

```html
<div id="demo">ここをクリック</div>
```

#### JavaScript

```js
document.getElementById('demo').onclick = function changeContent() {

   document.getElementById('demo').textContent = "Help me";
   document.getElementById('demo').style = "Color: red";

}
```

#### 結果

{{EmbedLiveSample("Detecting_clicks")}}

### クリックの座標の取得

この例では、最も新しくマウスボタンのクリックが行われた場所の座標を表示します。

#### HTML

```html
<p>この例のどこかをクリックしてください。</p>
<p id="log"></p>
```

#### JavaScript

```js
let log = document.getElementById('log');

document.onclick = inputChange;

function inputChange(e) {
  log.textContent = `位置: (${e.clientX}, ${e.clientY})`;
}
```

#### 結果

{{EmbedLiveSample("Getting_the_coordinates_of_clicks")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element/click_event", "click")}} イベント
- 関連イベントハンドラー

  - {{domxref("GlobalEventHandlers.onauxclick")}}
  - {{domxref("GlobalEventHandlers.ondblclick")}}
