---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
---

{{HTTPSidebar}}

HTTP **`301 Moved Permanently`** 说明请求的资源已经被移动到了由 {{HTTPHeader("Location")}} 头部指定的 url 上，是固定的不会再改变。搜索引擎会根据该响应修正。

> [!NOTE]
> 尽管[规范](#规范)要求浏览器在收到该响应并进行重定向时不应该修改 http method 和 body，但并非所有的用户代理都符合此要求。所以最好将 301 状态码用作 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 方法的响应，而对于 {{HTTPMethod("POST")}} 则改用 {{HTTPStatus("308", "308 Permanent Redirect")}}，因为此状态码会禁止更改请求方法。

## 状态

```http
301 Moved Permanently
```

## 示例

### 客户端请求

```http
GET /index.php HTTP/1.1
Host: www.example.org
```

### 服务端响应

```http
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("308")}}，当使用的请求方法永远不会更改时，等价于此状态代码。
- {{HTTPStatus("302")}}，临时重定向
