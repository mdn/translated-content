---
title: Headers
slug: Web/API/Headers
---

{{ APIRef("Fetch") }}

[Fetch API](/zh-CN/docs/Web/API/Fetch_API) 的 **Headers** 接口允许您对 HTTP 请求和响应头执行各种操作。这些操作包括检索，设置，添加和删除。一个 Headers 对象具有关联的头列表，它最初为空，由零个或多个键值对组成。你可以使用 {{domxref("Headers.append","append()")}} 方法添加 之类的方法添加到此 (参见 [示例](#示例))。在该接口的所有方法中，标题名称由不区分大小写的字节序列匹配。

出于安全考虑，某些头只能由用户代理控制。这些头信息包括 {{Glossary("Forbidden_header_name", "forbidden header names", 1)}} 和 {{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}}。

一个 Headers 对象也有一个关联的 guard，它具有不可变的值，`request`，`request-no-cors`，`response`或`none`。这会影响 {{domxref("Headers.set","set()")}}, {{domxref("Headers.delete","delete()")}}, 和{{domxref("Headers.append","append()")}} 方法 改变 header. 参考更多信息，请看 {{Glossary("Guard")}}.

你可以通过 {{domxref("Request.headers")}} 和{{domxref("Response.headers")}} 属性检索一个`Headers`对象，并使用 {{domxref("Headers.Headers()")}} 构造函数创建一个新的`Headers` 对象。

一个实现了`Headers` 的对象可以直接用于 {{jsxref("Statements/for...of", "for...of")}} 结构中，而不是 {{domxref('Headers.entries()', 'entries()')}}: `for (var p of myHeaders)` 等价于 `for (var p of myHeaders.entries())`.

> **备注：** 您可以通过阅读我们的 [HTTP headers](/zh-CN/docs/Web/HTTP/Headers)参考找到更多关于可用 headers 的信息。

## 构造函数

- {{domxref("Headers.Headers()")}}
  - : 创建一个新的 Headers 对象。

## 方法

- {{domxref("Headers.append()")}}
  - : 给现有的 header 添加一个值，或者添加一个未存在的 header 并赋值。
- {{domxref("Headers.delete()")}}
  - : 从 Headers 对象中删除指定 header.
- {{domxref("Headers.entries()")}}
  - : 以 {{jsxref("Iteration_protocols","迭代器")}} 的形式返回 Headers 对象中所有的键值对。
- {{domxref("Headers.get()")}}
  - : 以 {{domxref("ByteString")}} 的形式从 Headers 对象中返回指定 header 的全部值。
- {{domxref("Headers.has()")}}
  - : 以布尔值的形式从 Headers 对象中返回是否存在指定的 header.
- {{domxref("Headers.keys()")}}
  - : 以{{jsxref("Iteration_protocols", "迭代器")}}的形式返回 Headers 对象中所有存在的 header 名。
- {{domxref("Headers.set()")}}
  - : 替换现有的 header 的值，或者添加一个未存在的 header 并赋值。
- {{domxref("Headers.values()")}}
  - : 以{{jsxref("Iteration_protocols", "迭代器")}}的形式返回 Headers 对象中所有存在的 header 的值。

> **备注：** 值得注意的是，在 header 已存在或者有多个值的状态下{{domxref("Headers.set()")}} 和 {{domxref("Headers.append()")}}的使用有如下区别，{{domxref("Headers.set()")}} 将会用新的值覆盖已存在的值，但是{{domxref("Headers.append()")}}会将新的值添加到已存在的值的队列末尾。请参相关词条内的示例代码。

> **备注：** 如果您尝试传入名称不是[有效的 HTTP 头名称](https://fetch.spec.whatwg.org/#concept-header-name)的引用，则所有 Headers 方法都将引发 `TypeError` 。如果头部有一个不变的{{Glossary("Guard")}}，则变异操作将会抛出一个 `TypeError` 。在其他任何失败的情况下，他们默默地失败。

### Obsolete methods

- {{domxref("Headers.getAll()")}}
  - : 用于返回具有给定名称的 `Headers` 对象中所有值的数组; 这个方法现在已经从规范中删除了，{{domxref("Headers.get()")}} 方法现在返回所有的值而不是一个。

## 示例

在这个小示例中，我们将会通过 Headers 构造函数创建一个新的 header，先使用 append() 方法添加一个 header，然后通过 get() 方法返回这个 header 的值

```js
let myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");

myHeaders.get("Content-Type");
// should return 'text/xml'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
