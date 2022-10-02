---
title: ByteLengthQueuingStrategy.size()
slug: Web/API/ByteLengthQueuingStrategy/size
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("ByteLengthQueuingStrategy")}} インターフェイスの **`size()`** メソッドは、所与のチャンクの `byteLength` プロパティを返します。

## 構文

```
var size = byteLengthQueuingStrategy.size(chunk);
```

### パラメーター

- chunk
  - : ストリームを通過するデータのチャンク。

### 戻り値

所与のチャンクのバイト長を表す整数。

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

var size = queueingStrategy.size(chunk);
```

## 仕様

| 仕様                                                     | 状態                         | コメント |
| -------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#blqs-size","size")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ByteLengthQueuingStrategy.size")}}
