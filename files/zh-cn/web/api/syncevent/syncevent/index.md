---
title: SyncEvent：SyncEvent() 构造函数
slug: Web/API/SyncEvent/SyncEvent
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers("service")}}

**`SyncEvent()`** 构造函数创建一个新的 {{domxref("SyncEvent")}} 对象。

## 语法

```js-nolint
new SyncEvent(type, options)
```

### 参数

- `type`
  - : 字符串，用于事件名称。它区分大小写，浏览器总是将其设置为 `sync`。
- `options`
  - : 一个对象，除了 {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} 中定义的属性外，还可以包含以下属性：
    - `tag`
      - : 开发人员为此 `SyncEvent` 定义的标识符。
    - `lastChance` {{optional_inline}}
      - : 一个布尔值，指示用户代理在当前尝试之后不会进行进一步的同步尝试。默认为 `false`。

### 返回值

一个新的 {{domxref("SyncEvent")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
