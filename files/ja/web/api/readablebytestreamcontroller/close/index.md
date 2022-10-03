---
title: ReadableByteStreamController.close()
slug: Web/API/ReadableByteStreamController/close
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("ReadableByteStreamController")}} インターフェイスの **`close()`** メソッドは、関連するストリームを閉じます。

> **メモ:** リーダーは、以前にキューに入れられたチャンクをストリームから読み取ることができますが、それらを読み取とってしまうとストリームは閉じられます。

## 構文

```
readableByteStreamController.close();
```

### パラメーター

なし。

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
| {{SpecName("Streams","#rbs-controller-close","close()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableByteStreamController.close")}}
