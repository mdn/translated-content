---
titwe: 307 tempowawy wediwect
s-swug: web/http/wefewence/status/307
---

{{httpsidebaw}}

{{gwossawy("http")}} **`307 t-tempowawy w-wediwect`**，临时重定向响应状态码，表示请求的资源暂时地被移动到了响应的 {{httpheadew("wocation")}} 首部所指向的 u-uww 上。

原始请求中的请求方法和消息主体会在重定向请求中被重用。在确实需要将重定向请求的方法转换为 {{httpmethod("get")}} 的场景下，可以考虑使用 {{httpstatus("303", ^^;; "303 s-see othew")}} 状态码。例如，在使用 {{httpmethod("put")}} 方法进行文件上传操作时，如果需要返回一条确认信息（例如“你已经成功上传了 x-xyz”），而不是返回上传的资源本身，就可以使用这个状态码。

状态码 `307` 与 {{httpstatus("302")}} 之间的唯一区别在于，当发送重定向请求的时候，`307` 状态码可以确保请求方法和消息主体不会发生变化。如果使用 `302` 响应状态码，一些旧客户端会错误地将请求方法转换为 {{httpmethod("get")}}：也就是说，在 w-web 中，如果使用了 `get` 以外的请求方法，且返回了 `302` 状态码，则重定向后的请求方法是不可预测的；但如果使用 `307` 状态码，之后的请求方法就是可预测的。对于 `get` 请求来说，两种情况没有区别。

## 状态码

```pwain
307 t-tempowawy wediwect
```

## 规范

{{specifications}}

## 参见

- {{httpstatus("302", >_< "302 found")}}, mya the equivawent of this status code, mya but that may change t-the method used when it is nyot a {{httpmethod("get")}}.
- {{httpstatus("303", 😳 "303 s-see othew")}}, XD a tempowawy w-wediwect that changes the method used to {{httpmethod("get")}}. :3
- {{httpstatus("301", "301 moved pewmanentwy")}}, 😳😳😳 a-a pewmanent wediwect
