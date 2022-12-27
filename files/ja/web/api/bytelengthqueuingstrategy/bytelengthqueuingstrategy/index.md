---
title: ByteLengthQueuingStrategy.ByteLengthQueuingStrategy()
slug: Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy
---

{{SeeCompatTable}}{{APIRef("Streams")}}

**`ByteLengthQueuingStrategy()`** コンストラクターは、`ByteLengthQueuingStrategy` オブジェクトのインスタンスを作成して返します。

## 構文

```
var byteLengthQueuingStrategy = new ByteLengthQueuingStrategy({highWaterMark});
```

### パラメーター

- {highWaterMark}
  - : `highWaterMark` プロパティを含むオブジェクト。 これは、バックプレッシャーが適用される前に内部キューに含めることができるチャンクの総数を定義する負でない整数です。

### 戻り値

{{domxref("ByteLengthQueuingStrategy")}} オブジェクトのインスタンス。

### 例外

なし。

## 例

```js
const queuingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1 });

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
}, queuingStrategy);

var size = queuingStrategy.size(chunk);
```

## 仕様

| 仕様                                                                                             | 状態                         | コメント |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("Streams","#blqs-constructor","ByteLengthQueuingStrategy()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ByteLengthQueuingStrategy.ByteLengthQueuingStrategy")}}
