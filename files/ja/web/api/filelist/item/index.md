---
title: FileList.item()
slug: Web/API/FileList/item
l10n:
  sourceCommit: a122e87245c624ba56197641b4d7b21b643a6021
---

{{APIRef("File API")}}

{{domxref("FileList")}} API の **`item()`** メソッドは、ファイルリスト中の指定された位置のファイルを表す {{domxref("File")}} オブジェクトを返します。

## 構文

```js-nolint
item(index)
```

### 引数

- `index`
  - : リストから取得するファイルの、0 始まりの添字です。

### 返値

要求されたファイルを表す [`File`](/ja/docs/Web/API/File) オブジェクトを返します。

## 例

### ファイル名を出力する

この例では、`item()` を用いて `FileList` の最初のアイテムを選択します。

#### HTML

```html
<input type="file" />
<div class="output"></div>
```

#### JavaScript

```js
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", () => {
  const fileList = fileInput.files;
  if (fileList.length > 0) {
    const file = fileList.item(0);
    output.textContent = `${file.name} を選択しました`;
  }
});
```

#### 結果

{{EmbedLiveSample("ファイル名を出力する")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
