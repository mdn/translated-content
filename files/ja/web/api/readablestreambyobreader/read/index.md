---
title: ReadableStreamBYOBReader.read()
slug: Web/API/ReadableStreamBYOBReader/read
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("ReadableStreamBYOBReader")}} インターフェイスの **`read()`** メソッドは、バイトストリームの内部キュー内の次のチャンクへのアクセスを提供する promise を返します。

## 構文

```
var promise = readableStreamBYOBReader.read(view);
```

### パラメーター

- view
  - : 読み込み先のビュー。

### 戻り値

{{jsxref("Promise")}}。 ストリームの状態に応じて結果を充足/拒否します。 異なる可能性は次のとおりです。

- チャンクが使用可能な場合、`{ value: theChunk, done: false }` の形式のオブジェクトで promise が満たされます。
- ストリームが閉じられると、`{ value: undefined, done: true }` という形式のオブジェクトで promise が満たされます。
- ストリームがエラーになると、関連するエラーで promise が拒否されます。

### 例外

- TypeError
  - : ソースオブジェクトが `ReadableStreamBYOBReader` ではない、ストリームに所有者がない、ビューがオブジェクトではない、または切り離されている、またはビューの長さが 0 である。

## 例

未定。

## 仕様

| 仕様                                                                 | 状態                         | コメント |
| -------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#byob-reader-read","read()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStreamBYOBReader.read")}}
