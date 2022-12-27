---
title: ReadableStreamDefaultController.desiredSize
slug: Web/API/ReadableStreamDefaultController/desiredSize
---

{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultController")}} インターフェイスの **`desiredSize`** 読み取り専用プロパティは、ストリームの内部キューを満たすために必要な希望サイズを返します。

## 構文

```
var desiredSize = readableStreamDefaultController.desiredSize;
```

### 値

整数。 キューがいっぱいになった場合、これは負になる可能性があることに注意してください。

## 例

仕様にある[基になるプッシュソースとバックプレッシャーサポートのある読み取り可能なストリーム](https://streams.spec.whatwg.org/#example-rs-push-backpressure)の例は、`desiredSize` を使用してストリームがいっぱいになったことを手動で検出し、バックプレッシャーを適用する良い例を示しています。 また、{{domxref("ReadablestreamDefaultController.error()")}} を使用して、依存しているシステムの別の部分に障害が発生した場合に手動でストリームのエラーをトリガーします。

## 仕様

| 仕様                                                                                                 | 状態                         | コメント |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#rs-default-controller-desired-size","desiredSize")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStreamDefaultController.desiredSize")}}
