---
title: NetworkInformation：effectiveType 属性
slug: Web/API/NetworkInformation/effectiveType
l10n:
  sourceCommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{APIRef("Network Information API")}} {{AvailableInWorkers}}

{{domxref("NetworkInformation")}} 接口的 **`effectiveType`** 只读属性返回连接的有效类型，为 `slow-2g`、`2g`、`3g` 或 `4g` 之一。该值是使用最近观察到的往返时间和下行链路值的组合来确定的。

## 值

一个字符串，是 `slow-2g`、`2g`、`3g` 或 `4g` 之一。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [有效连接类型](/zh-CN/docs/Glossary/Effective_connection_type)
- {{HTTPHeader("ECT")}}
