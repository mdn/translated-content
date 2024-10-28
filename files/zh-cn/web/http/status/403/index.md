---
title: 403 Forbidden
slug: Web/HTTP/Status/403
---

{{HTTPSidebar}}

状态码 **`403 Forbidden`** 代表客户端错误，指的是服务器端有能力处理该请求，但是拒绝授权访问。

这个状态类似于 {{HTTPStatus("401")}}，但进入 {{HTTPStatus("403")}}状态后即使重新验证也不会改变该状态。该访问是长期禁止的，并且与应用逻辑密切相关（例如没有足够的权限访问该资源）。

## 状态

```plain
403 Forbidden
```

## 响应示例

```http
HTTP/1.1 403 Forbidden
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("401")}}
- [http 状态码定义](https://httpwg.org/specs/rfc9110.html#status.403)
