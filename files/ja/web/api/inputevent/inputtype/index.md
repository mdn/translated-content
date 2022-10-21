---
title: InputEvent.inputType
slug: Web/API/InputEvent/inputType
---

{{APIRef("DOM Events")}}

**`inputType`** は {{domxref("InputEvent")}} インターフェイスの読取専用プロパティで、編集可能なコンテンツの変更が行われた種別を返します。変更は例えば挿入、削除、テキスト整形などがあります。

## 構文

```
var aString = inputEvent.inputType;
```

### 値

入力された入力種別を含む {{domxref("DOMString")}}。 `insertText`, `deleteContentBackward`, `insertFromPaste`, `formatBold` など、多くの値が考えられます。利用可能な入力種別の完全なリストは、[Input Events Level 1 仕様の Attributes の章](https://rawgit.com/w3c/input-events/v1/index.html#interface-InputEvent-Attributes)を参照してください。

## 例

この例は編集可能な {{htmlElement("div")}} の[入力イベント](/ja/docs/Web/API/HTMLElement/input_event) の `inputType` をログ出力します。

### HTML

```html
<p id="log">Input type: </p>
<div contenteditable="true" style="margin: 20px;padding: 20px;border:2px dashed red;">
  <p>Some sample text. Try inserting line breaks, or deleting text in different ways, or pasting different content in.</p>
  <hr>
  <ul>
    <li>A sample</li>
    <li>bulleted</li>
    <li>list.</li>
  </ul>
  <p>Another paragraph.</p>
</div>
```

### JavaScript

```js
const log = document.getElementById('log');
const editable = document.querySelector('div[contenteditable]');
editable.addEventListener('input', logInputType);

function logInputType(event) {
  log.textContent = `Input type: ${event.inputType}`;
}
```

### 結果

Try editing the text inside the `<div>` and see what happens.

{{EmbedLiveSample("Examples", '100%', 500)}}

> **メモ:** もっと詳細な例として [Masayuki Nakano's InputEvent test suite](https://d-toybox.com/studio/lib/input_event_viewer.html) も参照してください。

## 仕様書

| 仕様書                                                                                   | 状態                         | 備考 |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ---- |
| {{SpecName('UI Events','#dom-inputevent-inputtype','inputType')}} | {{Spec2('UI Events')}} |      |

## ブラウザーの互換性

{{Compat("api.InputEvent.inputType")}}
