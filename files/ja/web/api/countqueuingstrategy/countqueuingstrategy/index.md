---
title: CountQueuingStrategy.CountQueuingStrategy()
slug: Web/API/CountQueuingStrategy/CountQueuingStrategy
---

{{SeeCompatTable}}{{APIRef("Streams")}}

**`CountQueuingStrategy()`** コンストラクターは、`CountQueuingStrategy` オブジェクトのインスタンスを作成して返します。

## 構文

```
var countQueuingStrategy = new CountQueuingStrategy({highWaterMark});
```

### パラメーター

- {highWaterMark}
  - : `highWaterMark` プロパティを含むオブジェクト。 これは、バックプレッシャーが適用される前に内部キューに含めることができるチャンクの総数を定義する負でない整数です。

### 戻り値

{{domxref("CountQueuingStrategy")}} オブジェクトのインスタンス。

### 例外

なし。

## 例

```js
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });

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
}, queuingStrategy);

var size = queuingStrategy.size();
```

## 仕様

| 仕様                                                                                     | 状態                         | コメント |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#cqs-constructor","CountQueuingStrategy()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.CountQueuingStrategy.CountQueuingStrategy")}}
