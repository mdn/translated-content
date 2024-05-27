---
title: "FileReader: FileReader() コンストラクター"
short-title: FileReader()
slug: Web/API/FileReader/FileReader
l10n:
  sourceCommit: e43bfd9b4a6c363a4ba7ef6ffa64c09b38fd111b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`FileReader()`** コンストラクターは、新しい `FileReader` を作成します。

`FileReader` の使用方法の詳細については、[ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)を参照してください。

## 構文

```js-nolint
new FileReader()
```

### 引数

なし。

## 例

次のコードスニペットは、{{domxref("FileReader")}} オブジェクトを `FileReader()` コンストラクターで作成し、引き続きそのオブジェクトを使用する方法を示しています。

```js
function printFile(file) {
  const reader = new FileReader();
  reader.onload = (evt) => {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
