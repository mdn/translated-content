---
title: Event：initEvent() 方法
slug: Web/API/Event/initEvent
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{deprecated_header}}{{AvailableInWorkers}}

**`Event.initEvent()`** 方法可以用来初始化由 {{domxref("Document.createEvent()") }} 创建的 {{ domxref("event") }} 实例。

用这种方式初始化事件必须是由 {{ domxref("Document.createEvent()") }} 方法创建的实例。本方法必须在派发事件前调用（通过 {{ domxref("EventTarget.dispatchEvent()") }}）。事件一旦被派发，此函数不再做其他任何事。

> [!NOTE]
> **该方法已被弃用，请勿再使用。**
>
> 与其使用该特性，不如使用特定的事件构造函数，如 {{domxref("Event.Event", "Event()")}}。[创建和派发事件](/zh-CN/docs/Web/API/Document_Object_Model/Events#创建和派发事件)一节提供了更多有关使用这些事件的方法的信息。

## 语法

```js-nolint
initEvent(type, bubbles, cancelable)
```

- `type`
  - : 描述事件类型的字符串。
- `bubbles`
  - : 决定是否事件是否应该通过事件链向上冒泡的布尔值。一旦设置了这个值，只读属性{{ domxref("Event.bubbles") }}也会获取相应的值。
- `cancelable`
  - : 决定该事件的默认动作是否可以被取消的布尔值。一旦设置了这个值，只读属性 {{ domxref("Event.cancelable") }} 也会获取相应的值。

## 示例

```js
// 创建事件。
const event = document.createEvent("Event");

// 初始化一个点击事件，可以冒泡，无法被取消
event.initEvent("click", true, false);

// 监听事件。
elem.addEventListener(
  "click",
  (e) => {
    // e.target 与 elem 相匹配
  },
  false,
);

elem.dispatchEvent(event);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 构造函数，以代替此已废弃的方法：{{domxref("Event.Event", "Event()")}}。也可以使用更具体的构造函数。
