---
title: MessageEvent
slug: Web/API/MessageEvent
---

當伺服器傳來資料時，客戶端會收到一個 `MessageEvent`，由 `WebSocket` 物件 `onmessage` 表示的監聽器接收。

## 屬性

| 屬性   | 形態                                                                                                               | 描述               |
| ------ | ------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `data` | {{ domxref("DOMString") }} \| {{ domxref("Blob") }} \| [`ArrayBuffer`](/zh_tw/JavaScript_typed_arrays/ArrayBuffer) | 伺服器傳來的資料。 |

## 規範

{{Specifications}}

## 瀏覽器兼容

{{Compat}}

## 參見

- [`WebSocket`](/zh_tw/WebSockets/WebSockets_reference/WebSocket)
