---
title: 原因：CORS request not HTTP
slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
---

{{HTTPSidebar}}

## 原因

```plain
原因：CORS request not HTTP
```

## 哪里错了？

{{Glossary("CORS")}} 请求只能用于 HTTP 或 HTTPS URL 方案，但请求指定的 URL 可能是不同类型。这种情况经常发生在 URL 指定本地文件，例如使用了 `file:///` 的 URL。

要解决此问题，请确保在发出涉及 CORS 的请求时使用 HTTPS URL，例如 {{domxref("XMLHttpRequest")}}、[Fetch](/zh-CN/docs/Web/API/Fetch_API) API、Web 字体（`@font-face`）、[WebGL 纹理](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)以及 XSL 样式表。

### 加载本地文件

来自相同的目录或者子目录的本地文件在历史上被视为[同源](/zh-CN/docs/Web/Security/Same-origin_policy)的。这意味着在测试期间可以从本地目录或子目录加载文件以及它的所有子资源，而不会触发 CORS 错误。

不幸地是，这有安全隐患，正如此公告所述：[CVE-2019-11730](https://www.mozilla.org/zh-CN/security/advisories/mfsa2019-21/#CVE-2019-11730)。很多浏览器，包括 Firfox 和 Chrome，现在将所有本地文件视为*不透明*来源（默认）。因此，加载包含本地资源的本地文件现在会导致 CORS 错误。

开发者如果想要在本地进行测试，现在要[设置一个本地服务器](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)。由于所有的文件都来自同种方案和域（`loaclhost`），它们都有相同的源，并不会触发跨源错误。

> [!NOTE]
> 此更改符合 [URL 规范](https://url.spec.whatwg.org/#origin)，该规范将文件的原始行为留给开发者实现，但建议在有疑问时，将文件的来源视为不透明。

## 参见

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- [CORS 介绍](/zh-CN/docs/Web/HTTP/CORS)
- [什么是 URL？](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
