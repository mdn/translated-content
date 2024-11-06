---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
---

{{HTTPSidebar}}

在 HTTP 协议中，响应状态码 **412 Precondition Failed**（先决条件失败）表示客户端错误，意味着对于目标资源的访问请求被拒绝。这通常发生于采用除 {{HTTPMethod("GET")}} 和 {{HTTPMethod("HEAD")}} 之外的方法进行条件请求时，由首部字段 {{HTTPHeader("If-Unmodified-Since")}} 或 {{HTTPHeader("If-None-Match")}} 规定的先决条件不成立的情况下。这时候，请求的操作——通常是上传或修改文件——无法执行，从而返回该错误状态码。

## 状态码

```plain
412 Precondition Failed
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("428")}}
