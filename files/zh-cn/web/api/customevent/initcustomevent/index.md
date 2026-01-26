---
title: CustomEvent：initCustomEvent() 方法
slug: Web/API/CustomEvent/initCustomEvent
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{Deprecated_header}}{{AvailableInWorkers}}

**`CustomEvent.initCustomEvent()`** 方法用于初始化 {{domxref("CustomEvent")}} 对象。如果该事件已经被分发出去，则此方法什么都不做。

这类对象一定是由 {{ domxref("Document.createEvent()") }} 方法创建的。事件派发之前必须调用 {{ domxref("EventTarget.dispatchEvent()") }} 方法。一旦已经派发，则无法被重新设置。

> [!NOTE]
> **该方法已被弃用，请勿再使用。**
>
> 与其使用该特性，不如使用特定的事件构造函数，如 {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}。[创建和派发事件](/zh-CN/docs/Web/API/Document_Object_Model/Events#创建和派发事件)一节提供了更多有关使用这些事件的方法的信息。

## 语法

```js-nolint
initCustomEvent(type, canBubble, cancelable, detail)
```

### 参数

- `type`
  - : 包含事件名称的字符串。
- `canBubble`
  - : 表示事件是否沿着 DOM 向上冒泡的布尔值。
- `cancelable`
  - : 表示事件是否可取消的布尔值。
- `detail`
  - : 处理器可通过 {{domxref("CustomEvent.detail")}} 属性获取的任何数据。

### 返回值

无（`undefined`）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CustomEvent")}}
- 构造函数，以代替此已弃用的方法：{{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}。
