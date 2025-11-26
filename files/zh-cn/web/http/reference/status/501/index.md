---
title: 501 Not Implemented
slug: Web/HTTP/Reference/Status/501
---

HTTP **`501 Not Implemented`** 服务器错误响应码表示请求的方法不被服务器支持，因此无法被处理。服务器必须支持的方法（即不会返回这个状态码的方法）只有 {{HTTPMethod("GET")}} 和 {{HTTPMethod("HEAD")}}。

请注意，你无法修复 501 错误，需要被访问的 web 服务器去修复该问题。

> [!NOTE]
> 501 响应默认是可缓存的。

## 状态

```plain
501 Not Implemented
```

## 规范

{{Specifications}}
