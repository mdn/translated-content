---
title: "ByteLengthQueuingStrategy: size() メソッド"
short-title: size()
slug: Web/API/ByteLengthQueuingStrategy/size
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`size()`** は {{domxref("ByteLengthQueuingStrategy")}} インターフェイスのメソッドで、指定されたチャンクの `byteLength` プロパティを返します。

## 構文

```js-nolint
size(chunk)
```

### 引数

- `chunk`
  - : ストリームを通して渡されるデータのチャンク。

### 返値

指定されたチャンクのバイト長を表す整数です。

## 例

```js
const queuingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1 });

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

const size = queueingStrategy.size(chunk);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}} コンストラクター
