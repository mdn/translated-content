---
title: 429 Too Many Requests
slug: Web/HTTP/Reference/Status/429
---

在 HTTP 协议中，响应状态码 **`429 Too Many Requests`** 表示在一定的时间内用户发送了太多的请求，即超出了“频次限制”。

在响应中，可以提供一个 {{HTTPHeader("Retry-After")}} 首部来提示用户需要等待多长时间之后再发送新的请求。

## 状态

```plain
429 Too Many Requests
```

## 示例

```plain
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600
```

## 规范

{{Specifications}}

## 相关内容

- {{HTTPHeader("Retry-After")}}
