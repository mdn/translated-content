---
title: FileReader()
slug: Web/API/FileReader/FileReader
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("File API")}}

**`FileReader()`** コンストラクターは、新しい FileReader を作成します。

`FileReader` の使用方法の詳細については、[ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)を参照してください。

## 構文

```js-nolint
new FileReader()
```

### 引数

なし。

## 例

次のコードスニペットは、`FileReader()` コンストラクタを使用した [`FileReader`](/ja/docs/Web/API/FileReader) オブジェクトの作成と、その後のオブジェクトの使用法を示しています。

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
