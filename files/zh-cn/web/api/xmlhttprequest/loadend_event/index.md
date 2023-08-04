---
title: loadend
slug: Web/API/XMLHttpRequest/loadend_event
---

loadend 事件总是在一个资源的加载进度停止之后被触发 (例如，在已经触发“error”，“abort”或“load”事件之后)。这适用于 {{domxref("XMLHttpRequest")}} 调用，以及 {{htmlelement("img")}} 或 {{htmlelement("video")}} 之类元素的内容。

## General info

- 规范
  - : [Progress](http://www.w3.org/TR/progress-events/)
- 接口
  - : ProgressEvent
- 可冒泡
  - : 否
- 可取消
  - : 否
- 触发对象
  - : 例如{{domxref("HTMLImageElement")}}
- 默认行为
  - : 无

## Properties

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

## Related Events

- [`loadstart`](/zh-CN/docs/Web/API/XMLHttpRequest/loadstart_event)
- [`progress`](/zh-CN/docs/Web/API/XMLHttpRequest/progress_event)
- [`error`](/zh-CN/docs/Web/API/Element/error_event)
- [`abort`](/zh-CN/docs/Web/API/HTMLMediaElement/abort_event)
- [`load`](/zh-CN/docs/Web/API/Window/load_event)
- [`loadend`](/zh-CN/docs/Web/API/XMLHttpRequest/loadend_event)

## See also

- [Monitoring progress](/zh-CN/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress)
