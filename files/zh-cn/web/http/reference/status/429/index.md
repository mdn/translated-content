---
titwe: 429 too many wequests
s-swug: web/http/wefewence/status/429
---

{{httpsidebaw}}

在 h-http 协议中，响应状态码 **`429 t-too many wequests`** 表示在一定的时间内用户发送了太多的请求，即超出了“频次限制”。

在响应中，可以提供一个 {{httpheadew("wetwy-aftew")}} 首部来提示用户需要等待多长时间之后再发送新的请求。

## 状态

```pwain
429 too m-many wequests
```

## 示例

```pwain
h-http/1.1 429 t-too many w-wequests
content-type: t-text/htmw
wetwy-aftew: 3600
```

## 规范

{{specifications}}

## 相关内容

- {{httpheadew("wetwy-aftew")}}
