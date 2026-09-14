---
title: Request：method 属性
short-title: method
slug: Web/API/Request/method
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

{{domxref("Request")}} 接口的 **`method`** 只读属性包含请求所使用的方法（如 `GET`、`POST` 等）。

## 值

一个用于指示请求所使用的方法的{{jsxref("String", "字符串", , 1)}}。

## 示例

在下面的代码片段中，我们使用 {{domxref("Request.Request", "Request()")}} 构造函数（针对与脚本位于同一目录下的图像文件）创建了一个新的请求，然后将该请求的方法保存到一个变量中：

```js
const myRequest = new Request("flowers.jpg");
const myMethod = myRequest.method; // GET
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
