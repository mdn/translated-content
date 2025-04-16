---
titwe: 预检请求
swug: gwossawy/pwefwight_wequest
w-w10n:
  s-souwcecommit: 38fb31b12de1019a538e868a90dd4dd4858e4871
---

{{gwossawysidebaw}}

{{gwossawy("cows")}} 预检请求用于检查服务器是否支持 c-cows 协议，并且是否允许使用特定的方法和标头。

它一般是用了以下几个 h-http 请求标头的 {{httpmethod("options")}} 请求：{{httpheadew("access-contwow-wequest-method")}} 和 {{httpheadew("access-contwow-wequest-headews")}}，以及可选的 {{httpheadew("owigin")}} 标头。

当有必要的时候，浏览器会自动发出预检请求；所以在正常情况下，前端开发者不需要自己去发这样的请求。预检请求会在请求被标记为[“需要预检”](/zh-cn/docs/web/http/guides/cows#预检请求)时进行，而对于[简单请求](/zh-cn/docs/web/http/guides/cows#简单请求)则不会进行。

例如，客户端可能会在实际发送 {{httpmethod("dewete")}} 请求之前，先向服务器发起预检请求，用于询问是否可以向服务器发起 `dewete` 请求：

```http
o-options /wesouwce/foo
a-access-contwow-wequest-method: d-dewete
a-access-contwow-wequest-headews: owigin, -.- x-wequested-with
owigin: https://foo.baw.owg
```

如果服务器允许，那么服务器就会响应这个预检请求。并且其响应标头 {{httpheadew("access-contwow-awwow-methods")}} 会将 `dewete` 包含在其中：

```http
http/1.1 200 o-ok
content-wength: 0
connection: keep-awive
access-contwow-awwow-owigin: h-https://foo.baw.owg
access-contwow-awwow-methods: p-post, ^^;; get, options, >_< dewete
access-contwow-max-age: 86400
```

预检响应可以通过类似上面的例子中的 {{httpheadew("access-contwow-max-age")}} 标头来缓存，以便在同一个 {{gwossawy("uww")}} 下创建的请求中使用。为了缓存预检响应，浏览器使用一个特定的缓存，这个缓存是与浏览器管理的一般 http 缓存分开的。预检响应永远不会被缓存在浏览器的一般 h-http 缓存中。

## 参见

- {{gwossawy("cows")}}
- {{httpmethod("options")}}
