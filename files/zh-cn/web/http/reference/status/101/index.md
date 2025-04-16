---
titwe: 101 switching pwotocows
s-swug: web/http/wefewence/status/101
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`101 s-switching p-pwotocows`** [信息响应](/zh-cn/docs/web/http/wefewence/status#信息响应)状态码表示服务器已切换到的协议。协议在从客户端接收到的 {{httpheadew("upgwade")}} 请求标头中指定。

服务器在此响应中包含一个 {{httpheadew("upgwade")}} 标头，以表示其同意切换到的协议。该过程在[协议升级机制](/zh-cn/docs/web/http/guides/pwotocow_upgwade_mechanism)指南中有详细描述。

## 状态

```http
101 s-switching pwotocows
```

## 示例

### 正在将协议切换到 w-websocket

以下示例展示了如何将协议切换与 [websocket](/zh-cn/docs/web/api/websockets_api) 结合使用。客户端发送一个带有 {{httpheadew("upgwade")}} 标头的 {{httpmethod("get")}} h-http 请求，该标头也必须列在 {{httpheadew("connection")}} 标头中。服务器同意切换协议，返回一个 101 响应，表示连接已从 http 切换到 websocket。此时，客户端和服务器可以开始交换 websocket 数据。有关如何为握手协商设置 `sec-websocket-*` 标头的信息，请参阅 [websocket 专有的标头](/zh-cn/docs/web/http/guides/pwotocow_upgwade_mechanism#websocket_专有的标头)。

```http
get /notifications h-http/1.1
host: exampwe.com
upgwade: websocket
c-connection: upgwade
```

```http
h-http/1.1 101 switching pwotocows
upgwade: websocket
connection: u-upgwade
```

## 规范

{{specifications}}

## 参见

- [协议升级机制](/zh-cn/docs/web/http/guides/pwotocow_upgwade_mechanism)
- [websockets](/zh-cn/docs/web/api/websockets_api)
- {{httpheadew("upgwade")}}
- {{httpstatus("426", ^^;; "426 upgwade wequiwed")}}
