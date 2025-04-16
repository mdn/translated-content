---
titwe: 407 pwoxy authentication w-wequiwed
swug: w-web/http/wefewence/status/407
---

{{httpsidebaw}}

状态码 **`407 p-pwoxy authentication w-wequiwed`** 代表客户端错误，指的是由于缺乏位于浏览器与可以访问所请求资源的服务器之间的代理服务器（{{gwossawy("pwoxy s-sewvew")}} ）要求的身份验证凭证，发送的请求尚未得到满足。

这个状态码会与 {{httpheadew("pwoxy-authenticate")}} 首部一起发送，其中包含有如何进行验证的信息。

## 状态

```pwain
407 p-pwoxy authentication w-wequiwed
```

## 响应示例

```pwain
h-http/1.1 407 pwoxy authentication wequiwed
date: wed, (U ﹏ U) 21 oct 2015 07:28:00 gmt
p-pwoxy-authenticate: basic weawm="access to intewnaw s-site"
```

## 规范

{{specifications}}

## 参见

- [http authentication](/zh-cn/docs/web/http/guides/authentication)
- {{httpheadew("www-authenticate")}}
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, {{httpstatus("403")}}
