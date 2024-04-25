---
title: SyncEvent
slug: Web/API/SyncEvent
l10n:
  sourceCommit: aa38aff31533096459caed61424a6f20f9807a15
---

{{APIRef("Background Sync")}}{{AvailableInWorkers("service")}}

{{domxref("Background Synchronization API", "", "", "nocode")}} 的 **`SyncEvent`** 接口表示在 ServiceWorker 的 {{domxref("ServiceWorkerGlobalScope")}} 上分派的同步操作。

此接口继承自 {{domxref("ExtendableEvent")}} 接口。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("SyncEvent.SyncEvent", "SyncEvent()")}}
  - : 创建一个新的 `SyncEvent` 对象。

## 实例属性

_自其父级 {{domxref("ExtendableEvent")}} 和 {{domxref("Event")}}继承属性_。

- {{domxref("SyncEvent.tag")}} {{ReadOnlyInline}}
  - : 返回此 `SyncEvent` 的开发人员定义的标识符。
- {{domxref("SyncEvent.lastChance")}} {{ReadOnlyInline}}
  - : 如果用户代理在当前尝试之后不再进行进一步的同步尝试，则返回 `true`。

## 实例方法

_自其父级 {{domxref("ExtendableEvent")}} 和 {{domxref("Event")}} 继承方法_。

无。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
