---
title: "CSP: upgrade-insecure-requests"
slug: Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`upgrade-insecure-requests`**指令指示客户端将该站点的所有不安全 URL（通过 HTTP 提供的 URL）视为已被替换为安全 URL（通过 HTTPS 提供的 URL）。该指令适用于需要重写大量不安全的旧版 URL 的网站。

`upgrade-insecure-requests`指令在 {{CSP("block-all-mixed-content")}} 之前被执行，如果其被设置，后者实际上是空操作。可以设置其中一个，但不能同时设置。

The `upgrade-insecure-requests` directive will not ensure that users visiting your site via links on third-party sites will be upgraded to HTTPS for the top-level navigation and thus does not replace the {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) header, which should still be set with an appropriate `max-age` to ensure that users are not subject to SSL stripping attacks.

## Syntax

```plain
Content-Security-Policy: upgrade-insecure-requests;
```

## Examples

```plain
// header
Content-Security-Policy: upgrade-insecure-requests;

// meta tag
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

一旦将上述头部设置在计划从 HTTP 迁移到 HTTPS 的 example.com 域名上，非跳转 (non-navigational) 的不安全资源请求会自动升级到 HTTPS（包括第当前域名以及第三方请求）。

```html
<img src="http://example.com/image.png" />
<img src="http://not-example.com/image.png" />
```

这些 URL 在请求发送之前都会被改写成 HTTPS，也就意味着不安全的请求都不会发送出去。注意，如果请求的资源在 HTTPS 情况下不可用，则该请求将失败，其也不能回退到 HTTP。

```html
<img src="https://example.com/image.png" />
<img src="https://not-example.com/image.png" />
```

Navigational upgrades to third-party resources brings a significantly higher potential for breakage, these are not upgraded:

```html
<a href="https://example.com/">Home</a>
<a href="http://not-example.com/">Home</a>
```

### Finding insecure requests

通过 {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP 头部和 {{CSP("report-uri")}} 指令，您可以设置执行策略和报告策略，如下所示：

```plain
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

That way, you still upgrade insecure requests on your secure site, but the only monitoring policy is violated and reports insecure resources to your endpoint.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Upgrade-Insecure-Requests")}} header
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) header
- {{CSP("block-all-mixed-content")}}
- [Mixed content](/zh-CN/docs/Web/Security/Mixed_content)
