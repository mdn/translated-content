---
title: EventTarget.dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
---

{{APIRef("DOM")}}

{{domxref("EventTarget")}} 的 **`dispatchEvent()`** 方法会向一个指定的事件目标派发一个 {{domxref("Event")}}，并以合适的顺序（同步地）调用所有受影响的 {{domxref("EventListener")}}。标准事件处理规则（包括事件捕获和可选的冒泡过程）同样适用于通过手动使用 `dispatchEvent()` 方法派发的事件。

调用 `dispatchEvent()` 是*触发一个事件*的最后一步。被触发的事件应事先通过 {{domxref("Event/Event", "Event()")}} 构造函数创建并初始化完毕。

> **备注：** 在调用此方法时，{{domxref("Event.target")}} 属性默认为当前的 `EventTarget`。

和经由浏览器触发，并通过[事件循环](/zh-CN/docs/Web/JavaScript/Event_loop)异步调用事件处理程序的“原生”事件不同，`dispatchEvent()` 会*同步*调用事件处理函数。在 `dispatchEvent()` 返回之前，所有监听该事件的事件处理程序将在代码继续前执行并返回。

## 语法

```js-nolint
dispatchEvent(event)
```

### 参数

- `event`
  - : 被派发的 {{domxref("Event")}}。其 {{domxref("Event.target")}} 属性为当前的 {{domxref("EventTarget")}}。

### 返回值

- 当 `event` 可被取消（`cancelable` 值为 `true`），且 `event` 中至少有一个事件处理程序调用了 {{domxref("Event.preventDefault()")}} 方法时，返回 `false`。否则，返回 `true`。

### 异常

- `InvalidStateError` {{domxref("DomException")}}
  - : 若事件未在初始化时指定类型（`type` 属性值），则抛出此异常。

> **警告：** 由事件处理程序抛出的异常视为未被捕获的异常。事件处理程序运行在一个嵌套的调用栈中；在其处理完毕前将阻塞 `caller`，但异常却不会冒泡至 `caller`。

## 示例

请参考[创建和触发事件](/zh-CN/docs/Web/Events/Creating_and_triggering_events)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Event 对象](/zh-CN/docs/Web/API/Event)
