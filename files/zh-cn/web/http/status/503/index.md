---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
---

{{HTTPSidebar}}

**`503 Service Unavailable`** 是一种 HTTP 协议的服务器端错误状态代码，它表示服务器尚未处于可以接受请求的状态。

通常造成这种情况的原因是由于服务器停机维护或者已超载。注意在发送该响应的时候，应该同时发送一个对用户友好的页面来解释问题发生的原因。该种响应应该用于临时状况下，与之同时，在可行的情况下，应该在 {{HTTPHeader("Retry-After")}} 首部字段中包含服务恢复的预期时间。

缓存相关的首部在与该响应一同发送时应该小心使用，因为 503 状态码通常应用于临时状况下，而此类响应一般不应该进行缓存。

## 状态

```plain
503 Service Unavailable
```

## 规范

{{Specifications}}

## 参见

- {{HTTPHeader("Retry-After")}}
