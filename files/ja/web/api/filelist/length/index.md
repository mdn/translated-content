---
title: FileList.length
slug: Web/API/FileList/length
l10n:
  sourceCommit: a122e87245c624ba56197641b4d7b21b643a6021
---

{{APIRef("File API")}}

{{domxref("FileList")}} の読み取り専用プロパティ **`length`** は、`FileList` に含まれるファイルの数を返します。

## 値

リスト中のファイルの数を表す数。

## 例

### 選択されたファイルの数を出力する

この例では、`FileList` の中のアイテム数を知るために `length` を使います。

#### HTML

```html
<input type="file" multiple />
<div class="output"></div>
```

#### JavaScript

```js
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", () => {
  const fileList = fileInput.files;
  output.textContent = `あなたは ${fileList.length} 個のファイルを選択しました`;
});
```

#### 結果

{{EmbedLiveSample("選択されたファイルの数を出力する")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
