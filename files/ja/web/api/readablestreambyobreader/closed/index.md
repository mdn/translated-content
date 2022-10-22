---
title: ReadableStreamBYOBReader.closed
slug: Web/API/ReadableStreamBYOBReader/closed
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("ReadableStreamBYOBReader")}} インターフェイスの **`closed`** 読み取り専用プロパティは、ストリームが閉じられた場合、またはリーダーのロックが解除された場合に満たし、ストリームがエラーの場合は拒否する promise を返します。

## 構文

```
var closed = readableStreamBYOBReader.closed;
```

### 値

{{jsxref("Promise")}}。

## 例

未定。

## 仕様

| 仕様                                                                     | 状態                         | コメント |
| ------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("Streams","#byob-reader-closed","closed")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStreamBYOBReader.closed")}}
