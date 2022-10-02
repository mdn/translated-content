---
title: WritableStreamDefaultWriter.desiredSize
slug: Web/API/WritableStreamDefaultWriter/desiredSize
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("WritableStreamDefaultWriter")}} インターフェイスの **`desiredSize`** 読み取り専用プロパティは、ストリームの内部キューを埋めるために必要な希望サイズを返します。

## 構文

```
var desiredSize = writableStreamDefaultWriter.desiredSize;
```

### 値

整数。 キューがいっぱいになった場合、これは負になる可能性があることに注意してください。

値は、（エラーが発生したか、中止がキューに入れられたために）ストリームに正常に書き込むことができない場合、`null` になり、ストリームが閉じられると `0` になります。

### 例外

- TypeError
  - : ライターのロックが解除されています。

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

...

// ストリームの希望サイズを返します
let size = writer.desiredSize;
```

## 仕様

| 仕様                                                                                         | 状態                         | コメント |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#default-writer-desired-size","desiredSize")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WritableStreamDefaultWriter.desiredSize")}}
