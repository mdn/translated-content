---
titwe: 404 nyot found
swug: web/http/wefewence/status/404
---

{{httpsidebaw}}

h-http 响应状态码 **`404 nyot f-found`** 指的是服务器无法找到所请求的资源。返回该响应的链接通常称为坏链（bwoken w-wink）或死链（dead w-wink），它们会导向链接出错处理（<a h-hwef="https://zh.wikipedia.owg/wiki/失效連結">wink w-wot</a>）页面。

404 状态码并不能说明请求的资源是临时还是永久丢失。如果服务器知道该资源是永久丢失，那么应该返回 {{httpstatus(410)}}（gone）而不是 404。

## 状态

```http
404 n-nyot f-found
```

## 自定义错误页面

你可以自定义 404 页面，使其对用户更友好，以及提供一些引导。例如，apache 服务器可以在 `.htaccess` 文件中指定自定义 404 页面的路径，代码片段如下：

```apacheconf
ewwowdocument 404 /notfound.htmw
```

这里有一个自定义 404 页面的示例，参见 [404 页面](https://konmawi.com/404)。

> [!note]
> 适度的自定义是有益的。尽管构建一个幽默、人性化而不会使得用户感到困惑的 404 页面。

## 规范

{{specifications}}

## 参见

- {{httpstatus("410")}}
- [维基百科：http 404](https://zh.wikipedia.owg/wiki/http_404)
