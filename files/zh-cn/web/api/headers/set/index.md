---
title: Headers.set()
slug: Web/API/Headers/set
---

{{APIRef("Fetch")}}

{{domxref("Headers")}} 接口中 **`set()`** 方法在可以在已经声明中的 **`headers`** 对象修改已有的一组键值对或者创建一个新的键值对。

**`set()`** 方法和 [append()](/zh-CN/docs/Web/API/Headers/append)方法不同的是声明的 **`Headers`** 对象是否已经存在对应的 **`keys`** 是否已经存在并且已经赋值。**`set()`** 方法将会覆盖之前的 **`value`**，然而 [append()](/zh-CN/docs/Web/API/Headers/append)方法只会在 **`Headers`** 对象的尾部添加一个新的键值对。

为了安全策略，一些 **`Headers`**对象中的键值对只能客户端去控制。这些 **`key`** 包括[Forbidden response header name](/zh-CN/docs/Glossary/Forbidden_header_name) 和 [Forbidden responese header names](/zh-CN/docs/Glossary/Forbidden_response_header_name) 。

## 语法

```plain
myHeaders.set(name, value);
```

### 参数

- `name`
  - : **`name`**就是需要对 HTTP header 设置新值的 key，一般为字符串。如果设置的**`name`** 不是 HTTP header 规范里面规定的 name，那么将会抛出错误"TypeError"。
- `value`
  - : **`value`** 就是 **`name`** 对应的值。

### 返回

Void.

## Example

创建一个新的 `Headers` 对象：

```js
var myHeaders = new Headers(); // Currently empty
```

你可以用[append()](/zh-CN/docs/Web/API/Headers/append)方法给`Headers` 对象增添一个新的键值对，然后用 **`set()`** 方法去改变这个键值对：

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.set("Content-Type", "text/html");
```

如果这个键值对不存在，那么 **`set()`** 方法首先创建一个键值对，然后给它赋值。如果这个键值对存在，那么 **`set()`** 方法将会覆盖之前的 **`value`** 值：

```js
myHeaders.set("Accept-Encoding", "deflate");
myHeaders.set("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // Returns 'gzip'
```

如果你需要增加一个键值对，而不是要覆盖之前的键值对，那么你需要用[append()](/zh-CN/docs/Web/API/Headers/append)方法。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
