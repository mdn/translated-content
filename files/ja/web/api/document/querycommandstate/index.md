---
title: Document.queryCommandState()
slug: Web/API/Document/queryCommandState
---

{{ApiRef("DOM")}}{{deprecated_header}}

**`queryCommandState()`** メソッドは、現在の選択範囲に特定の {{domxref("Document.execCommand()")}} コマンドが適用されているかどうかを知らせます。

## 構文

```js
queryCommandState(String command)
```

### 引数

`command` は {{domxref("Document.execCommand()")}} のコマンドです。

### 返値

`queryCommandState()` は論理値、または状態が不明な場合は `null` を返す可能性があります。

## 例

### HTML

```html
<div contenteditable="true">Select a part of this text!</div>
<button onclick="makeBold();">Test the state of the 'bold' command</button>

<hr />

<div id="output"></div>
```

```css hidden
hr,
button {
  margin: 1rem 0;
}
```

### JavaScript

```js
function makeBold() {
  const state = document.queryCommandState("bold");
  let message;
  switch (state) {
    case true:
      message = "The bold formatting will be removed from the selected text.";
      break;
    case false:
      message = "The selected text will be displayed in bold.";
      break;
    default:
      message = "The state of the 'bold' command is indeterminable.";
      break;
  }
  document.querySelector("#output").textContent = `Output: ${message}`;
  document.execCommand("bold");
}
```

### 結果

{{EmbedLiveSample('Example', '100', '180')}}

## 仕様書

この機能は、現在のどの仕様にも含まれていません。標準化される予定もありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.contentEditable")}}
- {{domxref("document.designMode")}}
- `queryCommandState()` に関するブラウザーのバグ: [Scribe's "Browser Inconsistencies" documentation](https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate)
