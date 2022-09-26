---
title: ReadableByteStreamController.desiredSize
slug: Web/API/ReadableByteStreamController/desiredSize
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("ReadableByteStreamController")}} インターフェイスの **`desiredSize`** 読み取り専用プロパティは、ストリームの内部キューを満たすために必要な希望サイズを返します。

## 構文

```
var desiredSize = readableByteStreamController.desiredSize;
```

### 値

整数。 キューがいっぱいになった場合、これは負になる可能性があることに注意してください。

## 例

未定。

## 仕様

| 仕様                                                                                         | 状態                         | コメント |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#rbs-controller-desired-size","desiredSize")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableByteStreamController.desiredSize")}}
