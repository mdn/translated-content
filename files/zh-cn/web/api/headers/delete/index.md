---
title: Headers.delete()
slug: Web/API/Headers/delete
---

{{APIRef("Fetch")}}{{ SeeCompatTable() }}

**`delete()`** 方法可以从 Headers 对象中删除指定 header.

下列原因将会导致该方法抛出一个{{jsxref("TypeError")}}:

- header 名在 HTTP header 中是不存在的。
- header 被锁定了.

> **备注：** 出于安全原因，部分头信息只能被用户代理控制。这些头信息包括 {{Glossary("Forbidden_header_name", "forbidden header names", 1)}} 和 {{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}}.

## 语法

```js
myHeaders.delete(name);
```

### Parameters

- _name_
  - : 需删除的 HTTP header 名称。

### Returns

Void.

## Example

创建一个空的 Headers 对象：

```js
var myHeaders = new Headers(); // Currently empty
```

可以通过 append() 方法添加 header:

```js
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.get('Content-Type'); // Returns 'image/jpeg'
```

可以通过 delete() 方法删除已有 header:

```js
myHeaders.delete('Content-Type');
myHeaders.get('Content-Type'); // Returns null, as it has been deleted
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
