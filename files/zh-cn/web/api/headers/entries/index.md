---
title: Headers.entries()
slug: Web/API/Headers/entries
---

{{APIRef}}{{SeeCompatTable}}

**`Headers.entries()`** 以 {{jsxref("Iteration_protocols","迭代器")}} 的形式返回 Headers 对象中所有的键值对。

> **备注：** 这个方法在 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API)中是可用的。

## Syntax

```js
headers.entries();
```

### Return value

返回一个 {{jsxref("Iteration_protocols","迭代器")}}.

## Example

```js
// Create a test Headers object
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// Display the key/value pairs
for (var pair of myHeaders.entries()) {
  console.log(pair[0] + ": " + pair[1]);
}
```

返回结果：

```
content-type: text/xml
vary: Accept-Language
```

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
