---
title: Blob.type
slug: Web/API/Blob/type
---

{{APIRef("File API")}}

{{domxref("Blob")}} オブジェクトの **`type`** プロパティは、ファイルの {{Glossary("MIME type")}} を返します。

## シンタックス

```
var mimetype = blob.type
```

### 値

ファイルの MIME タイプを含む {{domxref("DOMString")}}、または型が特定できなかった場合は空文字列を指定します。

## 例

この例では、ユーザーにいくつかのファイルを選択してもらい、各ファイルが指定された画像ファイルタイプのセットのいずれかであるかどうかを確認します。

```js
var i, fileInput, files, allowedFileTypes;

// fileInput は HTMLInputElement <input type="file" multiple id="myfileinput"> です。
fileInput = document.getElementById("myfileinput");

// files は FileList オブジェクトです (NodeList に似ています)。
files = fileInput.files;

// 私たちのアプリケーションは GIF、PNG、JPEG 画像のみを許可しています。
allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

for (i = 0; i < files.length; i++) {
  // file.type が許可されたファイルタイプであるかどうかをテストします。
  if (allowedFileTypes.indexOf(files[i].type) > -1) {
    // マッチしたファイルタイプは、許可されているファイルタイプの一つです。ここで何か処理を行います。
  }
});
```

## 仕様

| 仕様書                                                               | ステータス                   | コメント |
| -------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('File API', '#dfn-type', 'Blob.type')}} | {{Spec2('File API')}} | 初期定義 |

## ブラウザの互換性

{{Compat("api.Blob.type")}}

## あわせて参照

- {{domxref("Blob")}}
- [Web アプリケーションからのファイルの使用](/ja/docs/Web/API/File/Using_files_from_web_applications)
