---
title: FileReader.readAsBinaryString()
slug: Web/API/FileReader/readAsBinaryString
---

{{APIRef("File API")}}

`readAsBinaryString` メソッドは、 指定された {{domxref("Blob")}} ないし {{domxref("File")}} オブジェクトを読み込むために使用します。 読込処理が終了すると {{domxref("FileReader.readyState","readyState")}} は `DONE` に変わり、{{domxref("XMLHttpRequest/loadend_event", "loadend")}} イベントが生じます。それと同時に {{domxref("FileReader.result","result")}} プロパティには生のバイナリデータを文字列で解釈したものが格納されます。

このメソッドは、File API の仕様から一度削除されましたが、後方互換のために再導入されました。
{{domxref("FileReader.readAsArrayBuffer()")}} の使用が推奨されています。

## 構文

```
instanceOfFileReader.readAsBinaryString(blob);
```

### パラメータ

- `blob`
  - : メソッドで読み込む {{domxref("Blob")}} または {{domxref("File")}} オブジェクトです。

## 例

```js
var canvas = document.createElement('canvas');
var height = 200;
var width  = 200;

canvas.width  = width;
canvas.height = height;

var ctx = canvas.getContext('2d');

ctx.strokeStyle = '#090';
ctx.beginPath();
ctx.arc(width/2, height/2, width/2 - width/10, 0, Math.PI*2);
ctx.stroke();

canvas.toBlob(function (blob) {
  var reader = new FileReader();

  reader.onload = function () {
    console.log(reader.result);
  }

  reader.readAsBinaryString(blob);
});
```

## 仕様

| 仕様                                                                                     | ステータス                   | コメント |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('File API','#readAsBinaryString','readAsBinaryString')}} | {{Spec2('File API')}} |          |

## ブラウザ実装状況

{{Compat("api.FileReader.readAsBinaryString")}}

## 関連情報

- {{domxref("FileReader")}}
