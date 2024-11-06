---
title: "Range: selectNodeContents() メソッド"
short-title: selectNodeContents()
slug: Web/API/Range/selectNodeContents
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.selectNodeContents()`** メソッドは {{domxref("Range")}} が {{domxref("Node")}} のコンテンツを含むように設定します。

`Range` の開始と終わりの親ノード (`Node`) が参照ノードになります。 `startOffset` は 0 で、 `endOffset` は子 `Node` の数、または参照ノードに格納する文字数です。

## 構文

```js-nolint
selectNodeContents(referenceNode)
```

### 引数

- `referenceNode`
  - : {{domxref("Range")}} 内でコンテンツが選択されるノード ({{domxref("Node")}}) です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const range = document.createRange();
const referenceNode = document.querySelector("div");
range.selectNodeContents(referenceNode);
```

### ライブ例

この例では、ユーザーがボタンで段落を選択・解除できるようにしています。
{{domxref("Document.createRange()")}}、`Range.selectNodeContents()`、{{domxref("Selection.addRange()")}} を使用してコンテンツを選択しています。
選択解除には {{domxref("Window.getSelection()")}} と {{domxref("Selection.removeAllRanges()")}} を使用します。

#### HTML

```html
<p id="p">
  <strong>以下のボタンを使用して</strong
  >この段落の内容を選択または選択解除してください。
</p>
<button id="select-button">段落を選択</button>
<button id="deselect-button">段落を選択解除</button>
```

#### JavaScript

```js
const p = document.getElementById("p");
const selectButton = document.getElementById("select-button");
const deselectButton = document.getElementById("deselect-button");

selectButton.addEventListener("click", (e) => {
  // Clear any current selection
  const selection = window.getSelection();
  selection.removeAllRanges();

  // Select paragraph
  const range = document.createRange();
  range.selectNodeContents(p);
  selection.addRange(range);
});

deselectButton.addEventListener("click", (e) => {
  const selection = window.getSelection();
  selection.removeAllRanges();
});
```

#### 結果

{{EmbedLiveSample("Live_sample")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
