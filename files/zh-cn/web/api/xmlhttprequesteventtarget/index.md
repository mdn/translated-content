---
title: XMLHttpRequestEventTarget
slug: Web/API/XMLHttpRequestEventTarget
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequestEventTarget` 是一个描述事件处理程序的接口，你可以在一个用于处理 {{ domxref("XMLHttpRequest") }} 事件的对象中使用到该事件处理程序。

{{InheritanceDiagram}}

## 属性

- {{ domxref("XMLHttpRequestEventTarget.onabort") }}
  - : 当请求失败时调用该方法，接受 [`abort`](/zh-CN/docs/Web/API/HTMLMediaElement/abort_event) 对象作为参数。
- {{ domxref("XMLHttpRequestEventTarget.onerror") }}
  - : 当请求发生错误时调用该方法，接受 [`error`](/zh-CN/docs/Web/API/HTMLElement/error_event) 对象作为参数。
- {{ domxref("XMLHttpRequestEventTarget.onload") }}
  - : 当一个 HTTP 请求正确加载出内容后返回时调用，接受 [`load`](/zh-CN/docs/Web/API/Window/load_event) 对象作为参数。
- {{ domxref("XMLHttpRequestEventTarget.onloadstart") }}
  - : 当一个 HTTP 请求开始加载数据时调用，接受 [`loadstart`](/zh-CN/docs/Web/API/XMLHttpRequest/loadstart_event) 对象作为参数。
- {{ domxref("XMLHttpRequestEventTarget.onprogress") }}
  - : 间歇调用该方法用来获取请求过程中的信息，接受 [`progress`](/zh-CN/docs/Web/API/XMLHttpRequest/progress_event) 对象作为参数。
- {{ domxref("XMLHttpRequestEventTarget.ontimeout") }}
  - : 当超时时调用，接受 {{domxref("XMLHttpRequest/timeout_event", "timeout")}} 对象作为参数；只有设置了 `XMLHttpRequest` 对象的 `timeout` 属性时，才可能发生超时事件。
- {{ domxref("XMLHttpRequestEventTarget.onloadend") }}
  - : 当内容加载完成，不管失败与否，都会调用该方法，接受 [`loadend`](/zh-CN/docs/Web/API/XMLHttpRequest/loadend_event) 对象作为参数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("XMLHttpRequest") }}
- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
