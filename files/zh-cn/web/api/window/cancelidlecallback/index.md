---
title: window.cancelIdleCallback()
slug: Web/API/Window/cancelIdleCallback
---

{{APIRef}}{{SeeCompatTable}}

## 概述

**`window.cancelIdleCallback()`** 方法用于取消之前调用{{domxref("window.requestIdleCallback()")}} 的回调。

## 语法

```plain
window.cancelIdleCallback(handle);
```

### 参数

- `handle`
  - : 调用 {{domxref("window.requestIdleCallback()")}} 时返回的 ID.

### 返回值

`undefined`.

## 示例

在文章 [Cooperative Scheduling of Background Tasks API](/zh-CN/docs/Web/API/Background_Tasks_API) 中可以查看 [完整示例](/zh-CN/docs/Web/API/Background_Tasks_API#Example) 。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
