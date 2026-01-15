---
title: WorkerNavigator：product 属性
short-title: product
slug: Web/API/WorkerNavigator/product
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}{{AvailableInWorkers("worker")}}

**`WorkerNavigator.product`** 属性的值在任何浏览器中始终为 `"Gecko"`。此属性仅出于兼容性目的而保留。

> [!NOTE]
> 不要依赖此属性获取真实的产品名称。在所有浏览器中该属性的值都返回 `"Gecko"`。

## 值

字符串 `"Gecko"`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WorkerNavigator.appCodeName")}}
- {{domxref("WorkerNavigator.appName")}}
