---
title: SyncEvent：lastChance 属性
slug: Web/API/SyncEvent/lastChance
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers("service")}}

如果用户代理在当前尝试之后不会进行进一步的同步尝试，接口 {{domxref("SyncEvent")}} 的只读属性 **`lastChance`** 将返回 `true`。这是通过 {{domxref("SyncEvent.SyncEvent","SyncEvent()")}} 构造函数的 `lastChance` 参数传递的值。

## 值

一个布尔值，指示用户代理是否不会进一步在当前尝试后继续尝试同步。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
