---
title: Event.initEvent()
slug: Web/API/Event/initEvent
---

{{ ApiRef("DOM") }}{{deprecated_header}}

**`Event.initEvent()`** 方法可以用来初始化由{{domxref("Document.createEvent()") }} 创建的 {{ domxref("event") }} 实例。

用这种方式初始化事件必须是由 {{ domxref("Document.createEvent()") }} 方法创建的实例。本方法必须在事件被触发之前调用（用{{ domxref("EventTarget.dispatchEvent()") }}调用）.事件 一旦被调用，便不再做其他任何事。

> **备注：** **不建议再使用此方法（方法已经过时 deprecated）**
>
> 可以使用特定的 event 构造器函数，比如 {{domxref("Event.Event", "Event()")}}. 该页有关于这些的更多信息 [Creating and triggering events](/zh-CN/docs/Web/Events/Creating_and_triggering_events) .

## 语法

```js-nolint
event.initEvent(type, bubbles, cancelable)
```

- `type`
  - : 一个 {{domxref("DOMString")}} 类型的字段，定义了事件的类型。
- `bubbles`
  - : 一个 {{jsxref("Boolean")}} 值，决定是否事件是否应该向上冒泡。一旦设置了这个值，只读属性{{ domxref("Event.bubbles") }}也会获取相应的值。
- `cancelable`
  - : 一个 {{jsxref("Boolean")}} 值，决定该事件的默认动作是否可以被取消。一旦设置了这个值，只读属性 {{ domxref("Event.cancelable") }} 也会获取相应的值。

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

- The constructor to use instead of this deprecated method: {{domxref("Event.Event", "Event()")}}. More specific constructors can be used too.
