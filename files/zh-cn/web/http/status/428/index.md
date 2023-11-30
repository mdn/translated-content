---
title: 428 Precondition Required
slug: Web/HTTP/Status/428
---

{{HTTPSidebar}}

在 HTTP 协议中，响应状态码 **`428 Precondition Required`** 表示服务器端要求发送[条件](/zh-CN/docs/Web/HTTP/Conditional_requests)请求。

一般的，这种情况意味着必要的条件首部——如 {{HTTPHeader("If-Match")}}——的**缺失**。

当一个条件首部的值**不能匹配**服务器端的状态的时候，应答的状态码应该是 {{HTTPStatus(412)}} `Precondition Failed`，前置条件验证失败。

## 状态

```plain
428 Precondition Required
```

## 规范

{{Specifications}}

## 相关内容

- [HTTP conditional requests](/zh-CN/docs/Web/HTTP/Conditional_requests)
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus(412)}}
