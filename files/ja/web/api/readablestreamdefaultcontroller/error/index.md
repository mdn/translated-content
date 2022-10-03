---
title: ReadableStreamDefaultController.error()
slug: Web/API/ReadableStreamDefaultController/error
---

{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultController")}} インターフェイスの **`error()`** メソッドにより、関連するストリームとの今後のやり取りがエラーになります。

> **メモ:** `error()` メソッドは複数回呼び出すことができ、ストリームが読み取り可能でないときに呼び出すことができます。

## 構文

```
readableStreamDefaultController.error(e);
```

### パラメーター

- _e_
  - : 今後のやり取りを失敗させるエラー。

### 戻り値

`undefined`。

### 例外

- TypeError
  - : ソースオブジェクトが `ReadableStreamDefaultController` ではないか、何らかの理由でストリームが読み取り可能ではありません。

## 例

仕様にある[基になるプッシュソースとバックプレッシャーサポートのある読み取り可能なストリーム](https://streams.spec.whatwg.org/#example-rs-push-backpressure)の例は、{{domxref("ReadablestreamDefaultController.desiredSize")}} を使用してストリームがいっぱいになったことを手動で検出し、バックプレッシャーを適用しています。 また、`error()` を使用して、依存しているシステムの別の部分に障害が発生した場合に手動でストリームのエラーをトリガーする良い例を示しています。

## 仕様

| 仕様                                                                                 | 状態                         | コメント |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("Streams","#rs-default-controller-error","error()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStreamDefaultController.error")}}
