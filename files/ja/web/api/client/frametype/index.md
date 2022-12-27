---
title: Client.frameType
slug: Web/API/Client/frameType
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("Client")}} インターフェイスの **`frameType`** 読み取り専用プロパティは、現在の {{domxref("Client")}} の閲覧コンテキストの種類を示します。 この値は、`"auxiliary"`、`"top-level"`、`"nested"`、`"none"` のいずれかです。

## 構文

```js
var myFrameType = client.frameType;
```

## 例

```js
未定
```

## 仕様

| 仕様                                                                                     | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#client-frametype', 'frameType')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Client.frameType")}}
