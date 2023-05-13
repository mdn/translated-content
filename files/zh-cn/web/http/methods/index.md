---
title: HTTP 请求方法
slug: Web/HTTP/Methods
---

{{HTTPSidebar}}

HTTP 定义了一组**请求方法**，以表明要对给定资源执行的操作。指示针对给定资源要执行的期望动作。虽然它们也可以是名词，但这些请求方法有时被称为 _HTTP 动词_。每一个请求方法都实现了不同的语义，但一些共同的特征由一组共享：例如一个请求方法可以是{{glossary("safe","安全的")}}、{{glossary("idempotent","幂等的")}}或{{glossary("cacheable","可缓存的")}}。

- [`GET`](/zh-CN/docs/Web/HTTP/Methods/GET)
  - : `GET` 方法请求一个指定资源的表示形式，使用 `GET` 的请求应该只被用于获取数据。
- [`HEAD`](/zh-CN/docs/Web/HTTP/Methods/HEAD)
  - : `HEAD` 方法请求一个与 `GET` 请求的响应相同的响应，但没有响应体。
- [`POST`](/zh-CN/docs/Web/HTTP/Methods/POST)
  - : `POST` 方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用。
- [`PUT`](/zh-CN/docs/Web/HTTP/Methods/PUT)
  - : `PUT` 方法用有效载荷请求替换目标资源的所有当前表示。
- [`DELETE`](/zh-CN/docs/Web/HTTP/Methods/DELETE)
  - : `DELETE` 方法删除指定的资源。
- [`CONNECT`](/zh-CN/docs/Web/HTTP/Methods/CONNECT)
  - : `CONNECT` 方法建立一个到由目标资源标识的服务器的隧道。
- [`OPTIONS`](/zh-CN/docs/Web/HTTP/Methods/OPTIONS)
  - : `OPTIONS` 方法用于描述目标资源的通信选项。
- [`TRACE`](/zh-CN/docs/Web/HTTP/Methods/TRACE)
  - : `TRACE` 方法沿着到目标资源的路径执行一个消息环回测试。
- [`PATCH`](/zh-CN/docs/Web/HTTP/Methods/PATCH)
  - : `PATCH` 方法用于对资源应用部分修改。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTTP 标头](/zh-CN/docs/Web/HTTP/Headers)
