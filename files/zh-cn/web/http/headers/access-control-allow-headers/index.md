---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
---

{{HTTPSidebar}}

响应首部 **`Access-Control-Allow-Headers`** 用于 {{glossary("preflight request")}}（预检请求）中，列出了将会在正式请求的 {{HTTPHeader("Access-Control-Request-Headers")}} 字段中出现的首部信息。

简单首部，如 {{glossary("simple header", "simple headers")}}、{{HTTPHeader("Accept")}}、{{HTTPHeader("Accept-Language")}}、{{HTTPHeader("Content-Language")}}、{{HTTPHeader("Content-Type")}}（只限于解析后的值为 `application/x-www-form-urlencoded`、`multipart/form-data` 或 `text/plain` 三种 MIME 类型（不包括参数）），它们始终是被支持的，不需要在这个首部特意列出。

如果请求中含有 {{HTTPHeader("Access-Control-Request-Headers")}} 字段，那么这个首部是必要的。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
Access-Control-Allow-Headers: *
```

## 指令

- `<header-name>`
  - : 可支持的请求首部名字。请求头会列出所有支持的首部列表，用逗号隔开。

注意以下这些特定的首部是一直允许的：{{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}}（但只在其值属于 MIME 类型 `application/x-www-form-urlencoded`, `multipart/form-data` 或 `text/plain`中的一种时）。这些被称作{{Glossary("simple headers")}}，你无需特意声明它们。

**`*` (wildcard)**

对于没有凭据的请求（没有 HTTP cookie 或 HTTP 认证信息的请求），值“ `*`”仅作为特殊的通配符值。在具有凭据的请求中，它被视为没有特殊语义的文字标头名称“ \*”。请注意，{{HTTPHeader("Authorization")}}标头不能使用通配符，并且始终需要明确列出。

## 示例

### 自定义的请求头

下面是 `Access-Control-Allow-Headers` 标头的一个示例。它表明，除了 CORS 安全清单列出的请求标头外，对服务器的 CORS 请求还支持名为 X-Custom-Header 的自定义标头。

```plain
Access-Control-Allow-Headers: X-Custom-Header
```

### Multiple headers

此示例展示了支持多个标头时的 `Access-Control-Allow-Headers` 。

```plain
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Example preflight request

让我们看一个涉及`Access-Control-Allow-Headers`的预检请求示例。

#### Request

First, the request. The preflight request is an {{HTTPMethod("OPTIONS")}} request which includes some combination of the three preflight request headers: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}}, and {{HTTPHeader("Origin")}}, such as:

```plain
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

#### Response

If the server allows CORS requests to use the {{HTTPMethod("DELETE")}} method, it responds with an {{HTTPHeader("Access-Control-Allow-Methods")}} response header, which lists `DELETE` along with the other methods it supports:

```plain
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400
```

If the requested method isn't supported, the server will respond with an error.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 有关兼容性的注意事项

- 在最新规范中提出的通配符 (\*)，尚未被如下浏览器实现：

  - Chromium: [Issue 615313](https://bugs.chromium.org/p/chromium/issues/detail?id=615313)
  - Firefox: [Firefox bug 1309358](https://bugzil.la/1309358)
  - Servo: [Issue 13283](https://github.com/servo/servo/issues/13283)
  - WebKit: [Issue 165508](https://bugs.webkit.org/show_bug.cgi?id=165508)

## 相关内容

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
