---
title: loadend
slug: Web/API/XMLHttpRequest/loadend_event
---

{{APIRef("XMLHttpRequest API")}}

loadend 事件总是在一个资源的加载进度停止之后被触发 (例如，在已经触发“error”，“abort”或“load”事件之后)。这适用于 {{domxref("XMLHttpRequest")}} 调用，以及 {{htmlelement("img")}} 或 {{htmlelement("video")}} 之类元素的内容。

## General info

- 规范
  - : [Progress](https://www.w3.org/TR/progress-events/)
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

## 参见

- 相关事件：{{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}、{{domxref("XMLHttpRequest/load_event", "load")}}、{{domxref("XMLHttpRequest/progress_event", "progress")}}、{{domxref("XMLHttpRequest/error_event", "error")}}、{{domxref("XMLHttpRequest/abort_event", "abort")}}
- [监测进度](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#监测进度)
