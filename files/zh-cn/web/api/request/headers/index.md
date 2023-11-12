---
title: Request.headers
slug: Web/API/Request/headers
---

{{APIRef("Fetch")}}

{{domxref("Request")}}接口的只读属性 **`headers`** 包含与当前请求关联的{{domxref("Headers")}}对象。

## 语法

```
var myHeaders = request.headers;
```

### 值

一个 {{domxref("Headers")}} 对象。

## 例子

在下面的代码段中，我们使用 {{domxref("Request.Request()")}} 构造函数（为获取与脚本处于同一目录的图片文件）创建新请求，然后将请求 headers 保存到变量中：

```js
var myRequest = new Request("flowers.jpg");
var myHeaders = myRequest.headers; // Headers {}
```

使用 {{domxref("Headers.append")}} 向 {{domxref("Headers")}} 对象中添加 header；然后，使用第二个 init 参数创建一个新的 `Request` ，同时，传递 headers 作为一个 init 选项：

```js
var myHeaders = new Headers();
myHeaders.append("Content-Type", "image/jpeg");

var myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

var myRequest = new Request("flowers.jpg", myInit);

myContentType = myRequest.headers.get("Content-Type"); // returns 'image/jpeg'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
