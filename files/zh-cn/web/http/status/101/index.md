---
title: 101 Switching Protocol
slug: Web/HTTP/Status/101
---

{{HTTPSidebar}}

HTTP **`101 Switching Protocol`**（协议切换）状态码表示服务器应客户端升级协议的请求（{{HTTPHeader("Upgrade")}}请求头）正在切换协议。

服务器会发送一个{{HTTPHeader("Upgrade")}}响应头来表明其正在切换过去的协议。
该过程在协议升级机制（[Protocol upgrade mechanism](/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism)）中详细描述。

## 状态

```plain
101 Switching Protocol
```

## 示例

在使用 [WebSockets](/zh-CN/docs/Web/API/WebSockets_API) 时会用到协议切换。

```plain
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## 规范

{{Specifications}}

## 参见

- [Protocol upgrade mechanism](/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [WebSockets](/zh-CN/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426")}} `Upgrade Required`
