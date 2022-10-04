---
title: RTCStats.id
slug: Web/API/RTCStats/id
---

{{APIRef("WebRTC")}}

{{domxref("RTCStats")}} 字典的 **`id`** 属性是一个字符串，用于唯一标识此 `RTCStats` 对象提供统计信息的对象。使用 `id`, 可以关联两个或多个基于 `RTCStats` 的对象，以便随时监视给定 WebRTC 对象的统计信息，例如一个 {{Glossary("RTP")}} 流，{{domxref("RTCPeerConnection")}}，或 {{domxref("RTCDataChannel")}}。

## 语法

```plain
var id = RTCStats.id;
```

### 值

一个 {{domxref("DOMString")}}，用于唯一标识基于此 `RTCStats` 对象提供统计信息的对象。

ID 字符串的格式不是由规范定义的，因此无法可靠地对字符串的内容进行任何假设。也不能假设对于给定的对象类型，字符串的格式将保持不变。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
