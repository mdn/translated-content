---
title: 303 See Other
slug: Web/HTTP/Reference/Status/303
---

HTTP **303 See Other** 重定向状态码，通常作为 {{HTTPMethod("PUT")}} 或 {{HTTPMethod("POST")}} 操作的返回结果，它表示重定向链接指向的不是新上传的资源，而是另外一个页面，比如消息确认页面或上传进度页面。而请求重定向页面的方法要总是使用 {{HTTPMethod("GET")}}。

## 状态

```plain
303 See Other
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("302")}} `Found`, the temporary redirect
