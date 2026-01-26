---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Reference/Status/431
---

响应码 **`431 Request Header Fields Too Large`** 表示由于请求中的首部字段的值过大，服务器拒绝接受客户端的请求。客户端可以在缩减首部字段的体积后再次发送请求。

该响应码可以用于首部总体体积过大的情况，也可以用于单个首部体积过大的情况。

这种错误不应该出现于经过良好测试的投入使用的系统当中，而是更多出现于测试新系统的时候

## 状态

```plain
431 Request Header Fields Too Large
```

## 规范

{{Specifications}}

## 相关内容

- {{Glossary("Request header")}}
