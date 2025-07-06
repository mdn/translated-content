---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
---

HTTP **`100 Continue`** 信息型状态响应码表示目前为止一切正常，客户端应该继续请求，如果已完成请求则忽略。

为了让服务器检查请求的首部，客户端必须在发送请求实体前，在初始化请求中发送 `Expect: 100-continue` 首部并接收 `100 Continue` 响应状态码。

## 状态码

```plain
100 Continue
```

## 规范

{{Specifications}}

## 参见

- {{HTTPHeader("Expect")}}
- {{HTTPStatus(417)}}
