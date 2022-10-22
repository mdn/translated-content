---
title: FileReader.readAsText()
slug: Web/API/FileReader/readAsText
---

{{APIRef("File API")}}

**`readAsText()`** メソッドは、指定された {{domxref("Blob")}} または {{domxref("File")}} の内容を読み取るために使用します。読み取り操作が完了すると、 {{domxref("FileReader.readyState","readyState")}} が `DONE` に変わり、 {{event("loadend")}} イベントが発生し、 {{domxref("FileReader.result","result")}} プロパティにはファイルの内容が文字列として格納されます。

> **メモ:** **より新しい API が利用できます** > {{domxref("Blob.text()")}} メソッドは、ファイルをテキストとして読み取るための新しい Promise ベースの API です。

## 構文

```
instanceOfFileReader.readAsText(blob[, encoding]);
```

### 引数

- `blob`
  - : メソッドで読み込む {{domxref("Blob")}} または {{domxref("File")}} オブジェクトです。
- `encoding` {{optional_inline}}
  - : 読込の際に使用する文字エンコーディングを指定する文字列です。この引数が指定されなかった場合は UTF-8 で解釈されます。

## 仕様

| 仕様書                                                                               | 状態                         | 備考     |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("File API", "#FileReader-interface", "FileReader")}} | {{Spec2("File API")}} | 初回定義 |

## ブラウザの互換性

{{Compat("api.FileReader.readAsText")}}

## あわせて参照

- {{domxref("FileReader")}}
