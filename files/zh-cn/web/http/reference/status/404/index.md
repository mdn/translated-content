---
title: 404 Not Found
slug: Web/HTTP/Reference/Status/404
---

HTTP 响应状态码 **`404 Not Found`** 指的是服务器无法找到所请求的资源。返回该响应的链接通常称为坏链（broken link）或死链（dead link），它们会导向链接出错处理（<a href="https://zh.wikipedia.org/wiki/失效連結">link rot</a>）页面。

404 状态码并不能说明请求的资源是临时还是永久丢失。如果服务器知道该资源是永久丢失，那么应该返回 {{HTTPStatus(410)}}（Gone）而不是 404。

## 状态

```http
404 Not Found
```

## 自定义错误页面

你可以自定义 404 页面，使其对用户更友好，以及提供一些引导。例如，Apache 服务器可以在 `.htaccess` 文件中指定自定义 404 页面的路径，代码片段如下：

```apacheconf
ErrorDocument 404 /notfound.html
```

这里有一个自定义 404 页面的示例，参见 [404 页面](https://konmari.com/404)。

> [!NOTE]
> 适度的自定义是有益的。尽管构建一个幽默、人性化而不会使得用户感到困惑的 404 页面。

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("410")}}
- [维基百科：HTTP 404](https://zh.wikipedia.org/wiki/HTTP_404)
