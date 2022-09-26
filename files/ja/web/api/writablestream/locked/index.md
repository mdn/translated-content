---
title: WritableStream.locked
slug: Web/API/WritableStream/locked
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("WritableStream")}} インターフェイスの **`locked`** 読み取り専用プロパティは、`WritableStream` がライターにロックされているかどうかを示すブール値を返します。

## 構文

```
var locked = writableStream.locked;
```

### 値

書き込み可能なストリームがロックされているかどうかを示す {{jsxref("Boolean")}}。

## 例

```js
const writableStream = new WritableStream({
  write(chunk) {
    ...
  },
  close() {
    ...
  },
  abort(err) {
    ...
  }
}, queuingStrategy);

...

const writer = writableStream.getWriter();

writableStream.locked
// ストリームがライターにロックされているため、true を返すべきです
```

## 仕様

| 仕様                                                         | 状態                         | コメント |
| ------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("Streams","#ws-locked","locked")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WritableStream.locked")}}
