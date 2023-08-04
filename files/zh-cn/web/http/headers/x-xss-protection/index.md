---
title: X-XSS-Protection
slug: Web/HTTP/Headers/X-XSS-Protection
---

{{HTTPSidebar}}

HTTP **`X-XSS-Protection`** 响应头是 Internet Explorer，Chrome 和 Safari 的一个特性，当检测到跨站脚本攻击 ({{Glossary("XSS")}}) 时，浏览器将停止加载页面。若网站设置了良好的 {{HTTPHeader("Content-Security-Policy")}} 来禁用内联 JavaScript (`'unsafe-inline'`)，现代浏览器不太需要这些保护，但其仍然可以为尚不支持 {{Glossary("CSP")}} 的旧版浏览器的用户提供保护。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=<reporting-uri>
```

- 0
  - : 禁止 XSS 过滤。
- 1
  - : 启用 XSS 过滤（通常浏览器是默认的）。如果检测到跨站脚本攻击，浏览器将清除页面（删除不安全的部分）。
- 1;mode=block
  - : 启用 XSS 过滤。如果检测到攻击，浏览器将不会清除页面，而是阻止页面加载。
- 1; report=\<reporting-URI> (Chromium only)
  - : 启用 XSS 过滤。如果检测到跨站脚本攻击，浏览器将清除页面并使用 CSP {{CSP("report-uri")}}指令的功能发送违规报告。

## 范例

当检测到 XSS 攻击时阻止页面加载：

```bash
X-XSS-Protection: 1;mode=block
```

PHP

```php
header("X-XSS-Protection: 1; mode=block");
```

Apache (.htaccess)

```bash
<IfModule mod_headers.c>
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

Nginx

```bash
add_header "X-XSS-Protection" "1; mode=block";
```

## 规范

不属于任何一个规范或草案的一部分。

## 浏览器兼容性

{{Compat}}

## 了解更多

- {{HTTPHeader("Content-Security-Policy")}}
- [Controlling the XSS Filter – Microsoft](https://blogs.msdn.microsoft.com/ieinternals/2011/01/31/controlling-the-xss-filter/)
- [Understanding XSS Auditor – Virtue Security](https://www.virtuesecurity.com/blog/understanding-xss-auditor/)
- [The misunderstood X-XSS-Protection – blog.innerht.ml](http://blog.innerht.ml/the-misunderstood-x-xss-protection/)
