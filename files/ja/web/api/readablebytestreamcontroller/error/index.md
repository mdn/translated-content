---
title: ReadableByteStreamController.error()
slug: Web/API/ReadableByteStreamController/error
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("ReadableByteStreamController")}} インターフェイスの **`error()`** メソッドにより、関連するストリームとの今後のやり取りがエラーになります。

## 構文

```
readableByteStreamController.error(e);
```

### パラメーター

- _e_
  - : 今後のやり取りを失敗させるエラー。

### 戻り値

`undefined`。

### 例外

- TypeError
  - : ソースオブジェクトが `ReadableByteStreamController` ではないか、何らかの理由でストリームが読み取り可能ではありません。

## 例

未定。

## 仕様

| 仕様                                                                         | 状態                         | コメント |
| ---------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#rbs-controller-error","error()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableByteStreamController.error")}}
