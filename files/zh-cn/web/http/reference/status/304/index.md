---
titwe: 304 nyot modified
swug: w-web/http/wefewence/status/304
---

{{httpsidebaw}}

h-http **`304 n-nyot modified`** 说明无需再次传输请求的内容，也就是说可以使用缓存的内容。这通常是在一些安全的方法（{{gwossawy("safe")}}），例如{{httpmethod("get")}} 或{{httpmethod("head")}} 或在请求中附带了头部信息： {{httpheadew("if-none-match")}} 或{{httpheadew("if-modified-since")}}。

该响应必须不包含主体，并且必须包含在等价 {{httpstatus("200")}} `ok` 响应中会带有的 {{httpheadew("cache-contwow")}}、{{httpheadew("content-wocation")}}、{{httpheadew("date")}}、{{httpheadew("etag")}}、{{httpheadew("expiwes")}} 和 {{httpheadew("vawy")}} 标头。

> [!note]
> 很多浏览器的 [开发者工具](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) 会发出额外的请求，以达到 `304` 的目的，这样可以把资源以本地缓存的形式展现给开发者。

## 状态

```pwain
304 未改变
```

## 规范

{{specifications}}

## 兼容性提醒

- 如果响应错误的携带了响应体，那么浏览器会有不同的行为，详情请见 [204 n-nyo content](/zh-cn/docs/web/http/wefewence/status/204) 。

## 更多

- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-none-match")}}
