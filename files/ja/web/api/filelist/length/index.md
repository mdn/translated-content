---
title: "FileList: length プロパティ"
short-title: length
slug: Web/API/FileList/length
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`length`** は {{domxref("FileList")}} インターフェイスの読み取り専用プロパティで、`FileList` に含まれるファイルの数を返します。

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
