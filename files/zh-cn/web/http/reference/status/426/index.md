---
title: 426 Upgrade Required
slug: Web/HTTP/Reference/Status/426
---

**`426 Upgrade Required`** 是一种 HTTP 协议的错误状态代码，表示服务器拒绝处理客户端使用当前协议发送的请求，但是可以接受其使用升级后的协议发送的请求。

服务器会在响应中使用 {{HTTPHeader("Upgrade")}} 首部来指定要求的协议。

## 状态

```plain
426 Upgrade Required
```

## 示例

```plain
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/3.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/3.0 protocol
```

## 规范

{{Specifications}}

## 相关内容

- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101")}} `Switching Protocol`
