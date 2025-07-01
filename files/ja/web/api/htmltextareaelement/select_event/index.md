---
title: "HTMLTextAreaElement: select イベント"
short-title: select
slug: Web/API/HTMLTextAreaElement/select_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

**`select`** イベントは、テキストが選択されたときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("select", (event) => { })

onselect = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### 選択のログ

```html
<textarea>この要素内のテキストを選択してみてください。</textarea>
<p id="log"></p>
```

```js
function logSelection(event) {
  const log = document.getElementById("log");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd,
  );
  log.textContent = `選択範囲: ${selection}`;
}

const textarea = document.querySelector("textarea");
textarea.addEventListener("select", logSelection);
```

{{EmbedLiveSample("Selection_logger")}}

### onselect による同等の処理

イベントハンドラーを `onselect` プロパティで設定することもできます。

```js
textarea.onselect = logSelection;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement.select()")}}
