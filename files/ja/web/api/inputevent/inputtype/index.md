---
title: "InputEvent: inputType プロパティ"
short-title: inputType
slug: Web/API/InputEvent/inputType
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

**`inputType`** は {{domxref("InputEvent")}} インターフェイスの読み取り専用プロパティで、編集可能なコンテンツの変更が行われた種別を返します。変更は例えば挿入、削除、テキスト整形などがあります。

## 値

入力された入力種別を含む文字列です。`insertText`、`deleteContentBackward`、`insertFromPaste`、`formatBold` など、多くの値を取り得ます。利用可能な入力種別の完全なリストは、[Input Events Level 2 仕様の Attributes の章](https://w3c.github.io/input-events/#interface-InputEvent-Attributes)を参照してください。

## 例

この例は編集可能な {{htmlElement("div")}} の[入力イベント](/ja/docs/Web/API/Element/input_event) の `inputType` をログ出力します。

### HTML

```html
<p id="log">入力種別:</p>
<div
  contenteditable="true"
  style="margin: 20px;padding: 20px;border:2px dashed red;">
  <p>
    いくつかのサンプルテキストです。改行を入れたり、異なる形でテキストを削除したり、異なるコンテンツを貼り付けたりしてみてください。
  </p>
  <hr />
  <ul>
    <li>サンプルの</li>
    <li>箇条書き</li>
    <li>リスト</li>
  </ul>
  <p>他の段落</p>
</div>
```

### JavaScript

```js
const log = document.getElementById("log");
const editable = document.querySelector("div[contenteditable]");
editable.addEventListener("input", logInputType);

function logInputType(event) {
  log.textContent = `入力種別: ${event.inputType}`;
}
```

### 結果

`<div>` 内のテキストを編集して、どうなるかを試してみてください。

{{EmbedLiveSample("Examples", '100%', 500)}}

> [!NOTE]
> もっと詳細な例として [Masayuki Nakano's InputEvent test suite](https://d-toybox.com/studio/lib/input_event_viewer.html) も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
