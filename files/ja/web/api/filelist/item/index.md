---
title: "FileList: item() メソッド"
short-title: item()
slug: Web/API/FileList/item
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`item()`** は {{domxref("FileList")}} インターフェイスのメソッドは、ファイルリスト中の指定された位置のファイルを表す {{domxref("File")}} オブジェクトを返します。

## 構文

```js-nolint
item(index)
```

### 引数

- `index`
  - : リストから取得するファイルの位置を表す 0 で始まる添字です。

### 返値

要求されたファイルを表す {{domxref("File")}} オブジェクトを返します。

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
