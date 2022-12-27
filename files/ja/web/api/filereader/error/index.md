---
title: FileReader.error
slug: Web/API/FileReader/error
---

{{APIRef("File API")}}

{{domxref("FileReader")}} の **`error`** プロパティは、ファイルの読み取り中に発生したエラーを返します。

## 構文

```
var error = instanceOfFileReader.error
```

## 値

{{domxref("DOMError")}} に関連するエラーが含まれています。 Chrome 48+/Firefox 58+ では、 `DOMError` が DOM 標準から削除されているため、このプロパティは {{domxref("DOMException")}} を返します。

## 仕様

| 仕様書                                                                               | 状態                         | 備考     |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("File API", "#FileReader-interface", "FileReader")}} | {{Spec2("File API")}} | 初回定義 |

## ブラウザの互換性

{{Compat("api.FileReader.error")}}

## あわせて参照

- {{domxref("FileReader")}}
