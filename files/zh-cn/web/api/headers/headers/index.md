---
title: Headers()
slug: Web/API/Headers/Headers
---

{{APIRef("Fetch")}}{{ SeeCompatTable() }}

使用 `Headers()` 构造方法创建一个新的 {{domxref("Headers")}} 对象。

## Syntax

```js
var myHeaders = new Headers(init);
```

### Parameters

- _init_ {{optional_inline}}
  - : 通过一个包含任意 [HTTP headers](/zh-CN/docs/Web/HTTP/Headers) 的对象来预设你的 `Headers`. 可以是一个{{domxref("ByteString")}} 对象; 或者是一个已存在的 `Headers` 对象。

## Example

创建一个空的 `Headers` 对象：

```js
var myHeaders = new Headers(); // Currently empty
```

你可以使用{{domxref("Headers.append")}}方法添加一个 header 并赋值：

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns 'image/jpeg'
```

或者你可以在 Headers 对象创建时添加多个 header. 在下面的示例中我们创建了一个新的{{domxref("Headers")}} 对象，并通过 Headers 构造函数中 init 属性来添加多个 header:

```js
var httpHeaders = {
  "Content-Type": "image/jpeg",
  "Accept-Charset": "utf-8",
  "X-My-Custom-Header": "Zeke are cool",
};
var myHeaders = new Headers(httpHeaders);
```

`你可以通过 init 属性将一个已存在的 Headers 对象来创建另一个新的 Headers 对象`:

```js
var secondHeadersObj = new Headers(myHeaders);
secondHeadersObj.get("Content-Type"); // Would return 'image/jpeg' — it inherits it from the first headers object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
