---
title: FileReader.readAsArrayBuffer()
slug: Web/API/FileReader/readAsArrayBuffer
---

{{APIRef("File API")}}

{{domxref("FileReader")}} インターフェイスの **`readAsArrayBuffer()`** メソッドは、指定された {{domxref("Blob")}} ないし {{domxref("File")}} オブジェクトの内容を読み込むために使用します。読み込み処理が終了すると {{domxref("FileReader.readyState","readyState")}} が `DONE` に変わり、 {{domxref("FileReader/loadend_event", "loadend")}} イベントが発行されます。それと同時に、 {{domxref("FileReader.result","result")}} プロパティにはファイルのデータを表す {{domxref("ArrayBuffer")}} が格納されます。

> **メモ:** **より新しい API が利用可能です** > {{domxref("Blob.arrayBuffer()")}} メソッドは、ファイルを ArrayBuffer として読み取るための Promise ベースのより新しい API です。

## 構文

```
instanceOfFileReader.readAsArrayBuffer(blob);
```

### 引数

- `blob`
  - : メソッドで読み込む {{domxref("Blob")}} または {{domxref("File")}} オブジェクトです。

## 仕様

| 仕様書                                                                                                   | 状態                         | 備考     |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("File API", "#readAsArrayBuffer", "FileReader.readAsArrayBuffer")}} | {{Spec2("File API")}} | 初回定義 |

## ブラウザの互換性

{{Compat("api.FileReader.readAsArrayBuffer")}}

## 関連情報

- {{domxref("FileReader")}}
