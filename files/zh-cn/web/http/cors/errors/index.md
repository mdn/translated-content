---
title: CORS errors
slug: Web/HTTP/CORS/Errors
---

[Cross-Origin Resource Sharing](/zh-CN/docs/Web/HTTP/CORS) ({{Glossary("CORS")}}) 是一种允许服务器放宽同源策略的标准。这用于明确允许一些跨源请求，同时拒绝其他请求。例如，如果站点提供外界嵌入的服务，则可能需要放宽同源策略（[same-origin policy](/zh-CN/docs/Web/Security/Same-origin_policy)）。设置这样的 CORS 配置并不一定容易，并且可能存在一些挑战。在这些页面中，我们将研究一些常见的 CORS 错误消息以及如何解决它们。

如果未正确设置 CORS 配置，浏览器控制台将显示错误，例如`"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at $somesite"（`跨源请求已阻止：同源策略禁止在某些站点上读取远程资源”），表示请求因违反 CORS 安全性而被阻止规则。但这可能不一定是设置错误。因为用户的 Web 应用程序和远程外部服务可能故意禁止该请求。如果要使端点可用，则需要进行一些调试才能成功。

## 确定问题

要了解 CORS 配置的基本问题，您需要找出哪个请求有问题以及原因。步骤如下：

1. 打开有问题的网站并打开开发者工具（[Developer Tools](/zh-CN/docs/Tools)）。
2. 尝试重现失败的事务并检查控制台（ [console](/zh-CN/docs/Tools/Web_Console)）是否看到 CORS 违规错误消息。它可能看起来像这样：

![Firefox console showing CORS error](cors-error2.png)

错误消息的文本将类似于以下内容：

```plain
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> **备注：** 出于安全原因，JavaScript 代码无法给出有关 CORS 请求出错的详细信息。所有代码都知道发生了错误。确定具体问题的唯一方法是查看浏览器的控制台以获取详细信息。

## CORS 错误信息

当请求因 CORS 失败时，Firefox 的控制台会在其控制台中显示消息。错误文本的一部分是“原因”消息，它提供了对出错的更深入的了解。消息的原因如下：

- [原因：CORS 被禁用](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSDisabled)
- [原因：CORS 请求未成功](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed)
- [原因：CORS 头字段“Origin”未被添加](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded)
- [原因：CORS 不允许请求外部重定向](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Reason: CORS request not http](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp)
- [Reason: CORS header ‘Access-Control-Allow-Origin’ missing](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin)
- [Reason: CORS header ‘Access-Control-Allow-Origin’ does not match ‘xyz’](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Reason: Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘\*’](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials)
- [Reason: Did not find method in CORS header ‘Access-Control-Allow-Methods’](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSMethodNotFound)
- [Reason: expected ‘true’ in CORS header ‘Access-Control-Allow-Credentials’](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSMissingAllowCredentials)
- [Reason: CORS preflight channel did not succeed](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed)
- [Reason: invalid token ‘xyz’ in CORS header ‘Access-Control-Allow-Methods’](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod)
- [Reason: invalid token ‘xyz’ in CORS header ‘Access-Control-Allow-Headers’](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowHeader)
- [Reason: missing token ‘xyz’ in CORS header ‘Access-Control-Allow-Headers’ from CORS preflight channel](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Reason: Multiple CORS header ‘Access-Control-Allow-Origin’ not allowed](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

## 参见

- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/zh-CN/docs/Web/HTTP/CORS)
- [Server-side CORS settings](/zh-CN/docs/Web/HTTP/Server-Side_Access_Control)
- [CORS enabled image](/zh-CN/docs/Web/HTML/CORS_enabled_image)
- [CORS settings attributes](/zh-CN/docs/Web/HTML/CORS_settings_attributes)
- <https://www.test-cors.org> – page to test CORS requests
