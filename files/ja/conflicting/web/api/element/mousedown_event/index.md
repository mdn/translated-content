---
title: GlobalEventHandlers.onmousedown
slug: conflicting/Web/API/Element/mousedown_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/onmousedown
original_slug: Web/API/GlobalEventHandlers/onmousedown
browser-compat: api.GlobalEventHandlers.onmousedown
---
{{ ApiRef("HTML DOM") }}

**`onmousedown`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、{{event("mousedown")}} イベントを処理する[イベントハンドラー](/ja/docs/Web/Events/Event_handlers)です。

`mousedown` イベントは、ユーザーがマウスボタンを押したときに発行されます。

> **Note:** **メモ:** `onmousedown` の反対の動作は {{domxref("GlobalEventHandlers.onmouseup", "onmouseup")}} です。

## 構文

```js
target.onmousedown = functionRef;
```

### 値

`functionRef` は、関数名または[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)です。この関数は、唯一の引数として {{domxref("MouseEvent")}} オブジェクトを受け取ります。

## 例

この例は、マウスボタンを押したままにすると画像の一部を表示します。`onmousedown`, {{domxref("GlobalEventHandlers.onmouseup", "onmouseup")}}, {{domxref("GlobalEventHandlers.onmousemove", "onmousemove")}} イベントハンドラーを使用します。

### HTML

```html
<div class="container">
  <div class="view" hidden></div>
  <img src="https://interactive-examples.mdn.mozilla.net/media/examples/gecko-320-213.jpg">
</div>
```

### CSS

```css
.container {
  width: 320px;
  height: 213px;
  background: black;
}

.view {
  position: absolute;
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 50%;
}

img {
  mix-blend-mode: darken;
}
```

### JavaScript

```js
function showView(event) {
  view.removeAttribute('hidden');
  view.style.left = event.clientX - 50 + 'px';
  view.style.top = event.clientY - 50 + 'px';
  event.preventDefault();
}

function moveView(event) {
  view.style.left = event.clientX - 50 + 'px';
  view.style.top = event.clientY - 50 + 'px';
}

function hideView(event) {
  view.setAttribute('hidden', '');
}

const container = document.querySelector('.container');
const view = document.querySelector('.view');

container.onmousedown = showView;
container.onmousemove = moveView;
document.onmouseup = hideView;
```

### 結果

{{EmbedLiveSample("Example", 700, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{event("mousedown")}} イベント
