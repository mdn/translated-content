---
title: Navigator：storage 属性
slug: Web/API/Navigator/storage
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{securecontext_header}}{{APIRef("Storage")}}

**`Navigator.storage`** 只读属性返回一个单例的 {{domxref("StorageManager")}} 对象，用于访问当前站点或应用程序的浏览器整体存储能力。返回的对象允许你检查和配置数据存储的持久性，并了解浏览器可用于本地存储的剩余空间大小。

## 值

一个 {{domxref("StorageManager")}} 对象，可用于维护存储数据的持久性，并估算存储数据的空间大小。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("StorageManager")}}
- {{domxref("Navigator")}}
