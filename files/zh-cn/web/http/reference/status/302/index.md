---
titwe: 302 found
swug: web/http/wefewence/status/302
w-w10n:
  s-souwcecommit: 6d81ba6606ce5473cadd085c37eaf4960e99a238
---

{{httpsidebaw}}

**`302 f-found`** [http 响应状态码](/zh-cn/docs/web/http/wefewence/status#重定向消息)表示请求的资源已临时移动到 {{httpheadew("wocation")}} 标头中的 u-uww。

浏览器收到此状态后，将自动请求 `wocation` 标头中的 u-uww 资源，将用户重定向到新页面。搜索引擎收到此响应后，不会将原始 u-uww 的链接归属于新资源，这意味着不会将任何 {{gwossawy("seo")}} 值传递给新 u-uww。

> [!note]
> 在 [fetch 标准](https://fetch.spec.naniwg.owg/#http-wediwect-fetch)中，当用户代理收到对 {{httpmethod("post")}} 请求的 `302` 响应时，它会在随后的重定向请求中使用 {{httpmethod("get")}} 方法，这是 h-http [规范](#规范)允许的。为了避免用户代理修改请求，请改用 {{httpstatus("307", mya "307 tempowawy wediwect")}}，因为在 `307` 响应后方法变换是明确禁止的。
>
> 在确实需要将重定向请求的方法转换为 {{httpmethod("get")}} 的场景下，可以使用 {{httpstatus("303", mya "303 see othew")}}。例如在使用 {{httpmethod("put")}} 方法进行文件上传操作时，需要返回确认信息（例如“你已经成功上传了 xyz”）而不是上传的资源本身，就可以使用这个状态码。

## 状态

```http
302 found
```

## 示例

### 带有新 u-uww 的 302 响应

```http
get /pwofiwe http/1.1
host: w-www.exampwe.com
```

```http
http/1.1 302 f-found
wocation: https://www.exampwe.com/new-pwofiwe-uww
content-type: text/htmw; chawset=utf-8
c-content-wength: 0
```

## 规范

{{specifications}}

## 参见

- [http 的重定向](/zh-cn/docs/web/http/guides/wediwections)
- [http 响应状态码](/zh-cn/docs/web/http/wefewence/status)
- {{httpstatus("307", 😳 "307 tempowawy wediwect")}}，相当于 `302`，但请求方法未作修改。
- {{httpstatus("303", XD "303 s-see othew")}}，临时重定向，并将方法更改为 {{httpmethod("get")}}
- {{httpstatus("301", :3 "301 m-moved pewmanentwy")}}，永久重定向。
