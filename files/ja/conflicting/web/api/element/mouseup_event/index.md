---
title: GlobalEventHandlers.onmouseup
slug: conflicting/Web/API/Element/mouseup_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/onmouseup
original_slug: Web/API/GlobalEventHandlers/onmouseup
browser-compat: api.GlobalEventHandlers.onmouseup
---
{{ApiRef("HTML DOM")}}

**`onmouseup`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、{{event("mouseup")}} イベントを処理する[イベントハンドラー](/ja/docs/Web/Events/Event_handlers)です。

`mouseup` イベントは、ユーザーがマウスボタンを離したときに発行されます。

> **Note:** **メモ:** `onmouseup` の反対の動作は {{domxref("GlobalEventHandlers.onmousedown", "onmousedown")}} です。

## 構文

```js
target.onmouseup = functionRef;
```

### 値

`functionRef` は、関数名または[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)です。この関数は、唯一の引数として {{domxref("MouseEvent")}} オブジェクトを受け取ります。

## 例

この例は、マウスでクリックするとトーストが非表示になり、離すと再び表示されます。{{domxref("GlobalEventHandlers.onmousedown", "onmousedown")}} と `onmouseup` イベントハンドラーを使用します。

### HTML

```html
<div class="container">
  <div class="toaster"></div>
  <div class="toast">Hello world!</div>
</div>
```

### CSS

```css
.container {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%);
}

.toaster {
  width: 160px;
  height: 110px;
  background: #bbb;
  border-radius: 10px 10px 0 0;
}

.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  width: 100px;
  height: 50px;
  padding: 10px;
  background: #ed9;
  border-radius: 10px 10px 0 0;
  transform: translate(-50%, -90px);
  transition: transform .3s;
}

.depressed {
  transform: translate(-50%, -50%);
}
```

### JavaScript

```js
function depress() {
  toast.classList.add('depressed');
}

function release() {
  toast.classList.remove('depressed');
}

const toaster = document.querySelector('.toaster');
const toast = document.querySelector('.toast');

toaster.onmousedown = depress;
document.onmouseup = release;
```

### 結果

{{EmbedLiveSample("Example", 700, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{event("mouseup")}} イベント
