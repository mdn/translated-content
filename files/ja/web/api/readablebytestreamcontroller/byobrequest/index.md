---
title: ReadableByteStreamController.byobRequest
slug: Web/API/ReadableByteStreamController/byobRequest
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("ReadableByteStreamController")}} インターフェイスの **`byobRequest`** 読み取り専用プロパティは、現在の BYOB プルリクエストを返します。 保留中のリクエストがない場合は `undefined` を返します。

## 構文

```
var request = readableByteStreamController.byobRequest;
```

### 値

{{domxref("ReadableStreamBYOBRequest")}} オブジェクトのインスタンス、または `undefined`。

## 例

未定。

## 仕様

| 仕様                                                                                         | 状態                         | コメント |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#rbs-controller-byob-request","byobRequest")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableByteStreamController.byobRequest")}}
