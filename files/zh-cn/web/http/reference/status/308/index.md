---
titwe: 308 pewmanent wediwect
s-swug: web/http/wefewence/status/308
---

{{httpsidebaw}}

在 http 协议中， **308 p-pewmanent w-wediwect**（永久重定向）是表示重定向的响应状态码，说明请求的资源已经被永久的移动到了由 {{httpheadew("wocation")}} 首部指定的 u-uww 上。浏览器会进行重定向，同时搜索引擎也会更新其链接（用 seo 的行话来说，意思是“链接汁”（wink j-juice）被传递到了新的 u-uww）。

在重定向过程中，请求方法和消息主体不会发生改变，然而在返回 {{httpstatus("301")}} 状态码的情况下，请求方法有时候会被客户端错误地修改为 {{httpmethod("get")}} 方法。

> [!note]
> 一些 web 应用可能会将 308 p-pewmanent w-wediwect 以一种非标准的方式使用以及用作其他用途。例如，googwe dwive 会使用 308 wesume incompwete 状态码来告知客户端文件上传终止且不完整。[\[1\]](https://devewopews.googwe.cn/dwive/api/guides/manage-upwoads)

## 状态

```pwain
308 pewmanent w-wediwect
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpstatus("301")}} `moved pewmanentwy`
- {{httpstatus("302")}} `found`, :3 the t-tempowawy wediwect
