---
title: "Content-Security-Policy：upgrade-insecure-requests 指令"
short-title: upgrade-insecure-requests
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

HTTP {{HTTPHeader("Content-Security-Policy")}}（CSP）的 **`upgrade-insecure-requests`** 指令指示{{Glossary("user agent", "用户代理")}}将站点的所有不安全 URL（通过 HTTP 提供的 URL）视为已被替换为安全 URL（通过 HTTPS 提供的 URL）。该指令适用于需要重写大量不安全旧版 URL 的网站。

`upgrade-insecure-requests` 指令无法确保通过第三方站点上的链接访问你站点的用户会在顶级导航中被升级到 HTTPS，因此它不能替代 {{HTTPHeader("Strict-Transport-Security")}}（{{Glossary("HSTS", "HTTP 严格传输安全")}}）标头。后者仍应设置适当的 `max-age`，以确保用户不会遭受 SSL 剥离攻击。

## 语法

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## 示例

### 使用 HTTP 标头

```http
Content-Security-Policy: upgrade-insecure-requests;
```

### 使用 HTML meta 元素

```html
<meta
  http-equiv="Content-Security-Policy"
  content="upgrade-insecure-requests" />
```

在希望从 HTTP 迁移到 HTTPS 的域名 example.com 上设置上述标头后，非导航性的不安全资源请求会自动升级（包括第一方和第三方请求）。

```html
<img src="http://example.com/image.png" />
<img src="http://not-example.com/image.png" />
```

这些 URL 会在发起请求之前被重写，这意味着不会有不安全请求进入网络。请注意，如果所请求的资源实际上无法通过 HTTPS 获得，请求将会失败，且不会回退到 HTTP。

```html
<img src="https://example.com/image.png" />
<img src="https://not-example.com/image.png" />
```

对第三方资源的导航升级带来破坏的可能性显著更高，因此它们不会被升级：

```html
<a href="https://example.com/">首页</a>
<a href="http://not-example.com/">首页</a>
```

### 查找不安全请求

借助 {{HTTPHeader("Content-Security-Policy-Report-Only")}} 标头和 {{CSP("report-uri")}} 指令，你可以像这样同时设置强制策略和仅报告策略：

```http
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

这样，你仍会在安全站点上升级不安全请求，但只有监控策略会被违反，并向你的端点报告不安全资源。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Upgrade-Insecure-Requests")}} 标头
- {{HTTPHeader("Strict-Transport-Security")}}（{{Glossary("HSTS", "HTTP 严格传输安全")}}）标头
- [混合内容](/zh-CN/docs/Web/Security/Defenses/Mixed_content)
