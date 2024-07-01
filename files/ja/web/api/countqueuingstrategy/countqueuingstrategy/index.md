---
title: "CountQueuingStrategy: CountQueuingStrategy() コンストラクター"
short-title: CountQueuingStrategy()
slug: Web/API/CountQueuingStrategy/CountQueuingStrategy
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`CountQueuingStrategy()`** コンストラクターは、`CountQueuingStrategy` オブジェクトのインスタンスを作成して返します。

## 構文

```js-nolint
new CountQueuingStrategy(highWaterMark)
```

### 引数

以下のプロパティを持つオブジェクトです。

- `highWaterMark`
  - : 背圧が適用される前に内部キューに含めることができるチャンクの総数です。

### 返値

{{domxref("CountQueuingStrategy")}} オブジェクトのインスタンス。

### 例外

なし。

## 例

```js
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

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
  queuingStrategy,
);

const size = queuingStrategy.size();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CountQueuingStrategy")}}
