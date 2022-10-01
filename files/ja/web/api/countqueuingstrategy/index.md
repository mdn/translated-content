---
title: CountQueuingStrategy
slug: Web/API/CountQueuingStrategy
---

{{SeeCompatTable}}{{APIRef("Streams")}}

[Streams API](/ja/docs/Web/API/Streams_API) の **`CountQueuingStrategy`** インターフェイスは、ストリームの構築時に使用できる組み込みのチャンクカウントキューイング戦略を提供します。

## コンストラクター

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}}
  - : 新しい `CountQueuingStrategy` オブジェクトのインスタンスを作成します。

## プロパティ

なし。

## メソッド

- {{domxref("CountQueuingStrategy.size()")}}
  - : `1` を返します。

## 例

```js
const queueingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

const writableStream = new WritableStream({
  // シンクの実装
  write(chunk) {
    ...
  },
  close() {
    ...
  },
  abort(err) {
    console.log("Sink error:", err);
  }
}, queueingStrategy);

var size = queueingStrategy.size();
```

## 仕様

| 仕様                                                                             | 状態                         | コメント |
| -------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Streams','#cqs-class','CountQueuingStrategy')}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.CountQueuingStrategy")}}
