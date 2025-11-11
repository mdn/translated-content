---
title: FileReader.readAsBinaryString()
slug: Web/API/FileReader/readAsBinaryString
l10n:
  sourceCommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{APIRef("File API")}}

`readAsBinaryString` メソッドは、 指定された {{domxref("Blob")}} または {{domxref("File")}} オブジェクトを読み込むために使用します。 読込処理が終了すると {{domxref("FileReader.readyState","readyState")}} は `DONE` に変わり、{{domxref("FileReader.loadend_event", "loadend")}} イベントが生じます。それと同時に {{domxref("FileReader.result","result")}} プロパティには生のバイナリーデータを文字列で解釈したものが格納されます。

このメソッドは、ファイル API の仕様から一度削除されましたが、後方互換のために再導入されました。
{{domxref("FileReader.readAsArrayBuffer()")}} の使用が推奨されています。

## 構文

```js-nolint
readAsBinaryString(blob)
```

### 引数

- `blob`
  - : メソッドで読み込む {{domxref("Blob")}} または {{domxref("File")}} オブジェクトです。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const canvas = document.createElement("canvas");
const height = 200;
const width = 200;

canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#090";
ctx.beginPath();
ctx.arc(width / 2, height / 2, width / 2 - width / 10, 0, Math.PI * 2);
ctx.stroke();

canvas.toBlob((blob) => {
  const reader = new FileReader();

  reader.onload = () => {
    console.log(reader.result);
  };

  reader.readAsBinaryString(blob);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FileReader")}}
