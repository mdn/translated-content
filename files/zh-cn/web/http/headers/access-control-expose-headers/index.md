---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Headers/Access-Control-Expose-Headers
---

{{HTTPSidebar}}

响应首部 **`Access-Control-Expose-Headers`** 列出了哪些首部可以作为响应的一部分暴露给外部。

默认情况下，只有七种 {{Glossary("Simple response header", "simple response headers")}}（简单响应首部）可以暴露给外部：

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

如果想要让客户端可以访问到其他的首部信息，可以将它们在 `Access-Control-Expose-Headers` 里面列出来。

| Header type                                      | {{Glossary("Response header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | no                                       |

## 语法

```plain
Access-Control-Expose-Headers: [<header-name>[, <header-name>]*]
Access-Control-Expose-Headers: *
```

## 指令

- \<header-name>
  - : 包含 0 个或多个除 {{Glossary("Simple response header", "simple response headers")}}（简单响应首部）之外的[首部名称](/zh-CN/docs/Web/HTTP/Headers)列表，可以暴露给外部，供页面资源使用。

- \*（通配符）
  - : 若请求没有 [HTTP Cookie](/zh-CN/docs/Web/HTTP/Cookies)或认证信息，通配符 ”*“ 会暴露所有响应头部。对于有凭证信息的请求，会被简单地识别为头部名 ”*“，没有通配的语义。

## 示例

想要暴露一个非简单响应首部，可以这样指定：

```plain
Access-Control-Expose-Headers: Content-Encoding
```

想要额外暴露自定义的首部，例如 `Kuma-Revision`，可以指定多个，用逗号隔开：

```plain
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

有凭证信息的请求，可以指定一个配置符：

```plain
Access-Control-Expose-Headers: *
```

但是，”*“ 对 [Authorization 头](/zh-CN/docs/Web/HTTP/Headers/Authorization) 不生效，需要显式指定：

```plain
Access-Control-Expose-Headers: *, Authorization
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}


## 相关内容

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
