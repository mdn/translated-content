---
title: CORS 错误
slug: Web/HTTP/Guides/CORS/Errors
---

[跨源资源分享](/zh-CN/docs/Web/HTTP/Guides/CORS)（{{Glossary("CORS")}}）是一种允许服务器放宽同源策略的标准。这用于明确允许一些跨源请求，同时拒绝其他请求。例如，如果站点提供外界嵌入的服务，则可能需要放宽同源策略。设置这样的 CORS 配置并不一定容易，并且可能存在一些挑战。在这些页面中，我们将研究一些常见的 CORS 错误消息以及如何解决它们。

如果未正确设置 CORS 配置，浏览器控制台将显示错误，例如 `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at $somesite"` 表示请求因违反 CORS 安全规则而被阻止。但这可能不一定是设置错误。因为用户的 Web 应用程序和远程外部服务可能故意禁止该请求。如果要使端点可用，则需要进行一些调试才能成功。

## 确定问题

要了解 CORS 配置的基本问题，你需要找出哪个请求有问题以及原因。步骤如下：

1. 打开有问题的网站并打开[开发者工具](https://firefox-source-docs.mozilla.org/devtools-user/index.html)。
2. 尝试重现失败的事务并检查[控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)是否看到 CORS 违规错误消息。它可能看起来像这样：

![Firefox 控制台展示 CORS 错误](cors-error2.png)

错误消息的文本将类似于以下内容：

```plain
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> [!NOTE]
> 出于安全原因，*JavaScript 代码无法给出*有关 CORS 请求出错的详细信息。所有代码都知道发生了错误。确定具体问题的唯一方法是查看浏览器的控制台以获取详细信息。

## CORS 错误信息

当请求因 CORS 失败时，Firefox 的控制台会在其控制台中显示消息。错误文本的一部分是“原因”消息，它提供了对出错的更深入的了解。下面列出了原因的消息；点击消息以打开一篇文章，更详细地阐述了错误以及提供可能的解决方案。

- [原因：CORS disabled](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSDisabled)
- [原因：CORS request did not succeed](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed)
- [原因：CORS header 'Origin' cannot be added](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSOriginHeaderNotAdded)
- [原因：CORS request external redirect not allowed](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSExternalRedirectNotAllowed)
- [原因：CORS request not http](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp)
- [原因：CORS header 'Access-Control-Allow-Origin' missing](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin)
- [原因：CORS header 'Access-Control-Allow-Origin' does not match 'xyz'](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [原因：Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '\*'](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials)
- [原因：Did not find method in CORS header 'Access-Control-Allow-Methods'](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound)
- [原因：expected 'true' in CORS header 'Access-Control-Allow-Credentials'](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSMIssingAllowCredentials)
- [原因：CORS preflight channel did not succeed](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed)
- [原因：invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod)
- [原因：invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowHeader)
- [原因：missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [原因：Multiple CORS header 'Access-Control-Allow-Origin' not allowed](/zh-CN/docs/Web/HTTP/Guides/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

## 参见

- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [服务端 CORS 设置](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [允许图片跨源请求](/zh-CN/docs/Web/HTML/How_to/CORS_enabled_image)
- [CORS 设置属性](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin)
- <https://www.test-cors.org>——用于测试 CORS 请求的页面
