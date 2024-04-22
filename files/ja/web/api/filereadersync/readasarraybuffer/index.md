---
title: "FileReaderSync: readAsArrayBuffer() メソッド"
short-title: readAsArrayBuffer()
slug: Web/API/FileReaderSync/readAsArrayBuffer
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File API")}}

`readAsArrayBuffer()` は {{DOMxRef("FileReaderSync")}} インターフェイスのメソッドで、{{DOMxRef("File")}} または {{DOMxRef("Blob")}} オブジェクトを同期的に {{jsxref("ArrayBuffer")}} に読み込むことができます。このインターフェイスは、ブロックが発生する可能性のある同期 I/O を可能にするため、[ワーカー](/ja/docs/Web/API/Worker)で[のみ利用可能](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)です。

## 構文

```js-nolint
readAsArrayBuffer(blob)
```

### 引数

- `blob`
  - : {{DOMxRef("File")}} または {{DOMxRef("Blob")}} で、{{DOMxRef("File")}} または {{jsxref("ArrayBuffer")}} に読み込むためのものです。

### 返値

ファイルのデータを表す {{jsxref("ArrayBuffer")}} です。

## 例外

このメソッドでは以下の例外が発生する可能性があります。

- `NotFoundError` {{domxref("DOMException")}}
  - : DOM の {{DOMxRef("File")}} または {{DOMxRef("Blob")}} で表されるリソースが、消去されたなどの理由で見つからない場合に発生します。
- `SecurityError` {{domxref("DOMException")}}
  - : 以下の問題のある状況のいずれかが検出された場合に発生します。
    - リソースが第三者によって変更されている
    - 同時に行われる読み取りが多すぎる
    - リソースが指しているファイルがウェブから利用するには安全ではない（システムファイルなど）
- `NotReadableError` {{domxref("DOMException")}}
  - : 同時実行ロックなどの権限の問題でリソースを読み込めない場合に発生します。
- `EncodingError` {{domxref("DOMException")}}
  - : リソースがデータ URL であり、ブラウザーごとに定義された制限長を超えた場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイル API](/ja/docs/Web/API/File_API)
- {{DOMxRef("File")}}
- {{DOMxRef("FileReaderSync")}}
- {{DOMxRef("FileReader")}}
- {{ domxref("Blob") }}
