---
title: CountQueuingStrategy
slug: Web/API/CountQueuingStrategy
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`CountQueuingStrategy`** は[ストリーム API](/ja/docs/Web/API/Streams_API) のインターフェイスで、ストリームの構築時に使用できる組み込みのチャンクカウントキューイング戦略を提供します。

## コンストラクター

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}}
  - : 新しい `CountQueuingStrategy` オブジェクトのインスタンスを作成します。

## インスタンスプロパティ

- {{domxref("CountQueuingStrategy.highWaterMark")}} {{ReadOnlyInline}}
  - : [背圧](/ja/docs/Web/API/Streams_API/Concepts#背圧)が適用される前の内部キューに含まれているチャンクの総数です。

## インスタンスメソッド

- {{domxref("CountQueuingStrategy.size()")}}
  - : 常に `1` を返します。

## 例

```js
const queueingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

const writableStream = new WritableStream(
  {
    // シンクの実装
    write(chunk) {
      // …
    },
    close() {
      // …
    },
    abort(err) {
      console.log("Sink error:", err);
    },
  },
  queueingStrategy,
);

const size = queueingStrategy.size();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Streams API", "Streams API", "", "nocode")}}
- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}} コンストラクター
- [内部キューとキューイング戦略](/ja/docs/Web/API/Streams_API/Concepts#内部キューとキューイング戦略)
