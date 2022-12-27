---
title: FileReader.result
slug: Web/API/FileReader/result
---

{{APIRef("File API")}}

{{domxref("FileReader")}} の **`result`** プロパティは、ファイルの内容を返します。このプロパティは、読み取り操作が完了した後でのみ有効で、データの形式は、読み取り操作を開始するために使用されたメソッドによって異なります。

## 構文

```
var file = instanceOfFileReader.result
```

### 値

読み取り操作を開始するためにどの読み取りメソッドが使用されたかに基づく、適切な文字列または {{jsxref("ArrayBuffer")}} です。読み取りがまだ完了していないか、失敗した場合は、値は `null` になります。

結果の型は以下に記載されています。

| メソッド                                                                                     | 説明                                                                                                                                |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref("FileReader/readAsArrayBuffer", "readAsArrayBuffer()")}}     | `result` はバイナリデータを含む JavaScript の {{jsxref("Global_Objects/ArrayBuffer", "ArrayBuffer")}} になります。 |
| {{domxref("FileReader/readAsBinaryString", "readAsBinaryString()")}} | `result` にはファイルからの生のバイナリデータが文字列で格納されます。                                                               |
| {{domxref("FileReader/readAsDataURL", "readAsDataURL()")}}                 | `result` はファイルのデータを表す `data:` URL の文字列になります。                                                                  |
| {{domxref("FileReader/readAsText", "readAsText()")}}                         | `result` は文字列のテキストです。                                                                                                   |

## 例

この例は、[ファイル入力](/ja/docs/Web/HTML/Element/input/file)からファイルを読み込む関数 `read()` を示しています。これは {{domxref("FileReader")}} オブジェクトを作成し、 {{domxref("FileReader/load_event", "load")}} イベントのリスナーを作成し、ファイルが読み込まれるとその `result` を取得し、提供されたコールバック関数を `read()` に渡すことによって機能します。

内容は生のテキストデータとして扱われます。

```js
var fileInput = document.querySelector('input[type="file"]');

function read(callback) {
  var file = fileInput.files.item(0);
  var reader = new FileReader();

  reader.onload = function() {
    callback(reader.result);
  }

  reader.readAsText(file);
}
```

## 仕様

| 仕様書                                                                               | 状態                         | 備考     |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("File API", "#FileReader-interface", "FileReader")}} | {{Spec2("File API")}} | 初回定義 |

## ブラウザの互換性

{{Compat("api.FileReader.result")}}

## あわせて参照

- {{domxref("FileReader")}}
