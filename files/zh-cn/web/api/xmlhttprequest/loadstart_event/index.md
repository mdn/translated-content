---
title: loadstart
slug: Web/API/XMLHttpRequest/loadstart_event
---

当程序开始加载时，loadstart 事件将被触发。这个事件可以被 {{domxref("XMLHttpRequest")}} 调用，也适用于 {{htmlelement("img")}} 和 {{htmlelement("video")}} 元素。

## 基本信息

- 规范文档
  - : [Progress](http://www.w3.org/TR/progress-events/)
- 接口
  - : ProgressEvent
- 冒泡
  - : No
- 可取消
  - : No
- 目标
  - : Element
- 默认动作
  - : None

## 属性

| Property                              | Type                       | Description                                                                                                                                                    |
| ------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}           | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree).                                                                                                         |
| `type` {{readonlyInline}}             | {{domxref("DOMString")}}   | The type of event.                                                                                                                                             |
| `bubbles` {{readonlyInline}}          | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.                                                                                                                     |
| `cancelable` {{readonlyInline}}       | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.                                                                                                                       |
| `lengthComputable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Specifies whether or not the total size of the transfer is known. Read only.                                                                                   |
| `loaded` {{readonlyInline}}           | unsigned long (long)       | The number of bytes transferred since the beginning of the operation. This doesn't include headers and other overhead, but only the content itself. Read only. |
| `total` {{readonlyInline}}            | unsigned long (long)       | The total number of bytes of content that will be transferred during the operation. If the total size is unknown, this value is zero. Read only.               |

## 规范

{{Specifications}}

## 相关事件

- [`loadstart`](/zh-CN/docs/Web/API/XMLHttpRequest/loadstart_event)
- [`progress`](/zh-CN/docs/Web/API/XMLHttpRequest/progress_event)
- [`error`](/zh-CN/docs/Web/API/Element/error_event)
- [`abort`](/zh-CN/docs/Web/API/HTMLMediaElement/abort_event)
- [`load`](/zh-CN/docs/Web/API/Window/load_event)
- [`loadend`](/zh-CN/docs/Web/API/XMLHttpRequest/loadend_event)

## 了解更多

- [Monitoring progress](/zh-CN/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress)
