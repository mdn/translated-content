---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
---

{{HTTPSidebar}}

HTTP **`Content-Security-Policy-Report-Only`**响应头允许 web 开发人员通过监测 (但不强制执行) 政策的影响来尝试政策。这些违反报告由 {{Glossary("JSON")}} 文档组成通过一个 HTTP POST 请求发送到指定的 URI。

更多相关信息，可参见这篇文章 [Content Security Policy (CSP)](/zh-CN/docs/Web/HTTP/CSP).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header 类型</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        这个 header 不支持在 {{HTMLElement("meta")}} 元素内（定义）。
      </th>
    </tr>
  </tbody>
</table>

## 语法

```plain
Content-Security-Policy-Report-Only: <policy-directive>; <policy-directive>
```

## 指令

{{HTTPHeader("Content-Security-Policy")}} header 的指令也可应用于 `Content-Security-Policy-Report-Only`.

CSP {{CSP("report-uri")}} 指令需要跟这个 header 一起用，否则这个 header 将会是一个昂贵却无操作 (无作用) 的机器 (设置)。

## 例子

这个 header 报告 (统计) 将会发生的违规行为。你可以使用这个 header 去迭代你的内容安全政策。你观察你的网站的行为，查看违反报告，然后通过 {{HTTPHeader("Content-Security-Policy")}} 头选择所需的政策。

```plain
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
```

如果你希望收到报告，而且还想执行一项策略，使用{{HTTPHeader("Content-Security-Policy")}} 头跟{{CSP("report-uri")}} 指令。

```plain
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

## 违规报告的语法

报告的 JSON 对象包括下面的数据：

- `document-uri`
  - : 发生违规的文档 URI。
- `referrer`
  - : 发生违规的文档 referrer。
- `blocked-uri`
  - : 被内容安全政策阻塞加载的资源的 URI。如果被阻塞的 URI 与文档 URI 不同源，则被阻塞的 URI 被截断为只包含 scheme（协议），host（域名），和 port（端口）。
- `violated-directive`
  - : 被违反的策略名。
- `original-policy`
  - : `Content-Security-Policy` HTTP 头部所指定的原始策略。
- disposition
  - : “执行”或“报告”取决于是使用{{HTTPHeader("Content-Security-Policy")}} 头还是使用 `Content-Security-Header-Report-Only` 头。

## 违规报告样例

思考一下一个地址为 `http://example.com/signup.html` 的页面。它使用了下面的策略，禁止除了来自 `cdn.example.com` 的样式表外的其他任何资源。

```http
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

`signup.html`的 html 如下：

```html
<!doctype html>
<html>
  <head>
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    ... Content ...
  </body>
</html>
```

你可以发现违规的地方吗？只允许加载来自`cdn.example.com 这个域名的`样式表，然而这个网站试着加载来自自己域名的样式表 (`http://example.com`)。当文档被访问时，可以执行 CSP(内容安全策略) 的浏览器将会用 POST 请求发送以下违规报告到`http://example.com/_/csp-reports`:

```js
{
  "csp-report": {
    "document-uri": "http://example.com/signup.html",
    "referrer": "",
    "blocked-uri": "http://example.com/css/style.css",
    "violated-directive": "style-src cdn.example.com",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports",
    "disposition": "report"
  }
}
```

正如你所看到的，报告在`blocked-uri 上记录了`违反资源的完整路径。这并非总是如此。例如，当 `signup.html` 试图从 `http://anothercdn.example.com/stylesheet.css 加载`CSS，浏览器不会包含完整路径，只包含来源。这样做是为了防止泄漏跨域资源的敏感信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-uri")}} directive
- [Content Security in WebExtensions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Display security and privacy policies In Firefox Developer Tools](/zh-CN/docs/Tools/GCLI/Display_security_and_privacy_policies)
- [https://report-uri.io – CSP and HPKP reporting](https://report-uri.io/)
- [Hosted CSP reporting for HTTPS migrations](https://httpschecker.net/guides/https-reporter)
