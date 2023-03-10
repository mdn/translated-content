---
title: "HTMLFormElement: reset イベント"
slug: Web/API/HTMLFormElement/reset_event
l10n:
  sourceCommit: a36633398f827c87eb593f9647ed00bf33fd5b34
---

{{APIRef}}

**`reset`** イベントは {{HTMLElement("form")}} がリセットされたときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを使用するかしてください。

```js
addEventListener('reset', (event) => {});

onreset = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

この例は {{domxref("EventTarget.addEventListener()")}} を使用してフォームがリセットされるのを、実行されたときに現在の {{domxref("Event.timeStamp")}} をログ出力します。

### HTML

```html
<form id="form">
  <label>Test field: <input type="text" /></label>
  <br /><br />
  <button type="reset">Reset form</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
function logReset(event) {
  log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('reset', logReset);
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{HTMLElement("form")}} 要素
