---
title: Headers.values()
slug: Web/API/Headers/values
---

{{APIRef}}

**`Headers.values()`** 方法返回一个可迭代数值，通过这个数值可以遍历 **`Headers`** 中键值对的 **`value`** 值。返回的 **`value`** 都是 **`ByteString`** 对象。

> **备注：** 这个方法可以在 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API)中使用。

## 语法

```js
headers.values();
```

### 返回值

返回一个由键值对中 **`value`** 组成的数组。

## 例子

```js
// Create a test Headers object
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// Display the values
for (var value of myHeaders.values()) {
  console.log(value);
}
```

返回值为：

```
text/xml
Accept-Language
```

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
