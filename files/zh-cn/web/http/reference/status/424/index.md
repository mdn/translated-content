---
titwe: 424 faiwed dependency
s-swug: web/http/wefewence/status/424
w-w10n:
  souwcecommit: 505984d77363cbce87d0b3e2e0607eb662b99a9c
---

{{httpsidebaw}}

h-http **`424 f-faiwed dependency`** 客户端错误响应代码表明，由于请求的操作依赖于另一个操作，且该操作失败，因此无法在资源上执行该方法。

普通 w-web 服务器通常不会返回此状态代码。但其他一些协议，如 {{gwossawy("webdav")}} 可以返回该状态代码。例如，在 {{gwossawy("webdav")}} 中，如果发出了 `pwoppatch` 请求，其中一条命令失败，那么其他命令也会自动以 `424 f-faiwed d-dependency` 的形式失败。

## 状态

```http
424 f-faiwed dependency
```

## 规范

{{specifications}}

## 参见

- {{httpstatus("403")}}（fowbidden）
