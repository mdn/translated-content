---
title: ByteLengthQueuingStrategy
slug: Web/API/ByteLengthQueuingStrategy
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`ByteLengthQueuingStrategy`** は[ストリーム API](/ja/docs/Web/API/Streams_API) のインターフェイスで、ストリームを構築するときに使用できる組み込みのバイト長キューイング戦略を提供します。

## コンストラクター

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}}
  - : 新しい `ByteLengthQueuingStrategy` オブジェクトのインスタンスを作成します。

## インスタンスプロパティ

- {{domxref("ByteLengthQueuingStrategy.highWaterMark")}} {{ReadOnlyInline}}
  - : [背圧](/ja/docs/Web/API/Streams_API/Concepts#背圧)が適用される前に内部キューに格納することができるバイト数の合計。

## インスタンスメソッド

- {{domxref("ByteLengthQueuingStrategy.size()")}}
  - : 指定されたチャンクの `byteLength` プロパティを返します。

## 例

```js
const queueingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1024 });

const readableStream = new ReadableStream(
  {
    start(controller) {
      // …
    },
    pull(controller) {
      // …
    },
    cancel(err) {
      console.log("stream error:", err);
    },
  },
  queueingStrategy,
);

const size = queueingStrategy.size(chunk);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Streams API", "ストリーム API", "", "nocode")}}
- [内部キューとキューイング戦略](/ja/docs/Web/API/Streams_API/Concepts#内部キューとキューイング戦略)
- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}} コンストラクター
