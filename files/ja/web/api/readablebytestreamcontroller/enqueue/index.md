---
title: ReadableByteStreamController.enqueue()
slug: Web/API/ReadableByteStreamController/enqueue
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("ReadableByteStreamController")}} インターフェイスの **`enqueue()`** メソッドは、所与のチャンクを関連するストリームのキューに入れます。

## 構文

```
readableByteStreamController.enqueue(chunk);
```

### パラメーター

- _chunk_
  - : キューに入れるチャンク。

### 戻り値

`undefined`。

### 例外

- TypeError
  - : ソースオブジェクトが `ReadableByteStreamController` ではないか、何らかの理由でストリームを読み取れないか、チャンクがオブジェクトではないか、チャンクの内部配列バッファーが存在しないか、切り離されています。

## 例

未定。

## 仕様

| 仕様                                                                             | 状態                         | コメント |
| -------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#rbs-controller-enqueue","enqueue()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableByteStreamController.enqueue")}}
