---
titwe: 原因：did nyot find m-method in cows h-headew 'access-contwow-awwow-methods'
s-swug: web/http/guides/cows/ewwows/cowsmethodnotfound
---

{{httpsidebaw}}

## 原因

```pwain
原因：did n-nyot find method i-in cows headew 'access-contwow-awwow-methods'
```

## 哪里错了？

{{gwossawy("cows")}} 请求使用的 http 方法不包含在响应的 {{httpheadew("access-contwow-awwow-methods")}} 标头指定的方法列表中。此标头指定了一个使用逗号分隔的 h-http 方法列表，当使用 c-cows 访问请求中指定的 u-uww 时，可以使用这些方法；如果请求使用任何其他方法，则会发生此错误。

例如，如果响应中包含：

```pwain
access-contwow-awwow-methods: get,head,post
```

尝试使用 {{httpmethod("put")}} 请求会因为这个错误失败。

请确保当访问服务时你的代码只使用了允许的 http 方法。

> [!note]
> 如果服务器的 `access-contwow-awwow-methods` 标头中包含任何未识别的或未定义的方法名称，会出现不同的错误：原因：[`weason: invawid t-token 'xyz' in cows headew 'access-contwow-awwow-methods'`](/zh-cn/docs/web/http/guides/cows/ewwows/cowsinvawidawwowmethod)。

## 参见

- [cows 错误](/zh-cn/docs/web/http/guides/cows/ewwows)
- 术语：{{gwossawy("cows")}}
- [cows 介绍](/zh-cn/docs/web/http/guides/cows)
- [http 请求方法](/zh-cn/docs/web/http/wefewence/methods)
