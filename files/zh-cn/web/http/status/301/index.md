---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
---

{{HTTPSidebar}}

HTTP **`301 301 Moved Permanently`** 说明请求的资源已经被移动到了由 {{HTTPHeader("Location")}} 头部指定的 url 上，是固定的不会再改变。搜索引擎会根据该响应修正。

尽管标准要求浏览器在收到该响应并进行重定向时不应该修改 http method 和 body，但是有一些浏览器可能会有问题。所以最好是在应对{{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 方法时使用 301，其他情况使用{{HTTPStatus("308")}} 来替代 301。

## 状态

```plain
301 Moved Permanently
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多信息可见

- {{HTTPStatus("308")}} 永久重定向
- {{HTTPStatus("302")}} 找到，暂时性转移
