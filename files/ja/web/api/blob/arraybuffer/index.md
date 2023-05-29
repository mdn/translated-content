---
title: Blob.arrayBuffer()
slug: Web/API/Blob/arrayBuffer
l10n:
  sourceCommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{APIRef("File API")}}

**`arrayBuffer()`** は {{domxref("Blob")}} インターフェイスのメソッドで、 {{jsxref("ArrayBuffer")}} 内のバイナリーデータとした Blob の内容を解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
arrayBuffer()
```

### 引数

なし

### 返値

Blob のデータをバイナリー形式で含む {{jsxref("ArrayBuffer")}} で解決するプロミスです。

### 例外

このメソッドでは例外が発生しませんが、プロミスを拒否することがあります。例えば、Blob のデータを取得するために使用されたリーダーで例外が発生した場合などです。データの取得中に発生した例外はすべて拒否に変換されます。

## 使用上のメモ

{{domxref("FileReader.readAsArrayBuffer()")}} メソッドに似ていますが、`arrayBuffer()` は、`FileReader` インターフェイスのメソッドのようにイベントベースの API ではなく、Promise を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.arrayBuffer()")}}
- [ストリーム API](/ja/docs/Web/API/Streams_API)
- {{domxref("FileReader.readAsArrayBuffer()")}}
