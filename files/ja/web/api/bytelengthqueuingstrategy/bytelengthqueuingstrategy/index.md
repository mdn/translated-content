---
title: "ByteLengthQueuingStrategy: ByteLengthQueuingStrategy() コンストラクター"
short-title: ByteLengthQueuingStrategy()
slug: Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`ByteLengthQueuingStrategy()`** コンストラクターは、`ByteLengthQueuingStrategy` オブジェクトのインスタンスを作成して返します。

## 構文

```js-nolint
new ByteLengthQueuingStrategy(highWaterMark)
```

### 引数

以下のプロパティを持つオブジェクトです。

- `highWaterMark`

  - : 背圧が適用される前に内部キューに格納することができるバイト数の合計です。

    [`CountQueuingStrategy()`](/ja/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy) では `highWaterMark` 引数に単純な塊の数を指定しますが、 `ByteLengthQueuingStrategy()` では、 `highWaterMark` 引数はバイト数を指定します。具体的には、チャンクのストリームが指定された場合に、背圧が適用される前に内部キューに何バイト分のチャンクを格納することができるか（チャンクの数ではありません）を指定します。

### 返値

{{domxref("ByteLengthQueuingStrategy")}} オブジェクトのインスタンスです。

### 例外

なし。

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
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ByteLengthQueuingStrategy")}} インターフェイス
