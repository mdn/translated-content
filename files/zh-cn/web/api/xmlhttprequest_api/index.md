---
title: XMLHttpRequest API
slug: Web/API/XMLHttpRequest_API
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{DefaultAPISidebar("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

**XMLHttpRequest API** 使 web 应用能够通过 JavaScript 向 web 服务器发起 HTTP 请求并接收响应。这使得网站能够仅更新页面中的部分内容（使用服务器返回的数据），而无需跳转至全新页面。这种做法有时也被称为 {{glossary("AJAX")}}。

[Fetch API](/zh-CN/docs/Web/API/Fetch_API) 是取代 XMLHttpRequest API 的更灵活、更强大的方案。Fetch API 使用 {{jsxref("Promise", "promise", "", 1)}} 替代事件机制处理异步响应，对 [service worker](/zh-CN/docs/Web/API/Service_Worker_API) 支持良好，并支持 HTTP 的高级特性，如[跨源资源共享控制](/zh-CN/docs/Web/HTTP/Guides/CORS)。基于这些优势，现代 web 应用通常采用 Fetch API 替代 {{domxref("XMLHttpRequest")}}。

## 概念与用法

XMLHttpRequest API 的核心接口是 {{domxref("XMLHttpRequest")}}。要发出 HTTP 请求：

1. 调用 `XMLHttpRequest` 的{{domxref("XMLHttpRequest.XMLHttpRequest", "构造函数", "", "nocode")}}，以创建一个实例。
2. 使用 {{domxref("XMLHttpRequest.open()")}} 对它进行初始化。此时需要提供请求的 URL、[HTTP 方法](/zh-CN/docs/Web/HTTP/Reference/Methods)，以及可选的用户名和密码。
3. 附加事件处理程序以获取请求结果。例如，当请求成功完成时会触发 {{domxref("XMLHttpRequestEventTarget/load_event", "load")}} 事件，而在各种错误条件下则会触发 {{domxref("XMLHttpRequestEventTarget/error_event", "error")}} 事件。
4. 通过调用 {{domxref("XMLHttpRequest.send()")}} 发送请求。

有关 XMLHttpRequest API 的深入指南，请参阅[使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)。

## 接口

- {{domxref("FormData")}}
  - : 一个对象，用于表示 {{htmlelement("form")}} 字段及其值，可通过 {{domxref("XMLHttpRequest")}} 或 {{domxref("Window/fetch", "fetch()")}} 发送至服务器。
- {{domxref("ProgressEvent")}}
  - : {{domxref("Event")}} 的子类，该事件被传递至 {{domxref("XMLHttpRequestEventTarget/progress_event", "progress")}}，其中包含请求完成程度的相关信息。
- {{domxref("XMLHttpRequest")}}
  - : 代表单个 HTTP 请求。
- {{domxref("XMLHttpRequestEventTarget")}}
  - : {{domxref("XMLHttpRequest")}} 与 {{domxref("XMLHttpRequestUpload")}} 的共同基类，定义了这两个接口中均可用的事件。
- {{domxref("XMLHttpRequestUpload")}}
  - : 表示 HTTP 上传的进度。提供事件，使代码能够跟踪上传进度。

## 示例

### 从服务器获取 JSON 数据

在此示例中我们将从 `https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json` 获取一个 JSON 文件，并添加事件监听器以显示事件的进度。

#### HTML

```html
<div class="controls">
  <button class="xhr" type="button">点击以启动 XHR</button>
</div>

<textarea readonly class="event-log"></textarea>
```

```css hidden
.event-log {
  width: 25rem;
  height: 5rem;
  border: 1px solid black;
  margin: 0.5rem;
  padding: 0.2rem;
}

button {
  width: 12rem;
  margin: 0.5rem;
}
```

#### JavaScript

```js
const xhrButton = document.querySelector(".xhr");
const log = document.querySelector(".event-log");
const url =
  "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json";

function handleEvent(e) {
  log.textContent = `${log.textContent}${e.type}：已传输 ${e.loaded} 字节\n`;
}

function addListeners(xhr) {
  xhr.addEventListener("loadstart", handleEvent);
  xhr.addEventListener("load", handleEvent);
  xhr.addEventListener("loadend", handleEvent);
  xhr.addEventListener("progress", handleEvent);
  xhr.addEventListener("error", handleEvent);
  xhr.addEventListener("abort", handleEvent);
}

xhrButton.addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  addListeners(xhr);
  xhr.send();
});
```

#### 结果

{{EmbedLiveSample("从服务器获取 JSON 数据")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
