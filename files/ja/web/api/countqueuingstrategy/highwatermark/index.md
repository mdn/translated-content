---
title: "CountQueuingStrategy: highWaterMark プロパティ"
short-title: highWaterMark
slug: Web/API/CountQueuingStrategy/highWaterMark
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`CountQueuingStrategy.highWaterMark`** は読み取り専用プロパティで、背圧が適用される前の内部キューに含まれているチャンクの総数です。

## 値

チャンク数を表す整数です。

## 例

```js
const queueingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

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

- {{domxref("CountQueuingStrategy.CountQueuingStrategy", "CountQueuingStrategy()")}} コンストラクター
