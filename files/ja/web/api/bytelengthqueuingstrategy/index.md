---
title: ByteLengthQueuingStrategy
slug: Web/API/ByteLengthQueuingStrategy
---

{{SeeCompatTable}}{{APIRef("Streams")}}

[Streams API](/ja/docs/Web/API/Streams_API) の **`ByteLengthQueuingStrategy`** インターフェイスは、ストリームを構築するときに使用できる組み込みのバイト長キューイング戦略を提供します。

## コンストラクター

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}}
  - : 新しい `ByteLengthQueuingStrategy` オブジェクトのインスタンスを作成します。

## プロパティ

なし。

## メソッド

- {{domxref("ByteLengthQueuingStrategy.size()")}}
  - : 所与のチャンクの `byteLength` プロパティを返します。

## 例

```js
const queueingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1 });

const readableStream = new ReadableStream({
  start(controller) {
    ...
  },
  pull(controller) {
    ...
  },
  cancel(err) {
    console.log("stream error:", err);
  }
}, queueingStrategy);

var size = queueingStrategy.size(chunk);
```

## 仕様

| 仕様                                                                                     | 状態                         | コメント |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Streams','#blqs-class','ByteLengthQueuingStrategy')}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ByteLengthQueuingStrategy")}}
