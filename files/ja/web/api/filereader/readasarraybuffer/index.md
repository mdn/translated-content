---
title: FileReader.readAsArrayBuffer()
slug: Web/API/FileReader/readAsArrayBuffer
l10n:
  sourceCommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{APIRef("File API")}}

{{domxref("FileReader")}} インターフェイスの **`readAsArrayBuffer()`** メソッドは、指定された {{domxref("Blob")}} ないし {{domxref("File")}} オブジェクトの内容を読み込むために使用します。読み込み処理が終了すると {{domxref("FileReader.readyState","readyState")}} が `DONE` に変わり、 {{domxref("FileReader/loadend_event", "loadend")}} イベントが発行されます。それと同時に、 {{domxref("FileReader.result","result")}} プロパティにはファイルのデータを表す {{jsxref("ArrayBuffer")}} が格納されます。

> **メモ:** {{domxref("Blob.arrayBuffer()")}} メソッドは、ファイルを ArrayBuffer として読み取るためのプロミスベースのより新しい API です。

## 構文

```js-nolint
readAsArrayBuffer(blob)
```

### 引数

- `blob`
  - : メソッドで読み込む {{domxref("Blob")}} または {{domxref("File")}} オブジェクトです。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FileReader")}}
