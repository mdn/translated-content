---
title: "Selection: deleteFromDocument() メソッド"
short-title: deleteFromDocument()
slug: Web/API/Selection/deleteFromDocument
l10n:
  sourceCommit: 860cbd30a1ea3812c51f60a341f856e7d5426efb
---

{{ ApiRef("DOM") }}

**`deleteFromDocument()`** は {{domxref("Selection")}} インターフェイスのメソッドで、{{domxref("Range.deleteContents()")}} メソッドを選択された {{domxref("Range")}} に対して呼び出します。

## 構文

```js-nolint
deleteFromDocument()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、ボタンをクリックすることで、選択されたテキストやノードを削除することができます。ボタンをクリックすると、{{domxref("Window.getSelection()")}} メソッドが選択されたコンテンツを取得し、`deleteFromDocument()` メソッドによってそれが削除されます。

### HTML

```html
<p>これらの段落にある要素をいくつかハイライトしてみてください。</p>
<p>
  設定が完了したら、下のボタンをクリックして、選択したコンテンツを削除できます。
</p>
<h2>選択されたテキスト／ノードはすべて削除されます。</h2>
<button>選択したテキストを削除</button>
```

### JavaScript

```js
let button = document.querySelector("button");
button.addEventListener("click", deleteSelection);

function deleteSelection() {
  let selection = window.getSelection();
  selection.deleteFromDocument();
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("Selection")}}
