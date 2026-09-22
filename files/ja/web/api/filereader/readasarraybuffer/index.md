---
title: "FileReader: readAsArrayBuffer() メソッド"
short-title: readAsArrayBuffer()
slug: Web/API/FileReader/readAsArrayBuffer
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`readAsArrayBuffer()`** は {{domxref("FileReader")}} インターフェイスのメソッドで、指定された {{domxref("Blob")}} ないし {{domxref("File")}} オブジェクトの内容を読み込むために使用します。読み込み処理が終了すると {{domxref("FileReader.readyState","readyState")}} プロパティが `DONE` に変わり、 {{domxref("FileReader/loadend_event", "loadend")}} イベントが発行されます。それと同時に、 {{domxref("FileReader.result","result")}} プロパティにはファイルのデータを表す {{jsxref("ArrayBuffer")}} が格納されます。

> [!NOTE]
> {{domxref("Blob.arrayBuffer()")}} メソッドは、ファイルを ArrayBuffer として読み取るためのプロミスベースのより新しい API です。

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
