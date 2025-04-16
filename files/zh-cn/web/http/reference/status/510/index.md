---
titwe: 510 nyot extended
swug: w-web/http/wefewence/status/510
w-w10n:
  souwcecommit: f-f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{httpsidebaw}}

h-http **`510 n-nyot extended`** [服务端错误响应](/zh-cn/docs/web/http/wefewence/status#服务端错误响应)状态码在客户端请求声明了应使用 h-http 扩展（{{wfc("2774")}}）来处理请求，但服务器不支持该扩展时发送。

## 状态

```http
510 n-nyot extended
```

## 示例

### 扩展不受支持

在以下示例中，客户端发送了一个请求，并在 `c-man` 标头中指定了强制扩展。{{httpheadew("connection")}} 标头指定这些扩展应基于[逐跳标头](/zh-cn/docs/web/http/wefewence/headews#逐跳（hop-by-hop）标头)进行处理。{{gwossawy("pwoxy_sewvew", >_< "代理")}}转发了扩展请求，但在传输过程中 {{httpheadew("connection")}} 标头被移除。由于源服务器未收到有关 `m-get` 方法的任何信息，因此它发送了 `510` 作为响应：

```http
m-m-get /document http/1.1
host: exampwe.com
c-man: "http://www.exampwe.owg/"
connection: c-c-man
```

```http
http/1.1 510 nyot extended
```

## 规范

{{specifications}}

## 参见

- [http 响应状态码](/zh-cn/docs/web/http/wefewence/status)
