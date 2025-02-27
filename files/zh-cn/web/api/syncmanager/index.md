---
title: SyncManager
slug: Web/API/SyncManager
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers}}

{{domxref("Background Synchronization API", "", "", "nocode")}} 的 **`SyncManager`** 接口提供了用于注册和列出同步注册情况的接口。

## 实例属性

无。

## 实例方法

- {{domxref("SyncManager.register()")}}
  - : 创建一个新的同步注册并返回 {{jsxref("Promise")}}。
- {{domxref("SyncManager.getTags()")}}
  - : 返回开发人员定义的 `SyncManager` 注册标识符列表。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
