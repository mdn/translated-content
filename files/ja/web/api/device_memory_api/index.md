---
title: 端末メモリー API
slug: Web/API/Device_Memory_API
tags:
  - 端末メモリー API
translation_of: Web/API/Device_Memory_API
---
{{DefaultAPISidebar("Device Memory API")}}{{securecontext_header}}{{SeeCompatTable}}

クライアント端末の能力は、使用可能な RAM の量に大きく依存します。 従来、開発者は経験則を使用し、端末のベンチマークを行うか、端末の製造元やユーザーエージェント文字列などの他の要因に基づいて端末の能力を推測する必要がありました。

## 端末のメモリー容量へのアクセス

RAM 端末の概算量にアクセスするには、 JavaScript API を使用する方法と、クライアントヒント HTTP ヘッダーを使用する方法の 2 つがあります。

### JavaScript API

{{DOMxRef("Navigator.deviceMemory")}} を取得することで、概算の RAM 容量を照会することができます。

```js
var RAM = navigator.deviceMemory;
```

### クライアントヒント

[クライアントヒント](/ja/docs/Web/HTTP/Client_hints) ヘッダーの `Device-Memory` ディレクティブを使用して、同じく概算の RAM 容量を取得することもできます。

## 仕様書

| 仕様書                            | 状態                               | 備考             |
| ---------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName("Device Memory")}} | {{Spec2("Device Memory")}} | 初回定義 |

## ブラウザーの互換性

### JavaScript インターフェイス

{{Compat("api.Navigator.deviceMemory")}}

### クライアントヒント拡張機能

{{Compat("http.headers.Device-Memory")}}

## 関連情報

- {{DOMxRef("Navigator.deviceMemory")}}
- {{HTTPHeader("Device-Memory")}} ヘッダー
