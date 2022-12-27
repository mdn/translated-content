---
title: FileReader()
slug: Web/API/FileReader/FileReader
---

**`FileReader()`** コンストラクタは、新しい FileReader を作成します。

`FileReader` の使用方法の詳細については、[Web アプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications) を参照してください。

## シンタックス

```js
var reader = new FileReader();
```

### パラメータ

なし

## 例

次のコードスニペットは、`FileReader()` コンストラクタを使用した [`FileReader`](/ja/docs/Web/API/FileReader) オブジェクトの作成と、その後のオブジェクトの使用法を示しています。

```js
function printFile(file) {
  var reader = new FileReader();
  reader.onload = function(evt) {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}
```

## 仕様

{{Specifications}}

## あわせて参照

- [Web アプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
