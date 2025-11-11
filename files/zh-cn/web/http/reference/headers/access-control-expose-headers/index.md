---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Expose-Headers
---

响应标头 **`Access-Control-Expose-Headers`** 允许服务器指示那些响应标头可以暴露给浏览器中运行的脚本，以响应跨源请求。

默认情况下，仅暴露{{Glossary("CORS-safelisted response header", "列入 CORS 白名单的请求标头")}}。如果想要让客户端可以访问到其他的标头，服务器必须将它们在 `Access-Control-Expose-Headers` 里面列出来。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "响应标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Access-Control-Expose-Headers: [<header-name>[, <header-name>]*]
Access-Control-Expose-Headers: *
```

## 指令

- \<header-name>
  - : 允许客户端从响应中访问的 0 个或多个使用逗号分隔的[标头名称](/zh-CN/docs/Web/HTTP/Reference/Headers)列表。这些标头是对{{Glossary("CORS-safelisted response header", "列入 CORS 白名单的请求标头")}}的*补充*。
- `*`（通配符）
  - : 若请求没有携带凭据（请求没有 [HTTP Cookie](/zh-CN/docs/Web/HTTP/Guides/Cookies)或认证信息），“`*`”才会被当作一个特殊的通配符。对于带有凭据的请求，会被简单地当作标头名称“`*`”，没有特殊的语义。

## 示例

想要暴露一个非简单响应标头，可以这样指定：

```http
Access-Control-Expose-Headers: Content-Encoding
```

想要额外暴露自定义的标头，例如 `Kuma-Revision`，可以指定多个，用逗号隔开：

```http
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

服务器可以为不带凭据的请求响应通配符：

```http
Access-Control-Expose-Headers: *
```

但是，这并不会匹配 {{HTTPHeader("Authorization")}} 标头，所以如果你要暴露它，需要显式指定：

```http
Access-Control-Expose-Headers: *, Authorization
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
