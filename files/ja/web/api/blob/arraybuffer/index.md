---
title: "Blob: arrayBuffer() メソッド"
short-title: arrayBuffer()
slug: Web/API/Blob/arrayBuffer
l10n:
  sourceCommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`arrayBuffer()`** は {{domxref("Blob")}} インターフェイスのメソッドで、 Blob の内容を {{jsxref("ArrayBuffer")}} 内のバイナリーデータとした解決するプロミス ({{jsxref("Promise")}}) を返します。

## 構文

```js-nolint
arrayBuffer()
```

### 引数

なし

### 返値

Blob のデータをバイナリー形式で含む {{jsxref("ArrayBuffer")}} で解決するプロミスです。

### 例外

このメソッドでは例外が発生しませんが、プロミスが拒否されることがあります。例えば、Blob のデータを取得するために使用されたリーダーで例外が発生した場合などです。データの取得中に発生した例外はすべて拒否に変換されます。

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
