---
title: WorkerNavigator：storage 属性
short-title: storage
slug: Web/API/WorkerNavigator/storage
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{securecontext_header}}{{APIRef("Storage")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerNavigator")}} 接口的 **`storage`** 只读属性返回用于访问当前站点或应用在浏览器中的整体存储能力的 {{domxref("StorageManager")}} 单例对象。你可以使用返回的对象检查和配置数据存储的持久性，并大致了解浏览器还剩多少空间可用于本地存储。

## 值

{{domxref("StorageManager")}} 对象，可用于维护存储数据的持久性，以及大致确定还有多少空间可用于存储数据。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("StorageManager")}}
- {{domxref("WorkerNavigator")}}
