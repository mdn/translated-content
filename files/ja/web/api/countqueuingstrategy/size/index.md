---
title: CountQueuingStrategy.size()
slug: Web/API/CountQueuingStrategy/size
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("CountQueuingStrategy")}} インターフェイスの **`size()`** メソッドは常に `1` を返すため、合計キューサイズはキュー内のチャンク数を数えたものになります。

## 構文

```
var size = countQueuingStrategy.size();
```

### パラメーター

なし。

### 戻り値

`1`。

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

| 仕様                                                     | 状態                         | コメント |
| -------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#cqs-size","size")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.CountQueuingStrategy.size")}}
