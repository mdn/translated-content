---
title: Response.redirected
slug: Web/API/Response/redirected
---

{{APIRef("Fetch")}}

{{domxref("Response")}} 接口中只读的 **`redirected`** 属性表明该响应是否为一个重定向的请求的结果。

> **备注：** 依赖 **`redirected`** 过滤重定向很容易导致虚假的重定向阻止你的内容像预期一样生效。因此，当调用 {{domxref("GlobalFetch.fetch", "fetch()")}} 时你应该进行过滤操作。详见下面 [禁用重定向](#禁用重定向) 的例子。

## 语法

```
var isRedirected = Response.redirected;
```

### 返回值

一个布尔值 ({{domxref("Boolean")}}), 如果响应来自重定向的请求，那么将返回 `true`.

## 示例

### 检测重定向

检测某个响应是否来自一个重定向的请求就如同检测 {{domxref("Response")}} 对象中这个标识一样容易。在下面的代码中，当 fetch 操作引起了重定向，一段文本信息会被插入到元素中。但需要注意的是，这不像下面 [禁用重定向](#禁用重定向) 所描述的当重定向不合法时全部阻止的行为一样安全。

```js
fetch("awesome-picture.jpg")
  .then(function (response) {
    let elem = document.getElementById("warning-message-box");
    if (response.redirected) {
      elem.innerHTML = "Unexpected redirect";
    } else {
      elem.innerHTML = "";
    }
    return response.blob();
  })
  .then(function (imageBlob) {
    let imgObjectURL = URL.createObjectURL(imageBlob);
    document.getElementById("img-element-id").src = imgObjectURL;
  });
```

### 禁用重定向

由于使用 **`redirected`** 过滤重定向会允许虚假的重定向，你应该像下面的例子这样，当调用 {{domxref("GlobalFetch.fetch", "fetch()")}} 时在 `init` 参数中设置重定向模式为 `"error"` :

```js
fetch("awesome-picture.jpg", { redirect: "error" })
  .then(function (response) {
    return response.blob();
  })
  .then(function (imageBlob) {
    let imgObjectURL = URL.createObjectURL(imageBlob);
    document.getElementById("img-element-id").src = imgObjectURL;
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
