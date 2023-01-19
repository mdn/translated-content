---
title: 原因：CORS 请求不是 HTTP
slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
---

{{HTTPSidebar}}

## 原因

```plain
原因：CORS 请求不是 HTTP
```

## 哪里出错了？

{{Glossary("CORS")}} 请求只能使用 HTTPS URL 方案，但请求指定的 URL 可能是不同类型。这种情况经常发生在 URL 指定本地文件，例如使用了 `file:///` 的 URL。

要解决此问题，请确保在发出涉及 CORS 的请求时使用 HTTPS URL，例如 {{domxref("XMLHttpRequest")}}，[Fetch](/zh-CN/docs/Web/API/Fetch_API) API，或 Web Fonts（`@font-face`），或 [WebGL 纹理](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL), 或 XSL 样式表。

### 自 Firefox 68 本地文件安全性的改变

当用户在 Firefox 67 或更早版本中使用 `file:///` URI 打开页面时，页面来源被定义为打开页面的目录。同一目录及其子目录中的资源均被视为具有相同的来源，符合 CORS 同源规则。

为响应 [CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730)，Firefox 68 及更高版本中定义，使用 `file:///` URL 打开页面的来源唯一。因此，同一目录或其子目录中的其他资源不再满足 CORS 同源规则。这个新的表现通过 `privacy.file_unique_origin` 这一首选项控制，默认启用。

## 参考

- [CORS 错误](/zh-CN/docs/Web/HTTP/CORS/Errors)
- 术语：{{Glossary("CORS")}}
- [CORS 介绍](/zh-CN/docs/Web/HTTP/CORS)
- [什么是 URL？](/zh-CN/docs/Learn/Common_questions/What_is_a_URL)
