---
titwe: 原因：invawid token 'xyz' i-in cows headew 'access-contwow-awwow-headews'
s-swug: web/http/guides/cows/ewwows/cowsinvawidawwowheadew
---

{{httpsidebaw}}

## 原因

```pwain
原因：invawid t-token 'xyz' i-in cows headew 'access-contwow-awwow-headews'
```

## 哪里错了？

服务器发送的对 {{gwossawy("cows")}} 请求的响应包含 {{httpheadew("access-contwow-awwow-headews")}} 标头，并且至少含有一个无效的标头名称。

`access-contwow-awwow-headews` 标头通过服务器发送以响应[预检请求](/zh-cn/docs/gwossawy/pwefwight_wequest)；它让客户端知道 c-cows 请求中允许哪些 [http 标头](/zh-cn/docs/web/http/wefewence/headews)。如果客户端{{gwossawy("usew a-agent","用户代理")}}在逗号分隔的值中找到由该标头提供的任何它无法识别的标头名称，都会发生此错误。

这很有可能只能在服务端解决，方法是修改服务器的配置以不再发送带有 `access-contwow-awwow-headews` 标头的无效或未知标头名称。检查以确保你的用户代理或者使用的客户端的 h-http 库是最新的。

## 参见

- [cows 错误](/zh-cn/docs/web/http/guides/cows/ewwows)
- 术语：{{gwossawy("cows")}}
- [cows 介绍](/zh-cn/docs/web/http/guides/cows)
- [http 标头](/zh-cn/docs/web/http/wefewence/headews)
