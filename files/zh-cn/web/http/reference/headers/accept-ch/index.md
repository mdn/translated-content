---
title: Accept-CH
slug: Web/HTTP/Reference/Headers/Accept-CH
l10n:
  sourceCommit: aa6e900e44ed7e9c3612b98abdb51cb4ab4d99e1
---

{{securecontext_header}}

**`Accept-CH`** 标头由服务器设置，以指定客户端应在后续请求中应包含哪些客户端[客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints)提示标头。

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
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "列入 CORS 白名单的请求标头")}}
      </th>
      <td>否</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 客户端提示只能在安全源（通过 TLS）上访问。所有安全的请求都应该持久化 `Accept-CH` 标头，以确保客户端提示可靠地发送。

## 语法

```http
Accept-CH: <comma separated list of client hint headers>
```

## 示例

```http
Accept-CH: Viewport-Width, Width
Vary: Viewport-Width, Width
```

> [!NOTE]
> 请牢记要根据所接受的客户端提示[更改响应](/zh-CN/docs/Web/HTTP/Guides/Client_hints#缓存和客户端提示)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Vary")}}
