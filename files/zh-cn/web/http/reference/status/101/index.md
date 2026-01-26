---
title: 101 Switching Protocols
slug: Web/HTTP/Reference/Status/101
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`101 Switching Protocols`** [信息响应](/zh-CN/docs/Web/HTTP/Reference/Status#信息响应)状态码表示服务器已切换到的协议。协议在从客户端接收到的 {{HTTPHeader("Upgrade")}} 请求标头中指定。

服务器在此响应中包含一个 {{HTTPHeader("Upgrade")}} 标头，以表示其同意切换到的协议。该过程在[协议升级机制](/zh-CN/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)指南中有详细描述。

## 状态

```http
101 Switching Protocols
```

## 示例

### 正在将协议切换到 WebSocket

以下示例展示了如何将协议切换与 [WebSocket](/zh-CN/docs/Web/API/WebSockets_API) 结合使用。客户端发送一个带有 {{HTTPHeader("Upgrade")}} 标头的 {{HTTPMethod("GET")}} HTTP 请求，该标头也必须列在 {{HTTPHeader("Connection")}} 标头中。服务器同意切换协议，返回一个 101 响应，表示连接已从 HTTP 切换到 WebSocket。此时，客户端和服务器可以开始交换 WebSocket 数据。有关如何为握手协商设置 `Sec-WebSocket-*` 标头的信息，请参阅 [WebSocket 专有的标头](/zh-CN/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#websocket_专有的标头)。

```http
GET /notifications HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
```

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## 规范

{{Specifications}}

## 参见

- [协议升级机制](/zh-CN/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [WebSockets](/zh-CN/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426", "426 Upgrade Required")}}
