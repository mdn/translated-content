---
title: 'CSP: base-uri'
slug: Web/HTTP/Headers/Content-Security-Policy/base-uri
---

{{HTTPSidebar}}

HTTP 协议 {{HTTPHeader("Content-Security-Policy")}} 首部字段中的 **`base-uri`** 指令限制了可以应用于一个文档的 {{HTMLElement("base")}} 元素的 URL。假如指令值为空，那么任何 URL 都是允许的。如果指令不存在，那么用户代理会使用 {{HTMLElement("base")}} 元素中的值。

| CSP version                           | 2                                            |
| ------------------------------------- | -------------------------------------------- |
| Directive type                        | {{Glossary("Document directive")}} |
| {{CSP("default-src")}} fallback | No. Not setting this allows anything.        |

## 语法

base-uri 安全策略可以设置一个或多个源：

```plain
Content-Security-Policy: base-uri <source>;
Content-Security-Policy: base-uri <source> <source>;
```

### 源

{{page("Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}

## 示例

### Meta tag 配置

```html
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'">
```

### Apache 配置

```bash
<IfModule mod_headers.c>
Header set Content-Security-Policy "base-uri 'self';
</IfModule>
```

### Nginx 配置

```bash
add_header Content-Security-Policy "base-uri 'self';"
```

### _违犯策略的案例_

假如你的域名不是 example.com，那么将 {{HTMLElement("base")}} 元素的 href 属性值设置成 example.com 会违犯 CSP 策略。

```html example-bad
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'">
<base href="http://example.com/">

// Error: Refused to set the document's base URI to 'http://example.com/'
// because it violates the following Content Security Policy
// directive: "base-uri 'self'"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("base")}}
- {{domxref("Node.baseURI")}}
