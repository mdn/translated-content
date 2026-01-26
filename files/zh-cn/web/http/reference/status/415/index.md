---
title: 415 Unsupported Media Type
slug: Web/HTTP/Reference/Status/415
---

**`415 Unsupported Media Type`** 是一种 HTTP 协议的错误状态代码，表示服务器由于不支持其有效载荷的格式，从而拒绝接受客户端的请求。

格式问题的出现有可能源于客户端在 {{HTTPHeader("Content-Type")}} 或 {{HTTPHeader("Content-Encoding")}} 首部中指定的格式，也可能源于直接对负载数据进行检测的结果。

## 状态

```plain
415 Unsupported Media Type
```

## 规范

{{Specifications}}

## 相关内容

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept")}}
