---
title: 内容安全策略 ( CSP )
slug: Web/HTTP/CSP
---

{{HTTPSidebar}}

内容安全策略 ({{Glossary("CSP")}}) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 ({{Glossary("XSS")}}) 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段。

CSP 被设计成完全向后兼容（除 CSP2 在向后兼容有明确提及的不一致; 更多细节查看[这里](https://www.w3.org/TR/CSP2) 章节 1.1）。不支持 CSP 的浏览器也能与实现了 CSP 的服务器正常合作，反之亦然：不支持 CSP 的浏览器只会忽略它，如常运行，默认为网页内容使用标准的同源策略。如果网站不提供 CSP 头部，浏览器也使用标准的[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)。

为使 CSP 可用，你需要配置你的网络服务器返回 {{HTTPHeader("Content-Security-Policy")}} HTTP 头部 ( 有时你会看到一些关于`X-Content-Security-Policy`头部的提法，那是旧版本，你无须再如此指定它)。

除此之外， {{HTMLElement("meta")}} 元素也可以被用来配置该策略，例如

```plain
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
```

## 威胁

### 跨站脚本攻击

CSP 的主要目标是减少和报告 XSS 攻击，XSS 攻击利用了浏览器对于从服务器所获取的内容的信任。恶意脚本在受害者的浏览器中得以运行，因为浏览器信任其内容来源，即使有的时候这些脚本并非来自于它本该来的地方。

CSP 通过指定有效域——即浏览器认可的可执行脚本的有效来源——使服务器管理者有能力减少或消除 XSS 攻击所依赖的载体。一个 CSP 兼容的浏览器将会仅执行从白名单域获取到的脚本文件，忽略所有的其他脚本 (包括内联脚本和 HTML 的事件处理属性)。

作为一种终极防护形式，始终不允许执行脚本的站点可以选择全面禁止脚本执行。

### 数据包嗅探攻击

除限制可以加载内容的域，服务器还可指明哪种协议允许使用；比如 (从理想化的安全角度来说)，服务器可指定所有内容必须通过 HTTPS 加载。一个完整的数据安全传输策略不仅强制使用 HTTPS 进行数据传输，也为所有的 cookie 标记安全标识 [cookies with the secure flag](/zh-CN/docs/Web/HTTP/Cookies)，并且提供自动的重定向使得 HTTP 页面导向 HTTPS 版本。网站也可以使用 {{HTTPHeader("Strict-Transport-Security")}} HTTP 头部确保连接它的浏览器只使用加密通道**。**

## 使用 CSP

配置内容安全策略涉及到添加 {{HTTPHeader("Content-Security-Policy")}} HTTP 头部到一个页面，并配置相应的值，以控制用户代理（浏览器等）可以为该页面获取哪些资源。比如一个可以上传文件和显示图片页面，应该允许图片来自任何地方，但限制表单的 action 属性只可以赋值为指定的端点。一个经过恰当设计的内容安全策略应该可以有效的保护页面免受跨站脚本攻击。本文阐述如何恰当的构造这样的头部，并提供了一些例子。

### 制定策略

你可以使用 {{HTTPHeader("Content-Security-Policy")}} HTTP 头部 来指定你的策略，像这样：

```plain
Content-Security-Policy: policy
```

policy 参数是一个包含了各种描述你的 CSP 策略指令的字符串。

### 描述策略

一个策略由一系列策略指令所组成，每个策略指令都描述了一个针对某个特定类型资源以及生效范围的策略。你的策略应当包含一个{{CSP("default-src")}}策略指令，在其他资源类型没有符合自己的策略时应用该策略 (有关完整列表查看{{CSP("default-src")}} )。一个策略可以包含 {{CSP("default-src")}} 或者 {{CSP("script-src")}} 指令来防止内联脚本运行，并杜绝`eval()`的使用。一个策略也可包含一个 {{CSP("default-src")}} 或 {{CSP("style-src")}} 指令去限制来自一个 {{HTMLElement("style")}} 元素或者 style 属性的內联样式。

## 示例：常见用例

这一部分提供了一些常用的安全策略方案示例。

### 示例 1

一个网站管理者想要所有内容均来自站点的同一个源 (不包括其子域名)

```plain
Content-Security-Policy: default-src 'self'
```

### 示例 2

一个网站管理者允许内容来自信任的域名及其子域名 (域名不必须与 CSP 设置所在的域名相同)

```plain
Content-Security-Policy: default-src 'self' *.trusted.com
```

### 示例 3

一个网站管理者允许网页应用的用户在他们自己的内容中包含来自任何源的图片，但是限制音频或视频需从信任的资源提供者 (获得)，所有脚本必须从特定主机服务器获取可信的代码。

```plain
Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com
```

在这里，各种内容默认仅允许从文档所在的源获取，但存在如下例外：

- 图片可以从任何地方加载 (注意 "\*" 通配符)。
- 多媒体文件仅允许从 media1.com 和 media2.com 加载 (不允许从这些站点的子域名)。
- 可运行脚本仅允许来自于 userscripts.example.com。

### 示例 4

一个线上银行网站的管理者想要确保网站的所有内容都要通过 SSL 方式获取，以避免攻击者窃听用户发出的请求。

```plain
Content-Security-Policy: default-src https://onlinebanking.jumbobank.com
```

该服务器仅允许通过 HTTPS 方式并仅从`onlinebanking.jumbobank.com`域名来访问文档。

### 示例 5

一个在线邮箱的管理者想要允许在邮件里包含 HTML，同样图片允许从任何地方加载，但不允许 JavaScript 或者其他潜在的危险内容 (从任意位置加载)。

```plain
Content-Security-Policy: default-src 'self' *.mailsite.com; img-src *
```

注意这个示例并未指定{{CSP("script-src")}}。在此 CSP 示例中，站点通过 {{CSP("default-src")}} 指令的对其进行配置，这也同样意味着脚本文件仅允许从原始服务器获取。

## 对策略进行测试

为降低部署成本，CSP 可以部署为*报告 (report-only)*模式。在此模式下，CSP 策略不是强制性的，但是任何违规行为将会报告给一个指定的 URI 地址。此外，一个报告模式的头部可以用来测试一个修订后的未来将应用的策略而不用实际部署它。

你可以用{{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP 头部来指定你的策略，像这样：

```plain
Content-Security-Policy-Report-Only: policy
```

如果{{HTTPHeader("Content-Security-Policy-Report-Only")}} 头部和 {{HTTPHeader("Content-Security-Policy")}} 同时出现在一个响应中，两个策略均有效。在`Content-Security-Policy` 头部中指定的策略有强制性，而`Content-Security-Policy-Report-Only`中的策略仅产生报告而不具有强制性。

支持 CSP 的浏览器将始终对于每个企图违反你所建立的策略都发送违规报告，如果策略里包含一个有效的{{CSP("report-uri")}} 指令。

## 启用违例报告

默认情况下，违规报告并不会发送。为启用发送违规报告，你需要指定 {{CSP("report-uri")}} 策略指令，并提供至少一个 URI 地址去递交报告：

```plain
Content-Security-Policy: default-src 'self'; report-uri http://reportcollector.example.com/collector.cgi
```

然后你需要设置你的服务器能够接收报告，使其能够以你认为恰当的方式存储并处理这些报告。

## 违例报告的语法

作为报告的 JSON 对象报告包含了以下数据：

- `document-uri`
  - : 发生违规的文档的 URI。
- `referrer`
  - : 违规发生处的文档引用（地址）。
- `blocked-uri`
  - : 被 CSP 阻止的资源 URI。如果被阻止的 URI 来自不同的源而非文档 URI，那么被阻止的资源 URI 会被删减，仅保留协议，主机和端口号。
- `violated-directive`
  - : 违反的策略名称。
- `original-policy`
  - : 在 `Content-Security-Policy` HTTP 头部中指明的原始策略。

## 违例报告样本

我们假设页面位于 `http://example.com/signup.html`。它使用如下策略，该策略禁止任何资源的加载，除了来自 `cdn.example.com` 的样式表。

```plain
Content-Security-Policy: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

`signup.html` 的 HTML 像这样：

```plain
<!DOCTYPE html>
<html>
  <head>
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    ... Content ...
  </body>
</html>
```

你能看出其中错误吗？样式表仅允许加载自`cdn.example.com，`然而该页面企图从自己的源 (`http://example.com`) 加载。当该文档被访问时，一个兼容 CSP 的浏览器将以 POST 请求的形式发送违规报告到 `http://example.com/_/csp-reports`，内容如下：

```plain
{
  "csp-report": {
    "document-uri": "http://example.com/signup.html",
    "referrer": "",
    "blocked-uri": "http://example.com/css/style.css",
    "violated-directive": "style-src cdn.example.com",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports"
  }
}
```

如你所见，该报告在 `blocked-uri 字段` 中包含了违规资源的完整路径，但情况并非总是如此。比如，当 signup.html 试图从 [`http://anothercdn.example.com/stylesheet.css`](http://anothercdn.example.com/stylesheet.css) 加载 CSS 时，浏览器将不会包含完整路径，而只会保留源路径 (`http://anothercdn.example.com`)。CSP 技术规范小组对此古怪行为给出了[解释](https://www.w3.org/TR/CSP/#violation-reports)。大体上说，这样是为了防止泄露跨域资源的敏感信息。

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Content Security in WebExtensions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Display security and privacy policies In Firefox Developer Tools](/zh-CN/docs/Tools/GCLI/Display_security_and_privacy_policies)
