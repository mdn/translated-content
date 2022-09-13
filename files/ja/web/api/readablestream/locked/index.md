---
title: ReadableStream.locked
slug: Web/API/ReadableStream/locked
---
{{APIRef("Streams")}}

{{domxref("ReadableStream")}} インターフェイスの **`locked`** 読み取り専用プロパティは、読み取り可能なストリームが[リーダーにロックされている](https://streams.spec.whatwg.org/#lock)かどうかを返します。

## 構文

```
var locked = readableStream.locked;
```

### 値

読み取り可能なストリームがロックされているかどうかを示す {{jsxref("Boolean")}}。

## 例

```js
const stream = new ReadableStream({
  ...
});

const reader = stream.getReader();

stream.locked
// ストリームがリーダーにロックされているため、true を返すべきです
```

## 仕様

| 仕様                                                         | 状態                         | コメント |
| ------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("Streams","#rs-locked","locked")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStream.locked")}}
