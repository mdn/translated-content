---
title: "ReadableStreamDefaultController: error() メソッド"
short-title: error()
slug: Web/API/ReadableStreamDefaultController/error
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`error()`** は {{domxref("ReadableStreamDefaultController")}} インターフェイスのメソッドで、関連づけられたストリームとの今後のやり取りをエラーにします。

> **メモ:** `error()` メソッドは複数回呼び出すことができ、ストリームが読み取り可能でないときに呼び出すことができます。

## 構文

```js-nolint
error(e)
```

### 引数

- `e`
  - : 今後のやり取りを失敗させるエラー。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : ソースオブジェクトが `ReadableStreamDefaultController` ではないか、何らかの理由でストリームが読み取り可能ではありません。

## 例

仕様にある[基になるプッシュソースと背圧サポートのある読み取り可能なストリーム](https://streams.spec.whatwg.org/#example-rs-push-backpressure)の例は、{{domxref("ReadablestreamDefaultController.desiredSize")}} を使用してストリームがいっぱいになったことを手動で検出し、背圧を適用しています。 また、`error()` を使用して、依存しているシステムの別の部分に障害が発生した場合に手動でストリームのエラーをトリガーする良い例を示しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStreamDefaultController")}}
