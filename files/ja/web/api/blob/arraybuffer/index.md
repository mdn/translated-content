---
title: Blob.arrayBuffer()
slug: Web/API/Blob/arrayBuffer
---

{{APIRef("File API")}}

{{domxref("Blob")}} インターフェイスの **`arrayBuffer()`** メソッドは、{{domxref("ArrayBuffer")}} 内のバイナリデータとして Blob の内容を解決する {{jsxref("Promise")}} を返します。

## シンタックス

```
var bufferPromise = blob.arrayBuffer();

blob.arrayBuffer().then(buffer => /* ArrayBuffer を処理します。 */);

var buffer = await blob.arrayBuffer();
```

### パラメータ

なし

### 戻り値

Blob のデータをバイナリ形式で含む {{domxref("ArrayBuffer")}} で解決する Promise。

### 例外

このメソッドは例外をスローしませんが、Promise を拒否することがあります。例えば、Blob のデータを取得するために使用されたリーダーが例外をスローした場合などです。データの取得中に発生した例外はすべて拒否に変換されます。

## 使用上のメモ

{{domxref("FileReader.readAsArrayBuffer()")}} メソッドに似ていますが、`arrayBuffer()` は、`FileReader` インターフェイスのメソッドのようにイベントベースの API ではなく、Promise を返します。

## 仕様

| 仕様書                                                                                           | ステータス                   | コメント |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("File API", "#dom-blob-arraybuffer", "Blob.arrayBuffer()")}} | {{Spec2("File API")}} |          |

## ブラウザの互換性

{{Compat("api.Blob.arrayBuffer")}}

## あわせて参照

- {{domxref("Body.arrayBuffer()")}}
- [Streams API](/ja/docs/Web/API/Streams_API)
- {{domxref("FileReader.readAsArrayBuffer()")}}
