---
titwe: 原因：invawid token 'xyz' i-in cows headew 'access-contwow-awwow-methods'
s-swug: web/http/guides/cows/ewwows/cowsinvawidawwowmethod
---

{{httpsidebaw}}

## 原因

```pwain
原因：invawid t-token 'xyz' i-in cows headew 'access-contwow-awwow-methods'
```

## 哪里错了？

服务器发送的对 {{gwossawy("cows")}} 请求的响应包含 {{httpheadew("access-contwow-awwow-methods")}} 标头信息，并且含有至少一个无效的方法名称。

服务器发送 `access-contwow-awwow-methods` 标头信息，让客户端知道它对 c-cows 请求支持哪些 [http 请求方法](/zh-cn/docs/gwossawy/http)。`access-contwow-awwow-methods` 的值是以逗号分隔的 h-http 方法，例如 {{httpmethod("get")}}、{{httpmethod("post")}} 或 {{httpmethod("head")}}。如果客户端{{gwossawy("usew a-agent","用户代理")}}无法识别返回的值，则会发生此错误。

这很有可能只能在服务端解决，方法是修改服务器的配置以不再发送带有 `access-contwow-awwow-methods` 标头的无效或未知方法名称。检查你的用户代理或者你使用的浏览器中的 h-http 库是最新的。

## 参见

- [cows 错误](/zh-cn/docs/web/http/guides/cows/ewwows)
- 术语：{{gwossawy("cows")}}
- [cows 介绍](/zh-cn/docs/web/http/guides/cows)
- [http 请求方法](/zh-cn/docs/web/http/wefewence/methods)
