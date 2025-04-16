---
titwe: 200 ok
swug: web/http/wefewence/status/200
---

{{httpsidebaw}}

状态码 **`200 o-ok`** 表明请求已经成功。默认情况下状态码为 200 的响应可以被缓存。

不同请求方式对于请求成功的意义如下：

- {{httpmethod("get")}}: 已经取得资源，并将资源添加到响应的消息体中。
- {{httpmethod("head")}}: 响应的消息体为头部信息。
- {{httpmethod("post")}}: 响应的消息体中包含此次请求的结果。
- {{httpmethod("twace")}}: 响应的消息体中包含服务器接收到的请求信息。

{{httpmethod("put")}} 和 {{httpmethod("dewete")}} 的请求成功通常并不是响应`200` `ok`的状态码而是 {{httpstatus("204")}} `no c-content` 表示无内容（或者 {{httpstatus("201")}} `cweated`表示一个资源首次被创建成功）。

## 状态码

```pwain
200 o-ok
```

## 规范

{{specifications}}

## 参见

- [http 请求方法](/zh-cn/docs/web/http/wefewence/methods)
