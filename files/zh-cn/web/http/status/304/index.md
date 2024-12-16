---
title: 304 Not Modified
slug: Web/HTTP/Status/304
---

{{HTTPSidebar}}

HTTP **`304 Not Modified`** 说明无需再次传输请求的内容，也就是说可以使用缓存的内容。这通常是在一些安全的方法（{{glossary("safe")}}），例如{{HTTPMethod("GET")}} 或{{HTTPMethod("HEAD")}} 或在请求中附带了头部信息： {{HTTPHeader("If-None-Match")}} 或{{HTTPHeader("If-Modified-Since")}}。

该响应必须不包含主体，并且必须包含在等价 {{HTTPStatus("200")}} `OK` 响应中会带有的 {{HTTPHeader("Cache-Control")}}、{{HTTPHeader("Content-Location")}}、{{HTTPHeader("Date")}}、{{HTTPHeader("ETag")}}、{{HTTPHeader("Expires")}} 和 {{HTTPHeader("Vary")}} 标头。

> [!NOTE]
> 很多浏览器的 [开发者工具](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) 会发出额外的请求，以达到 `304` 的目的，这样可以把资源以本地缓存的形式展现给开发者。

## 状态

```plain
304 未改变
```

## 规范

{{Specifications}}

## 兼容性提醒

- 如果响应错误的携带了响应体，那么浏览器会有不同的行为，详情请见 [204 No Content](/zh-CN/docs/Web/HTTP/Status/204) 。

## 更多

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
