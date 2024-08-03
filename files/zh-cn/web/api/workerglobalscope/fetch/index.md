---
title: WorkerGlobalScope：fetch() 方法
slug: Web/API/WorkerGlobalScope/fetch
l10n:
  sourceCommit: 80d3325431bf238f06c986c2dc78944ac5227372
---

{{APIRef("Fetch API")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`fetch()`** 方法用于发起获取资源的请求，它会返回一个会在请求响应后兑现的 promise。

该 promise 会兑现一个表示请求响应的 {{domxref("Response")}} 对象。

当请求失败（例如，因为请求 URL 的格式错误或网络错误）时，`fetch()` 的 promise 才会被拒绝。`fetch()` 的 promise *不会*因为服务器响应表示错误的 HTTP 状态码（`404`、`504`，等）而被拒绝。因此，`then()` 处理器必须检查 {{domxref("Response.ok")}} 和/或 {{domxref("Response.status")}} 属性。

`fetch()` 方法由[内容安全策略](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy)的 `connect-src` 指令（而不是它查询的资源的指令）控制。

> **备注：** `fetch()` 方法的参数与 {{domxref("Request.Request","Request()")}} 构造函数是一样的。

## 语法

```js-nolint
fetch(resource)
fetch(resource, options)
```

### 参数

- `resource`

  - : 定义你想要获取的资源。可以是：

    - 一个字符串或任何其他具有{{Glossary("stringifier", "字符串化器")}}的对象（包括 {{domxref("URL")}} 对象），提供你想要获取的资源的 URL。URL 可以是相对于基础 URL 的，基础 URL 是窗口上下文中文档的 {{domxref("Node.baseURI", "baseURI")}} 或者 worker 上下文中的 {{domxref("WorkerGlobalScope.location")}}。
    - 一个 {{domxref("Request")}} 对象。

- `options` {{optional_inline}}
  - : 一个包含你想要应用到请求上的任何自定义设置的 {{domxref("RequestInit")}} 对象。

### 返回值

一个 {{jsxref("Promise")}}，会兑现 {{domxref("Response")}} 对象。

### 异常

- `AbortError` {{domxref("DOMException")}}
  - : 请求被 {{domxref("AbortController")}} 的 {{domxref("AbortController.abort", "abort()")}} 方法调用所终止。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果 [Topics API](/zh-CN/docs/Web/API/Topics_API) 的使用被 {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)明确禁止，且 `fetch()` 请求中包含 `browsingTopics: true`，则会抛出此异常。
- {{jsxref("TypeError")}}
  - : 当获取操作无法执行时抛出的错误。请参阅 {{domxref("Window.fetch()")}} 的异常，以了解可能导致此错误的原因。

## 示例

参见 {{domxref("Window.fetch", "fetch()")}} 以获取示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.fetch()")}}
- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
