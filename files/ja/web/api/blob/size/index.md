---
title: Blob.size
slug: Web/API/Blob/size
---

{{APIRef("File API")}}

{{domxref("Blob")}} インターフェイスの **`size`** プロパティは、{{domxref("Blob")}} または {{domxref("File")}} のサイズをバイト単位で返します。

## シンタックス

```
var sizeInBytes = blob.size
```

### 値

`Blob` (または `Blob` ベースのオブジェクト、例えば{{domxref("File")}}) 内に含まれるデータのバイト数。

## 例

この例では、`file` 型の {{HTMLElement("input")}} 要素を使用して、ユーザーにファイルのグループを尋ね、それらのファイルを繰り返し処理して、その名前と長さをバイト単位で出力しています。

```js
// fileInputは HTMLInputElement <input type="file" multiple id="myfileinput"> です。
var fileInput = document.getElementById("myfileinput");

// files は FileList オブジェクトです (NodeList に似ています)。
var files = fileInput.files;

for (var i = 0; i < files.length; i++) {
  console.log(files[i].name + " has a size of " + files[i].size + " Bytes");
}
```

## 仕様

| 仕様書                                                               | ステータス                   | コメント |
| -------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('File API', '#dfn-size', 'Blob.size')}} | {{Spec2('File API')}} | 初期定義 |

## ブラウザの互換性

{{Compat("api.Blob.size")}}

## あわせて参照

- {{domxref("Blob")}}
- [Web アプリケーションからのファイルの使用](/ja/docs/Web/API/File/Using_files_from_web_applications)
