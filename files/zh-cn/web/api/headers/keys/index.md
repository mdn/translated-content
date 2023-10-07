---
title: Headers.keys()
slug: Web/API/Headers/keys
---

{{APIRef}}

**`Headers.keys()`** 方法返回一个 headers(Object) 对象所有 key 组成的迭代器，通过迭代器可以遍历 headers 这个对象，返回的迭代器中的元素 key 都是字符串。

> **备注：** 这个方法在 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API) 也可以使用。

## 语法

```
headers.keys();
```

### 返回值

返回 `headers` 对象中所有 key 组成的迭代器 {{jsxref("Iteration_protocols","iterator")}}。

## 示例

```js
// 创建一个 Headers 对象
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// 显示 Headers 中所有的 key
for (var key of myHeaders.keys()) {
  console.log(key);
}
```

控制台打印结果：

```
content-type
vary
```

## 浏览器兼容性

{{Compat}}

## 相关链接

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
