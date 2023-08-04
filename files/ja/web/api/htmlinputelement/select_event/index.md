---
title: "HTMLInputElement: select イベント"
slug: Web/API/HTMLInputElement/select_event
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{APIRef}}

**`select`** イベントは、いくらかのテキストが選択されたときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("select", (event) => {});

onselect = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### 選択範囲をログ出力

```html
<input value="この要素のテキストの一部を選択してみてください。">
<p id="log"></p>
```

```js
function logSelection(event) {
  const log = document.getElementById("log");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector("input");
input.addEventListener("select", logSelection);
```

{{EmbedLiveSample("Selection_logger")}}

### onselect による同等の処理

イベントハンドラーを `onselect` プロパティで設定することもできます。

```js
input.onselect = logSelection;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
