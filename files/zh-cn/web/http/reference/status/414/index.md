---
title: 414 URI Too Long
slug: Web/HTTP/Reference/Status/414
---

响应码 **`414 URI Too Long`** 表示客户端所请求的 URI 超过了服务器允许的范围。

以下是造成这种罕见情况的几种可能原因：

- 当客户端误将 {{HTTPMethod("POST")}} 请求当作 {{HTTPMethod("GET")}} 请求时，会带有一个较长的查询字符串 (query)；
- 当客户端堕入重定向循环黑洞时，例如，指向自身后缀的重定向 URI 前缀 (a redirected URI prefix that points to a suffix of itself)；
- 当客户端对服务器进行攻击，试图寻找潜在的漏洞时。

## 状态

```plain
414 URI Too Long
```

## 规范

{{Specifications}}

## 相关内容

- {{Glossary("URI")}}
