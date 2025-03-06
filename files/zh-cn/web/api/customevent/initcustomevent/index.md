---
title: CustomEvent.initCustomEvent()
slug: Web/API/CustomEvent/initCustomEvent
---

{{APIRef("DOM")}}{{deprecated_header}}

**`CustomEvent.initCustomEvent()`** 方法初始化了一个 `CustomEvent` object. 如果该事件已经被分发出去，则不会在初始化过程中重复触发．

这类对象一定是由 {{ domxref("Document.createEvent()") }} 方法创建的。该方法被分发之前必须通过{{ domxref("EventTarget.dispatchEvent()") }}方法设置．一旦被分发则，则无法被重新设置．

> **备注：** **该方法已经作废，不要在新项目中继续使用该方法。**
>
> Instead use specific event constructors, like {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}. The page on [Creating and triggering events](/zh-CN/docs/Web/Events/Creating_and_triggering_events) gives more information about the way to use these.

## 语法

```js-nolint
event.initCustomEvent(type, canBubble, cancelable, detail)
```

### 参数

- `type`
  - : 类型{{domxref("DOMString")}}，事件名称。
- _`canBubble`_
  - : 类型{{jsxref("Boolean")}}，事件是否沿着 dom 树向上冒泡。
- `cancelable`
  - : 类型{{jsxref("Boolean")}}，事件是否可取消。
- _`detail`_
  - : 事件初始化时传入的数据。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CustomEvent")}}
- The constructor to use instead of this deprecated method: {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}.
