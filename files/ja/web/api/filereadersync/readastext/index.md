---
title: "FileReaderSync: readAsText() メソッド"
short-title: readAsText()
slug: Web/API/FileReaderSync/readAsText
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File API")}}

`readAsText()` は {{DOMxRef("FileReaderSync")}} インターフェイスのメソッドで、{{DOMxRef("File")}} または {{DOMxRef("Blob")}} オブジェクトを同期的に文字列に読み込むことができます。このインターフェイスは、ブロックが発生する可能性のある同期 I/O を可能にするため、[ワーカー](/ja/docs/Web/API/Worker)で[のみ利用可能](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)です。

## 構文

```js-nolint
readAsText(File)
readAsText(Blob)
readAsText(File, encoding)
readAsText(Blob, encoding)
```

### 引数

- `blob`
  - : 読み込み対象の DOM {{DOMxRef("File")}} または {{DOMxRef("Blob")}}。
- `encoding`
  - : オプションの引数で、使用するエンコーディングを指定します（`iso-8859-1` や `UTF-8` など）。存在しない場合、このメソッドは検出アルゴリズムを適用します。

### 返値

入力データを表す文字列です。

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
