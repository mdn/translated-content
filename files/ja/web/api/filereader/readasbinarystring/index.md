---
title: "FileReader: readAsBinaryString() メソッド"
short-title: readAsBinaryString()
slug: Web/API/FileReader/readAsBinaryString
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Deprecated_Header}}

> [!NOTE]
> このメソッドは {{DOMxRef("FileReader.readAsArrayBuffer","readAsArrayBuffer()")}} に置き換えられて非推奨になりました。

**`readAsBinaryString`** は {{domxref("FileReader")}} インターフェイスのメソッドで、指定された {{domxref("Blob")}} または {{domxref("File")}} オブジェクトを読み込むために使用します。 読込処理が終了すると {{domxref("FileReader.readyState","readyState")}} プロパティが `DONE` に変わり、{{domxref("FileReader/loadend_event", "loadend")}} イベントが発生します。それと同時に {{domxref("FileReader.result","result")}} プロパティには生のバイナリーデータを文字列で解釈したものが格納されます。

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

ctx.strokeStyle = "#009900";
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
