---
title: "ByteLengthQueuingStrategy: highWaterMark プロパティ"
short-title: highWaterMark
slug: Web/API/ByteLengthQueuingStrategy/highWaterMark
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`ByteLengthQueuingStrategy.highWaterMark`** は読み取り専用プロパティで、[背圧](/ja/docs/Web/API/Streams_API/Concepts#背圧)が適用される前に内部キューに格納することができる総バイト数を返します。

> [!NOTE]
> [`CountQueuingStrategy()`](/ja/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy) では `highWaterMark` 引数に単純な塊の数を指定しますが、 `ByteLengthQueuingStrategy()` では、 `highWaterMark` 引数はバイト数を指定します。具体的には、チャンクのストリームが指定された場合に、背圧が適用される前に内部キューに何バイト分のチャンクを格納することができるか（チャンクの数ではありません）を指定します。

## 値

整数です。

## 例

```js
const queuingStrategy = new ByteLengthQueuingStrategy({
  highWaterMark: 1 * 1024,
});

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
  queuingStrategy,
);

const size = queuingStrategy.size(chunk);
console.log(`highWaterMark value: ${queuingStrategy.highWaterMark}$`);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}} コンストラクター
