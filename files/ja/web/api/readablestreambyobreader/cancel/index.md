---
title: ReadableStreamBYOBReader.cancel()
slug: Web/API/ReadableStreamBYOBReader/cancel
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("ReadableStreamBYOBReader")}} インターフェイスの **`cancel()`** メソッドはストリームをキャンセルし、コンシューマーがストリームに興味を失ったことを通知します。 提供された `reason` パラメーターは、基になるソースに与えられ、使用する場合もしない場合もあります。

> **メモ:** リーダーがアクティブな場合、`cancel()` メソッドは、関連するストリームの場合（{{domxref("ReadableStream.cancel()")}}）と同じように振る舞います。

## 構文

```
var promise = readableStreamBYOBReader.cancel(reason);
```

### パラメーター

- reason
  - : 人間が読むことができるキャンセルの理由を提供する {{domxref("DOMString")}}。

### 戻り値

{{jsxref("Promise")}}。 `reason` パラメーターで指定された値で満たされます。

### 例外

- TypeError
  - : ソースオブジェクトが `ReadableStreamBYOBReader` ではないか、ストリームに所有者がいません。

## 例

未定。

## 仕様

| 仕様                                                                         | 状態                         | コメント |
| ---------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#byob-reader-cancel","cancel()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStreamBYOBReader.cancel")}}
