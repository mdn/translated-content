---
title: event.stopPropagation
slug: Web/API/Event/stopPropagation
tags:
  - API
  - DOM
  - Event
  - stopPropagation
  - 事件
  - 方法
  - 阻止冒泡事件
translation_of: Web/API/Event/stopPropagation
---
{{APIRef("DOM")}}

{{domxref("Event")}} 接口的 **`stopPropagation()`** 方法阻止捕获和冒泡阶段中当前事件的进一步传播。但是，它不能防止任何默认行为的发生；例如，对链接的点击仍会被处理。如果要停止这些行为，请参见 {{domxref("Event.preventDefault", "preventDefault()")}} 方法，它可以阻止事件触发后默认动作的发生。它也不能阻止附加到相同元素的相同事件类型的其它事件处理器，如果要阻止这些处理器的运行，请参见 {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}} 方法。

## 语法

```js
event.stopPropagation();
```

### 参数

None.

### 返回值

None.

## 示例

参见[冒泡事件](/zh-CN/docs/Web/API/Document_Object_Model/Examples#example_5_event_propagation)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
