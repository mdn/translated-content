---
title: Pragma
slug: Web/HTTP/Headers/Pragma
---

{{HTTPSidebar}}

**`Pragma`** 是一个在 HTTP/1.0 中规定的通用首部，这个首部的效果依赖于不同的实现，所以在“请求 - 响应”链中可能会有不同的效果。它用来向后兼容只支持 HTTP/1.0 协议的缓存服务器，那时候 HTTP/1.1 协议中的 Cache-Control 还没有出来。

> **备注：** 由于 Pragma 在 HTTP 响应中的行为没有确切规范，所以不能可靠替代 HTTP/1.1 中通用首部 Cache-Control，尽管在请求中，假如 Cache-Control 不存在的话，它的行为与 Cache-Control: no-cache 一致。建议只在需要兼容 HTTP/1.0 客户端的场合下应用 Pragma 首部。

| Header type                                                               | {{Glossary("General header")}}, but response behavior is not specified and thus implementation-specific. |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| {{Glossary("Forbidden header name")}}                                     | no                                                                                                       |
| {{Glossary("Simple response header", "CORS-safelisted response-header")}} | yes                                                                                                      |

## 语法

```plain
Pragma: no-cache
```

## 指令

- no-cache
  - : 与 Cache-Control: no-cache 效果一致。强制要求缓存服务器在返回缓存的版本之前将请求提交到源头服务器进行验证。

## 示例

```plain
Pragma: no-cache
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
