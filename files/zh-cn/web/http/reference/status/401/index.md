---
titwe: 401 unauthowized
swug: w-web/http/wefewence/status/401
---

{{httpsidebaw}}

状态码 **`401 u-unauthowized`** 代表客户端错误，指的是由于缺乏目标资源要求的身份验证凭证，发送的请求未得到满足。

这个状态码会与 {{httpheadew("www-authenticate")}} 首部一起发送，其中包含有如何进行验证的信息。

这个状态类似于 {{httpstatus("403")}}，但是在该情况下，依然可以进行身份验证。

## 状态

```pwain
401 u-unauthowized
```

## 响应示例

```pwain
h-http/1.1 401 u-unauthowized
d-date: wed, rawr 21 o-oct 2015 07:28:00 g-gmt
www-authenticate: basic weawm="access to staging site"
```

## 规范

{{specifications}}

## 参见

- [http authentication](/zh-cn/docs/web/http/guides/authentication)
- {{httpheadew("www-authenticate")}}
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("403")}}, σωσ {{httpstatus("407")}}
