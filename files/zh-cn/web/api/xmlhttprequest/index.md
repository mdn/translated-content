---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
---

{{DefaultAPISidebar("XMLHttpRequest")}}

`XMLHttpRequest`（XHR）对象用于与服务器交互。通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，获取数据。这允许网页在不影响用户操作的情况下，更新页面的局部内容。`XMLHttpRequest` 在 {{Glossary("AJAX")}} 编程中被大量使用。

{{InheritanceDiagram(650, 150)}}

尽管名称如此，`XMLHttpRequest` 可以用于获取任何类型的数据，而不仅仅是 XML。它甚至支持 [HTTP](/zh-CN/docs/Web/HTTP) 以外的协议（包括 file:// 和 FTP），尽管可能受到更多出于安全等原因的限制。

如果您的通信流程需要从服务器端接收事件或消息数据，请考虑通过 {{domxref("EventSource")}} 接口使用[服务器发送事件](/zh-CN/docs/Web/API/Server-sent_events)。对于全双工的通信，[WebSocket](/zh-CN/docs/Web/API/WebSockets_API) 可能是更好的选择。

## 构造函数

- {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}
  - : 该构造函数用于初始化一个 `XMLHttpRequest` 实例对象。在调用下列任何其他方法之前，必须先调用该构造函数，或通过其他方式，得到一个实例对象。

## 属性

_此接口继承了 {{domxref("XMLHttpRequestEventTarget")}} 和 {{domxref("EventTarget")}} 的属性。_

- {{domxref("XMLHttpRequest.onreadystatechange")}}
  - : 当 `readyState` 属性发生变化时，调用的事件处理器。
- {{domxref("XMLHttpRequest.readyState")}} {{readonlyinline}}
  - : 返回 一个无符号短整型（`unsigned short`）数字，代表请求的状态码。
- {{domxref("XMLHttpRequest.response")}} {{readonlyinline}}
  - : 返回一个 {{domxref("ArrayBuffer")}}、{{domxref("Blob")}}、{{domxref("Document")}}，或 {{domxref("DOMString")}}，具体是哪种类型取决于 {{domxref("XMLHttpRequest.responseType")}} 的值。其中包含整个响应实体（response entity body）。
- {{domxref("XMLHttpRequest.responseText")}} {{readonlyinline}}
  - : 返回一个 {{domxref("DOMString")}}，该 {{domxref("DOMString")}} 包含对请求的响应，如果请求未成功或尚未发送，则返回 `null`。
- {{domxref("XMLHttpRequest.responseType")}}
  - : 一个用于定义响应类型的枚举值（enumerated value）。
- {{domxref("XMLHttpRequest.responseURL")}} {{readonlyinline}}
  - : 返回经过序列化（serialized）的响应 URL，如果该 URL 为空，则返回空字符串。
- {{domxref("XMLHttpRequest.responseXML")}} {{readonlyinline}}
  - : 返回一个 {{domxref("Document")}}，其中包含该请求的响应，如果请求未成功、尚未发送或是不能被解析为 XML 或 HTML，则返回 `null`。
- {{domxref("XMLHttpRequest.status")}} {{readonlyinline}}
  - : 返回一个无符号短整型（`unsigned short`）数字，代表请求的响应状态。
- {{domxref("XMLHttpRequest.statusText")}} {{readonlyinline}}

  - : 返回一个 {{domxref("DOMString")}}，其中包含 HTTP 服务器返回的响应状态。与 {{domxref("XMLHTTPRequest.status")}} 不同的是，它包含完整的响应状态文本（例如，"`200 OK`"）。

    > **备注：** 根据 HTTP/2 规范（[8.1.2.4](https://http2.github.io/http2-spec/#rfc.section.8.1.2.4) [Response Pseudo-Header Fields](https://http2.github.io/http2-spec/#HttpResponse)，响应伪标头字段），HTTP/2 没有定义任何用于携带 HTTP/1.1 状态行中包含的版本（version）或者原因短语（reason phrase）的方法。

- {{domxref("XMLHttpRequest.timeout")}}
  - : 一个无符号长整型（`unsigned long`）数字，表示该请求的最大请求时间（毫秒），若超出该时间，请求会自动终止。
- {{domxref("XMLHttpRequest.upload")}} {{readonlyinline}}
  - : {{domxref("XMLHttpRequestUpload")}}，代表上传进度。
- {{domxref("XMLHttpRequest.withCredentials")}}
  - : 一个{{domxref("Boolean", "布尔值")}}，用来指定跨域 `Access-Control` 请求是否应当带有授权信息，如 cookie 或授权 header 头。

### 非标准属性

- {{domxref("XMLHttpRequest.channel")}}{{ReadOnlyInline}}
  - : 一个 `nsIChannel`，对象在执行请求时使用的通道。
- {{domxref("XMLHttpRequest.mozAnon")}}{{ReadOnlyInline}}
  - : 一个布尔值，如果为真，请求将在没有 cookie 和身份验证 header 头的情况下发送。
- {{domxref("XMLHttpRequest.mozSystem")}}{{ReadOnlyInline}}
  - : 一个布尔值，如果为真，则在请求时不会强制执行同源策略。
- {{domxref("XMLHttpRequest.mozBackgroundRequest")}}
  - : 一个布尔值，它指示对象是否是后台服务器端的请求。

### 事件处理器

作为 `XMLHttpRequest` 实例的属性之一，所有浏览器都支持 `onreadystatechange`。

后来，许多浏览器实现了一些额外的事件（`onload`、`onerror`、`onprogress` 等）。详见[Using XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)。

更多现代浏览器，包括 Firefox，除了可以设置 `on*` 属性外，也提供标准的监听器 {{domxref("EventTarget.addEventListener", "addEventListener()")}} API 来监听`XMLHttpRequest` 事件。

## 实例方法

- {{domxref("XMLHttpRequest.abort()")}}
  - : 如果请求已被发出，则立刻中止请求。
- {{domxref("XMLHttpRequest.getAllResponseHeaders()")}}
  - : 以字符串的形式返回所有用 {{Glossary("CRLF")}} 分隔的响应头，如果没有收到响应，则返回 `null`。
- {{domxref("XMLHttpRequest.getResponseHeader()")}}
  - : 返回包含指定响应头的字符串，如果响应尚未收到或响应中不存在该报头，则返回 `null`。
- {{domxref("XMLHttpRequest.open()")}}
  - : 初始化一个请求。
- {{domxref("XMLHttpRequest.overrideMimeType()")}}
  - : 覆写由服务器返回的 MIME 类型。
- {{domxref("XMLHttpRequest.send()")}}
  - : 发送请求。如果请求是异步的（默认），那么该方法将在请求发送后立即返回。
- {{domxref("XMLHttpRequest.setRequestHeader()")}}
  - : 设置 HTTP 请求标头的值。必须在 {{domxref("XMLHttpRequest.open", "open()")}} 之后、{{domxref("XMLHttpRequest.send", "send()")}} 之前调用 `setRequestHeader()` 方法。

## 事件

- {{domxref("XMLHttpRequest/abort_event", "abort")}}
  - : 当 request 被停止时触发，例如当程序调用 {{domxref("XMLHttpRequest.abort()")}} 时。
    也可以使用 {{domxref("XMLHttpRequestEventTarget/onabort", "onabort")}} 属性。
- {{domxref("XMLHttpRequest/error_event", "error")}}
  - : 当 request 遭遇错误时触发。
    也可以使用 {{domxref("XMLHttpRequestEventTarget/onerror", "onerror")}} 属性
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : {{domxref("XMLHttpRequest")}}请求成功完成时触发。
    也可以使用 {{domxref("XMLHttpRequestEventTarget/onload", "onload")}} 属性。
- {{domxref("XMLHttpRequest/loadend_event", "loadend")}}
  - : 当请求结束时触发，无论请求成功 ( {{domxref("XMLHttpRequest/load_event", "load")}}) 还是失败 ({{domxref("XMLHttpRequest/abort_event", "abort")}} 或 {{domxref("XMLHttpRequest/error_event", "error")}})。
    也可以使用 {{domxref("XMLHttpRequestEventTarget/onloadend", "onloadend")}} 属性。
- {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}
  - : 接收到响应数据时触发。
    也可以使用 {{domxref("XMLHttpRequestEventTarget/onloadstart", "onloadstart")}} 属性。
- {{domxref("XMLHttpRequest/progress_event", "progress")}}
  - : 当请求接收到更多数据时，周期性地触发。
    也可以使用 {{domxref("XMLHttpRequestEventTarget/onprogress", "onprogress")}} 属性。
- {{domxref("XMLHttpRequest/timeout_event", "timeout")}}
  - : 在预设时间内没有接收到响应时触发。
    也可以使用 {{domxref("XMLHttpRequestEventTarget/ontimeout", "ontimeout")}} 属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XMLSerializer")}}：将 DOM 树解析为 XML 对象
- MDN 教程中的 `XMLHttpRequest`：

  - [Ajax](/zh-CN/docs/Web/Guide/AJAX)
  - [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
  - [XMLHttpRequest 中的 HTML](/zh-CN/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - [Fetch API](/zh-CN/docs/Web/API/Fetch_API)

- [XMLHttpRequest2 中的新技巧（2011）](https://web.dev/xhr2/)
