---
title: "FileReaderSync: readAsDataURL() メソッド"
short-title: readAsDataURL()
slug: Web/API/FileReaderSync/readAsDataURL
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File API")}}

`readAsDataURL()` は {{DOMxRef("FileReaderSync")}} インターフェイスのメソッドで、{{DOMxRef("File")}} または {{DOMxRef("Blob")}} オブジェクトを同期的にデータ URL を表す文字列に読み込むことができます。このインターフェイスは、ブロックが発生する可能性のある同期 I/O を可能にするため、[ワーカー](/ja/docs/Web/API/Worker)で[のみ利用可能](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)です。

## 構文

```js-nolint
readAsDataURL(File)
readAsDataURL(Blob)
```

### 引数

- `blob`
  - : 読み込み対象の {{DOMxRef("File")}} または {{DOMxRef("Blob")}} です。

### 返値

入力データをデータ URL として表す文字列です。

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

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- {{DOMxRef("File")}}
- {{DOMxRef("FileReaderSync")}}
- {{DOMxRef("FileReader")}}
- {{ domxref("Blob") }}
